<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Models\Doctor;
use App\Models\Service;
use App\Notifications\AppointmentApprovedNotification;
use App\Notifications\AppointmentCancelNotification;
use App\Notifications\AppointmentRequestNotification;
use App\Notifications\AppointmentRescheduleNotification;
use App\Notifications\UserAppointmentRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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

            $currentUser = auth()->id();

            $appointments = Appointment::select(
                'appointments.id',
                'appointments.user_id',
                'appointments.doctor_id',
                'appointments.date',
                'appointments.time',
                'appointments.status',
                'appointments.updated_at',
                'doctors.name as doctor_name',
                'services.name as service_name',
            )
                ->join('doctors', 'appointments.doctor_id', '=', 'doctors.id')
                ->join('services', 'appointments.service_id', '=', 'services.id')
                ->where('user_id', $currentUser)
                ->orderBy('appointments.status', 'desc')
                ->get();

            $appointments->transform(function ($appointment) {
                $appointment->formatted_date = Carbon::parse($appointment->date)->format('D. M. d, Y');
                $appointment->formatted_time = Carbon::parse($appointment->time)->format('g:i A');
                $appointment->formatted_updated_at = Carbon::parse($appointment->updated_at)->diffForHumans();
                return $appointment;
            });
            $user = Auth::user();

            $notifications = $user->unreadNotifications;


            return Inertia::render('Users/Appointments/DoneAppointments', [
                'appointments' => $appointments,
                'notifications' => $notifications,
            ]);
        } elseif ($user->role === 'doctor') {
            //
        } else {
            return Inertia::render('notFound404');
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = auth()->user();
        if ($user->role === 'patient') {
            $user = Auth::user();

            $notifications = $user->unreadNotifications;

            return Inertia::render('Users/Appointments/AppointmentForm', [
                'doctors' => Doctor::all(),
                'services' => Service::all(),
                'notifications' => $notifications,
            ]);
        } else if ($user->role === 'doctor') {
            //
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAppointmentRequest $request)
    {
        $appointment = $request->validated();

        $appointment = Appointment::create($appointment);

        $doctor = $appointment->doctor;
        $user = $appointment->user;

        // $doctor->notify(new AppointmentRequestNotification($appointment->user));

        // return to_route('appointment.show')->with('message', 'Appointment has been created!');
        if ($doctor) {
            // Notify the doctor about the new appointment request
            $doctor->notify(new AppointmentRequestNotification($appointment->doctor, $appointment->user));

            return redirect()->route('appointment.show')->with('message', 'Appointment has been created!');
        } else {
            // Handle the case where there's no associated doctor
            return redirect()->route('appointment.show')->with('message', 'No doctor associated with this appointment.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {

        $user = auth()->user();
        if ($user->role === 'patient') {
            $currentUser = auth()->id();

            $appointments = Appointment::select(
                'appointments.id',
                'appointments.user_id',
                'appointments.doctor_id',
                'appointments.date',
                'appointments.time',
                'appointments.status',
                'appointments.updated_at',
                'doctors.name as doctor_name',
                'services.name as service_name',
            )
                ->join('doctors', 'appointments.doctor_id', '=', 'doctors.id')
                ->join('services', 'appointments.service_id', '=', 'services.id')
                ->where('user_id', $currentUser)
                ->orderBy('appointments.status', 'desc')
                ->get();

            $appointments->transform(function ($appointment) {
                $appointment->formatted_date = Carbon::parse($appointment->date)->format('D. M. d, Y');
                $appointment->formatted_time = Carbon::parse($appointment->time)->format('g:i A');
                $appointment->formatted_updated_at = Carbon::parse($appointment->updated_at)->diffForHumans();
                return $appointment;
            });

            $user = Auth::user();

            $notifications = $user->unreadNotifications;

            return Inertia::render('Users/Appointments', [
                'appointments' => $appointments,
                'notifications' => $notifications,



            ]);
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
                ->where('status', 0)
                ->paginate(6);
            $appointments->transform(function ($appointment) {
                $appointment->formatted_date = Carbon::parse($appointment->date)->format('D. M. d, Y');
                $appointment->formatted_time = Carbon::parse($appointment->time)->format('g:i A');
                return $appointment;
            });

            $doctor = Auth::user();

            $notifications = $doctor->unreadNotifications;
            // $doctor->unreadNotifications->markAsRead();

            return Inertia::render('Admin/AdminAppointments', [
                'user' => auth()->user(),
                'appointments' => $appointments,
                'notifications' => $notifications,

            ]);
        } else {
            return "error";
        }
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
    public function update(Request $request, Appointment $appointment, $id)
    {
        $user = auth()->user();
        if ($user->role === 'patient') {

            $validatedData = $request->validate([
                'id' => 'required|exists:appointments,id',
                'date' => 'required|date',
                'time' => 'required|string',
            ]);

            $appointment = Appointment::findOrFail($validatedData['id']);

            $validatedData['status'] = 0;
            $validatedData['updated_at'] = now();

            DB::table('appointments')->where('id', $validatedData['id'])->update($validatedData);

            $doctor = $appointment->doctor;
            $user = $appointment->user;

            if ($user) {

                $notification = new AppointmentRescheduleNotification($doctor, $user);
                $doctor->notify($notification);

                return redirect()->back();
            } else {

                return redirect()->route('appointment.show')->with('message', 'Error rescheduling the appointment.');
            }

            return redirect()->back();
        } else if ($user->role === 'doctor') {

            $appointment = Appointment::findOrFail($id);

            DB::table('appointments')->where('id', $appointment['id'])->update(['status' => '1']);

            $doctor = $appointment->doctor;
            $user = $appointment->user;

            if ($user) {

                $user->notify(new AppointmentApprovedNotification($appointment->user, $appointment->doctor));

                return redirect()->route('appointment-requests.show')->with('message', 'Appointment Approved!');
            } else {

                return redirect()->route('appointment.show')->with('message', 'Error approving the appointment.');
            }
        }
    }


    public function updateStatus(Request $request, Appointment $appointment, $id)
    {
        $appointment = Appointment::findOrFail($id);

        DB::table('appointments')->where('id', $appointment['id'])->update(['status' => '3', 'updated_at' => now()]);

        return redirect()->route('appointment-requests.show')->with('message', 'Appointment Has been canceled!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment, $id)
    {

        $appointments = Appointment::findOrFail($id);

        if ($appointments) {

            $doctor = $appointments->doctor;
            $user = $appointments->user;

            if ($user) {
                // Create notification instance with appointment details
                $notification = new AppointmentCancelNotification($doctor, $user, $appointments);

                // Notify the user
                $doctor->notify($notification);

                // Now you can delete the appointment
                $appointments->delete();

                return redirect()->back();
            } else {
                return redirect()->back()->with('error', 'User not found.');
            }
        } else {
            return redirect()->back()->with('message', 'Error deleting your appointment!');
        }
    }
}
