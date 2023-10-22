import React, { useState } from "react";
import Modal from "./Modal";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useForm } from "@inertiajs/react";
import TextInput from "./TextInput";

export default function ViewDetails({ AppointmentSelectdId }) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const { data, setData, patch, processing, errors, reset } = useForm({
        id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/appointments/approve/${AppointmentSelectdId.id}`, {
            onSuccess: () => {
                toast.success("Appointment has been Approved!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: "toast-success",
                });
            },
        });
    };
    // const handleDecline = (e) => {
    //     e.preventDefault();
    //     patch(`/appointments/decline/${AppointmentSelectdId.id}`, {
    //         onSuccess: () => {
    //             toast.success("Appointment has been Approved!", {
    //                 position: toast.POSITION.BOTTOM_RIGHT,
    //                 className: "toast-success",
    //             });
    //         },
    //     });
    // };

    return (
        <div>
            <button
                onClick={openModal}
                className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-300"
            >
                <EllipsisVerticalIcon className="w-5 h-5 " />
            </button>
            <Modal show={isOpen} onClose={closeModal} maxWidth="md">
                <div className="w-full flex flex-col px-5 py-3 space-y-2">
                    <h1 className="text-xl font-bold pb-3">Update Status</h1>
                    <div className="space-y-3">
                        {/* <form onSubmit={handleApprove}>
                            <div className="hidden">
                                <TextInput
                                    id="id"
                                    type="text"
                                    name="id"
                                    value={data.id}
                                    onChange={(e) =>
                                        setData("id", e.target.value)
                                    }
                                />
                            </div>
                            <button className="w-full bg-green-400 py-1 text-white hover:bg-green-600 rounded-md">
                                Approve appointment
                            </button>
                        </form>
                        <form onSubmit={handleDecline}>
                            <div className="hidden">
                                <TextInput
                                    id="id"
                                    type="text"
                                    name="id"
                                    value={data.id}
                                    onChange={(e) =>
                                        setData("id", e.target.value)
                                    }
                                />
                            </div>
                            <button className="w-full bg-red-400 py-1 text-white hover:bg-red-600 rounded-md">
                                Decline appointment
                            </button>
                        </form> */}
                        <form onSubmit={handleSubmit}>
                            {/* Other fields */}
                            <select
                                value={data.id}
                                onChange={(e) => setData("id", e.target.value)}
                                className="border slide-up mt-1 text-sm rounded-sm border-gray-300 w-full"
                            >
                                <option className="text-lg" value="1">
                                    Approve
                                </option>
                                <option className="text-lg" value="3">
                                    Decline
                                </option>
                            </select>
                            <button className="w-full mt-5 bg-green-400 py-1.5 text-white hover:bg-green-600 rounded-md">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
