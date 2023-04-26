<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// auth()->loginUsingId(2);

Route::get('/', HomeController::class)->name('home');

Route::get('articles/table', [ArticleController::class, 'table'])->name('articles.table');
Route::resource('articles', ArticleController::class);

Route::get('tags/{tag:slug}', [TagController::class, 'show'])->name('tags.show');

Route::get('categories/{category:slug}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('dashboard', DashboardController::class)->name('dashboard')->middleware('auth');

require __DIR__ . '/auth.php';

Route::get('/{user:username}', [UserController::class, 'show']);
