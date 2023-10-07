import React from "react";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { service, servicesData } from "@/Constants";
import Table from "@/Components/Table";
import ServicesCard from "@/Components/ServicesCard";
import Pagination from "@/Components/PaginationButton";

export default function AdminServices({ services, auth }) {
    const servicesList = services.data || "";
    const servicesDataList = servicesData(services.data);
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex w-full justify-between">
                    <span>
                        <h1 className="">Services</h1>
                    </span>
                    <button className="text-sm font-normal px-5 py-2 rounded-md bg-green-700 text-white">
                        Add Service
                    </button>
                </div>
            }
        >
            <Head title="Services" />
            <div className="h-screen w-full md:px-10">
                <div className="w-full md:px-10">
                    <div className="hidden md:block">
                        <Table columns={service} data={servicesDataList} />{" "}
                    </div>
                    <div className="md:hidden h-[70vh] overflow-scroll">
                        {servicesList.map((service) => (
                            <ServicesCard
                                key={service.id}
                                name={service.name}
                                description={service.description}
                            />
                        ))}
                    </div>
                    <Pagination db={services} />
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
