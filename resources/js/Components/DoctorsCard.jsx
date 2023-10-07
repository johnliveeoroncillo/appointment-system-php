import React from "react";

export default function DoctorsCard({
    name,
    email,
    expertise,
    address,
    status,
}) {
    return (
        <>
            <div className="text-sm border w-full h-auto p-5 bg-white">
                <ul className="">
                    <li key="1" className="font-bold mt-2">
                        Name: <span className="font-normal">{name}</span>
                    </li>
                    <li key="2" className="font-bold mt-2">
                        Email: <span className="font-normal">{email}</span>{" "}
                    </li>
                    <li key="3" className="font-bold mt-2">
                        Expertise:{" "}
                        <span className="font-normal">{expertise} </span>
                    </li>
                    <li key="4" className="font-bold mt-2">
                        Address:{" "}
                        <span className="font-normal">Dr. {address}</span>
                    </li>
                    <li key="5" className="font-bold mt-2">
                        Status: <span className="font-normal">{status}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}
