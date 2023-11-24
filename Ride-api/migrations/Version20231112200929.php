<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231112200929 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE post DROP CONSTRAINT fk_5a8a6c8ddbc60bb1');
        $this->addSql('DROP INDEX idx_5a8a6c8ddbc60bb1');
        $this->addSql('ALTER TABLE post RENAME COLUMN post_admin_id TO post_user_id');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8D9A8664A6 FOREIGN KEY (post_user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_5A8A6C8D9A8664A6 ON post (post_user_id)');
        $this->addSql('ALTER TABLE "user" ADD roles JSON NOT NULL');
        $this->addSql('ALTER TABLE "user" ALTER email TYPE VARCHAR(180)');
        $this->addSql('ALTER TABLE "user" ALTER home_address DROP NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74');
        $this->addSql('ALTER TABLE "user" DROP roles');
        $this->addSql('ALTER TABLE "user" ALTER email TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE "user" ALTER home_address SET NOT NULL');
        $this->addSql('ALTER TABLE post DROP CONSTRAINT FK_5A8A6C8D9A8664A6');
        $this->addSql('DROP INDEX IDX_5A8A6C8D9A8664A6');
        $this->addSql('ALTER TABLE post RENAME COLUMN post_user_id TO post_admin_id');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT fk_5a8a6c8ddbc60bb1 FOREIGN KEY (post_admin_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_5a8a6c8ddbc60bb1 ON post (post_admin_id)');
    }
}
