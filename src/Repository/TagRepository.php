<?php

namespace App\Repository;

use App\Entity\Tag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Tag|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tag|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tag[]    findAll()
 * @method Tag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TagRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tag::class);
    }

    // SQL query: 
    // SELECT DISTINCT tag.id, tag.name FROM tag INNER JOIN quote_tag ON quote_tag.tag_id = tag.id INNER JOIN quote ON quote_tag.quote_id = quote.id WHERE quote.user_id = 3 ORDER BY tag.name
    public function findAllTagsByUser($userId) {
        $conn = $this->getEntityManager()
        ->getConnection();
        $sql = 'SELECT DISTINCT tag.id, tag.name FROM tag INNER JOIN quote_tag ON quote_tag.tag_id = tag.id INNER JOIN quote ON quote_tag.quote_id = quote.id WHERE quote.user_id = :userId ORDER BY tag.name';
        $stmt = $conn->prepare($sql);
        $stmt->execute(array('userId' => $userId));
        return $stmt->fetchAllAssociative();
    }

}
