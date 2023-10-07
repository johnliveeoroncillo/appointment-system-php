<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Appointment;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{

    protected $model = Appointment::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'user_id' => User::all()->random()->id,
            'doctor_id' => Doctor::all()->random()->id,
            'service_id' => Service::all()->random()->id,
            'email' => fake()->safeEmail(),
            'date' => fake()->date($format = 'Y-m-d', $max = 'now'),
            'time' => fake()->dateTime($max = 'now', $timezone = null),
            'status' => fake()->boolean(),
            'due_date' => fake()->date($format = 'Y-m-d', $max = 'now')
        ];
    }
}
