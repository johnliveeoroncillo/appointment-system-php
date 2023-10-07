<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalChart extends Model
{
    use HasFactory;

    protected $table = 'medical_charts';

    protected $fillable = [
        'user_id',
        'name',
        'gender',
        'age',
        'height',
        'weight',
        'bp',
        'illness',
        'physical_exam',
        'medical_history',
        'allergies',
        'family_history',
        'social_history',
        'diagnosis',
        'plan'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
