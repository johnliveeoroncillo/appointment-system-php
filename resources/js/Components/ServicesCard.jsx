import React from "react";

export default function ServicesCard({ name, description }) {
    return (
        <>
            <div className="text-sm border w-full h-auto p-5 bg-white">
                <ul className="">
                    <li key="1" className="font-bold mt-2">
                        Name: <span className="font-normal">{name}</span>
                    </li>
                    <li key="2" className="font-bold mt-2">
                        Description:{" "}
                        <span className="font-normal">{description}</span>{" "}
                    </li>
                </ul>
            </div>
        </>
    );
}
