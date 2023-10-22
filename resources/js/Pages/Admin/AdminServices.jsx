import React, { useEffect, useState } from "react";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import Pagination from "@/Components/PaginationButton";
import DeleteServiceModal from "./DeleteServiceModal";
import { toast } from "react-toastify";
import AdminAddServiceModal from "./AdminAddServiceModal";

export default function AdminServices({ services, auth }) {
    const servicesList = services.data || "";

    const { flash } = usePage().props;
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
                <div className="flex w-full justify-between">
                    <span>
                        <h1 className="">Services</h1>
                    </span>
                    <div className="text-sm font-normal px-5 py-2 rounded-md bg-green-700 text-white">
                        <AdminAddServiceModal />
                    </div>
                </div>
            }
        >
            <Head title="Services" />
            <div className="h-[81.3vh] w-full md:px-10">
                <div className="w-full md:px-10">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs w-full uppercase mb-32 bg-gray-100 text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Description</th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicesList.map((item) => (
                                <tr
                                    key={item.id}
                                    className="bg-white border-b border-gray-300 hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-x-5">
                                            <button className="text-red-400 hover:text-red-600">
                                                <DeleteServiceModal
                                                    serviceId={item.id}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination db={services} />
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
