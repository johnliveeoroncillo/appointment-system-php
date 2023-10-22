<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('services')->insert([
            'name' => 'General Checkup',
            'description' => 'A physical examination is conducted to look for any signs of health issues. Depending on your age and risk factors, you may also have various tests and screenings.',
        ]);

        DB::table('services')->insert([
            'name' => 'Hospitalization',
            'description' => 'Involves admitting a patient to a hospital for medical care and treatment. It is typically necessary for serious illnesses, surgeries, or medical procedures that require close monitoring, specialized equipment, or round-the-clock medical attention.',
        ]);
        DB::table('services')->insert([
            'name' => 'Home Medication',
            'description' => 'Practice of taking prescribed or over-the-counter medications at home, as directed by a healthcare provider. Proper adherence to medication instructions is essential for achieving positive health outcomes and maintaining overall well-being.',
        ]);
    }
}
