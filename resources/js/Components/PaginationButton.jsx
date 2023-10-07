import React from "react";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

const Pagination = ({ db }) => {
    return (
        <div
            className={db ? "flex w-full space-x-5 justify-end p-5" : "hidden"}
        >
            <PaginationLink
                href={db.prev_page_url}
                text="Previous"
                disabled={db.current_page === 1}
                icon={<ChevronDoubleLeftIcon className="w-5 h-5" />}
            />
            <PaginationLink
                href={db.next_page_url}
                text="Next"
                disabled={db.current_page === db.last_page}
                icon={<ChevronDoubleRightIcon className="w-5 h-5" />}
            />
        </div>
    );
};

const PaginationLink = ({ href, text, disabled, icon }) => {
    return (
        <Link href={href}>
            <a
                className={`w-28 text-center rounded-md px-2 py-1 flex items-center ${
                    disabled
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:text-gray-800"
                }`}
                disabled={disabled}
            >
                {text === "Previous" && icon}
                <div>{text}</div>
                {text === "Next" && icon}
            </a>
        </Link>
    );
};

export default Pagination;
