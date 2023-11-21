import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="flex flex-col items-center w-full h-auto px-16 py-20 bg-primaryColor text-bgColor">
                <footer className="flex flex-col items-center justify-center">
                    <button
                        className="w-14 h-14 rounded-full bg-primaryColor z-20 -mt-28 flex items-center justify-center border-4 border-white"
                        onClick={goToTop}
                    >
                        <ChevronUpIcon className="w-10 h-10 text-white" />
                    </button>
                    <img
                        className="w-44 h-auto | md:w-52"
                        src="images/logo-white.png"
                        alt="website logo"
                        data-aos="fade-left"
                    />
                    <small className="text-center opacity-50">
                        © 2023 Vicente Lao, MD Medical Clinic. All rights
                        reserved.
                    </small>
                </footer>
            </div>
        </>
    );
};

export default Footer;
