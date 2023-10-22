import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, doctor }) {
    // const doctorData = doctor.data || [];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="md:flex mt-5 drop-shadow-lg text-xs md:text-sm rounded-md font-opensans text-gray-800 |">
                <div className="md:w-[50%] w-full md:px-20 px-5 mt-4 | z-10">
                    <h1 className="md:text-2xl text-xl text-gray-800 font-semibold ">
                        Welcome!!
                    </h1>
                    <h3 className="md:text-3xl text-xl capitalize md:mt-5 mt-2">
                        {auth.user.name}
                    </h3>
                    <p className="md:w-96 w-80 my-5 text-sm">
                        Welcome to our Clinic, where your health and well-being
                        take center stage! We are delighted to have you join our
                        community dedicated to simplifying and enhancing your
                        medical journey.
                    </p>
                    <Link
                        href="/appointment/create-form"
                        className="hover:bg-secondaryColor text-white px-5 py-2 rounded-md bg-primaryColor"
                    >
                        Set Appointment
                    </Link>
                </div>
                <div className="md:w-[50%]  w-full mt-10 md:mt-0 flex md:flex-col md:items-center px-2 ">
                    <div className="w-96 slide-up bg-white font-medium rounded-md text-xs md:text-sm border border-gray-400 ">
                        <h1 className="text-lg md:text-xl px-5 py-2">
                            Doctor's Information
                        </h1>
                        {doctor.length === 0 ? (
                            <p className="px-5 py-2 text-gray-400">
                                No doctor found.
                            </p>
                        ) : (
                            doctor.map((item) => (
                                <>
                                    <div className="w-full px-5 py-2 flex justify-between border-y border-gray-400">
                                        <h1 className="text-gray-400">Name</h1>
                                        <p className="">Dr. {item.name}</p>
                                    </div>
                                    <div className="w-full px-5 py-2 flex justify-between border-b border-gray-400">
                                        <h1 className="text-gray-400">Email</h1>
                                        <p className="">{item.email}</p>
                                    </div>
                                    <div className="w-full px-5 py-2 flex justify-between border-b border-gray-400">
                                        <h1 className="text-gray-400">Phone</h1>
                                        <p className="">{item.mobile_number}</p>
                                    </div>
                                    <div className="w-full px-5 py-2 flex justify-between border-b border-gray-400">
                                        <h1 className="text-gray-400">
                                            Specialization
                                        </h1>
                                        <p className="">
                                            {item.specialization}
                                        </p>
                                    </div>
                                    <div className="w-full px-5 py-2 flex justify-between border-b border-gray-400">
                                        <h1 className="text-gray-400">
                                            License Address
                                        </h1>
                                        <p className="">
                                            {item.license_address}
                                        </p>
                                    </div>
                                    <div className="w-full px-5 py-2 flex justify-between ">
                                        <h1 className="text-gray-400">
                                            Clinic Address
                                        </h1>
                                        <p className="">
                                            {item.clinic_address}
                                        </p>
                                    </div>
                                </>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
