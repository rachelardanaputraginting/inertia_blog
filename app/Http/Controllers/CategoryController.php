<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function show(Category $category)
    {

        $articles = Article::query()
            ->select('title', 'slug', 'picture', 'user_id', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn ($tag) => $tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate();

        // return ArticleItemResource::collection($articles);

        return inertia('Categories/Show', [
            "category" => $category,
            "articles" => ArticleItemResource::collection($articles)
        ]);
    }
}
