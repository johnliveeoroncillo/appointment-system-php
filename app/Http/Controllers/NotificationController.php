<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function showNotifications(Doctor $doctor)
    {
        $user = auth()->user();

        if ($user->role === 'patient') {
            $user = Auth::user();

            $notifications = $user->unreadNotifications;

            $notificationData = $notifications->map(function ($notification) {
                return [
                    'message' => $notification->data['message'],
                    'created_at' => Carbon::parse($notification->created_at)->diffForHumans(),
                ];
            });

            $user->unreadNotifications->markAsRead();

            return Inertia::render('Users/Notification', [
                'notifications' => $notificationData
            ]);
        } else if ($user->role === 'doctor') {

            $doctor = Auth::user();

            $notifications = $doctor->unreadNotifications;

            $notificationData = $notifications->map(function ($notification) {
                return [
                    'message' => $notification->data['message'],
                    'created_at' => Carbon::parse($notification->created_at)->diffForHumans(),
                ];
            });

            $doctor->unreadNotifications->markAsRead();

            return Inertia::render('Admin/AdminNotifications', [
                'notifications' => $notificationData
            ]);
        }
    }
}
