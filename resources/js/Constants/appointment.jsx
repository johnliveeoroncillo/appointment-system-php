// export const columns = [
//     { header: "Name", accessor: "column1" },
//     { header: "Date", accessor: "column2" },
//     { header: "Time", accessor: "column3" },
//     // {
//     //     header: "Actions",
//     //     // render: (row) => (
//     //     //     // <div className="space-x-4">
//     //     //     //     <button className="bg-green-500 px-5 font-bold text-white rounded-md ">
//     //     //     //         More details
//     //     //     //     </button>
//     //     //     //     <Link>View user profile</Link>
//     //     //     // </div>
//     //     // ),
//     // },
// ];
// export const request = [
//     { header: "Name", accessor: "column1" },
//     { header: "Date", accessor: "column2" },
//     { header: "Time", accessor: "column3" },
//     {
//         header: "Actions",
//         render: (row) => (
//             <div className="space-x-4">
//                 <button className="bg-green-500 px-5 font-bold text-white rounded-md ">
//                     More details
//                 </button>
//                 <Link>View user profile</Link>
//             </div>
//         ),
//     },
// ];

// export const data = (appointments) =>
//     appointments
//         .filter((appointment) => appointment.status === 0)
//         .map((appointment) => ({
//             column1: appointment.name,
//             column2: appointment.formatted_date,
//             column3: appointment.formatted_time,
//         }));

import React from "react";

export default function Table({ columns, list, onClick }) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs w-full uppercase mb-32 bg-gray-100 text-gray-400">
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="bg-white border-b border-gray-300 hover:bg-gray-50"
                            >
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 ${
                                            column.className || ""
                                        }`}
                                    >
                                        {column.render
                                            ? column.render(row)
                                            : row[column.accessor]}
                                    </td>
                                ))}
                                {/* <td className="px-6 py-4">
                                    <button
                                        className="bg-green-500 px-5 font-bold text-white rounded-md"
                                        onClick={() => onClick(row)}
                                    >
                                        More details
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
