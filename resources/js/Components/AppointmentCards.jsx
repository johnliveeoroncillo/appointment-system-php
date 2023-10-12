import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import RescheduleModal from "./RescheduleModal";

export default function AppointmentCards({
    doctor,
    created_at,
    service,
    date,
    time,
    status,
    onClick,
    data,
}) {
    const getBackgroundColor = () => {
        if (status === "Pending") {
            return "bg-yellow-100/70 hover:bg-yellow-200/80";
        } else if (status === "Approved") {
            return "bg-green-100 hover:bg-green-200";
        } else if (status === "Done") {
            return "bg-green-100 hover:bg-green-200";
        } else if (status === "Canceled") {
            return "bg-red-100 hover:bg-red-200";
        }
        return "";
    };
    return (
        <>
            <div className="w-80 border border-gray-200 bg-white overflow-hidden rounded-xl shadow-sm font-serif">
                {/* for pending */}
                <div
                    className={`w-full px-5 py-5  cursor-text ${getBackgroundColor()}`}
                >
                    <small className="w-full flex justify-end py-1 text-gray-400">
                        {created_at}
                    </small>
                    <h1 className="text-xl font-semibold leading-7 text-gray-900">
                        You have set an appointment with Dr. {doctor}
                    </h1>
                    <small>
                        <strong>At</strong> {date} | {time}
                    </small>{" "}
                    <br />
                    <p className="py-2 font-medium">{service}</p>
                    <p className="py-5">
                        <strong>Status:</strong> {status}
                    </p>
                    <div className="w-full flex gap-4  ">
                        {status === "Approved" && (
                            <div className="flex gap-4">
                                <button
                                    className="text-green-400 hover:text-green-500 hover:font-bold"
                                    onClick={() =>
                                        console.log("Mark as Done clicked")
                                    }
                                >
                                    Mark as Done
                                </button>
                                <RescheduleModal appointmentList={data} />
                            </div>
                        )}
                        {(status === "Canceled" || status === "Done") && (
                            <button
                                onClick={onClick}
                                className="text-red-400 hover:text-red-500 hover:font-bold"
                                // className=" text-white text-sm h-8 shadow-sm rounded-md flex px-5 py-1 items-center justify-center hover:bg-red-500 bg-red-300 hover:text-white"
                            >
                                {/* <TrashIcon className="w-4 h-4" /> */}
                                Delete
                            </button>
                        )}
                        {(status === "Pending" || status === "Approved") && (
                            <button
                                onClick={onClick}
                                className="text-red-300 hover:text-red-500 hover:font-bold"
                                // className=" text-white text-sm h-8 shadow-sm rounded-md flex px-5 py-1 items-center justify-center hover:bg-red-500 bg-red-300 hover:text-white"
                            >
                                {/* <TrashIcon className="w-4 h-4" /> */}
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
