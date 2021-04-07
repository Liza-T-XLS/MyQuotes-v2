<?php

namespace App\Controller;

use App\Entity\Quote;
use App\Entity\Tag;
use App\Repository\QuoteRepository;
use App\Repository\TagRepository;
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
    public function add(Request $request, DenormalizerInterface $denormalizer, ValidatorInterface $validator, EntityManagerInterface $entityManager, TagRepository $tagRepository, QuoteRepository $quoteRepository): Response
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
                "tags": [
                    "joy",
                    "sadness",
                    ]
                }
        */
        $data = json_decode($request->getContent());
        $trimmedData = [];
        foreach($data->quote as $key => $datum) {
            $trimmedDatum = trim($datum, " ");
            $trimmedData['quote'][$key] = $trimmedDatum;
        }
        foreach($data->tags as $key => $datum) {
            $trimmedDatum = trim($datum, " ");
            $trimmedData['tags'][$key] = $trimmedDatum;
        }

        $quote = $denormalizer->denormalize($trimmedData['quote'], Quote::class);
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

        if(array_key_exists('tags', $trimmedData)) {
            $tags = $trimmedData['tags'];
            foreach($tags as $tag) {
                // checking if tag already exists
                $existingTag = $tagRepository->findBy(['name' => $tag]);
                // if the tag already exists, the existing tag is added to the quote
                if ($existingTag) {
                    $existingTag = $existingTag[0];
                    $quote->addTag($existingTag);
                }
                // if not it is created
                if (!$existingTag) {
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
                // and added to the quote
                $quote->addTag($newTag);
                }
            }
        }
        $user = $this->getUser();

        if($user) {
            $quote->setUser($user);
        } else {
            return $this->json(['message' => 'User not found. Must be connected in order to create a quote.'], Response::HTTP_UNPROCESSABLE_ENTITY);
        };

        $entityManager->persist($quote);
        $entityManager->flush();

        // after the quote is created, gets the pageQuantity so that the last page of quotes (where the new quote is) is displayed
        // maximum number of quotes per page
        $maxResults = 5;
        // aggregate number of quotes the user has saved
        $totalQuoteNumber = $quoteRepository->loadUserQuoteNumber($user->getId());
        // aggregate number of quotes divided by number of quotes per page to obtain the number of pages (pagination purposes)
        $pageQuantity = ceil($totalQuoteNumber/$maxResults);

        return $this->json(['message' => 'Quote created', 'pageQuantity' => $pageQuantity], Response::HTTP_CREATED);
    }

    /**
     * @Route("/api/quotes/show", name="api_quotes_show", methods={"POST"})
     */
    public function show(Request $request, QuoteRepository $quoteRepository, EntityManagerInterface $entityManager): Response
    {
        /* 
            expected data format:
            {
                "currentPage": 2,
                "tag": "1",
                "search": "blabla"
            }
        */
        $data = json_decode($request->getContent());

        $user = $this->getUser();

        if(!$user) {
            return $this->json(['message' => 'User not found. Must be connected in order to load the quotes.'], Response::HTTP_UNAUTHORIZED);
        }

        $userId = $user->getId();

        // maximum number of quotes per page
        $maxResults = 5;

        $currentPage = $data->currentPage;
        // the current page allows to determine the index from which the SQL request should start retrieving results
        $offset = ($maxResults * $currentPage) - $maxResults;

        // optional
        $tag = $data->tag;
        // optional
        $search = $data->search;

        // if there is no tag and no search, all the user's quotes are retrieved (limit per page)
        if(!$tag) {
            if(!$search) {
            // aggregate number of quotes the user has saved
            $totalQuoteNumber = $quoteRepository->loadUserQuoteNumber($userId);
            // aggregate number of quotes divided by number of quotes per page to obtain the number of pages (pagination purposes)
            $pageQuantity = ceil($totalQuoteNumber/$maxResults);
            $quotes = $quoteRepository->loadQuotesByUserAndPagination($userId, $maxResults, $offset);
            // else if there is no tag but a search string, all the user's quotes that match $search are retrieved (limit per page)
            } else {
                // aggregate number of quotes the user has saved that match $search
                $totalQuoteNumber = $quoteRepository->loadUserQuoteNumberBySearch($userId, $search);
                $pageQuantity = ceil($totalQuoteNumber/$maxResults);
                // array_unique used to remove duplicates, which can happen if a quote has more than one tag
                $SQLquotes = array_unique($quoteRepository->loadQuotesByUserAndPaginationAndSearch($userId, $search, $maxResults, $offset), SORT_REGULAR);
                // by using native SQL in the repository, the quotes returned do not have their array collection of tags but only the tag that has been selected which not only is not accurate but also causes problems in the display, therefore, below, the quote's id is used to retrieve a proper quote object with all its properties, then stored in an array before being returned
                $quotes = [];
                foreach($SQLquotes as $quote) {
                    $quoteObject = $quoteRepository->find($quote['id']);
                    $quotes[] = $quoteObject;
                }
            }
        } else {
            // if there is a tag and no search string, all the user's quotes that have the tag are retrieved
            if(!$search) {
                // aggregate number of quotes the user has saved with the tag
                $totalQuoteNumber = $quoteRepository->loadUserQuoteNumberByTag($userId, $tag);

                $pageQuantity = ceil($totalQuoteNumber/$maxResults);
                
                $SQLquotes = array_unique($quoteRepository->loadQuotesByUserAndPaginationAndTag($userId, $tag, $maxResults, $offset), SORT_REGULAR);

                $quotes = [];
                foreach($SQLquotes as $quote) {
                    $quoteObject = $quoteRepository->find($quote['id']);
                    $quotes[] = $quoteObject;
                }
                // else if there is a tag and a search string, all the user's quotes that have the tag and which details match $search are retrieved
            } else {
                // aggregate number of quotes the user has saved with the tag and which details match $search
                $totalQuoteNumber = $quoteRepository->loadUserQuoteNumberByTagAndSearch($userId, $tag, $search);

                $pageQuantity = ceil($totalQuoteNumber/$maxResults);

                $SQLquotes = array_unique($quoteRepository->loadQuotesByUserAndPaginationAndTagAndSearch($userId, $tag, $search, $maxResults, $offset), SORT_REGULAR);

                $quotes = [];
                foreach($SQLquotes as $quote) {
                    $quoteObject = $quoteRepository->find($quote['id']);
                    $quotes[] = $quoteObject;
                }
            }

        }

        return $this->json(['pageQuantity' => $pageQuantity, 'quotes' => $quotes], 200, [], ['groups' => 'quotes_get']);
    }

    /**
     * @Route("/api/quotes", name="api_quotes_edit", methods={"PUT"})
     */
    public function edit(Request $request, DenormalizerInterface $denormalizer, ValidatorInterface $validator, QuoteRepository $quoteRepository, TagRepository $tagRepository, EntityManagerInterface $entityManager): Response
    {
         /* 
            expected data format:
                {
                "quote": {
                    "id": 5,
                    "text": "What a beautiful day!",
                    "authorFirstName": "John",
                    "authorLastName": "Doe",
                    "characterName": "Smith",
                    "mediumTitle": "The day"
                },
                "tags": [
                    "joy",
                    "sadness",
                    ]
                }
        */
        $data = json_decode($request->getContent());

        $quote = $quoteRepository->find($data->quote->id);

        if(!$quote) {
            return $this->json(['message' => 'This quote does not exist.'], Response::HTTP_BAD_REQUEST);
        }

        $user = $this->getUser();

        if(!$user) {
            return $this->json(['message' => 'User not found. Must be connected in order to modify a quote.'], Response::HTTP_UNPROCESSABLE_ENTITY);
        };

        if($user != $quote->getUser()) {
            return $this->json(['message' => 'You are not authorized to modify this quote.'], Response::HTTP_FORBIDDEN);
        }

        // if the quote exists according to the id, we check for errors in the received data
        $trimmedData = [];
        foreach($data->quote as $key => $datum) {
            if(is_int($datum)) {
                $trimmedData['quote'][$key] = $datum;
            } else {
                $trimmedDatum = trim($datum, " ");
                $trimmedData['quote'][$key] = $trimmedDatum;
            }
        }
        foreach($data->tags as $key => $datum) {
            $trimmedDatum = trim($datum, " ");
            $trimmedData['tags'][$key] = $trimmedDatum;
        }

        $updatedQuote = $denormalizer->denormalize($trimmedData['quote'], Quote::class);
        $errors = $validator->validate($updatedQuote);

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

        // if there are no errors the quote is updated
        $quote->setText($trimmedData['quote']['text'])
        ->setAuthorFirstName($trimmedData['quote']['authorFirstName'])
        ->setAuthorLastName($trimmedData['quote']['authorLastName'])
        ->setCharacterName($trimmedData['quote']['characterName'])
        ->setMediumTitle($trimmedData['quote']['mediumTitle']);
        
        // old tags are removed in order to add new ones
        $oldTags = $quote->getTags();

        foreach($oldTags as $tag) {
            $quote->removeTag($tag);
        }

        // $tags = $data->tags;
        if(array_key_exists('tags', $trimmedData)) {
            $tags = $trimmedData['tags'];
            foreach($tags as $tag) {
                // checking if tag already exists
                $existingTag = $tagRepository->findBy(['name' => $tag]);
                // if the tag already exists, the existing tag is added to the quote
                if ($existingTag) {
                    $existingTag = $existingTag[0];
                    $quote->addTag($existingTag);
                }
                // if not it is created
                if (!$existingTag) {
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
            }
        }
        $entityManager->flush();

        return $this->json(['message' => 'Quote updated'], Response::HTTP_OK);
    }

     /**
     * @Route("/api/quotes", name="api_quotes_delete", methods={"DELETE"})
     */
    public function delete(Request $request, QuoteRepository $quoteRepository, TagRepository $tagRepository, EntityManagerInterface $entityManager): Response
    {
        /* 
            expected data format:
                {
                "quote": {
                    "id": 1,
                }
        */
        $data = json_decode($request->getContent());

        $quote = $quoteRepository->find($data->quote->id);
       
        if(!$quote) {
            return $this->json(['message' => 'This quote does not exist.'], Response::HTTP_BAD_REQUEST);
        }

        $user = $this->getUser();

        if(!$user) {
            return $this->json(['message' => 'User not found. Must be connected in order to delete a quote.'], Response::HTTP_UNPROCESSABLE_ENTITY);
        };

        if($user != $quote->getUser()) {
            return $this->json(['message' => 'You are not authorized to delete this quote.'], Response::HTTP_FORBIDDEN);
        }

        // gets the quote's tags and stores their IDs in an array so they can be used even after the quote is deleted
        $tags = $quote->getTags();
        $tagsId = [];
        foreach($tags as $tag) {
            $tagsId[] = $tag->getId();
        }
        // deletes quotes
        $entityManager->remove($quote);
        $entityManager->flush();
        
        $oldTags = [];

        // retrieves all the user's tags and stores their IDs in an array
        $userTags = $tagRepository->findAllTagsByUser($user->getId());
        $userTagsId = [];
        foreach($userTags as $userTag) {
            $userTagsId[] = $userTag['id'];
        }

        // if a tag of the deleted quote is not found in the user's current tags, it means that the tag no longer exists (if the deleted quote was the last one linked to this tag, the tag is removed (orphan removal true)). If so, it is added to the $oldTag array (display purposes).
        foreach($tagsId as $tagId) {
            if(array_search($tagId, $userTagsId) === false) {
                $oldTags[] = $tagId;
            }
        }

        return $this->json(['message' => 'Quote deleted', 'oldTags' => $oldTags], Response::HTTP_OK);
    }

}
