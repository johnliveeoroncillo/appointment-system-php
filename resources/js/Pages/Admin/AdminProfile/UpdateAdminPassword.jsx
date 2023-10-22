import { useRef, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

export default function UpdateAdminPassword({ className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Password has been updated!");
                reset();
            },
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Update Password
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div className="mt-4 relative">
                    <InputLabel htmlFor="current_password" value="Password" />

                    <TextInput
                        id="current_password"
                        type={passwordVisible ? "text" : "password"}
                        name="current_password"
                        value={data.current_password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) =>
                            setData("current_password", e.target.value)
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
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="New Password" />

                    <TextInput
                        id="password"
                        type={passwordVisible ? "text" : "password"}
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type={passwordVisible ? "text" : "password"}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
