import { Link } from "@inertiajs/react";
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
                    <li>
                        <div className="space-x-5 mt-5">
                            <Link className="font-bold text-gray-800 ">
                                View user profile
                            </Link>
                            <button className="font-bold text-red-500 ">
                                Delete user
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
