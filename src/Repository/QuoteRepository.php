<?php

namespace App\Repository;

use App\Entity\Quote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Quote|null find($id, $lockMode = null, $lockVersion = null)
 * @method Quote|null findOneBy(array $criteria, array $orderBy = null)
 * @method Quote[]    findAll()
 * @method Quote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuoteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Quote::class);
    }

    // SQL query:
    // SELECT COUNT(*) FROM `quote` WHERE `user_id` = 2
    public function loadUserQuoteNumber($userId) {
        $em = $this->getEntityManager();

        $query = $em->createQuery(
            'SELECT COUNT(q)
            FROM App\Entity\Quote q
            WHERE q.user = :userId'
        );
        $query->setParameter('userId', $userId);

        return $query->getSingleScalarResult();
    }

    // SQL query: 
    // SELECT * FROM `quote` WHERE `user_id` = 24 LIMIT 5, 5
    public function loadQuotesByUserAndPagination($userId, $maxResults, $offset) {
        $em = $this->getEntityManager();

        $query = $em->createQuery(
            'SELECT q
            FROM App\Entity\Quote q
            WHERE q.user = :userId'
        );
        $query->setParameter('userId', $userId);
        $query->setMaxResults($maxResults);
        $query->setFirstResult($offset);

        return $query->getResult();
    }

    // /**
    //  * @return Quote[] Returns an array of Quote objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Quote
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}