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
import { Head, Link, router, usePage } from "@inertiajs/react";
import React from "react";
import AdminAppointments from "./AdminAppointments";

export default function AdminDashboard({ appointments, services, auth }) {
    const { doctors, users } = usePage().props;

    // Filter and sort appointments
    const activeAppointments = appointments
        .filter((appointment) => appointment.status === 1)
        .sort(
            (a, b) =>
                new Date(a.date + " " + a.time) -
                new Date(b.date + " " + b.time)
        );

    // Get the 4 closest upcoming appointments
    const closestActiveAppointments = activeAppointments.slice(0, 4);
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h1 className="">Dashboard</h1>}
        >
            <Head title="Dashboard" />
            <div className="h-[81.3vh] w-full flex ">
                <div className="w-full md:w-[400px] border-r border-gray-200 p-5 ">
                    <h1 className="text-sm md:text-lg text-gray-600">
                        Upcoming Appointments
                    </h1>
                    {closestActiveAppointments.length > 0 ? (
                        closestActiveAppointments.map((appointment) => (
                            <AppointmentCard
                                key={appointment.id}
                                name={appointment.name}
                                service={appointment.service_name}
                                date={appointment.formatted_date}
                                time={appointment.formatted_time}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-52">
                            No upcoming appointments.
                        </p>
                    )}
                </div>
                <div className="w-full hidden md:block">
                    <div className="w-full px-5 py-5 h-auto border-b flex flex-wrap border-gray-300">
                        <DetailCard
                            title="Appointments"
                            count={
                                appointments.filter(
                                    (appointment) => appointment.status === 1
                                ).length
                            }
                            icon={
                                <ClipboardDocumentCheckIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                        <DetailCard
                            title="Appointment Requests"
                            count={
                                appointments.filter(
                                    (appointment) => appointment.status === 0
                                ).length
                            }
                            icon={
                                <ClipboardDocumentCheckIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                        <DetailCard
                            title="Doctors"
                            count={doctors.length}
                            icon={
                                <UserGroupIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                        <DetailCard
                            title="Services"
                            count={services.length}
                            icon={
                                <WrenchScrewdriverIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                        <DetailCard
                            title="Users"
                            count={users.length}
                            icon={
                                <UsersIcon className="w-8 h-8 text-gray-700" />
                            }
                        />
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
