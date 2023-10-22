import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AdminAddServiceModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("services.add-user.store"), {
            onSuccess: () => {
                closeModal();
                toast.success("New Service Added!");
                reset();
            },
        });
    };
    return (
        <div>
            <button onClick={openModal}>Add Service</button>
            <Modal show={isModalOpen} onClose={closeModal} maxWidth="md">
                <div className="p-4">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-semibold pb-5">
                            Reschedule
                        </h1>
                        <div className="space-y-5">
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Service Name"
                                />

                                <input
                                    type="text"
                                    id="name"
                                    className="border-2 border-gray-300 w-full rounded-md slide-up"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="description"
                                    value="Description"
                                />

                                <textarea
                                    type="text"
                                    id="description"
                                    className="border-2 border-gray-300 w-full rounded-md slide-up"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.description}
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
}
