import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import { Link } from "@inertiajs/react";

const Navbar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const onToggle = () => {
        setToggleMenu((prev) => !prev);
    };

    const menuStyle = {
        display: toggleMenu ? "block" : "none",
        // Add other menu styles here
    };

    const [navColor, setNavColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);

        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <>
            <nav
                className={`${
                    navColor ? "bg-primaryColor" : "bg-transparent"
                } fixed z-50 min-w-full h-[50px] flex items-center justify-between px-5 pl-2 font-roboto drop-shadow-lg | md:h-[100px] md:px-20`}
            >
                <div>
                    <Link href="/">
                        <img
                            src="images/logo-white.png"
                            alt="website logo"
                            className="w-[100px] h-auto | md:w-[150px]"
                        />
                    </Link>
                </div>
                <button onClick={onToggle} className="md:hidden">
                    {toggleMenu ? (
                        <XMarkIcon className="w-[28px] h-auto text-textColor" />
                    ) : (
                        <Bars3Icon className="w-[28px] h-auto text-textColor" />
                    )}
                </button>
                {/* desktop navigation */}
                <ul className="justify-between flex-1 text-sm pl-72 text-textColor hidden | md:flex">
                    <div className="flex">
                        <li className="slide-up px-4 py-2 border-[1px] border-transparent flex items-center justify-center | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                            <Link href="/" className="uppercase">
                                Home
                            </Link>
                        </li>
                        <li className="slide-up px-4 py-2 border-[1px] border-transparent flex items-center justify-center | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                            <a href="#doctor" className="uppercase">
                                Doctor
                            </a>
                        </li>
                        <li className="slide-up px-4 py-2 border-[1px] border-transparent flex items-center justify-center | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                            <a href="#services" className="uppercase">
                                Services
                            </a>
                        </li>
                        <li className="slide-up px-4 py-2 border-[1px] border-transparent flex items-center justify-center | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20">
                            <a href="#about" className="uppercase">
                                About
                            </a>
                        </li>
                    </div>
                    {/* checking if auth is define and user exist */}
                    {props.user ? (
                        <Link
                            href={route("home")}
                            className="slide-up px-4 py-2 border-[1px] border-transparent flex items-center justify-center uppercase | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className="flex justify-center">
                            <Link
                                href="/login"
                                className="slide-up px-4 py-2 border-[1px] border-transparent flex items-center justify-center uppercase | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="slide-up px-4 py-2 border-[1px] border-transparent flex items-center justify-center uppercase | hover:bg-gray-200/20 hover:rounded-md hover:border-[1px] hover:border-white/20"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </ul>
                {/* mobile navigation */}
                <ul
                    className={`absolute inset-x-auto w-56 text-textColor right-1 h-80 rounded-md top-12 bg-secondaryColor border-[1px] border-white/20 shadow-2xl overflow-hidden slide-up flex-col px-5 py-14 text-sm ${
                        toggleMenu ? "flex" : "hidden"
                    }`}
                >
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <a href="#doctor">Doctor</a>
                    </li>
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <a href="#services">Services</a>
                    </li>
                    <li className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20">
                        <a href="#about">About</a>
                    </li>

                    {props.user ? (
                        <Link
                            href={route("home")}
                            className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className="flex justify-center flex-col | md:flex-row">
                            <Link
                                href="/login"
                                className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="slide-up px-4 py-2 border-[1px] border-transparent | hover:bg-gray-200/30 hover:rounded-md hover:border-[1px] hover:border-white/20"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
