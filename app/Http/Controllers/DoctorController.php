<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Models\Appointment;
use App\Models\Service;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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

        $doctor = Auth::user();

        $notifications = $doctor->unreadNotifications;

        return Inertia::render('Admin/AdminDashboard', [
            'appointments' => $appointments,
            'doctors' => Doctor::all(),
            'users' => User::all(),
            'services' => Service::all(),
            'notifications' => $notifications,

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorRequest $request, Doctor $doctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        //
    }
}
