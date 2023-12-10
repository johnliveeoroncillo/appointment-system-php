import AdminDeleteModal from "@/Components/AdminDeleteModal";
import AppointmentCardMAD from "@/Components/AppointmentCardMAD";
import Cards from "@/Components/Cards";
import Pagination from "@/Components/PaginationButton";
import ViewDetails from "@/Components/ViewDetails";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

export default function AdminHistory({ auth, appointments }) {
    const appointmentList = appointments.data || "";
    const goToCanceled = () => {
        router.visit("/appointment/doctor/canceled");
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

    const printReciept = useRef();

    const handlePrint = useReactToPrint({
        content: () => printReciept.current,
    });
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <h1 className="">History</h1>
                    <span>
                        <button
                            onClick={goToCanceled}
                            className="text-sm text-gray-400 hover:text-gray-700"
                        >
                            Canceled Appointments
                        </button>
                    </span>
                </div>
            }
        >
            <Head title="History" />
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
                                        <th className="px-6 py-3">Findings</th>
                                        <th className="px-6 py-3">
                                            Prescription
                                        </th>
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
                                                {item.findings}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.prescription}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.formatted_created_at}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="badge bg-success px-3 rounded-md text-white">
                                                    {item.status === 2
                                                        ? "Done"
                                                        : ""}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 flex gap-5">
                                                <button
                                                    onClick={() =>
                                                        openModal(item.id)
                                                    }
                                                    className="text-red-400 hover:text-red-600"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    onClick={handlePrint}
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
                                                    Print
                                                </button>
                                            </td>
                                            <div className="w-[35rem] h-[35rem] hidden print">
                                                <div
                                                    ref={printReciept}
                                                    className=" bg-white px-5 py-5 shadow-md printable-content"
                                                >
                                                    <div className="printable border-2 border-gray-700 h-full w-full p-5">
                                                        <div className=" printable-header flex gap-16">
                                                            <img
                                                                className="w-14 h-14"
                                                                src="https://th.bing.com/th/id/R.7bc6f156fc9627e6c95e2a41dce0c3f2?rik=iiUhlhCNY5PgBQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_529438.png&ehk=9XpFSti%2bVVUR6LlddBdHPQqTEtZrgF0EuB3A4P9Ml7k%3d&risl=&pid=ImgRaw&r=0"
                                                                alt=""
                                                            />

                                                            <div className="">
                                                                <p className="pb-1">
                                                                    <strong>
                                                                        Patient:
                                                                    </strong>{" "}
                                                                    {item.name}
                                                                </p>
                                                                <p className="pb-2">
                                                                    <strong>
                                                                        Address:
                                                                    </strong>{" "}
                                                                    {item.address ||
                                                                        "N/A"}{" "}
                                                                </p>
                                                                <p>
                                                                    <strong>
                                                                        Date:
                                                                    </strong>{" "}
                                                                    {
                                                                        item.formatted_date
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="printable-main-content border-y-4 border-black my-5 py-5">
                                                            <div className="printable-sub-content h-32">
                                                                <strong>
                                                                    Findings:
                                                                </strong>
                                                                <p>
                                                                    {
                                                                        item.findings
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="printable-sub-content h-32">
                                                                <strong>
                                                                    Presprciption:
                                                                </strong>
                                                                <p>
                                                                    {
                                                                        item.prescription
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="doctor-signature">
                                                            <p className="w-52 text-center font-bold">
                                                                Dr. Vicente Lao
                                                            </p>
                                                            <p className="w-52 border-t-2 border-black text-center">
                                                                Signature
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="hidden md:flex h-[70vh] items-center">
                            <h1 className="text-center w-full text-xl text-gray-400">
                                You have no finished appointment yet!
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
                                You have no finished appointment yet!
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
            <style jsx>{`
                @media print {
                    body {
                        font-size: 12pt;
                        background-color: red;
                        height: 50vh;
                    }

                    .printable-content {
                        background-color: white;
                        height: 100vh;
                        width: 100vw;
                        display: grid;
                        place-content: center;
                    }

                    .printable-header {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                    .printable {
                        height: 100vh;
                        width: 100vw;
                        padding: 80px 100px;
                    }

                    .printable-main-content {
                        height: 50vh;
                        width: 100%;
                    }

                    .printable-sub-content {
                        height: 250px;
                    }
                    .doctor-signature {
                        margin-top: 50px;
                    }
                }
            `}</style>{" "}
        </AdminAuthenticatedLayout>
    );
}
