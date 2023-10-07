<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        if (Auth::id()) {
            $role = Auth()->user()->role;

            if ($role == 'patient') {
                return Inertia::render('Dashboard', [
                    'user' => auth()->user(),
                ]);
            } else if ($role == 'doctor') {

                $appointments = Appointment::select(
                    'appointments.id',
                    'appointments.name',
                    'appointments.date',
                    'appointments.time',
                    'appointments.status',
                    'services.name as service_name',
                )
                    ->join('services', 'appointments.service_id', '=', 'services.id')->get();
                $appointments->transform(function ($appointment) {
                    $appointment->formatted_date = Carbon::parse($appointment->date)->format('D. M. d, Y');
                    $appointment->formatted_time = Carbon::parse($appointment->time)->format('g:i A');
                    return $appointment;
                });
                return Inertia::render('Admin/AdminDashboard', [
                    'user' => auth()->user(),
                    'appointments' => $appointments,

                ]);
            } else {
                return redirect()->back();
            }
        }
    }
}
