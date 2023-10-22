<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $table = 'appointments';

    const STATUS_PENDING = 0;
    const STATUS_APPROVED = 1;
    const STATUS_DONE = 2;
    const STATUS_CANCELED = 3;

    protected $fillable = [
        'id',
        'status',
        'user_id',
        'name',
        'date',
        'time',
        'doctor_id',
        'service_id'
    ];

    public function appointable()
    {
        return $this->morphTo();
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
