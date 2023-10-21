<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PostRepository::class)]
class Post
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $origin_address = null;

    #[ORM\Column(length: 255)]
    private ?string $destination_address = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $departure_time = null;

    #[ORM\Column(length: 255)]
    private ?string $trip_type = null;

    #[ORM\Column(type: Types::SMALLINT)]
    private ?int $vacant_spots = null;

    #[ORM\Column]
    private ?int $price = null;

    #[ORM\Column]
    private ?bool $baggage_allowed = null;

    #[ORM\ManyToOne(inversedBy: 'posts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $post_admin = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOriginAddress(): ?string
    {
        return $this->origin_address;
    }

    public function setOriginAddress(string $origin_address): static
    {
        $this->origin_address = $origin_address;

        return $this;
    }

    public function getDestinationAddress(): ?string
    {
        return $this->destination_address;
    }

    public function setDestinationAddress(string $destination_address): static
    {
        $this->destination_address = $destination_address;

        return $this;
    }

    public function getDepartureTime(): ?\DateTimeInterface
    {
        return $this->departure_time;
    }

    public function setDepartureTime(\DateTimeInterface $departure_time): static
    {
        $this->departure_time = $departure_time;

        return $this;
    }

    public function getTripType(): ?string
    {
        return $this->trip_type;
    }

    public function setTripType(string $trip_type): static
    {
        $this->trip_type = $trip_type;

        return $this;
    }

    public function getVacantSpots(): ?int
    {
        return $this->vacant_spots;
    }

    public function setVacantSpots(int $vacant_spots): static
    {
        $this->vacant_spots = $vacant_spots;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function isBaggageAllowed(): ?bool
    {
        return $this->baggage_allowed;
    }

    public function setBaggageAllowed(bool $baggage_allowed): static
    {
        $this->baggage_allowed = $baggage_allowed;

        return $this;
    }

    public function getPostAdmin(): ?User
    {
        return $this->post_admin;
    }

    public function setPostAdmin(?User $post_admin): static
    {
        $this->post_admin = $post_admin;

        return $this;
    }
}
