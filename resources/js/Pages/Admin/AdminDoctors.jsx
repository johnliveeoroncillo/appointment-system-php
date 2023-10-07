// import DoctorsCard from "@/Components/DoctorsCard";
// import Pagination from "@/Components/PaginationButton";
// import Table from "@/Components/Table";
// import { doctor, doctorsData } from "@/Constants";
// import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
// import { Head, usePage } from "@inertiajs/react";
// import React from "react";

// export default function AdminDoctors({ doctors, auth }) {
//     const doctorsList = doctors.data || "";
//     const doctorsDataList = doctorsData(doctors.data);
//     return (
//         <AdminAuthenticatedLayout
//             user={auth.user}
//             header={
//                 <div className="flex w-full justify-between">
//                     <span>
//                         <h1 className="">Doctors</h1>
//                     </span>
//                     <button className="md;text-sm font-normal md:px-5 px-3 py-1 text-xs rounded-md bg-green-700 text-white">
//                         Add Doctor
//                     </button>
//                 </div>
//             }
//         >
//             <Head title="Doctordoctor" />

//             <div className="h-screen w-full md:px-10">
//                 <div className="w-full md:px-10">
//                     <div className="hidden md:block">
//                         <Table columns={doctor} data={doctorsDataList} />
//                     </div>
//                     <div className="md:hidden h-[70vh] overflow-scroll">
//                         {doctorsList.map((doctor) => (
//                             <DoctorsCard
//                                 key={doctor.id}
//                                 name={doctor.name}
//                                 email={doctor.email}
//                                 expertise={doctor.expertise}
//                                 address={doctor.address}
//                                 status={
//                                     doctor.status ? (
//                                         <small className="bg-green-500 px-5 py-1 text-white uppercase rounded-md">
//                                             online
//                                         </small>
//                                     ) : (
//                                         <small className="bg-gray-500 px-5 py-1 text-white uppercase rounded-md">
//                                             offline
//                                         </small>
//                                     )
//                                 }
//                             />
//                         ))}
//                     </div>
//                     <Pagination db={doctors} />
//                 </div>
//             </div>
//         </AdminAuthenticatedLayout>
//     );
// }
