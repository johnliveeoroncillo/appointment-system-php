import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <nav className="bg-gradient-to-r from-primaryColor to-secondaryColor border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full h-12">
                        <div className="flex items-center w-full">
                            <div className="shrink-0 flex items-center text-textColor ">
                                <Link href="/">
                                    <ApplicationLogo />
                                </Link>
                            </div>

                            <div className="hidden w-96 h-12 sm:-my-px sm:ml-10 sm:flex text-textColor">
                                <NavLink
                                    href={route("home")}
                                    active={route().current("home")}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href={route("appointment.show")}
                                    active={route().current("appointment.show")}
                                >
                                    Appointment
                                </NavLink>
                                <NavLink
                                    href={route("medical-chart.show")}
                                    active={route().current(
                                        "medical-chart.show"
                                    )}
                                >
                                    Medical Chart
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6 w-72">
                            <Link
                                className="h-10 rounded-full w-10 flex items-center
                            justify-center hover:bg-green-500 focus:outline-none
                            focus:bg-green-600 focus:text-gren-600 transition
                            duration-150 ease-in-out"
                            >
                                <BellAlertIcon className="w-5 h-5 text-white" />
                            </Link>
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-textColor bg-transparent hover:text-textColor focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-textColor hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1 text-textColor">
                        <ResponsiveNavLink
                            className="text-white"
                            href={route("home")}
                            active={route().current("home")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="text-white"
                            href={route("appointment.show")}
                            active={route().current("appointmemt.show")}
                        >
                            Appointment
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="text-white"
                            href={route("medical-chart.show")}
                            active={route().current("medical-chart.show")}
                        >
                            Medical Chart
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            className="text-white"
                            href={route("medical-chart.show")}
                            active={route().current("medical-chart.show")}
                        >
                            Notification
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-textColor">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-textColor">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1 text-textColor">
                            <ResponsiveNavLink
                                className="text-white"
                                href={route("profile.edit")}
                            >
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                className="text-white"
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white h-12 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 flex items-center h-12 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
