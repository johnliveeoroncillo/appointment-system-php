import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import Calendar from "./Calendar";
import FormAppointments from "./FormAppointments";
// import PrimaryButton from "@/Components/PrimaryButton";
// import InputError from "@/Components/InputError";
// import InputLabel from "@/Components/InputLabel";

export default function AppointmentForm({ auth, services, doctors }) {
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
                <div className="w-full h-auto ">
                    <div className="w-full grid grid-cols-2 px-36 bg-white calendar-contianer py-10">
                        <div className="">
                            <Calendar />
                        </div>
                        <div>
                            <FormAppointments />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
