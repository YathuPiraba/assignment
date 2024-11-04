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

    Route::post('user/{id}', [UserController::class, 'updateUser']); // Update User
    Route::delete('user/{id}/deleteImage', [UserController::class, 'deleteUserImage']); // Delete User Image
    Route::put('user/{id}/password', [UserController::class, 'changePassword']); // Change Password

});
