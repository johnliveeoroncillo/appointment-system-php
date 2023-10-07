import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import "../../css/GuestLayout.css";

export default function Guest({ children }) {
    return (
        <>
            <div className="overflow-hidden skew flex justify-center | md:justify-end">
                <div className="w-full h-screen bg-white px-10 py-10 | md:w-[40%]">
                    <div className="relative flex flex-col items-center justify-center w-full h-auto">
                        <button className="w-[50px] h-[50px] bg-white rounded-full absolute inset-0 flex items-center justify-center -left-5 | hover:text-white hover:bg-teal-900 md:-left-16">
                            <Link href="/">
                                <ChevronLeftIcon className="w-[28px] h-[28px] text-primaryColor" />
                            </Link>
                        </button>
                        <Link href="/">
                            <img
                                src="images/logo-green.png"
                                alt="Logo image"
                                className="h-auto w-[150px] slide-up"
                            />
                        </Link>
                        <h2 className="text-2xl font-semibold text-center font-roboto slide-up">
                            Vicente Lao, MD Medical Clinic
                        </h2>
                        <p className="mt-2 text-sm font-roboto slide-up">
                            Your Health, Our Priority
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}
