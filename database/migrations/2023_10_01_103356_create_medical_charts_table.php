<?php

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
        Schema::create('medical_charts', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(
                User::class
            );
            $table->string('name');
            $table->string('gender');
            $table->unsignedInteger('age');
            $table->string('height');
            $table->string('weight');
            $table->bigInteger('bp');
            $table->string('illness');
            $table->longText('physical_exam');
            $table->longText('medical_history');
            $table->string('allergies');
            $table->longText('family_history');
            $table->longText('social_history');
            $table->longText('diagnosis');
            $table->longText('plan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_charts');
    }
};
