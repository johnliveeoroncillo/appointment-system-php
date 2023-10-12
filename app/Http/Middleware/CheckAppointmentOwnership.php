<?php

namespace App\Http\Middleware;

use App\Models\Appointment;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAppointmentOwnership
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $appointmentId = $request->route('id'); // Assuming the appointment ID is part of the route parameters
        $appointment = Appointment::findOrFail($appointmentId);

        $user = $request->user();

        // Check if the authenticated user is either the doctor or the user associated with the appointment
        if ($user->id == $appointment->user_id || $user->id == $appointment->doctor_id) {
            return $next($request);
        }

        // If not authorized, you might want to redirect or return an error response
        return abort(403, 'Unauthorized action.');
    }
}
