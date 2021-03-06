<?php

namespace App\Entity;

use App\Repository\QuoteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use DateTime;

/**
 * @ORM\Entity(repositoryClass=QuoteRepository::class)
 */
class Quote
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"quotes_get"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=1200)
     * @Assert\NotBlank()
     * @Assert\Length(
     *      min = 1,
     *      max = 1200,
     *      minMessage = "The text must be at least {{ limit }} character long",
     *      maxMessage = "The text cannot be longer than {{ limit }} characters"
     * )
     * @Groups({"quotes_get"})
     */
    private $text;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(
     *      max = 255,
     *      maxMessage = "The author's first name cannot be longer than {{ limit }} characters"
     * )
     * @Groups({"quotes_get"})
     */
    private $authorFirstName;

    /**
    * @ORM\Column(type="string", length=255, nullable=true)
    * @Assert\Length(
    *      max = 255,
    *      maxMessage = "The author's last name cannot be longer than {{ limit }} characters"
    * )
    * @Groups({"quotes_get"})
    */
    private $authorLastName;

    /**
    * @ORM\Column(type="string", length=255, nullable=true)
    * @Assert\Length(
    *      max = 255,
    *      maxMessage = "The character's name cannot be longer than {{ limit }} characters"
    * )
    * @Groups({"quotes_get"})
    */
    private $characterName;

    /**
    * @ORM\Column(type="string", length=255, nullable=true)
    *     @Assert\Length(
    *      max = 255,
    *      maxMessage = "The medium's title cannot be longer than {{ limit }} characters"
    * )
    * @Groups({"quotes_get"})
    */
    private $mediumTitle;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"quotes_get"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"quotes_get"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="quotes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class, inversedBy="quotes")
     * @Groups({"quotes_get"})
     */
    private $tags;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
        $this->createdAt = new DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getAuthorFirstName(): ?string
    {
        return $this->authorFirstName;
    }

    public function setAuthorFirstName(?string $authorFirstName): self
    {
        $this->authorFirstName = $authorFirstName;

        return $this;
    }

    public function getAuthorLastName(): ?string
    {
        return $this->authorLastName;
    }

    public function setAuthorLastName(?string $authorLastName): self
    {
        $this->authorLastName = $authorLastName;

        return $this;
    }

    public function getCharacterName(): ?string
    {
        return $this->characterName;
    }

    public function setCharacterName(?string $characterName): self
    {
        $this->characterName = $characterName;

        return $this;
    }

    public function getMediumTitle(): ?string
    {
        return $this->mediumTitle;
    }

    public function setMediumTitle(?string $mediumTitle): self
    {
        $this->mediumTitle = $mediumTitle;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        $this->tags->removeElement($tag);

        return $this;
    }
}
