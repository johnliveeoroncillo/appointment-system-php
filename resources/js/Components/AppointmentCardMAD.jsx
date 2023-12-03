import { PrinterIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function AppointmentCardMAD({
    patient,
    address,
    date,
    findings,
    prescription,
    onClick,
    onPrint,
}) {
    const printReciept = useRef();

    const handlePrint = useReactToPrint({
        content: () => printReciept.current,
    });

    return (
        <div className="w-[35rem] h-[35rem]">
            <div className="flex justify-end gap-5">
                <button onClick={handlePrint} className="flex order-2 pb-3">
                    <PrinterIcon className="h-6 w-6" /> Print
                </button>
                <button onClick={onClick} className="flex pb-3 text-red-400">
                    <TrashIcon className="h-6 w-6" />
                    Delete
                </button>
            </div>
            <div
                ref={printReciept}
                className=" bg-white px-5 py-5 shadow-md printable-content"
            >
                <div className="printable border-2 border-gray-700 h-full w-full p-5">
                    <div className=" printable-header flex gap-16">
                        <img
                            className="w-14 h-14"
                            src="https://th.bing.com/th/id/R.7bc6f156fc9627e6c95e2a41dce0c3f2?rik=iiUhlhCNY5PgBQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_529438.png&ehk=9XpFSti%2bVVUR6LlddBdHPQqTEtZrgF0EuB3A4P9Ml7k%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                        />

                        <div className="">
                            <p className="pb-1">
                                <strong>Patient:</strong> {patient}
                            </p>
                            <p className="pb-2">
                                <strong>Address:</strong> {address}
                            </p>
                            <p>
                                <strong>Date:</strong> {date}
                            </p>
                        </div>
                    </div>
                    <div className="printable-main-content border-y-4 border-black my-5 py-5">
                        <div className="printable-sub-content h-32">
                            <strong>Findings:</strong>
                            <p>{findings}</p>
                        </div>
                        <div className="printable-sub-content h-32">
                            <strong>Presprciption:</strong>
                            <p>{prescription}</p>
                        </div>
                    </div>
                    <div className="doctor-signature">
                        <p className="w-52 text-center font-bold">
                            Dr. Vicente Lao
                        </p>
                        <p className="w-52 border-t-2 border-black text-center">
                            Signature
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media print {
                    body {
                        font-size: 12pt;
                        background-color: red;
                        height: 50vh;
                    }

                    .printable-content {
                        background-color: white;
                        height: 100vh;
                        width: 100vw;
                        display: grid;
                        place-content: center;
                    }

                    .printable-header {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                    .printable {
                        height: 100vh;
                        width: 100vw;
                        padding: 80px 100px;
                    }

                    .printable-main-content {
                        height: 50vh;
                        width: 100%;
                    }

                    .printable-sub-content {
                        height: 250px;
                    }
                    .doctor-signature {
                        margin-top: 50px;
                    }
                }
            `}</style>{" "}
        </div>
    );
}
