<?php

namespace App\Policies;

use App\Models\MedicalChart;
use App\Models\User;

class MedicalChartPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function update(User $user, MedicalChart $medicalChart)
    {
        return $user->id === $medicalChart->user_id;
    }
}
