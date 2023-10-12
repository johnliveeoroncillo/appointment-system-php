import React from "react";
import Modal from "./Modal";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { router } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";

function DeleteModal({ isOpen, selectedAppointmentId, onClose, toast }) {
    function deleteAppointment(id) {
        router.delete(`/appointment/${id}`, {
            onSuccess: () => {
                onClose();
                toast("Deleted Successfully");
            },
        });
    }

    return (
        <div className="w-96 bg-green-100">
            <Modal show={isOpen} onClose={onClose} maxWidth="md">
                <div className="p-4 flex items-center justify-center flex-col">
                    <div className="w-16 h-16 bg-red-100/50 flex items-center justify-center rounded-full">
                        <ExclamationTriangleIcon className="w-10 h-10 text-red-500" />
                    </div>
                    <h1 className="text-3xl text-gray-600 font-semibold">
                        Are you sure?
                    </h1>
                    <p className="text-sm text-gray-500">
                        Deleting this appointment will permanently remove it.
                    </p>
                </div>

                <div className="p-4 flex w-full justify-center space-x-5 font-semibold">
                    {selectedAppointmentId && (
                        <button
                            className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 w-36"
                            onClick={() =>
                                deleteAppointment(selectedAppointmentId)
                            }
                        >
                            Delete
                        </button>
                    )}
                    <button
                        className="px-3 py-2 hover:bg-gray-200 text-gray-400 rounded w-36 bg-gray-100"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default CancelModal;
