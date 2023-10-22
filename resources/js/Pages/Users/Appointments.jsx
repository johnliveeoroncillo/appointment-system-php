import { Head, Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { toast } from "react-toastify";
import {
    BookmarkSquareIcon,
    PencilSquareIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import CancelModal from "@/Components/CancelModal";
import AppointmentCards from "@/Components/AppointmentCards";
import MarkDone from "@/Components/MarkDone";

export default function Appointments({ auth, appointments }) {
    const { flash } = usePage().props;

    const [toastDisplayed, setToastDisplayed] = useState(false);

    useEffect(() => {
        if (flash.message && !toastDisplayed) {
            toast.success(flash.message);
            setToastDisplayed(true);
        }
    }, [flash.message, toastDisplayed]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="w-full flex justify-between items-center">
                    <h2 className="font-semibold md:text-xl text-lg text-gray-800 leading-tight">
                        Appointment
                    </h2>
                    <span>
                        <Link
                            className="hover:bg-secondaryColor hidden md:block text-white px-5 py-2 font-bold rounded-md bg-teal-900"
                            href="/appointment/create-form"
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
            <Head title="Appointment" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {appointments.length > 0 ? (
                        <div className="p-6 text-gray-900 w-full flex-wrap flex gap-5 ">
                            {appointments
                                .filter(
                                    (item) =>
                                        item.status === 0 || item.status === 1
                                )
                                .map((item) => (
                                    <AppointmentCards
                                        key={item.id}
                                        created_at={item.formatted_updated_at}
                                        doctor={item.doctor_name}
                                        service={item.service_name}
                                        date={item.formatted_date}
                                        time={item.formatted_time}
                                        status={
                                            item.status ? "Approved" : "Pending"
                                        }
                                        data={item}
                                        selectedId={item}
                                    />
                                ))}
                        </div>
                    ) : (
                        <div className="w-full h-96 text-center flex items-center justify-center">
                            <h1 className="text-xl text-gray-400">
                                You have not set appointment yet!
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
