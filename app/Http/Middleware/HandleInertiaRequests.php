<?php

namespace App\Http\Middleware;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Cache::forget('categories_global');

        $categoriesGlobal = Category::query()
            ->select('name', 'slug')
            ->whereHas('articles')
            ->get();
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? [
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'hasRole' => $request->user()?->hasRole()
                ] : null,
            ],
            'categories_global' => Cache::rememberForever('categories_global', fn () => $categoriesGlobal),
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
