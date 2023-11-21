import Cards from "@/Components/Cards";
import Table from "@/Components/Table";
// import { data, request } from "@/Constants"; //fixed the dependencies error
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    InboxIcon,
} from "@heroicons/react/24/solid";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Requests({ appointments }) {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [hasAppointment, setHasAppointment] = useState(false);

    useEffect(() => {
        if (!appointments || !appointments.length) {
            setHasAppointment(true);
        }
    }, [appointments]);

    const handleClick = (selectedAppointment) => {
        setDetailsVisible((prev) => !prev);
    };

    const appointmentsList = appointments.data || "";
    const formattedData = list(appointmentsList);
    return (
        <AdminAuthenticatedLayout
            header={<h1 className="">Appointment Requests</h1>}
        >
            <Head title="Appointment" />

            <div className="h-screen w-full flex">
                {hasAppointment ? (
                    <div className="w-full flex">
                        <div className="w-full">
                            <div className="h-[75vh] md:h-auto">
                                <div className="px-5 w-full hidden md:block">
                                    <Table
                                        columns={request}
                                        data={formattedData}
                                        onClick={handleClick}
                                    />
                                </div>
                                <div className="md:hidden">
                                    {appointmentsList.map((appointment) => (
                                        <Cards
                                            name={appointment.name}
                                            date={appointment.formatted_date}
                                            time={appointment.formatted_time}
                                            doctor={appointment.doctor_name}
                                            service={appointment.service_name}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div
                                className={
                                    appointments
                                        ? "flex w-full space-x-5 justify-end p-5"
                                        : "hidden"
                                }
                            >
                                <Link
                                    href={appointments.prev_page_url}
                                    className={`w-28 text-center rounded-md px-2 py-1 flex items-center ${
                                        appointments.current_page === 1
                                            ? " text-gray-300 cursor-not-allowed"
                                            : " text-gray-500 hover:text-gray-800"
                                    }`}
                                    disabled={appointments.current_page === 1}
                                >
                                    <ChevronDoubleLeftIcon className="w-5 h-5" />
                                    Previous
                                </Link>
                                <Link
                                    href={appointments.next_page_url}
                                    className={`w-28 text-center rounded-md px-2 py-1 flex items-center ${
                                        appointments.current_page ===
                                        appointments.last_page
                                            ? " text-gray-300 cursor-not-allowed"
                                            : " text-gray-500 hover:text-gray-800"
                                    }`}
                                    disabled={
                                        appointments.current_page ===
                                        appointments.last_page
                                    }
                                >
                                    <div>Next</div>
                                    <ChevronDoubleRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div
                            className={` transition-all ease-in-out delay-200 duration-500 ${
                                detailsVisible ? "w-[400px]" : "w-0"
                            }`}
                        >
                            //
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-[80vh] text-gray-400 flex items-center justify-center flex-col">
                        <InboxIcon className="w-32 h-32 text-gray-300" />
                        <div>No apppointment request </div>
                    </div>
                )}
            </div>
        </AdminAuthenticatedLayout>
    );
}
