import Dropdown from "@/Components/Dropdown";
import Pagination from "@/Components/PaginationButton";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Head, usePage } from "@inertiajs/react";
import React from "react";

export default function AdminUsers({ auth, users }) {
    const userList = users.data || "";
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex w-full justify-between">
                    <span>
                        <h1 className="">Users {users.name}</h1>
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
                    <div className="">
                        {userList.length > 0 ? (
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs w-full uppercase mb-32 bg-gray-100 text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Email</th>
                                        <th className="px-6 py-3">
                                            Mobile Number
                                        </th>
                                        <th className="px-6 py-3">Address</th>
                                        <th className="px-6 py-3">
                                            Register At
                                        </th>
                                        <th className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="bg-white border-b border-gray-300 hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.mobile_number ||
                                                    "phone not set"}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.address ||
                                                    "address not set"}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.formatted_createdAt}
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
                                                        <Dropdown.Link href="#">
                                                            View User Profile
                                                        </Dropdown.Link>
                                                        <Dropdown.Link href="#">
                                                            Delete User
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="hidden md:flex h-[70vh] items-center">
                                <h1 className="text-center w-full text-xl text-gray-400">
                                    No user has register yet!
                                </h1>
                            </div>
                        )}
                        {userList.length > 0 && <Pagination db={users} />}
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
