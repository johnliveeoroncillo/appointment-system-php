import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Modal from "./Modal";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import TextInput from "./TextInput";

export default function ApproveModal({ AppointmentSelectdId }) {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, patch, processing, errors, reset } = useForm({
        id: AppointmentSelectdId,
    });

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        patch(`/appointment/approve/${AppointmentSelectdId}`, {
            onSuccess: () => {
                toast.success("Appointment has been Approved!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: "toast-success",
                });
            },
        });
    };

    return (
        <>
            <div onClick={openModal}>Approve</div>
            <Modal show={isOpen} onClose={closeModal} maxWidth="md">
                <form onSubmit={handleUpdate}>
                    <div className="hidden">
                        <TextInput
                            id="id"
                            type="text"
                            name="id"
                            value={data.id}
                            onChange={(e) => setData("id", e.target.value)}
                        />
                    </div>
                    <div className="p-4 flex items-center justify-center flex-col">
                        <div className="w-16 h-16 bg-red-100/50 flex items-center justify-center rounded-full">
                            <ExclamationTriangleIcon className="w-10 h-10 text-yellow-300" />
                        </div>
                        <h1 className="text-3xl text-gray-600 font-semibold">
                            Warning
                        </h1>
                        <p className="text-sm text-gray-500 text-center ">
                            Please review your appointment details carefully
                            before confirming.
                        </p>
                    </div>
                    <div className="p-4 flex w-full justify-center space-x-5 font-semibold">
                        <button
                            disabled={processing}
                            className="px-3 py-2 bg-green-400 text-white rounded-md hover:bg-green-500 w-36"
                        >
                            Confirm
                        </button>
                        <button
                            type="button"
                            className="px-3 py-2 hover:bg-gray-200 text-gray-400 rounded w-36 bg-gray-100"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
