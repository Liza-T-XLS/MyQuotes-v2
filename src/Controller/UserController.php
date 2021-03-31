<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;

class UserController extends AbstractController
{
    /**
     * @Route("/api/userdata", name="api_userdata_show", methods={"GET"})
     */
    public function show()
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

    /**
     * @Route("/api/userdata", name="api_userdata_edit", methods={"PATCH"})
     */
    public function edit(Request $request, UserPasswordEncoderInterface $passwordEncoder, ValidatorInterface $validator)
    {
      /* 
      expected data format:
      {
        "updatedUser": {
          "pseudonym": "Sha",
          "email": "shapi94@sha.com",
          "password": "shasha",
        },
        "currentPassword": "blabla",
      }
      */
      $user = $this->getUser();
      if(!$user) {
        return $this->json(['message' => 'Cannot update data. User does not exist or is not logged in.'], Response::HTTP_UNAUTHORIZED);
      }

      $data = json_decode($request->getContent());
      
      $currentPasswordError = $validator->validate($data->currentPassword, new SecurityAssert\UserPassword([
        'message' => 'Invalid password',
      ]));

      if(count($currentPasswordError) !== 0) {
        return $this->json(['message' => $currentPasswordError[0]->getMessage()], Response::HTTP_UNAUTHORIZED);
      }

      $user->setPseudonym($data->updatedUser->pseudonym);
      $user->setEmail($data->updatedUser->email);
      if($data->updatedUser->password !== '') {
        $user->setPassword($data->updatedUser->password);
      }

      $errors = $validator->validate($user);

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

      if($data->updatedUser->password !== '') {
        $user->setPassword($passwordEncoder->encodePassword($user, $user->getPassword()));
      }

      $entityManager = $this->getDoctrine()->getManager();
      $entityManager->flush();

      return $this->json(['message' => 'User updated'], Response::HTTP_OK);
    }
}
