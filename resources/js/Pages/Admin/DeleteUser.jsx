import React, { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { router, usePage } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@/Components/Modal";
import { toast } from "react-toastify";

function DeleteUser({ userId }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const deleteUser = () => {
        router.delete(
            `users/delete/${userId}`,
            {
                onSuccess: () => {
                    toast.error("User has been deleted");
                },
            },
            { id: userId }
        );
    };
    return (
        <div>
            <div
                onClick={() => {
                    openModal();
                }}
            >
                Delete User
            </div>
            <Modal show={isModalOpen} onClose={closeModal} maxWidth="md">
                <div className="p-4 flex items-center justify-center flex-col">
                    <div className="w-16 h-16 bg-red-100/50 flex items-center justify-center rounded-full">
                        <ExclamationTriangleIcon className="w-10 h-10 text-red-500" />
                    </div>
                    <h1 className="text-3xl text-gray-600 font-semibold">
                        Caution
                    </h1>
                    <p className="text-sm text-gray-500 text-center">
                        Deleting this user will permanently remove them from the
                        system. Are you sure you want to proceed?
                    </p>
                </div>

                <div className="p-4 flex w-full justify-center space-x-5 font-semibold">
                    <button
                        onClick={deleteUser}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 w-36"
                    >
                        Delete
                    </button>

                    <button
                        className="px-3 py-2 hover:bg-gray-200 text-gray-400 rounded w-36 bg-gray-100"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteUser;
