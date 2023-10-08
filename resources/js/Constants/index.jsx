import {
    HomeIcon,
    ClipboardDocumentListIcon,
    WrenchScrewdriverIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

export const sidebarLinks = [
    {
        id: "home",
        title: "Home",
        href: "home",
        icon: HomeIcon,
    },
    {
        id: "appointments",
        title: "Appointemts",
        href: "appointments.show",
        icon: ClipboardDocumentListIcon,
    },
    {
        id: "services",
        title: "Services",
        href: "services.index",
        icon: WrenchScrewdriverIcon,
    },
    {
        id: "users",
        title: "Users",
        href: "users",
        icon: UsersIcon,
    },
];
// appointments
export const columns = [
    { header: "Name", accessor: "column1" },
    { header: "Date", accessor: "column2" },
    { header: "Time", accessor: "column3" },
    { header: "Doctor", accessor: "column4" },
    { header: "Status", accessor: "column5" },
];

export const data = (appointments) =>
    appointments.map((appointment) => ({
        column1: appointment.name,
        column2: appointment.formatted_date,
        column3: appointment.formatted_time,
        column4: appointment.doctor_name,
        column5: appointment.status ? (
            <small className="bg-green-500 px-5 py-1 text-white uppercase rounded-md">
                approved
            </small>
        ) : (
            <small className="bg-gray-400 px-5 py-1 text-white uppercase rounded-md">
                pending
            </small>
        ),
    }));
// appointment ends here

// doctor
export const doctor = [
    { header: "Name", accessor: "column1" },
    { header: "email", accessor: "column2" },
    { header: "experties", accessor: "column3" },
    { header: "address", accessor: "column4" },
    { header: "status", accessor: "column5" },
];

// services
export const service = [
    { header: "Name", accessor: "column1" },
    { header: "description", accessor: "column2" },
];

export const servicesData = (services) =>
    services.map((service) => ({
        column1: service.name,
        column2: service.description,
    }));

// service end here

//users
export const user = [
    // { header: "Name", accessor: "column1" },
    // { header: "description", accessor: "column2" },
    // { header: "description", accessor: "column2" },
    // { header: "description", accessor: "column2" },
    // { header: "description", accessor: "column2" },
    // { header: "description", accessor: "column2" },
    // { header: "description", accessor: "column2" },
];

// export const usersData = (users) =>
//     users.map((user) => ({
//         column1: user.name,
//         column2: user.description,
//     }));

//medical chart

export const medicalchartData = (medicalChart) => {
    Array.isArray(medicalChart) &&
        medicalChart.map((medical) => [
            { id: "Name", data: medical.name },
            { id: "gender", data: medical.gender },
            { id: "age", data: medical.age },
            { id: "Height", data: medical.height },
            { id: "Weight", data: medical.weight },
            { id: "Blood pressure", data: medical.bp },
            { id: "illness", data: medical.illness },
            { id: "Physical Exam", data: medical.physical_exam },
            { id: "Medical History", data: medical.medical_history },
            { id: "Allergies", data: medical.allergies },
            { id: "Family History", data: medical.family_history },
            { id: "Social History", data: medical.social_history },
            { id: "Diagnosis", data: medical.diagnosis },
            { id: "Plan", data: medical.plan },
        ]);
};
// medicalChart.map((medical) => [
//     { id: "Name", data: medical.name },
//     { id: "gender", data: medical.gender },
//     { id: "age", data: medical.age },
//     { id: "Height", data: medical.height },
//     { id: "Weight", data: medical.weight },
//     { id: "Blood pressure", data: medical.bp },
//     { id: "illness", data: medical.illness },
//     { id: "Physical Exam", data: medical.physical_exam },
//     { id: "Medical History", data: medical.medical_history },
//     { id: "Allergies", data: medical.allergies },
//     { id: "Family History", data: medical.family_history },
//     { id: "Social History", data: medical.social_history },
//     { id: "Diagnosis", data: medical.diagnosis },
//     { id: "Plan", data: medical.plan },
// ]);
