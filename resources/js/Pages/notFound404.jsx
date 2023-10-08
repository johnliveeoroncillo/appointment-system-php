import BackButton from "@/Components/BackButton";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function notFound404() {
    return (
        <>
            <Head title="404 Not Found"></Head>
            <div className="w-full h-screen flex text-gray-800 flex-col items-center justify-center">
                <h1 className="md:text-8xl text-3xl py-5 text-red-400 text-center font-bold font-serif capitalize">
                    404 Oops!!!!
                </h1>
                <p className="w-[60vw] text-center text-sm md:text-md">
                    It seems like we've hit a bit of a roadblock in retrieving
                    your data. It's not you; it's us. We apologize for any
                    inconvenience and appreciate your patience as we diagnose
                    and treat this hiccup in our system.
                </p>
                <BackButton href="/medical-chart" />
            </div>
        </>
    );
}
