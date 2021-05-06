<?php

namespace App\Service;

class TokenChecker
{
    public function checkTokenValidity($token)
    {
        // calculates the time difference between the creation time of the token and the input time of this same token
        $tokenCreationTime = $token->getCreatedAt();
        $tokenInputTime = new \DateTime();
        $dateInterval = $tokenCreationTime->diff($tokenInputTime);
        $daysInMin = $dateInterval->d * 24 * 60;
        $hoursInMin = $dateInterval->h * 60;
        $minutes = $dateInterval->i;
        $totalMinutes = $daysInMin + $hoursInMin + $minutes;
        $interval = $totalMinutes;
        // if the difference is greater than 10 minutes, the token is considered expired
        if ($interval > 10) {
            return false;
        } else {
            return true;
        }
    }
}