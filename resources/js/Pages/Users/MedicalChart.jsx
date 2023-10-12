import { Head, Link, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function MedicalChart({ auth, medicalChart }) {
    const { flash } = usePage().props;
    // check if theres medical chart that is associated with the current user id
    const checkForMedicalChart =
        medicalChart && medicalChart.user_id === auth.user.id;

    // display toast using usestate and useeffect
    const [toastDisplayed, setToastDisplayed] = useState(false);

    useEffect(() => {
        if (flash.message && !toastDisplayed) {
            toast.success(flash.message);
            setToastDisplayed(true);
        }
    }, [flash.message, toastDisplayed]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full">
                    <h2 className="font-semibold text-lg md:text-xl text-gray-800 leading-tight">
                        Medical Chart
                    </h2>
                    {checkForMedicalChart ? (
                        <div>
                            <Link
                                href="/medical-chart/{id}"
                                className="transition duration-150 hidden md:block ease-in-out hover:bg-green-500 px-5 py-1 rounded-md hover:text-white focus:text-white-700 focus:bg-green-700 focus:border-gray-300 "
                            >
                                Update Medical Chart
                            </Link>
                            <div className="bg-primaryColor py-1 px-1 md:hidden rounded-md">
                                <Link href="/medical-chart/{id}">
                                    <ArrowPathIcon className="w-6 h-6 text-white" />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            }
        >
            <Head title="Medical Chart" />

            <div className=" mt-5 drop-shadow-lg rounded-md font-opensans text-gray-800 |">
                {checkForMedicalChart ? (
                    <div className="w-full md:px-20 px-5 mt-4 md:flex block | z-10">
                        <div className="w-full">
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Name
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.name}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Gender
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.gender}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Age
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.age}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Height
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.height}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Weight
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.weight}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Blood Pressure
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.bp}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Illness
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.illness}
                                </p>
                            </div>
                        </div>
                        <div className=" w-full mb-20 ml-1">
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Physical Exam
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.physical_exam}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Medical History
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.medical_history}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Allergies
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.allergies}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Family History
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.family_history}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Social History
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.social_history}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Diagnosis
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.diagnosis}
                                </p>
                            </div>
                            <div className="bg-white w-full px-5 py-3 mb-1 rounded-md border border-gray-300">
                                <h1 className="text-sm uppercase font-semibold text-gray-900">
                                    Plan
                                </h1>
                                <p className="text-xs md:text-sm">
                                    {medicalChart.plan}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
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
                )}
            </div>
        </AuthenticatedLayout>
    );
}
