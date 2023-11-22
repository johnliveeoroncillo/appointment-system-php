import React, { useState } from "react";
import AvailableTimes from "@/Components/AvailableTimes";
import CalendarComponent from "@/Components/CalendarComponent";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function Calendar({ auth, services, doctors, user }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const { data, setData, post, processing, errors } = useForm({
        user_id: user.user.id,
        name: user.user.name,
        date: "",
        time: "",
        doctor_id: "",
        service_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("appointment.create.store"));
    };

    const handleDateChange = (date, times) => {
        setSelectedDate(date);
        setAvailableTimes(times);

        setData("date", date);
        setData("time", times);
    };

    return (
        <div>
            <h1>Doctor Appointment System</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="text-sm">
                    <InputLabel htmlFor="name" value="Name" />

                    <input
                        className="slide-up hidden border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                        type="text"
                        id="user_id"
                        name="user_id"
                        value={data.user_id}
                        placeholder="Enter your name"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <input
                        className="slide-up border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Enter your name"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <CalendarComponent
                        // onDateChange={handleDateChange}
                        onDateChange={data.date}
                        errors={errors}
                        id="date"
                    />
                    {selectedDate && (
                        <AvailableTimes
                            availableTimes={availableTimes}
                            errors={errors}
                        />
                    )}
                </div>
                <div>
                    <InputLabel htmlFor="doctor_id" value="Select Doctor" />
                    <select
                        name="doctor_id"
                        id="doctor_id"
                        value={data.doctor_id}
                        onChange={(e) => setData("doctor_id", e.target.value)}
                        className="border-2 slide-up mt-1 text-sm rounded-sm border-gray-300 w-full"
                    >
                        <option value="default" selected>
                            Select Doctor
                        </option>
                        {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                Dr. {doctor.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.doctor_id} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="service_id" value="Select Service" />
                    <select
                        name="service_id"
                        id="service_id"
                        value={data.service_id}
                        onChange={(e) => setData("service_id", e.target.value)}
                        className="slide-up border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                    >
                        <option value="default" selected>
                            Select Services
                        </option>
                        {services.map((service) => {
                            return (
                                <option key={service.id} value={service.id}>
                                    {service.name}
                                </option>
                            );
                        })}
                    </select>
                    <InputError message={errors.service_id} className="mt-2" />
                </div>
                <div className="w-full flex justify-end">
                    <PrimaryButton disabled={processing}>
                        Set Appointment
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
