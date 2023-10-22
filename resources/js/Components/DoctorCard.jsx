import { useEffect } from "react";
import AOS from "aos";

const DoctorCard = ({ name, title, quote }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="flex w-full flex-col overflow-hidden h-auto | md:flex-row md:h-96">
                <div className="relative w-full h-96 px-9 py-9  bg-primaryColor | md:w-[50%]">
                    <img
                        src="images/doctor.jpg"
                        alt="image of a doctor"
                        className="h-[300px] w-[300px] rounded-md  | md:absolute md:inset-0 md:left-40 md:top-12"
                        data-aos="fade-right"
                    />
                    <div className="absolute inset-0 bg-black/30 min-h-auto"></div>
                </div>
                <div className="w-full h-auto flex flex-col justify-center pt-4 px-16 text-center | md:w-[50%] md:text-left">
                    <h1
                        className="text-2xl font-medium font-roboto"
                        data-aos="fade-left"
                    >
                        {name}
                    </h1>
                    <small data-aos="fade-left">{title}</small>
                    <blockquote
                        className="mt-5 font-roboto"
                        data-aos="fade-left"
                    >
                        <p className="italic">"{quote}"</p>
                        <footer className="mt-2 text-sm">- {name}</footer>
                    </blockquote>
                </div>
            </div>
        </>
    );
};

export default DoctorCard;
