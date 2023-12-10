<?php

namespace App\Http\Controllers;

use App\Models\MedicalChart;
use App\Http\Requests\StoreMedicalChartRequest;
use App\Http\Requests\UpdateMedicalChartRequest;
use App\Models\User;
use App\Rules\BPFormat;
use App\Rules\HeightFormat;
use App\Rules\WeightFormat;
use Faker\Provider\Medical;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MedicalChartsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if ($user->role === 'patient') {



            return Inertia::render('Users/MedicalChart', []);
        } elseif ($user->role === 'doctor') {
            //
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user_id = auth()->id();

        // $userMedicalCharts = User::find($user_id)->medicalCharts;

        // $user = User::with('medicalChart')->find(auth()->id());
        $user = User::with('medicalChart')->find(auth()->id());
        $medicalChart = $user->medicalChart;

        $user = Auth::user();

        $notifications = $user->unreadNotifications;

        return Inertia::render('Users/MedicalChart/MedicalChartForm', [
            'medicalChart' => $medicalChart,
            'notifications' => $notifications,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMedicalChartRequest $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string',
            'age' => 'required|integer',
            'height' => ['required', new HeightFormat],
            'weight' =>  ['required', new WeightFormat],
            'bp' => ['required', new BPFormat],
            'illness' => 'nullable|string',
            'physical_exam' => 'nullable|string',
            'medical_history' => 'nullable|string',
            'allergies' => 'nullable|string',
            'family_history' => 'nullable|string',
            'social_history' => 'nullable|string',
            'diagnosis' => 'nullable|string',
            'plan' => 'nullable|string',
        ]);

        // Create a new MedicalChart record
        $user_id = auth()->id();

        $checkUserId = MedicalChart::where('user_id', $user_id)->first();

        if ($checkUserId) {
            return to_route('users.index');
        } else {
            $medicalchart = MedicalChart::create([
                'user_id' => $user_id, // Set the authenticated user's ID as the user_id
                'name' => $request->name,
                'gender' => $request->gender,
                'age' => $request->age,
                'height' => $request->height,
                'weight' => $request->weight,
                'bp' => $request->bp,
                'illness' => $request->illness,
                'physical_exam' => $request->physical_exam,
                'medical_history' => $request->medical_history,
                'allergies' => $request->allergies,
                'family_history' => $request->family_history,
                'social_history' => $request->social_history,
                'diagnosis' => $request->diagnosis,
                'plan' => $request->plan,
            ]);

            $medicalchart->save();

            return to_route('medical-chart.show')->with('message', 'Medical Chart Submitted!');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(MedicalChart $medicalChart)
    {
        $user = User::with('medicalChart')->find(auth()->id());
        $medicalChart = $user->medicalChart;

        if ($user->role === 'patient') {
            $user = Auth::user();

            $notifications = $user->unreadNotifications;
            return Inertia::render('Users/MedicalChart', [
                'medicalChart' => $medicalChart,
                'notifications' => $notifications,
            ]);
        } elseif ($user->role === 'doctor') {
            //
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MedicalChart $medicalChart)
    {
        $user = User::with('medicalChart')->find(auth()->id());
        $medicalChart = $user->medicalChart;

        if (
            is_null($medicalChart) || is_null($medicalChart->user_id)
        ) {
            return to_route('404');
        }

        $user = Auth::user();

        $notifications = $user->unreadNotifications;

        return Inertia::render('Users/MedicalChart/UpdateMedicalChart', [
            'medicalChart' => $medicalChart,
            'notifications' => $notifications,
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMedicalChartRequest $request, MedicalChart $medicalChart)
    {

        $medicalChartData = $request->validated();

        DB::table('medical_charts')->where('id', $medicalChartData['id'])->update($medicalChartData);

        return to_route('medical-chart.show')->with('message', 'Medical chart has been updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MedicalChart $medicalChart)
    {
        // $medicalChart->delete();
        // return response()->json(['message' => 'Medical chart added successfully'], 200);
    }
}
