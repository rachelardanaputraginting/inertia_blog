<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ArticleItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "title" => $this->title,
            "slug" => $this->slug,
            "created_at" => $this->created_at->format('Y') == date('Y') ? $this->created_at->format('d M') : $this->created_at->format('d M, Y'),
            "tags" => $this->tags->map(fn ($tag) => [
                "name" => $tag->name,
                "slug" => $tag->slug,
            ]),
            "picture" => $this->picture ? Storage::url($this->picture) : null,
            "author" => [
                "name" => $this->author->name,
            ],

        ];
    }
}
