<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Entity\Token;
use App\Repository\TokenRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;

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

  /**
   * @Route("/api/userdata/password-forgotten", name="api_userdata_password_forgotten", methods={"POST"})
   */
  public function forgottenPwd(Request $request, UserRepository $userRepository, \Swift_Mailer $mailer)
  {
    /* 
    expected data format:
    {
      "email": "shapi94@sha.com"
    }
    */
    $data = json_decode($request->getContent());

    // looks for the existence of the user in the database based on the provided email
    $user = $userRepository->findBy(['email' => $data->email]);

    if(!$user) {
      return $this->json(['message' => 'This email does not match any user.'], Response::HTTP_NOT_FOUND);
    }

    // if the user exists, a token is created
    if($user) {
      $user = $user[0];
      $token = new Token();

      $tokenString = rand(100000,999999);

      $token->setString($tokenString);
      $token->setUser($user);
      $entityManager = $this->getDoctrine()->getManager();
      $entityManager->persist($token);
      $entityManager->flush();

        // Email is sent to the user with the token needed to set a new password
      $message = (new \Swift_Message('MyQuotes - Forgotten password'))
      ->setFrom('send@example.com')
      ->setTo($user->getEmail())
      ->setBody(
        $this->renderView(
          'emails/forgotten-password.html.twig',
          ['pseudonym' => $user->getPseudonym(),
          'token' => $token->getString()]
        ),
        'text/html'
      );

      $mailer->send($message);
      
      return $this->json(['message' => 'Token sent', 'userId' => $user->getId()], Response::HTTP_CREATED);
    }
  }

  /**
   * @Route("/api/userdata/password-reset", name="api_userdata_password_reset", methods={"POST"})
   */
  public function resetPwd(Request $request, UserRepository $userRepository, TokenRepository $tokenRepository, UserPasswordEncoderInterface $passwordEncoder, ValidatorInterface $validator, \Swift_Mailer $mailer)
  {
    /* 
    expected data format:
    {
      "userId": 8,
      "token": 123456
      "newPassword": bestpwd
    }
    */

    $data = json_decode($request->getContent());

    $user = $userRepository->find($data->userId);

    if(!$user) {
      return $this->json(['message' => 'This user id does not exist.'], Response::HTTP_NOT_FOUND);
    }

    // looks for a token that matches the provided string and user
    $token = $tokenRepository->findBy(['string' => $data->token, 'user' => $user ]);
    
    if (!$token) {
        return $this->json(['Wrong token provided.'], Response::HTTP_NOT_FOUND);
    }

    // else, if the token exists, its validity is checked (created less than 10 minutes ago)

    // calculates the time difference between the creation time of the token and the input time of this same token
    $tokenCreationTime = $token[0]->getCreatedAt();
    $tokenInputTime = new \DateTime();
    $dateInterval = $tokenCreationTime->diff($tokenInputTime);
    $daysInMin = $dateInterval->d * 24 * 60;
    $hoursInMin = $dateInterval->h * 60;
    $minutes = $dateInterval->i;
    $totalMinutes = $daysInMin + $hoursInMin + $minutes;
    $interval = $totalMinutes;

    // if the difference is greater than 10 minutes, the token is considered expired and therefore destroyed, the user cannot change the password and has to request a new token
    if ($interval > 10) {
        $user->removeToken($token[0]);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->flush();
        return $this->json(['The token has expired.'], Response::HTTP_NOT_FOUND);
    }

    // if the token is valid and the password deemed acceptable, the new password is set and the token destroyed
    if ($token[0]) {
      $errors = $validator->validate($data->newPassword, [new Assert\NotBlank(), new Assert\Regex([
        'pattern' => '/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*|[^\s]*\s.*)$/',
        'match' => false,
        'message' => 'The password must be at least 8 characters long, contain at least a number, an upper and a lower case letter and a special character.'
        ])]);

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

      $user->setPassword($passwordEncoder->encodePassword($user, $data->newPassword));
      $user->removeToken($token[0]);
      $entityManager = $this->getDoctrine()->getManager();
      $entityManager->flush();

      // Email sent to the user confirming the new password has been set
      $message = (new \Swift_Message('My Quotes - Password has been changed'))
      ->setFrom('send@example.com')
      ->setTo($user->getEmail())
      ->setBody(
        $this->renderView(
          'emails/forgotten-password-confirmation.html.twig',
          ['pseudonym' => $user->getPseudonym()]
        ),
        'text/html'
      );

      $mailer->send($message);

      return $this->json(['message' => 'Password has been changed.'], Response::HTTP_OK);
    }
  }
}