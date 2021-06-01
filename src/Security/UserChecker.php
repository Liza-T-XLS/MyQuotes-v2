<?php

namespace App\Security;

use App\Entity\User as AppUser;
use App\Exception\AccountDeletedException;
use Symfony\Component\Security\Core\Exception\AccountExpiredException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use App\Repository\TagRepository;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Quote;
use App\Entity\Tag;

class UserChecker implements UserCheckerInterface
{
    public function __construct(TagRepository $tagRepository, DenormalizerInterface $denormalizer, EntityManagerInterface $entityManager)
    {
        $this->tagRepository = $tagRepository;
        $this->denormalizer = $denormalizer;
        $this->entityManager = $entityManager;
    }

    public function checkPreAuth(UserInterface $user)
    {
        if (!$user instanceof AppUser) {
            return;
        }

        if(!$user->getActive()) {
            throw new CustomUserMessageAccountStatusException('Your account has not been activated yet. Please click on the link that was sent to you upon registration.');
        };
    }

    public function checkPostAuth(UserInterface $user)
    {
        if (!$user instanceof AppUser) {
            return;
        }

        if ($user instanceof AppUser) {
            $firstConnection = $user->getFirstConnection();
            // if it is the first time that the User has logged in, a welcome quote will be created
            if (!$firstConnection) {
                $data = [
                    "quote" => [
                        "text" => "Welcome!
                        \nMyQuotes is fairly easy to use but here are some tips:
                        \n- First, start by unrolling this long quote with the Show Full Text Icon (v) in the bottom right corner of the quote
                        \n- By clicking on the icon again, you can hide the text
                        \n- By clicking the Copy Icon on the right, you can quickly copy the quote to your clipboard
                        \n- Click on the quote's text to open or close the quote's details
                        \n- You can edit the quote or delete it by clicking on the corresponding icons
                        \n- To add a new quote, click on the Add Icon (+) in the top right corner of the page
                        \n- You can find one or several quotes by using the Search Box at the top of the page
                        \n- or by selecting a tag in your Tag List
                        \n You can now delete this welcome quote if you want. Don't worry, you can find all these tips in the Help section.
                        \n Enjoy!
                        ",
                        "authorFirstName" => "John",
                        "authorLastName" => "Doe",
                        "characterName" => "MyQuotes",
                        "mediumTitle" => "Welcome Quote"
                    ],
                    "tags" => [
                        "welcome",
                        ]
                    ];

                $entityManager = $this->entityManager;

                $firstQuote = $this->denormalizer->denormalize($data["quote"], Quote::class);
                $welcomeTagExists = $this->tagRepository->findBy(['name' => $data["tags"][0]]);
                if ($welcomeTagExists) {
                    $firstQuote->addTag($welcomeTagExists[0]);
                } else {
                    $firstTag = new Tag();
                    $firstTag->setName($data["tags"][0]);
                    $entityManager->persist($firstTag);
                    $firstQuote->addTag($firstTag);
                }          
                
                $firstQuote->setUser($user);
                $entityManager->persist($firstQuote);

                $user->setFirstConnection(true);
                $entityManager->persist($user);

                $entityManager->flush();

                return;
            }
        }
        // // user account is expired, the user may be notified
        // if ($user->isExpired()) {
        //     throw new AccountExpiredException('...');
        // }
    }
}
