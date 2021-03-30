<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class UserController extends AbstractController
{
    /**
     * @Route("/api/userdata", name="api_userdata", methods={"GET"})
     */
    public function userdata()
    {
      $user = $this->getUser();
      if(!$user) {
        return $this->json(['message' => 'Cannot retrieve data. User does not exist or is not logged in.'], Response::HTTP_UNAUTHORIZED);
      } else {
        return $this->json([
          'pseudonym' => $user->getPseudonym(),
          'email' => $user->getEmail(),
        ]);
      }
    }
}
