<?php

namespace App\Controller;

use App\Entity\Quote;
use App\Entity\Tag;
use App\Repository\QuoteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class QuoteController extends AbstractController
{
    /**
     * @Route("/api/quotes", name="api_quotes_add", methods={"POST"})
     */
    public function add(Request $request, DenormalizerInterface $denormalizer, ValidatorInterface $validator, EntityManagerInterface $entityManager): Response
    {
        /* 
            expected data format:
                {
                "quote": {
                    "text": "What a beautiful day!",
                    "authorFirstName": "John",
                    "authorLastName": "Doe",
                    "characterName": "Smith",
                    "mediumTitle": "The day"
                },
                "tags": {
                    "joy",
                    "sadness",
                }
                }
        */
        $data = json_decode($request->getContent());

        $quote= $denormalizer->denormalize($data->quote, Quote::class);
        $errors = $validator->validate($quote);

        $jsonErrors = [];

        if (count($errors) !== 0) {
            foreach ($errors as $error) {
                $jsonErrors[] = [
                    'field' => $error->getPropertyPath(),
                    'message' => $error->getMessage(),
                ];
            }
        }

        if(!empty($jsonErrors)){
            return $this->json($jsonErrors, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $tags = $data->tags;
        foreach($tags as $tag) {
            $newTag = new Tag();
            $newTag->setName($tag);
            $errors = $validator->validate($newTag);

            $jsonErrors = [];

            if (count($errors) !== 0) {
                foreach ($errors as $error) {
                    $jsonErrors[] = [
                        'field' => $error->getPropertyPath(),
                        'message' => $error->getMessage(),
                    ];
                }
            }

            if(!empty($jsonErrors)){
                return $this->json($jsonErrors, Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $entityManager->persist($newTag);
            $quote->addTag($newTag);
        }
        
        $user = $this->getUser();

        if($user) {
            $quote->setUser($user);
        } else {
            return $this->json(['message' => 'User not found. Must be connected in order to create a quote.'], Response::HTTP_UNPROCESSABLE_ENTITY);
        };

        $entityManager->persist($quote);
        $entityManager->flush();

        return $this->json(['message' => 'Quote created'], Response::HTTP_CREATED);
    }

    /**
     * @Route("/api/quotes/show", name="api_quotes_show", methods={"POST"})
     */
    public function show(Request $request, QuoteRepository $quoteRepository, EntityManagerInterface $entityManager): Response
    {
        $data = json_decode($request->getContent());

        $user = $this->getUser();

        if(!$user) {
            return $this->json(['message' => 'User not found. Must be connected in order to load the quotes.'], Response::HTTP_UNAUTHORIZED);
        }

        $userId = $user->getId();

        // maximum number of quotes per page
        $maxResults = 5;
        // aggregate number of quotes the user has saved
        $totalQuoteNumber = $quoteRepository->loadUserQuoteNumber($userId);
        // aggregate number of quotes divided by number of quotes per page to obtain the number of pages (pagination purposes)
        $pageQuantity = ceil($totalQuoteNumber/$maxResults);
        $currentPage = $data->currentPage;
        // the current page allows to determine the index from which the SQL request should start retrieving results
        $offset = ($maxResults * $currentPage) - $maxResults;

        $quotes = $quoteRepository->loadQuotesByUserAndPagination($userId, $maxResults, $offset);

        return $this->json(['pageQuantity' => $pageQuantity, 'quotes' => $quotes], 200, [], ['groups' => 'quotes_get']);
    }
}