<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
   

    #[Route('/getAll', name: 'app_getall')]
    public function getAll(ManagerRegistry $managerRegistry): Response
    {
        $em = $managerRegistry->getRepository(Post::class);
        $result = $em->findAll();

        return $this->render('post/posts.html.twig', [
            'posts' => $result
        ]);
    }
}