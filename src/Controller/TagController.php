<?php

namespace App\Controller;

use App\Repository\QuoteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class TagController extends AbstractController
{
    /**
     * @Route("/api/tags", name="api_tags_show", methods={"GET"})
     */
    public function show(Request $request, QuoteRepository $quoteRepository, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();

        if(!$user) {
            return $this->json(['message' => 'User not found. Must be connected in order to load the tags.'], Response::HTTP_UNAUTHORIZED);
        }

        // finds all the user's quotes
        $quotes = $quoteRepository->findBy(['user' => $user]);

        // gathers all the quotes' tags in an array (which correspond to all the tags created by the user)
        $tags = [];
        foreach ($quotes as $quote) {
            $quoteTags = $quote->getTags();
            foreach ($quoteTags as $quoteTag) {
                $tags[] = $quoteTag->getName();
            }
        }

        // returns an array without duplicates
        $tags = array_unique($tags);

        return $this->json($tags, 200, []);
    }
}
