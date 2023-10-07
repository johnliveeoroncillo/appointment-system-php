import React from "react";

export default function Table({ columns, data }) {
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
                        {data.map((row, rowIndex) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
