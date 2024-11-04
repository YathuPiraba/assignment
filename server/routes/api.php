<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Register a new user
Route::post('/register', [UserController::class, 'register']);

// Login user
Route::post('/login', [UserController::class, 'login']);
Route::get('/posts', [PostController::class, 'getPosts']);
Route::get('/post/{id}', [PostController::class, 'getPost']);

// Protected routes (requires authentication)
Route::middleware('auth:sanctum')->group(function () {

    // Update user details
    Route::put('/user', [UserController::class, 'updateUser']);

    // Delete user image
    Route::delete('/user/image', [UserController::class, 'deleteUserImage']);

    // Change user password
    Route::put('/user/password', [UserController::class, 'changePassword']);
});
