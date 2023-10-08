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
            'id' => ['required', 'exists:medical_charts,id'],
            'name' => ['string', 'max:255'],
            'gender' => ['required', 'string', 'max:255'],
            'age' => ['required', 'integer',],
            'height' => ['required', 'integer',],
            'weight' => ['required', 'integer',],
            'bp' => ['integer',],
            'illness' => ['string', 'nullable', 'max:255'],
            'physical_exam' => ['string', 'nullable', 'max:255'],
            'medical_history' => ['string', 'nullable', 'max:255'],
            'allergies' => ['string', 'nullable', 'max:255'],
            'family_history' => ['string', 'nullable', 'max:255'],
            'social_history' => ['string', 'nullable', 'max:255'],
            'diagnosis' => ['string', 'nullable', 'max:255'],
            'plan' => ['string', 'nullable', 'max:255'],


        ];
    }
}
