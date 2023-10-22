import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function AdminUserProfile({ auth, user, medicalchart }) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h1 className="">User Profile</h1>}
        >
            <Head title="User Profile" />
            <div
                className={`flex px-10 gap-5  ${
                    medicalchart.length === 0 ? "h-[81.3vh]" : "h-screen"
                }`}
            >
                <div className="w-72 bg-white  px-5 py-5 rounded-md mt-5 h-72">
                    <div className="w-full h-full flex px-5 py-5 justify-center flex-col">
                        <div className="w-full text-center  tracking-wide">
                            <h1 className="text-2xl text-gray-700 capitalize font-bold">
                                {user.name}
                            </h1>
                            <small className="text-gray-500 text-sm capitalize font-semibold">
                                {user.role}
                            </small>
                        </div>
                        <div className="py-5 space-y-3 text-sm">
                            <div>
                                <h3 className="font-medium text-gray-500">
                                    Email
                                </h3>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-500">
                                    Phone
                                </h3>
                                <p>{user.mobile_number || "no data"}</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-500">
                                    Address
                                </h3>
                                <p>{user.address || "address not set"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`w-[65vw] bg-white my-5 rounded-md  ${
                        medicalchart.length === 0 ? "h-96" : "h-auto"
                    }`}
                >
                    {medicalchart.length === 0 ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-3xl text-gray-500 capitalize font-bold">
                                no medical chart data
                            </span>
                        </div>
                    ) : (
                        <>
                            <div className="w-full px-5 h-10 flex items-center bg-teal-100 rounded-t-md">
                                <h1 className="text-xl font-bold text-gray-700">
                                    Medical chart
                                </h1>
                            </div>
                            {medicalchart.map((item) => (
                                <>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">Name</h1>
                                        <p className="capitalize">
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Gender
                                        </h1>
                                        <p className="capitalize">
                                            {item.gender}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">Age</h1>
                                        <p className="capitalize">{item.age}</p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Height
                                        </h1>
                                        <p className="capitalize">
                                            {item.height}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Weight
                                        </h1>
                                        <p className="capitalize">
                                            {item.weight}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Blood Pressure
                                        </h1>
                                        <p className="capitalize">{item.bp}</p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Illness
                                        </h1>
                                        <p className="capitalize">
                                            {item.illness}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Physical Exam
                                        </h1>
                                        <p className="capitalize">
                                            {item.physical_exam}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Medical history
                                        </h1>
                                        <p className="capitalize">
                                            {item.medical_history}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Allergies
                                        </h1>
                                        <p className="capitalize">
                                            {item.allergies}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Family history
                                        </h1>
                                        <p className="capitalize">
                                            {item.family_history}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Social history
                                        </h1>
                                        <p className="capitalize">
                                            {item.social_history}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">
                                            Diagnosis
                                        </h1>
                                        <p className="capitalize">
                                            {item.diagnosis}
                                        </p>
                                    </div>
                                    <div className="w-full h-10 text-sm font-medium flex items-center justify-between px-5 border-b">
                                        <h1 className="text-gray-400">Plan</h1>
                                        <p className="capitalize">
                                            {item.plan}
                                        </p>
                                    </div>
                                </>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
