<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class BPFormat implements Rule
{
    public function passes($attribute, $value)
    {
        // Your regex pattern for weight format
        $regex = '/^\d{2,3}\/\d{2,3}$/';

        return preg_match($regex, $value);
    }

    public function message()
    {
        return 'Invalid Blood pressure format. Example(120/80)';
    }
}
