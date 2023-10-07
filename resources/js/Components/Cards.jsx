import React from "react";

export default function Cards({
    name,
    service,
    doctor,
    date,
    time,
    status,
    description,
}) {
    return (
        <>
            <div className="text-sm border w-full h-auto p-5 bg-white">
                <ul className="">
                    <li key="1" className="font-bold mt-2">
                        Name: <span className="font-normal">{name}</span>
                    </li>
                    <li key="2" className="font-bold mt-2">
                        Date: <span className="font-normal">{date}</span>{" "}
                    </li>
                    <li key="3" className="font-bold mt-2">
                        Time: <span className="font-normal">{time} </span>
                    </li>
                    <li key="4" className="font-bold mt-2">
                        Doctor:{" "}
                        <span className="font-normal">Dr. {doctor}</span>
                    </li>
                    <li key="5" className="font-bold mt-2">
                        Service: <span className="font-normal">{service}</span>
                    </li>
                    <li key="6" className="font-bold mt-2">
                        Status: <span className="font-normal">{status}</span>
                    </li>
                    <li key="6" className="font-bold mt-2">
                        Description:{" "}
                        <span className="font-normal">{description}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}
