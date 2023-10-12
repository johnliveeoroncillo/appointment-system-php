import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Notification({ auth }) {
    const { notifications } = usePage().props;

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <div>
                        <h1 className="">Notifications</h1>
                    </div>
                </div>
            }
        >
            <Head title="Notifications" />
            <div className="h-screen w-full flex">
                <div className="w-full md:px-10 md:mt-10 mt-2 px-5">
                    <div className="w-full h-auto bg-gray-200 overflow-hidden border border-gray-300 rounded-md">
                        <div className="w-full h-8 md:h-14 border-b bg-white border-gray-300 flex items-center px-2 md:px-10">
                            <h3 className="text-sm md:text-lg font-bold">
                                New Appointment Request
                            </h3>
                        </div>
                        <div className="flex h-auto overflow-hidden flex-col">
                            {notifications.length === 0 ? (
                                <h1 className="md:px-32 text-center py-8 md:py-16 text-sm md:text-lg text-gray-400">
                                    No new notification
                                </h1>
                            ) : (
                                notifications.map((notification, index) => (
                                    <span
                                        key={index}
                                        className="w-full h-auto flex-col py-2 bg-white border-b border-gray-200 hover:bg-gray-100 flex px-4 md:px-10"
                                    >
                                        <small className="w-full text-right">
                                            {notification.created_at}
                                        </small>
                                        <p className="text-sm font-medium capitalize">
                                            {notification.message}
                                        </p>
                                    </span>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
