import {
    EllipsisVerticalIcon,
    PencilSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Dropdown from "./Dropdown";
import { usePage } from "@inertiajs/react";
import RescheduleModal from "./RescheduleModal";

export default function ActionButton({ appointments, openModal, markAsDone }) {
    const appointmentData = appointments || "";
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-300">
                    <EllipsisVerticalIcon className="w-5 h-5 " />
                </button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                {appointmentData &&
                    appointmentData.map(
                        (appointment) =>
                            appointment.status === 0 && (
                                <>
                                    <button
                                        className="text-red-400 px-2 py-1 rounded-sm flex hover:bg-red-300 hover:text-white"
                                        onClick={() =>
                                            openModal(appointments.id)
                                        }
                                    >
                                        <TrashIcon className="w-4 h-4" />
                                        Delete{appointment.name}
                                    </button>
                                </>
                            )
                    )}
                {/* {appointments.status === 0 && (
                    <>
                        <button
                            className="text-red-400 px-2 py-1 rounded-sm flex hover:bg-red-300 hover:text-white"
                            onClick={() => openModal(appointments.id)}
                        >
                            <TrashIcon className="w-4 h-4" />
                            Delete
                        </button>
                    </>
                )}
                {appointments.status === 1 && (
                    <>
                        <button
                            className="text-green-500 px-2 py-1 rounded-sm flex hover:bg-green-400"
                            onClick={() => markAsDone(appointments.id)}
                        >
                            Mark as Done
                        </button>
                        <button className="text-gray-700 px-2 py-1 flex rounded-sm bg-blue-300 hover:bg-blue-200">
                            <PencilSquareIcon className="w-4 h-4" />
                            <RescheduleModal appointmentList={appointments} />
                        </button>
                        <button
                            className="text-red-400 px-2 py-1 rounded-sm flex hover:bg-red-300 hover:text-white"
                            onClick={() => openModal(appointments.id)}
                        >
                            <TrashIcon className="w-4 h-4" />
                            Delete
                        </button>
                    </>
                )} */}
            </Dropdown.Content>
        </Dropdown>
    );
}
