import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { router, useForm } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";
import TextInput from "./TextInput";
import { toast } from "react-toastify";
import InputLabel from "./InputLabel";

function CancelModal({ AppointmentSelectdId }) {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, patch, processing, errors, reset } = useForm({
        // id: "",
        findings: "",
        prescription: "",
    });

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        patch(`/appointment/done/${AppointmentSelectdId.id}`, {
            onSuccess: () => {
                toast.info("Marked done", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: "toast-success",
                });
            },
        });
    };

    return (
        <>
            <div onClick={openModal}>Mark as done</div>
            <Modal show={isOpen} onClose={closeModal} maxWidth="md">
                <form onSubmit={handleUpdate} className="w-full">
                    <div className="w-full  p-5">
                        <InputLabel
                            htmlFor="findings"
                            value="Doctors Finding"
                        />
                        <TextInput
                            id="findings"
                            type="text"
                            name="findings"
                            value={data.findings}
                            onChange={(e) =>
                                setData("findings", e.target.value)
                            }
                            className="w-full"
                        />
                    </div>
                    <div className="w-full  p-5 pt-0">
                        <InputLabel
                            htmlFor="prescription"
                            value="Doctors Prescription"
                        />
                        <TextInput
                            id="prescription"
                            type="text"
                            name="prescription"
                            value={data.prescription}
                            onChange={(e) =>
                                setData("prescription", e.target.value)
                            }
                            className="w-full"
                        />
                    </div>
                    <div className="p-4 flex w-full justify-end space-x-5 font-semibold">
                        <button
                            type="button"
                            className="px-3 py-2 hover:bg-gray-200 text-gray-400 rounded w-36 bg-gray-100"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-3 py-2 bg-green-400 text-white rounded-md hover:bg-yellow-300 w-36"
                            onClick={() => {
                                console.log(data);
                            }}
                        >
                            Mark as done
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default CancelModal;
