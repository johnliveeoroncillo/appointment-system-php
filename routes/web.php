<?php

use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\Auth\DoctorLoginController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MedicalChartsController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\UsersController;
use App\Models\Appointment;
use Illuminate\Foundation\Application;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
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
    $user = Auth::user();

    $notifications = $user->unreadNotifications;

    return Inertia::render('Dashboard', [
        'notifications' => $notifications,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
});

Route::get('/notfound', function () {
    return Inertia::render('notFound404');
})->name('404');

// route for patient
Route::middleware('patient')->group(function () {
    Route::get('/appointment', [AppointmentsController::class, 'show'])->name('appointment.show');
    Route::get('/appointment/history', [AppointmentsController::class, 'index'])->name('appointment.history.index');
    Route::get('/appointment/create-form', [AppointmentsController::class, 'create'])->name('appointment.create-form.create');
    Route::post('/appointment/create', [AppointmentsController::class, 'store'])->name('appointment.create.store');
    Route::patch('/appointment/status/{id}', [AppointmentsController::class, 'update'])->name('appointment.update');
    Route::patch('/appointment/{id}', [AppointmentsController::class, 'updateStatus'])->name('appointment.updateStatus');
    Route::delete('/appointment/{id}', [AppointmentsController::class, 'destroy'])->name('appointment.destroy');

    Route::get('/medical-chart', [MedicalChartsController::class, 'show'])->name('medical-chart.show');
    Route::get('/medical-chart/create-form', [MedicalChartsController::class, 'create'])->name('<medical-chart>create-form.create');
    Route::post('/medical-chart', [MedicalChartsController::class, 'store'])->name('medical-chart.store');
    Route::get('/medical-chart/{id}', [MedicalChartsController::class, 'edit'])->name('medical-chart.edit');
    Route::put('/medical-chart/{id}', [MedicalChartsController::class, 'update'])->name('medical-chart.update');

    Route::get('/patient/notifications', [NotificationController::class, 'showNotifications'])->name('patient.notifications');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// route for admin
Route::middleware(['middleware' => 'auth:doctor'])->group(function () {
    Route::get('/doctor/dashboard', [DoctorController::class, 'index'])->name('doctor.dashboard');

    Route::get('/doctor/notifications', [NotificationController::class, 'showNotifications'])->name('doctor.notifications');

    Route::get('/appointment-requests', [AppointmentsController::class, 'show'])->name('appointment-requests.show');
    Route::get('/appointment/doctor/history', [AppointmentsController::class, 'show'])->name('appointment.admin.history.show');
    Route::get('/appointments/{id}', [AppointmentsController::class, 'show'])->name('appointments/{id}.show');
    Route::patch('/appointments/{id}', [AppointmentsController::class, 'update'])->name('appointments.update');

    Route::get('/myappointments', [AppointmentsController::class, 'index'])->name('myappointments.index');
    Route::get('/appointments', [AppointmentsController::class, 'index'])->name('appointments.index');


    Route::get('/services', [ServicesController::class, 'index'])->name('services.index');

    Route::get('/users', [UsersController::class, 'index'])->name('users');
});

require __DIR__ . '/auth.php';
