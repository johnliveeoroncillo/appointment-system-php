<?php

use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\DoctorsController;
use App\Models\Appointment;
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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('calendar')->group(function () {
    Route::get('/available-times', [CalendarController::class, 'getAvailableTimes']);
});

// Example in routes/web.php or routes/api.php
Route::get('/api/appointments/{date}', 'AppointmentController@getExistingAppointments');

// Route::get('/api/appointments/{date}', [AppointmentsController::class, 'getExistingAppointments']);
// routes/web.php or routes/api.php
Route::get('/api/appointments/{date}', 'AppointmentController@getAppointments');
Route::get('/api/availableTimes/{date}', 'AppointmentController@getAvailableTimes');
