<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210118165705 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE quote_tag (quote_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_3658A64FDB805178 (quote_id), INDEX IDX_3658A64FBAD26311 (tag_id), PRIMARY KEY(quote_id, tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tag (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE quote_tag ADD CONSTRAINT FK_3658A64FDB805178 FOREIGN KEY (quote_id) REFERENCES quote (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE quote_tag ADD CONSTRAINT FK_3658A64FBAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE quote_tag DROP FOREIGN KEY FK_3658A64FBAD26311');
        $this->addSql('DROP TABLE quote_tag');
        $this->addSql('DROP TABLE tag');
    }
}
