<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::resource('articles', ArticleController::class);

Route::get('categories/{category:slug}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('dashboard', DashboardController::class)->name('dashboard')->middleware('auth');

require __DIR__ . '/auth.php';
