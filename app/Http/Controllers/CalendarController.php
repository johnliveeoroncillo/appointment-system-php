<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CalendarController extends Controller
{
    public function getAvailableTimes(Request $request)
    {
        $selectedDate = $request->input('selectedDate');

        $takenTimes = DB::table('appointments')
            ->where('date', $selectedDate)
            ->pluck('time')
            ->toArray();

        $allTimes = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

        $availableTimes = array_diff($allTimes, $takenTimes);

        return response()->json(['availableTimes' => $availableTimes]);
    }
}
