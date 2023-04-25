<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        $articles = Article::query()
            ->select('title', 'slug', 'user_id', 'picture', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn ($tag) => $tag->select('name', 'slug')])
            ->WherePublished()
            ->limit(9)
            ->latest()
            ->get();

        // return ArticleItemResource::collection($articles);
        return inertia('Home', [
            "articles" => ArticleItemResource::collection($articles)
        ]);
    }
}
