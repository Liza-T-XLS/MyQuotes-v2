<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/api/registration", name="api_registration", methods={"POST"})
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, DenormalizerInterface $denormalizer, ValidatorInterface $validator): Response
    {
        /* 
            expected data format:
                {
                "pseudonym": "Sha",
                "email": "sha@sha.com",
                "password": "shasha",
                }
        */
        $data = json_decode($request->getContent());
       
        $user = $denormalizer->denormalize($data, User::class);
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

        $user->setPassword($passwordEncoder->encodePassword($user, $user->getPassword()));

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json(['message' => 'Registration complete, user created'], Response::HTTP_CREATED);
    }
}
