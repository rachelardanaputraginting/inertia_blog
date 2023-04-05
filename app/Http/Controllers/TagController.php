<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function show(Tag $tag)
    {

        $articles = $tag->articles()->latest()->fastPaginate();

        return inertia('Tags/Show', [
            "tag" => $tag,
            "articles" => ArticleItemResource::collection($articles)
        ]);
    }
}
