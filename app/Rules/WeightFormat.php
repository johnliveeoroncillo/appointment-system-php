<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class WeightFormat implements Rule
{
    public function passes($attribute, $value)
    {
        // Your regex pattern for weight format
        $regex = '/^\d+(\.\d{1,2})?$/';

        return preg_match($regex, $value);
    }

    public function message()
    {
        return 'Invalid weight format. Example(45.67,123 or 120.12)';
    }
}
