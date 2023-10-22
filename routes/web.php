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
use App\Models\Doctor;
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
        'doctor' => Doctor::all(),
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
    Route::patch('/appointment/cancel/{id}', [AppointmentsController::class, 'updateStatus'])->name('appointment.updateStatus');
    Route::patch('/appointment/done/{id}', [AppointmentsController::class, 'markAsDone'])->name('appointment.done.markAsDone');
    Route::delete('/appointment/delete/{id}', [AppointmentsController::class, 'destroy'])->name('appointment.destroy');

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

    Route::get('/doctor/appointment', [AppointmentsController::class, 'showAppointments'])->name('appointment.showAppointments');
    Route::get('/appointment-requests', [AppointmentsController::class, 'show'])->name('appointment-requests.show');
    Route::get('/appointment/my-appoinment', [AppointmentsController::class, 'showMyAppointments'])->name('appointment.myappointments.showMyAppointments');
    Route::get('/appointment/doctor/history', [AppointmentsController::class, 'showHistory'])->name('appointment.admin.history.showHistory');
    Route::get('/appointment/doctor/canceled', [AppointmentsController::class, 'showCanceledAppointments'])->name('appointment.admin.history.showCanceledAppointments');
    Route::get('/appointments/{id}', [AppointmentsController::class, 'show'])->name('appointments/{id}.show');
    Route::patch('/appointment/approve/{id}', [AppointmentsController::class, 'updateApprove'])->name('appointment.updateApprove');
    Route::patch('/appointment/decline/{id}', [AppointmentsController::class, 'updateDecline'])->name('appointments.updateDecline');
    Route::delete('/appointment/admin/delete/{id}', [AppointmentsController::class, 'destroyAdmin'])->name('appointment.admin.delete.destroyAdmin');
    Route::patch('/appointment/doctor/done/{id}', [AppointmentsController::class, 'markAsDoneAdmin'])->name('appointment.doctor.done.markAsDoneAdmin');
    Route::get('/appointment/appointment-form', [AppointmentsController::class, 'createAppointments'])->name('appointments.appointment-form.createAppointments');
    Route::get('/appointments', [AppointmentsController::class, 'index'])->name('appointments.index');


    Route::get('/services', [ServicesController::class, 'index'])->name('services.index');
    Route::delete('/services/delete/{id}', [ServicesController::class, 'destroy'])->name('services.delete.destroy');
    Route::post('/services/add-service', [ServicesController::class, 'store'])->name('services.add-user.store');

    Route::get('/users', [UsersController::class, 'index'])->name('users.index');
    Route::get('/users/new-user', [UsersController::class, 'createUser'])->name('user.new-user.createUser');
    Route::post('/users/store-user', [UsersController::class, 'storeUser'])->name('user.store-user.storeUser');
    Route::delete('/users/delete/{id}', [UsersController::class, 'destroyAdmin'])->name('users.delete.destroyAdmin');
    Route::get('/users/user-profile/{id}', [UsersController::class, 'showProfile'])->name('users.user-profile.showProfile');

    Route::get('/doctor/profile', [ProfileController::class, 'adminEdit'])->name('doctor.profile.edit');
    Route::patch('/doctor/profile', [ProfileController::class, 'updateAdmin'])->name('doctor.profile.update');
    // Route::delete('/doctor/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
