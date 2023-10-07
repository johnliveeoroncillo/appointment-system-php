<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMedicalChartRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'gender' => 'required|string',
            'age' => 'required|integer',
            'height' => 'nullable|string',
            'weight' => 'nullable|string',
            'bp' => 'nullable|string',
            'illness' => 'nullable|string',
            'physical_exam' => 'nullable|string',
            'medical_history' => 'nullable|string',
            'allergies' => 'nullable|string',
            'family_history' => 'nullable|string',
            'social_history' => 'nullable|string',
            'diagnosis' => 'nullable|string',
            'plan' => 'nullable|string',
        ];
    }
}
