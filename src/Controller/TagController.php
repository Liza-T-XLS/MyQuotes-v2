<?php

namespace App\Controller;

use App\Repository\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TagController extends AbstractController
{
    /**
     * @Route("/api/tags", name="api_tags_show", methods={"GET"})
     */
    public function show(TagRepository $tagRepository): Response
    {
        $user = $this->getUser();

        if(!$user) {
            return $this->json(['message' => 'User not found. Must be connected in order to load the tags.'], Response::HTTP_UNAUTHORIZED);
        }

        $userId = $user->getId();

        $tags = $tagRepository->findAllTagsByUser($userId);

        return $this->json($tags, 200, []);
    }
}
