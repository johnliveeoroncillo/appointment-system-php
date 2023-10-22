import ApproveModal from "@/Components/ApproveModal";
import Cards from "@/Components/Cards";
import DeclineModal from "@/Components/DeclineModal";
import Dropdown from "@/Components/Dropdown";
import Pagination from "@/Components/PaginationButton";
import ViewDetails from "@/Components/ViewDetails";
import { columns, data } from "@/Constants";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminAppointmentRequests({ appointments, auth }) {
    const { flash } = usePage().props;
    const appointmentList = appointments.data || "";
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <div>
                        <h1 className="">Appointments Requests</h1>
                    </div>
                </div>
            }
        >
            <Head title="Appointment Requests" />
            <div className="h-[81.3vh] w-full flex">
                <div className="w-full md:px-10">
                    {appointmentList.length > 0 ? (
                        <div className="hidden md:block">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs w-full uppercase mb-32 bg-gray-100 text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Time</th>
                                        <th className="px-6 py-3">
                                            Requested At
                                        </th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointmentList.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="bg-white border-b border-gray-300 hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.formatted_date}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.formatted_time}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.formatted_created_at}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="badge bg-secondary px-3 rounded-md text-white">
                                                    {item.status === 0
                                                        ? "Pending"
                                                        : "Approve"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="space-x-5">
                                                    <button className="text-green-400 hover:text-green-600">
                                                        <ApproveModal
                                                            AppointmentSelectdId={
                                                                item.id
                                                            }
                                                        />
                                                    </button>
                                                    <button className="text-red-400 hover:text-red-600">
                                                        <DeclineModal
                                                            AppointmentSelectdId={
                                                                item.id
                                                            }
                                                        />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="hidden md:flex h-[70vh] items-center">
                            <h1 className="text-center w-full text-xl text-gray-400">
                                You have no appointment request yet!
                            </h1>
                        </div>
                    )}
                    {appointmentList.length > 0 ? (
                        <div className="md:hidden h-[70vh] overflow-scroll">
                            {appointmentList.map((appointment) => (
                                <Cards
                                    key={appointment.id}
                                    name={appointment.name}
                                    date={appointment.formatted_date}
                                    time={appointment.formatted_time}
                                    service={appointment.service_name}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="md:hidden h-[70vh] flex items-center">
                            <h1 className="text-center w-full text-xl text-gray-400">
                                You have no appointment request yet!
                            </h1>
                        </div>
                    )}

                    {appointmentList.length > 0 && (
                        <Pagination db={appointments} />
                    )}
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
