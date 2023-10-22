import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Register() {
    const [doctorForm, setDoctorForm] = useState(false);
    const [adminForm, setAdminForm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
        specialization: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("register"));
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };
    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="text-center text-2xl font-bold leading-9 tracking-wide text-[#191919] slide-up">
                    Create new account
                </h1>
                <form onSubmit={submit}>
                    <div className="flex flex-col">
                        <div className="w-full">
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 w-full"
                                autoComplete="name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        {/* hidden input field*/}
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 relative">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <button
                                type="button"
                                className="absolute transform -translate-y-1/2 right-3 top-[2.8rem] focus:outline-none"
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
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 relative">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type={passwordVisible ? "text" : "password"}
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route("login")}
                                className="underline slide-up text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
