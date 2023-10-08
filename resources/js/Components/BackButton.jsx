import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import React from "react";

export default function BackButton({ href }) {
    return (
        <>
            <Link
                href={href}
                className="text-blue-400 hover:text-blue-600 underline flex h-10 w-52 justify-center items-center text-lg md:text-xl"
            >
                {" "}
                <ArrowLeftIcon className="w-6 h-6" />
                Back
            </Link>
        </>
    );
}
