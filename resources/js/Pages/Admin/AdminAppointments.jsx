import Cards from "@/Components/Cards";
import Dropdown from "@/Components/Dropdown";
import Pagination from "@/Components/PaginationButton";
import { columns, data } from "@/Constants";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminAppointments({ appointments, auth }) {
    const { flash } = usePage().props;
    const appointmentList = appointments.data || "";
    // const transformedData = data(appointments.data);

    const clickToApprove = (id) => {
        router.patch(route("appointments.update", { id }));
    };

    // display toast using usestate and useeffect
    const [toastDisplayed, setToastDisplayed] = useState(false);

    useEffect(() => {
        if (flash.message && !toastDisplayed) {
            toast.success(flash.message);
            setToastDisplayed(true);
        }
    }, [flash.message, toastDisplayed]);

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <div>
                        <h1 className="">Appointments</h1>
                    </div>
                </div>
            }
        >
            <Head title="Appointment" />
            <div className="h-screen w-full flex">
                <div className="w-full md:px-10">
                    {appointmentList.length > 0 ? (
                        <div className="hidden md:block">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs w-full uppercase mb-32 bg-gray-100 text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Time</th>
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
                                                <Dropdown>
                                                    {/* Your trigger element goes here */}
                                                    <Dropdown.Trigger>
                                                        <button className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-300">
                                                            <EllipsisVerticalIcon className="w-5 h-5 " />
                                                        </button>
                                                    </Dropdown.Trigger>

                                                    {/* Dropdown content goes here */}
                                                    <Dropdown.Content>
                                                        {/* Dropdown links or other content */}
                                                        <button
                                                            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "
                                                            onClick={() =>
                                                                clickToApprove(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            Approve
                                                        </button>
                                                        <Dropdown.Link href="#">
                                                            Decline
                                                        </Dropdown.Link>
                                                        <Dropdown.Link href="#">
                                                            View User Profile
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>
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
