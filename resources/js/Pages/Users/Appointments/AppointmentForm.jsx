import { Head, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react";
import { useEffect } from "react";

export default function AppointmentForm({ auth, services, doctors }) {
    const [validationError, setValidationError] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        name: auth.user.name,
        date: "",
        time: "",
        doctor_id: "1",
        service_id: "",
    });

    const { message } = usePage().props.flash;

    useEffect(() => {
        // Set the flashed message to validationError state
        if (message) {
            setValidationError(message);
        }
    }, [message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("appointment.create.store"), {
            onError: (error) => {
                if (error.response.status === 422) {
                    // Display the validation error in the frontend
                    setValidationError(error.response.data.message);
                }
            },
        });
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-lg md:text-xl text-gray-800 leading-tight">
                    Set Appointment
                </h2>
            }
        >
            <Head title="Appointment" />

            <div className=" my-5 drop-shadow-lg rounded-md font-opensans px-5 w-full h-auto flex justify-center text-gray-800 |">
                <div className="w-full md:w-[40vw] md:px-20 px-5 py-5 mt-4 bg-white | z-10">
                    <h1 className="text-xl md:text-2xl text-gray-800 md:py-5">
                        Fill in this form
                    </h1>
                    {validationError && (
                        <div className="text-red-500 text-xs text-center">
                            <p>{validationError}</p>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            {/* name */}
                            <div className="text-sm">
                                <InputLabel htmlFor="name" value="Name" />

                                <input
                                    className="slide-up hidden border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                                    type="text"
                                    id="user_id"
                                    name="user_id"
                                    value={data.user_id}
                                    placeholder="Enter your name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <input
                                    className="slide-up border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    placeholder="Enter your name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            {/* datetime */}
                            <div className="space-y-3">
                                {/* date */}
                                <div>
                                    <InputLabel
                                        htmlFor="date"
                                        value="Preferred Date"
                                    />
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={data.date}
                                        className="slide-up border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                                        onChange={(e) =>
                                            setData("date", e.target.value)
                                        }
                                        placeholder="select date"
                                        min={today}
                                    />

                                    <InputError
                                        message={errors.date}
                                        className="mt-2"
                                    />
                                </div>
                                {/* time */}
                                <div>
                                    <InputLabel
                                        htmlFor="time"
                                        value="Preferred Time"
                                    />
                                    <select
                                        name="time"
                                        id="time"
                                        value={data.time}
                                        onChange={(e) => {
                                            setData("time", e.target.value);
                                        }}
                                        className="slide-up block w-full rounded-sm border-2 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6 "
                                    >
                                        <option value="default" selected>
                                            --Select Time--
                                        </option>
                                        <option value="08:00">8:00 AM</option>
                                        <option value="09:00">9:00 AM </option>
                                        <option value="10:00">10:00 AM </option>
                                        <option value="11:00">11:00 AM </option>
                                        <option value="12:00">12:00 PM </option>
                                        <option value="13:00">1:00 PM </option>
                                        <option value="14:00">2:00 PM </option>
                                        <option value="15:00">3:00 PM </option>
                                        <option value="16:00">4:00 PM </option>
                                    </select>
                                    <InputError
                                        message={errors.time}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            {/* service */}
                            <div>
                                <InputLabel
                                    htmlFor="service_id"
                                    value="Select Service"
                                />
                                <select
                                    name="service_id"
                                    id="service_id"
                                    value={data.service_id}
                                    onChange={(e) =>
                                        setData("service_id", e.target.value)
                                    }
                                    className="slide-up border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                                >
                                    <option value="default" selected>
                                        Select Services
                                    </option>
                                    {services.map((service) => {
                                        return (
                                            <option
                                                key={service.id}
                                                value={service.id}
                                            >
                                                {service.name}
                                            </option>
                                        );
                                    })}
                                </select>
                                <InputError
                                    message={errors.service_id}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full flex justify-end">
                                <PrimaryButton disabled={processing}>
                                    Set Appointment
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
