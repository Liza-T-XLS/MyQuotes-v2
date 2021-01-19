<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login(Request $request)
    {
        $user = $this->getUser();

        return $this->json([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
        ]);
    }

    /**
     * @Route("/api/logout", name="api_logout", methods={"GET"})
     */
    public function logout()
    {
        // blank, controller never executed
    }

    /**
     * @Route("/api/islogged", name="api_isLogged", methods={"GET"})
     */
    public function isLogged()
    {
        $user = $this->getUser();
        if($user) {
            $isLogged = true;
        } else {
            $isLogged = false;
        }

        return $this->json([
            // 'user' => $user,
            'isLogged' => $isLogged,
        ]);
    }
}
