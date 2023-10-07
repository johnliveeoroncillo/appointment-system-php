import React from "react";

export default function DataMedicalChart({ id, data }) {
    return (
        <>
            <div>
                <h1 className="text-lg font-semibold text-gray-500">{id}</h1>
                <p>{data}</p>
            </div>
        </>
    );
}
