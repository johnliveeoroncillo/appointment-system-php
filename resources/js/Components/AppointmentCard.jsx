import React from "react";

export default function AppointmentCard({ date, service, name, time }) {
    return (
        <>
            <div className="w-full text-sm px-5 py-2 mt-5 bg-gray-50 border rounded-md border-gray-300">
                <h2>
                    <span className="md:text-md font-bold text-gray-800">
                        {service}
                    </span>{" "}
                    with
                </h2>
                <p className="text-gray-700 ">{name}</p>
                <small>
                    {date}, {time}
                </small>
            </div>
        </>
    );
}
