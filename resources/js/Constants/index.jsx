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
        href: "appointments.index",
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
export const medicalchartData = [
    {
        id: "Name",
        data: "name from database",
    },
    {
        id: "gender",
        data: "gender from database",
    },
    {
        id: "age",
        data: "age from database",
    },
    {
        id: "Height",
        data: "Height from database",
    },
    {
        id: "Weight",
        data: "Weight from database",
    },
    {
        id: "Blood pressure",
        data: "Blood pressure from database",
    },
    {
        id: "illness",
        data: "illness from database",
    },
    {
        id: "Physical Exam",
        data: "Physical Exam from database",
    },
    {
        id: "Medical History",
        data: "Medical History from database",
    },
    {
        id: "Allergies",
        data: "Allergies from database",
    },
    {
        id: "Family History",
        data: "Family History from database",
    },
    {
        id: "Social History",
        data: "Social History from database",
    },
    {
        id: "Diagnosis",
        data: "Diagnosis from database",
    },
    {
        id: "Plan",
        data: "Plan from database",
    },
];
