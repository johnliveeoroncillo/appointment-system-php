<?php

namespace App\Models;

use App\Http\Controllers\NotificationController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;


class Doctor extends Model implements Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,  AuthenticatableTrait;

    public function redirectTo()
    {
        return '/doctor/dashboard';
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function can($ability, $arguments = [])
    {
        return true; // or add your authorization logic here
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'doctor_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // public function notifications()
    // {
    //     return $this->morphMany(NotificationController::class, 'showNotifications')->orderBy('created_at', 'desc');
    // }
}
