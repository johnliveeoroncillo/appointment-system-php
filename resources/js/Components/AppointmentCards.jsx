import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import RescheduleModal from "./RescheduleModal";
import CancelModal from "./CancelModal";
import MarkDone from "./MarkDone";

export default function AppointmentCards({
    doctor,
    created_at,
    service,
    date,
    time,
    findings,
    prescription,
    status,
    onClick,
    onClickCancel,
    data,
    selectedId,
    toasts,
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
                    className={`w-full px-5 py-5 h-full cursor-text ${getBackgroundColor()}`}
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
                    <p className="pt-5 pb-2">
                        <strong>Status:</strong> {status}
                    </p>
                    {status === "Done" && (
                        <>
                            <p className="capitalize pb-2">
                                <strong>Findings:</strong> {findings}
                            </p>
                            <p className="pb-5 capitalize">
                                <strong>Prescription:</strong> {prescription}
                            </p>
                        </>
                    )}
                    <div className="w-full flex gap-4  ">
                        {status === "Approved" && (
                            <div className="flex gap-4">
                                <button
                                    className="text-green-400 hover:text-green-500 hover:font-bold"
                                    onClick={onClick}
                                >
                                    <MarkDone
                                        AppointmentSelectdId={selectedId}
                                    />
                                </button>
                                <RescheduleModal appointmentList={data} />
                            </div>
                        )}
                        {(status === "Canceled" || status === "Done") && (
                            <button
                                onClick={onClick}
                                className="text-red-400 hover:text-red-500 hover:font-bold"
                            >
                                Delete
                            </button>
                        )}
                        {(status === "Pending" || status === "Approved") && (
                            <button
                                onClick={onClickCancel}
                                className="text-red-300 hover:text-red-500 hover:font-bold"
                            >
                                <CancelModal
                                    toast={toasts}
                                    AppointmentSelectdId={selectedId}
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
