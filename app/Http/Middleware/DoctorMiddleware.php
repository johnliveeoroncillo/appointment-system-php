<?php

namespace App\Http\Middleware;

use App\Models\Doctor;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DoctorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // $user = auth()->user();

        if (auth()->check() && auth()->user()->role === 'doctor') {
            return $next($request);
        }

        abort(403, 'Unauthorized');
    }
}
