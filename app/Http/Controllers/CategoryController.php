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
            ->orWhereBelongsTo($category)
            ->select('title', 'slug', 'picture', 'user_id', 'created_at', 'id')
            ->WherePublished()
            ->latest()
            ->fastPaginate();

        // return ArticleItemResource::collection($articles);

        return inertia('Categories/Show', [
            "category" => $category,
            "articles" => ArticleItemResource::collection($articles)
        ]);
    }
}
