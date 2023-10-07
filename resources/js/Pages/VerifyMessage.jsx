import { Link } from "@inertiajs/react";
import React from "react";

export default function VerifyMessage() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="w-full text-center">
                    <h1 className="text-2xl text-gray-700 ">
                        Your Account will be verified by the Admin
                    </h1>
                    <Link href="/" className="underline text-blue-400 text-xl">
                        Back to home
                    </Link>
                </div>
            </div>
        </>
    );
}
