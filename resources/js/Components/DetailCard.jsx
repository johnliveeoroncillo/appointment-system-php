import React from "react";

export default function DetailCard({ title, count, icon }) {
    return (
        <>
            <div className="w-36 h-16 m-2  border rounded-md border-gray-300 bg-white flex items-center justify-center">
                <div className=" flex items-center justify-center flex-1 w-full h-full">
                    {icon}
                </div>
                <div className="flex-1 px-3">
                    <div className="text-gray-800">
                        <h3 className="text-xl font-semibold">{count}</h3>
                    </div>
                    <div className="text-gray-700">
                        <small>{title}</small>
                    </div>
                </div>
            </div>
        </>
    );
}
