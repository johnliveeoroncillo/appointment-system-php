import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "flex justify-center items-center hover:bg-green-500 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "bg-green-600 w-full h-12 flex items-center justify-center text-white | md:h-12"
                    : "border-transparent text-gray-300 hover:text-white w-full h-12 hover:border-gray-300 focus:text-white-700 focus:bg-green-700 focus:border-gray-300 | md:h-12") +
                className
            }
        >
            {children}
        </Link>
    );
}
