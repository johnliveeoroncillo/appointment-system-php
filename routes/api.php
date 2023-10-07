<?php

use App\Http\Controllers\DoctorsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/test', [DoctorsController::class, 'index']);
Route::post('/doctors', [DoctorsController::class, 'store']);
Route::patch('/doctors/{doctor}', [DoctorsController::class, 'update']); //getting forbidden in the postman
Route::delete('/doctors/{doctor}', [DoctorsController::class, 'destroy']);
Route::get('/doctors/{doctor}', [DoctorsController::class, 'show']);
Route::get('/doctors/{doctor}', [DoctorsController::class, 'edit']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
