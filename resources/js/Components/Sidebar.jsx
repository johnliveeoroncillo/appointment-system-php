import { Link } from "@inertiajs/react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import { sidebarLinks } from "@/Constants";

export default function Sidebar() {
    return (
        <>
            <aside className="w-16 max-h-full md:block hidden min-h-full bg-teal-900 | md:w-24 ">
                {/* application logo */}
                <div className="w-full h-16 flex items-center justify-center ">
                    <Link href="/">
                        <ApplicationLogo />
                    </Link>
                </div>

                {/* menu */}
                <div className="flex flex-col w-full items-center ">
                    {sidebarLinks.map((item) => (
                        <div className="w-full " key={item.id}>
                            <NavLink
                                key={item.id}
                                href={route(item.href)}
                                active={route().current(item.href)}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <item.icon className="w-6 h-6 | md:w-7 md:h-7 " />
                                    <span className="text-xs hidden | md:block">
                                        {item.title}
                                    </span>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
}
