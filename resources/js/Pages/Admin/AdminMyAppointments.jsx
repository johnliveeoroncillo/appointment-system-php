import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function AdminMyAppointments({ auth }) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="w-full flex justify-between items-center">
                    <h2 className="font-semibold md:text-xl text-lg text-gray-800 leading-tight">
                        My Appointment
                    </h2>
                    <span>
                        <Link
                            className="hover:bg-secondaryColor hidden md:block text-white px-3 py-1 text-sm rounded-md bg-teal-900"
                            href="/appointment/appointment-form"
                        >
                            Set Appointment
                        </Link>
                        <div className="bg-primaryColor py-1 px-1 md:hidden rounded-md">
                            <Link href="/appointment/create-form">
                                <PlusIcon className="w-6 h-6 text-white" />
                            </Link>
                        </div>
                    </span>
                </div>
            }
        >
            <Head title="My Appointments" />
            <div className="h-screen w-full flex">hello</div>
        </AdminAuthenticatedLayout>
    );
}
