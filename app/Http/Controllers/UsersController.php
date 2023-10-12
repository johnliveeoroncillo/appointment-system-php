<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $notifications = $user->unreadNotifications;

        $users = User::select('name', 'email', 'mobile_number', 'address', 'created_at')->orderBy('id', 'desc')->paginate(6);
        $users->transform(function ($user) {
            $user->formatted_createdAt = Carbon::parse($user->created_at)->diffForHumans();
            return $user;
        });
        return Inertia::render('Admin/AdminUsers', [
            'users' => $users,
            'notifications' => $notifications

        ]);
    }
}
