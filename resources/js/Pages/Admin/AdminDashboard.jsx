import AppointmentCard from "@/Components/AppointmentCard";
import DetailCard from "@/Components/DetailCard";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import {
    ClipboardDocumentCheckIcon,
    ClipboardDocumentListIcon,
    UserGroupIcon,
    UsersIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

export default function AdminDashboard({ appointments, auth }) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h1 className="">Dashboard</h1>}
        >
            <Head title="Dashboard" />
            <div className="h-screen w-full flex">
                <div className="w-full md:w-[400px] border-r border-gray-200 p-5 h-[80vh] overflow-y-scroll">
                    <h1 className="text-sm md:text-lg text-gray-600">
                        Upcoming Appointments
                    </h1>
                    {appointments.map(
                        (appointment) =>
                            appointment.status === 1 && (
                                <AppointmentCard
                                    key={appointment.id}
                                    name={appointment.name}
                                    service={appointment.service_name}
                                    date={appointment.formatted_date}
                                    time={appointment.formatted_time}
                                />
                            )
                    )}
                </div>
                <div className="w-full hidden md:block">
                    <div className="w-full px-5 py-5 h-auto border-b flex flex-wrap border-gray-300">
                        <DetailCard
                            title="Appointments"
                            count="20+"
                            icon={
                                <ClipboardDocumentCheckIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                        <DetailCard
                            title="Doctors"
                            count="20+"
                            icon={
                                <UserGroupIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                        <DetailCard
                            title="Services"
                            count="20+"
                            icon={
                                <WrenchScrewdriverIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                        <DetailCard
                            title="Users"
                            count="20+"
                            icon={
                                <UsersIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                    </div>
                    <div className="h-full w-full bg-white">
                        <div className="w-full h-10 flex items-center justify-between border-b border-gray-300 px-5">
                            <p className="text-sm">
                                Recent Appointment Request
                            </p>
                            {/* <Link
                                href="/appointments/requests"
                                className="bg-teal-900 px-5 rounded-md text-white text-sm py-1 hover:bg-green-500"
                            >
                                View Details
                            </Link> TODO: if no purpose found delete */}
                        </div>
                        {/* <div className="px-5 h-96 overflow-y-scroll">
                            <Table columns={columns} data={formattedData} />
                        </div> */}
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
