import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminAddUser({ auth, users }) {
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
        post(route("user.store-user.storeUser"));
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex w-full justify-between">
                    <span>
                        <h1 className=""> Add Users {users.name}</h1>
                    </span>
                </div>
            }
        >
            <Head title="Users" />
            <div className="h-[81.3vh] w-full md:px-10">
                <div className="w-full md:px-10 flex justify-center">
                    <div className="w-[60vw] bg-white px-5 mt-10 py-5 rounded-md">
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
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        id="password"
                                        type={
                                            passwordVisible
                                                ? "text"
                                                : "password"
                                        }
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
                                        type={
                                            passwordVisible
                                                ? "text"
                                                : "password"
                                        }
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
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={processing}
                                    >
                                        Add User
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
