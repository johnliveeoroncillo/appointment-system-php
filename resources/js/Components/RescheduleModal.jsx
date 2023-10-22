import React, { useState } from "react";
import Modal from "./Modal";
import InputLabel from "./InputLabel";
import { router, useForm } from "@inertiajs/react";
import InputError from "./InputError";
import { toast } from "react-toastify";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const RescheduleModal = ({ appointmentList }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData, patch, processing, errors } = useForm({
        id: appointmentList.id,
        date: appointmentList.date,
        time: appointmentList.time,
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setData((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.patch(
            route("appointment.update", { id: appointmentList.id }),
            data,
            {
                onSuccess: () => {
                    console.log("triggered");
                    toast.success("Schedule successfully updated!!", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        className: "toast-success",
                    });
                },
            }
        );
    };

    return (
        <div>
            <button
                className="text-blue-300 hover:text-blue-500 hover:font-bold"
                onClick={openModal}
            >
                Reschedule
            </button>
            <Modal show={isModalOpen} onClose={closeModal} maxWidth="md">
                <div className="p-4">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-semibold pb-5">
                            Reschedule
                        </h1>
                        <div className="space-y-5">
                            <div>
                                <InputLabel
                                    htmlFor="date"
                                    value="Update Date"
                                />
                                <input
                                    type="id"
                                    id="id"
                                    className="border-2 hidden border-gray-300 w-full rounded-md slide-up"
                                    value={data.id}
                                    onChange={handleChange}
                                />
                                <input
                                    type="date"
                                    id="date"
                                    className="border-2 border-gray-300 w-full rounded-md slide-up"
                                    value={data.date}
                                    onChange={handleChange}
                                />
                                <InputError
                                    message={errors.date}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="date"
                                    value="Update Time"
                                />
                                <select
                                    name="time"
                                    id="time"
                                    value={data.time}
                                    onChange={handleChange}
                                    className="slide-up block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-secondaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6 "
                                >
                                    <option value="default" selected>
                                        --Select Time--
                                    </option>
                                    <option value="08:00">8:00 AM</option>
                                    <option value="09:00">9:00 AM </option>
                                    <option value="10:00">10:00 AM </option>
                                    <option value="11:00">11:00 AM </option>
                                    <option value="12:00">12:00 PM </option>
                                    <option value="13:00">1:00 PM </option>
                                    <option value="14:00">2:00 PM </option>
                                    <option value="15:00">3:00 PM </option>
                                    <option value="16:00">4:00 PM </option>
                                </select>
                                <InputError
                                    message={errors.time}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="py-5 flex w-full justify-between space-x-5 font-semibold slide-up">
                            <button
                                type="button"
                                className="px-3 py-2 hover:bg-gray-200 text-gray-400 rounded w-36 bg-gray-100"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                disabled={processing}
                                className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 w-44"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default RescheduleModal;
