import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="my-10 text-center text-2xl font-bold leading-9 tracking-wide text-[#191919] slide-up">
                    Login to your account
                </h1>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4 relative">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <button
                            type="button"
                            className="slide-up absolute transform -translate-y-1/2 right-3 top-[2.2rem] focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? (
                                <EyeIcon className="w-[20px] text-secondaryColor h-auto" />
                            ) : (
                                <EyeSlashIcon className="w-[20px] text-secondaryColor/25 h-auto" />
                            )}
                        </button>

                        <InputError
                            message={errors.password}
                            className="mt-2 text-xs"
                        />
                    </div>
                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ml-2 slide-up text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="slide-up underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                    <div className="slide-up w-full mt-10 underline text-gray-500 hover:text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Link href={route("doctor.login")}>
                            Login as doctor
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
