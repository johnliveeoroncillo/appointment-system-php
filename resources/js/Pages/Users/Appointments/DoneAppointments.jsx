import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AppointmentCards from "@/Components/AppointmentCards";
import { Head, Link, usePage } from "@inertiajs/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import DeleteModal from "@/Components/DeleteModal";

export default function DoneAppointments({ auth, appointments }) {
    const { flash } = usePage().props;

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
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="w-full flex justify-between items-center">
                    <h2 className="font-semibold md:text-xl text-lg text-gray-800 leading-tight">
                        Appointment History
                    </h2>
                </div>
            }
        >
            <Head title="History" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {appointments.length > 0 ? (
                        <div className="p-6 text-gray-900 w-full flex-wrap flex gap-5">
                            {appointments
                                .filter((item) => item.status === 2)
                                .map((item) => (
                                    <AppointmentCards
                                        key={item.id}
                                        created_at={item.formatted_updated_at}
                                        doctor={item.doctor_name}
                                        service={item.service_name}
                                        date={item.formatted_date}
                                        time={item.formatted_time}
                                        status={item.status === 2 ? "Done" : ""}
                                        onClick={() => openModal(item.id)}
                                        data={item}
                                        findings={item.findings}
                                        prescription={item.prescription}
                                    />
                                ))}
                            {appointments
                                .filter((item) => item.status === 3)
                                .map((item) => (
                                    <AppointmentCards
                                        key={item.id}
                                        created_at={item.formatted_updated_at}
                                        doctor={item.doctor_name}
                                        service={item.service_name}
                                        date={item.formatted_date}
                                        time={item.formatted_time}
                                        status={
                                            item.status === 3 ? "Canceled" : ""
                                        }
                                        onClick={() => openModal(item.id)}
                                        data={item}
                                    />
                                ))}
                        </div>
                    ) : (
                        <div className="w-full h-96 text-center flex items-center justify-center">
                            <h1 className="text-xl text-gray-400">
                                You have not set appointment yet!{" "}
                            </h1>
                        </div>
                    )}
                    <DeleteModal
                        isOpen={isModalOpen}
                        selectedAppointmentId={selectedAppointmentId}
                        onClose={closeModal}
                        toast={showToastNotification}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
