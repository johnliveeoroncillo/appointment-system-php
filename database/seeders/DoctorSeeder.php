<?php

namespace Database\Seeders;

use App\Models\Doctor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('doctors')->insert([
            'name' => 'Vicente Lao',
            'email' => 'doctor@example.com',
            'password' => Hash::make('12345678'),
            'mobile_number' => '09393939322',
            'expertise' => 'general practioner',
            'address' => 'Tigaon Camarines Sur'
        ]);
    }
}
