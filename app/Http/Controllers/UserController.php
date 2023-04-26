<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use App\Models\User;

class UserController extends Controller
{
    public function show(User $user)
    {
        $articles = Article::query()
            ->whereBelongsTo($user, 'author')
            ->fastPaginate(9);

        return inertia('Users/Show', [
            "user" => [
                "name" => $user->name,
                "joined" => $user->created_at->diffForHumans(),
            ],
            "articles" => ArticleItemResource::collection($articles)
        ]);
    }
}
