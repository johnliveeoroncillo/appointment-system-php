import React from "react";
import Navbar from "../Navbar";
import { Link } from "@inertiajs/react";
// import { Link } from "react-router-dom";

const Hero = (props) => {
    // console.log("User exists:", props.checkuser);
    const checkforUser = props.checkuser;
    return (
        <>
            <Navbar user={checkforUser} />
            <div className="w-full px-10 py-10 h-[90vh] relative overflow-hidden flex flex-col justify-center | md:px-0 md:py-0 md:flex-row md:items-center">
                <img
                    src="images/bg-1.jpg"
                    alt="background image for hero section"
                    className="absolute w-full object-cover inset-0 hidden | md:h-[100vh] md:block"
                />
                <img
                    src="images/bg-1 1.png"
                    alt="background for mobile"
                    className="absolute w-full object-cover inset-0 | md:hidden"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/95 to-secondaryColor/30 min-h-auto"></div>
                <div className="text-center text-textColor flex flex-col justify-center | md:items-center">
                    <div className="flex flex-col text-center items-center mt-5 drop-shadow-lg rounded-md font-opensans | md:w-[80%]  md:items-center md:text-left">
                        <p className="px-3 py-1 text-xs border font-poppins slide-up | md:px-4 md:py-2 md:text-sm">
                            Welcome to Vicente Lao, MD Medical Clinic
                        </p>
                        <div className="flex flex-col items-center mt-2 | md:items-center z-10">
                            <h1 className="text-4xl text-center font-bold drop-shadow-md slide-up | md:text-6xl">
                                Your Trusted Source for{" "}
                                <span className="text-green-300 slide-up">
                                    Comprehensive Care
                                </span>
                                .
                            </h1>
                            <p className="text-base text-center w-[90%] slide-up | md:w-[50%] md:mt-3">
                                Good health is a state of mental, physical and
                                social well being and it does not just mean the
                                absence of disease!{" "}
                            </p>
                        </div>
                        <Link
                            href="register"
                            className="w-48 h-14 mt-10 slide-up uppercase shadow-xl rounded-md bg-primaryColor | hover:bg-secondaryColor flex items-center justify-center | md:border md:border-white/20 md:w-64 md:h-16"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
