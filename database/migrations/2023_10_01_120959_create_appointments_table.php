<?php

use App\Models\Doctor;
use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(
                User::class
            );
            $table->foreignidFor(
                Doctor::class
            );
            $table->foreignIdFor(
                Service::class
            );
            $table->string('name');
            $table->string('email')->unique();
            $table->date('date');
            $table->time('time');
            $table->boolean('status')->default(false);
            $table->string('due_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
