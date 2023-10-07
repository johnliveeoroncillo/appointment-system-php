<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use Carbon\Carbon;
use Inertia\Inertia;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if ($user->role === 'patient') {
            return Inertia::render('Users/Appointments');
        } else if ($user->role === 'doctor') {

            $appointments = Appointment::select(
                'appointments.id',
                'appointments.name',
                'appointments.date',
                'appointments.time',
                'appointments.status',
                'services.name as service_name',
            )
                ->join('services', 'appointments.service_id', '=', 'services.id')
                ->paginate(8);
            $appointments->transform(function ($appointment) {
                $appointment->formatted_date = Carbon::parse($appointment->date)->format('D. M. d, Y');
                $appointment->formatted_time = Carbon::parse($appointment->time)->format('g:i A');
                return $appointment;
            });
            return Inertia::render('Admin/AdminAppointments', [
                'user' => auth()->user(),
                'appointments' => $appointments,
            ]);
        }
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
    public function store(StoreAppointmentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        // $appointments = Appointment::select(
        //     'appointments.id',
        //     'appointments.name',
        //     'appointments.date',
        //     'appointments.time',
        //     'appointments.status',
        //     'services.name as service_name',
        //     'doctors.name as doctor_name'
        // )
        //     ->join('services', 'appointments.service_id', '=', 'services.id')
        //     ->join('doctors', 'appointments.doctor_id', 'doctors.id')
        //     ->where('status', 0)
        //     ->paginate(8);
        // $appointments->transform(function ($appointment) {
        //     $appointment->formatted_date = Carbon::parse($appointment->date)->format('D. M. d, Y');
        //     $appointment->formatted_time = Carbon::parse($appointment->time)->format('g:i A');
        //     return $appointment;
        // });
        // return Inertia::render('Admin/AdminAppointments', [
        //     'user' => auth()->user(),
        //     'appointments' => Appointment::all(),
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAppointmentRequest $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
