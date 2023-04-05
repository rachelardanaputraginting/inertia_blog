<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public function articles()
    {
        return $this->belongsToMany(Article::class)
            ->select('title', 'slug', 'user_id', 'picture', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn ($tag) => $tag->select('name', 'slug')]);
    }
}
