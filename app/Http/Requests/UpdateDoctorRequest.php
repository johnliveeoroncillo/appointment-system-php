<?php

namespace App\Http\Requests;

use App\Models\Doctor;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDoctorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(Doctor::class)->ignore($this->user()->id)],
            'mobile_number' =>
            ['string', 'max:255'],
            'specialization' =>
            ['string', 'max:255'],
            'license_address' =>
            ['string', 'max:255'],
            'clinic_address' =>
            ['string', 'max:255'],
        ];
    }
}
