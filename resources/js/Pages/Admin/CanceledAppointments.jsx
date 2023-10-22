import AdminDeleteModal from "@/Components/AdminDeleteModal";
import CancelModal from "@/Components/CancelModal";
import Cards from "@/Components/Cards";
import DeleteModal from "@/Components/DeleteModal";
import Pagination from "@/Components/PaginationButton";
import ViewDetails from "@/Components/ViewDetails";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function CanceledAppointments({ auth, appointments }) {
    const appointmentList = appointments.data || "";
    const goToHistory = () => {
        router.visit("/appointment/doctor/history");
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

    const openModal = (appointmentId) => {
        setSelectedAppointmentId(appointmentId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedAppointmentId(null);
        setIsModalOpen(false);
    };
    //display toast
    const showToastNotification = (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <h1 className="">History</h1>
                    <span>
                        <button
                            onClick={goToHistory}
                            className="text-sm text-gray-400 hover:text-gray-700"
                        >
                            Finished Appointments
                        </button>
                    </span>
                </div>
            }
        >
            <Head title="Canceled Appointments" />
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
                                                <span className="badge bg-danger px-3 rounded-md text-white">
                                                    {item.status === 3
                                                        ? "Canceled"
                                                        : ""}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() =>
                                                        openModal(item.id)
                                                    }
                                                    className="text-red-400 hover:text-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="hidden md:flex h-[70vh] items-center">
                            <h1 className="text-center w-full text-xl text-gray-400">
                                You have no canceled appointment yet!
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
                                You have no canceled appointment yet!
                            </h1>
                        </div>
                    )}

                    {appointmentList.length > 0 && (
                        <Pagination db={appointments} />
                    )}
                    <AdminDeleteModal
                        isOpen={isModalOpen}
                        selectedAppointmentId={selectedAppointmentId}
                        onClose={closeModal}
                        toast={showToastNotification}
                    />
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
