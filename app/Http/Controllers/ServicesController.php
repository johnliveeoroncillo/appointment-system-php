<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $doctor = Auth::user();

        $notifications = $doctor->unreadNotifications;

        return Inertia::render('Admin/AdminServices', [
            'services' => Service::paginate(5),
            'notifications' => $notifications,

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        $services = $request->validated();

        $service = Service::create($services);

        $service->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        $service->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service, $id)
    {
        $services = Service::find($id);
        $services->delete();
    }
}
