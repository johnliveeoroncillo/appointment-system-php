import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
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

            <div className=" mt-5 drop-shadow-lg rounded-md font-opensans text-gray-800 |">
                <div className="w-full md:px-20 px-5 mt-4 | z-10">
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
            </div>
        </AuthenticatedLayout>
    );
}
