import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

export default function AppointmentForm({ auth, services, doctors }) {
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        name: auth.user.name,
        date: "",
        time: "",
        doctor_id: "",
        service_id: "",
        due_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(
            route("appointment.create.store", {
                // onSuccess: () => {
                //     // toast.success('Reschedule has been created!',{
                //     //     position: toast.POSITION.BOTTOM_RIGHT,
                //     //     className: 'toast-success'
                //     // })
                // },
            })
        );
    };
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
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={data.time}
                                        className="slide-up border-2 mt-1 text-sm rounded-sm border-gray-300 w-full"
                                        onChange={(e) =>
                                            setData("time", e.target.value)
                                        }
                                        placeholder="select time"
                                    />
                                    <InputError
                                        message={errors.time}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            {/* doctor */}
                            <div>
                                <InputLabel
                                    htmlFor="doctor_id"
                                    value="Select Doctor"
                                />
                                <select
                                    name="doctor_id"
                                    id="doctor_id"
                                    value={data.doctor_id}
                                    onChange={(e) =>
                                        setData("doctor_id", e.target.value)
                                    }
                                    className="border-2 slide-up mt-1 text-sm rounded-sm border-gray-300 w-full"
                                >
                                    <option value="default" selected>
                                        Select Doctor
                                    </option>
                                    {doctors.map((doctor) => (
                                        <option
                                            key={doctor.id}
                                            value={doctor.id}
                                        >
                                            Dr. {doctor.name}
                                        </option>
                                    ))}
                                </select>
                                <InputError
                                    message={errors.doctor_id}
                                    className="mt-2"
                                />
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
