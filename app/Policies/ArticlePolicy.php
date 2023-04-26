<?php

namespace App\Policies;

use App\Enums\ArticleStatus;
use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    public function view(?User $user, Article $article)
    {
        $statuses = collect(ArticleStatus::cases())->except(2)->pluck('value')->toArray();
        if (in_array($article->status->value, $statuses)) {
            if ($user) {
                return $article->user_id == $user->id ? $this->allow() : $this->denyAsNotFound();
            }
            return $this->denyAsNotFound();
        }

        return true;
    }
}
