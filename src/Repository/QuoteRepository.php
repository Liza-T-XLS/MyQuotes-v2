<?php

namespace App\Repository;

use App\Entity\Quote;
use App\Entity\Tag;
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
    // SELECT COUNT(*) FROM `quote` LEFT JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%football%' OR quote.author_first_name LIKE '%football%' OR quote.author_last_name LIKE '%football%' OR quote.character_name LIKE '%football%' OR quote.medium_title LIKE '%football%' OR quote_tag.tag_id = 1) AND quote.user_id = 24 
    public function loadUserQuoteNumberBySearch($userId, $search) {
        $em = $this->getEntityManager();

        $tagRepository = $em->getRepository(Tag::class);
        // checks if $search string matches a tag's name
        $tag = $tagRepository->findOneBy(['name' => $search]);
        if($tag) {
            $tagId = $tag->getId();
        } else {
            $tagId = "";
        }

        $conn = $em->getConnection();
        // escapes single quote for SQL query
        $search = str_replace("'", "''", $search);
        $sql = "SELECT COUNT(*) FROM `quote` LEFT JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%$search%' OR quote.author_first_name LIKE '%$search%' OR quote.author_last_name LIKE '%$search%' OR quote.character_name LIKE '%$search%' OR quote.medium_title LIKE '%$search%' OR quote_tag.tag_id = :tag) AND quote.user_id = :userId";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array('userId' => $userId, 'tag' => $tagId));
        return $stmt->fetchOne();
    }

    // SQL query:
    // SELECT COUNT(*) FROM `quote` INNER JOIN quote_tag ON quote_tag.quote_id = quote.id WHERE `user_id` = 24 AND quote_tag.tag_id = 1 
    public function loadUserQuoteNumberByTag($userId, $tagId) {
        $conn = $this->getEntityManager()->getConnection();
        $sql = 'SELECT COUNT(*) FROM `quote` INNER JOIN quote_tag ON quote_tag.quote_id = quote.id WHERE `user_id` = :userId AND quote_tag.tag_id = :tagId';
        $stmt = $conn->prepare($sql);
        $stmt->execute(array('userId' => $userId, 'tagId' => $tagId));
        return $stmt->fetchOne();
    }

    // SQL query:
    // SELECT COUNT(*) FROM `quote` INNER JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%matter%' OR quote.author_first_name LIKE '%matter%' OR quote.author_last_name LIKE '%matter%' OR quote.character_name LIKE '%matter%' OR quote.medium_title LIKE '%matter%') AND quote_tag.tag_id = 1 AND quote.user_id = 24 
    public function loadUserQuoteNumberByTagAndSearch($userId, $tagId, $search) {
        $conn = $this->getEntityManager()->getConnection();
        // escapes single quote for SQL query
        $search = str_replace("'", "''", $search);
        $sql = "SELECT COUNT(*) FROM `quote` INNER JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%$search%' OR quote.author_first_name LIKE '%$search%' OR quote.author_last_name LIKE '%$search%' OR quote.character_name LIKE '%$search%' OR quote.medium_title LIKE '%$search%') AND quote_tag.tag_id = :tagId AND quote.user_id = :userId";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array('userId' => $userId, 'tagId' => $tagId));
        return $stmt->fetchOne();
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

    // SQL query:
    // SELECT quote.id FROM `quote` LEFT JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%football%' OR quote.author_first_name LIKE '%football%' OR quote.author_last_name LIKE '%football%' OR quote.character_name LIKE '%football%' OR quote.medium_title LIKE '%football%' OR quote_tag.tag_id = 1) AND quote.user_id = 24 LIMIT 5 OFFSET 0
    public function loadQuotesByUserAndPaginationAndSearch($userId, $search, $maxResults, $offset) {
        $em = $this->getEntityManager();

        $tagRepository = $em->getRepository(Tag::class);
        // checks if $search string matches a tag's name
        $tag = $tagRepository->findOneBy(['name' => $search]);
        if($tag) {
            $tagId = $tag->getId();
        } else {
            $tagId = "";
        }

        $conn = $em->getConnection();
        // escapes single quote for SQL query
        $search = str_replace("'", "''", $search);
        $sql = "SELECT quote.id FROM `quote` LEFT JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%$search%' OR quote.author_first_name LIKE '%$search%' OR quote.author_last_name LIKE '%$search%' OR quote.character_name LIKE '%$search%' OR quote.medium_title LIKE '%$search%' OR quote_tag.tag_id = :tag) AND quote.user_id = :userId LIMIT $maxResults OFFSET $offset";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array('userId' => $userId, 'tag' => $tagId));
        return $stmt->fetchAllAssociative();
    }

    // SQL query:
    // SELECT quote.id FROM quote INNER JOIN quote_tag ON quote_tag.quote_id = quote.id WHERE quote.user_id = 3 AND quote_tag.tag_id = 1 LIMIT 5 OFFSET 5
    public function loadQuotesByUserAndPaginationAndTag($userId, $tagId, $maxResults, $offset) {
        $conn = $this->getEntityManager()->getConnection();
        $sql = 'SELECT quote.id FROM quote INNER JOIN quote_tag ON quote_tag.quote_id = quote.id WHERE quote.user_id = :userId AND quote_tag.tag_id = :tagId LIMIT ' .$maxResults . ' OFFSET ' .$offset;
        $stmt = $conn->prepare($sql);
        $stmt->execute(array('userId' => $userId, 'tagId' => $tagId));
        return $stmt->fetchAllAssociative();
    }

    // SQL query:
    // SELECT quote.id FROM `quote` INNER JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%matter%' OR quote.author_first_name LIKE '%matter%' OR quote.author_last_name LIKE '%matter%' OR quote.character_name LIKE '%matter%' OR quote.medium_title LIKE '%matter%') AND quote_tag.tag_id = 1 AND quote.user_id = 24
    public function loadQuotesByUserAndPaginationAndTagAndSearch($userId, $tagId, $search, $maxResults, $offset) {
        $conn = $this->getEntityManager()->getConnection();
        // escapes single quote for SQL query
        $search = str_replace("'", "''", $search);
        $sql = "SELECT quote.id FROM `quote` INNER JOIN quote_tag ON quote.id = quote_tag.quote_id WHERE (REPLACE(quote.text, '\n', ' ') LIKE '%$search%' OR quote.author_first_name LIKE '%$search%' OR quote.author_last_name LIKE '%$search%' OR quote.character_name LIKE '%$search%' OR quote.medium_title LIKE '%$search%') AND quote_tag.tag_id = :tagId AND quote.user_id = :userId LIMIT $maxResults OFFSET $offset";
        $stmt = $conn->prepare($sql);
        $stmt->execute(array('userId' => $userId, 'tagId' => $tagId));
        return $stmt->fetchAllAssociative();
    }
}
