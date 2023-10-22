<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\MedicalChart;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $notifications = $user->unreadNotifications;

        $users = User::select('id', 'name', 'email', 'mobile_number', 'address', 'created_at')->orderBy('id', 'desc')->paginate(6);
        $users->transform(function ($user) {
            $user->formatted_createdAt = Carbon::parse($user->created_at)->format('D. M. d, Y');
            return $user;
        });
        return Inertia::render('Admin/AdminUsers', [
            'users' => $users,
            'notifications' => $notifications

        ]);
    }

    public function createUser()
    {
        $user = Auth::user();

        $notifications = $user->unreadNotifications;

        $users = User::select('id', 'name', 'email', 'mobile_number', 'address', 'created_at')->orderBy('id', 'desc')->paginate(6);
        $users->transform(function ($user) {
            $user->formatted_createdAt = Carbon::parse($user->created_at)->format('D. M. d, Y');
            return $user;
        });
        return Inertia::render('Admin/AdminAddUser', [
            'users' => $users,
            'notifications' => $notifications
        ]);
    }


    public function storeUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('users.index')->with('message', 'User added successfully!');
    }

    public function destroyAdmin(User $user, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back();
    }


    public function showProfile($id)
    {
        $user = Auth::user();

        $notifications = $user->unreadNotifications;

        $users = User::find($id);

        $medicalChart = MedicalChart::where('user_id', $id)->get();

        return Inertia::render('Admin/AdminUserProfile', [
            'user' => $users,
            'medicalchart' => $medicalChart,
            'notifications' => $notifications
        ]);
    }
}
