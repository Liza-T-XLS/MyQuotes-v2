<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
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
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, DenormalizerInterface $denormalizer, ValidatorInterface $validator, \Swift_Mailer $mailer): Response
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

        // generates random string for email verification purposes
        $hash = md5(random_bytes(10));
        $user->setHash($hash);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // creates activation link to verify the user's email
        $baseUrl = $_ENV['BASE_URL'];
        $email = $user->getEmail();
        $link = $baseUrl . 'verify?email=' . $email . '&hash=' . $hash;

        // sends an email with the above link to the user
        $message = (new \Swift_Message('MyQuotes - Thank you for signing up! Please verify your email'))
        ->setFrom($_ENV['SENDER'])
        ->setTo($user->getEmail())
        ->setBody(
            $this->renderView(
                // templates/emails/registration.html.twig
                'emails/registration.html.twig',
                ['pseudonym' => $user->getPseudonym(),
                'activationLink' => $link]
            ),
            'text/html'
        );

        $mailer->send($message);

        return $this->json(['message' => 'Registration complete, user created'], Response::HTTP_CREATED);
    }

    /**
     * @Route("/api/activation", name="api_activation", methods={"POST"})
     */
    public function activation(Request $request, UserRepository $userRepository)
    {
        /* 
        expected data format:
            {
                "email": "sha@sha.com",
                "hash": "x16sd3s3q",
            }
        */
        $data = json_decode($request->getContent());
        $email = $data->email;
        $hash = $data->hash;

        // finds user which email and hash match the received data
        $user = $userRepository->findOneBy([
            'email' => $email,
            'hash' => $hash,
        ]);
        // if $user does not exist, returns an error message, else it sets the user's active status to true allowing them to log in with their credentials
        if(!$user) {
            return $this->json(['message' => 'Activation failed'], Response::HTTP_BAD_REQUEST);
        } else {
            $user->setActive(true);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();
        }

        return $this->json(['message' => 'Activation complete'], Response::HTTP_OK);
    }
}
