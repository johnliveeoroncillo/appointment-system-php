import Cards from "@/Components/Cards";
import Pagination from "@/Components/PaginationButton";
import Table from "@/Components/Table";
import { columns, data } from "@/Constants";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React from "react";

export default function AdminAppointments({ appointments, auth }) {
    const appointmentList = appointments.data || "";
    const transformedData = data(appointments.data);

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
                    <div className="hidden md:block">
                        <Table columns={columns} data={transformedData} />
                    </div>
                    <div className="md:hidden h-[70vh] overflow-scroll">
                        {appointmentList.map((appointment) => (
                            <Cards
                                key={appointment.id}
                                name={appointment.name}
                                date={appointment.formatted_date}
                                time={appointment.formatted_time}
                                service={appointment.service_name}
                                status={
                                    appointment.status ? (
                                        <small className="bg-green-500 px-5 py-1 text-white uppercase rounded-md">
                                            approved
                                        </small>
                                    ) : (
                                        <small className="bg-gray-500 px-5 py-1 text-white uppercase rounded-md">
                                            pending
                                        </small>
                                    )
                                }
                            />
                        ))}
                    </div>
                    <Pagination db={appointments} />
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
