import React from "react";
import NavLink from "./NavLink";
import ApplicationLogo from "./ApplicationLogo";
import { Link } from "@inertiajs/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { sidebarLinks } from "@/Constants";

export default function PatientSidebar() {
    return (
        <>
            <aside className="w-16 max-h-screen min-h-screen border-r-4 border-gray-200 | md:w-72 ">
                {/* application logo */}
                <div className="w-full h-16 flex items-center justify-center ">
                    <Link href="/">
                        <ApplicationLogo />
                    </Link>
                </div>

                {/* menu */}
                <div className="flex flex-col w-full items-center ">
                    <div className="w-full border-b-4 border-gray-200 px-10 py-5">
                        <div className="w-full h-auto flex justify-center  items-center flex-col">
                            <UserCircleIcon className="w-20 h-20 text-gray-500" />
                            <h2>Doctor Name</h2>
                            <small>Doctor email</small>
                            <Link
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="text-center w-full py-1 rounded-sm text-sm mt-5 text-white bg-primaryColor h-auto"
                            >
                                Log Out
                            </Link>
                        </div>
                    </div>
                    {sidebarLinks.map((item) => (
                        <div className="w-full mt-5 px-10" key={item.id}>
                            <Link
                                key={item.id}
                                href={route(item.href)}
                                active={route().current(item.href)}
                            >
                                <div className="flex items-center px-2 justify-between py-2 w-full h-auto rounded-md text-gray-500 | hover:bg-secondaryColor hover:text-white">
                                    <item.icon className="w-4 h-4  | md:w-6 md:h-6" />
                                    <span className="text-md hidden flex-1 px-5 | md:block">
                                        {item.title}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
}
