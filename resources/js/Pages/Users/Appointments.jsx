import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Appointments({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="w-full flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Appointment
                    </h2>
                    <span>
                        <ResponsiveNavLink href="/appointment/create">
                            {" "}
                            Set Appointment
                        </ResponsiveNavLink>
                    </span>
                </div>
            }
        >
            <Head title="Appointment" />

            <div className=" mt-5 drop-shadow-lg rounded-md font-opensans text-gray-800 |">
                <div className="w-full md:px-20 px-5 mt-4 | z-10">ddd</div>
            </div>
        </AuthenticatedLayout>
    );
}
