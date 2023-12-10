<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class HeightFormat implements Rule
{
    public function passes($attribute, $value)
    {
        // Your regex pattern for height format
        $regex = '/^(\d{1,2}\'\d{1,2}"?)?$/';

        return preg_match($regex, $value);
    }

    public function message()
    {
        return "Invalid height format.(Example: 5'2)";
    }
}
