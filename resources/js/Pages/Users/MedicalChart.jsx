import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { medicalchartData } from "@/Constants";
import MedicalChartForm from "./MedicalChart/MedicalChartForm";

export default function MedicalChart({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Medical Chart
                    </h2>
                    <Link className="transition duration-150 ease-in-out hover:bg-green-500 px-5 py-1 rounded-md hover:text-white focus:text-white-700 focus:bg-green-700 focus:border-gray-300 ">
                        Update Medical Chart
                    </Link>
                    {/* TODO: add conditional here  */}
                </div>
            }
        >
            <Head title="Medical Chart" />

            <div className=" mt-5 drop-shadow-lg rounded-md font-opensans text-gray-800 |">
                <div className="w-full flex items-center justify-center h-[70vh]">
                    <div>
                        You haven't submitted medical chart yet!
                        <div className="w-full flex justify-center mt-5">
                            <Link
                                href="/medical-chart/create-form"
                                className="transition duration-150 shadow-md ease-in-out bg-primaryColor text-white hover:bg-green-500 px-5 py-1 rounded-md hover:text-white focus:text-white-700 focus:bg-green-700 focus:border-gray-300 "
                            >
                                Click to Create Midacal Chart
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <form className="">
                    <div className="w-full md:px-20 px-5 mt-4 md:flex block | z-10">
                        <div className="w-full">
                            {medicalchartData.slice(0, 7).map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full px-5 py-3 mb-1 rounded-md border border-gray-300"
                                >
                                    <h1 className="text-sm uppercase font-semibold text-gray-900">
                                        {item.id}
                                    </h1>
                                    <p className="text-xs md:text-sm">
                                        {item.data}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className=" w-full mb-20">
                            {medicalchartData.slice(7).map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full px-5 mb-1 md:ml-1 rounded-md py-3 border border-gray-300"
                                >
                                    <h1 className="text-sm uppercase font-semibold text-gray-900">
                                        {item.id}
                                    </h1>
                                    <p className="text-xs md:text-sm">
                                        {item.data}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </form> */}
            </div>
        </AuthenticatedLayout>
    );
}
