<?php

use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MedicalChartsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//redirect the user base on role
// Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::middleware('auth:sanctum')->get(
    '/home',
    [HomeController::class, 'index']
)->name('home');

Route::get('/verifyMessage', function () {
    return Inertia::render('VerifyMessage');
})->name('verifymessage');

Route::get('/notfound', function () {
    return Inertia::render('notFound404');
})->name('404');

// route for patient
Route::middleware(['auth', 'role:patient'])->group(function () {
    Route::get('/appointment', [AppointmentsController::class, 'show'])->name('appointment.show');
    Route::get('/appointment/create', [AppointmentsController::class, 'create'])->name('appointment.create');
    Route::patch('/appointment/{appointment}', [AppointmentsController::class, 'update'])->name('appointment.update');
    Route::delete('/appointment/{id}', [AppointmentsController::class, 'destroy'])->name('appointment.destroy');

    Route::get('/medical-chart', [MedicalChartsController::class, 'show'])->name('medical-chart.show');
    Route::get('/medical-chart/create-form', [MedicalChartsController::class, 'create'])->name('medical-chart/create-form.create');
    Route::post('/medical-chart', [MedicalChartsController::class, 'store'])->name('medical-chart.store');
    Route::get('/medical-chart/{id}', [MedicalChartsController::class, 'edit'])->name('medical-chart.edit');
    Route::put('/medical-chart/{id}', [MedicalChartsController::class, 'update'])->name('medical-chart.update');
});

// route for admin
Route::middleware(['auth', 'role:doctor'])->group(function () {
    // dashboard routes

    //appointment routes
    Route::get('/appointments', [AppointmentsController::class, 'index'])->name('appointments.index');
    Route::get('/appointments/{id}', [AppointmentsController::class, 'show'])->name('appointments/{id}.show');
    //doctors routes
    //services routes
    Route::get('/services', [ServicesController::class, 'index'])->name('services.index');
    //users routes
    Route::get('/users', function () {
        return 'try';
    })->name('users');
});

require __DIR__ . '/auth.php';
