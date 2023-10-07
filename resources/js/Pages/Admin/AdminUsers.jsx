import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function AdminUsers({ users, auth }) {
    const usersList = users.data || "";
    const usersDataList = usersData(users.data);
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex w-full justify-between">
                    <span>
                        <h1 className="">Users</h1>
                    </span>
                    <button className="text-sm font-normal px-5 py-2 rounded-md bg-green-700 text-white">
                        Add User
                    </button>
                </div>
            }
        >
            <Head title="Users" />
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
                    <Pagination db={users} />
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
