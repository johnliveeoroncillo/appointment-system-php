import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { toast } from "react-toastify";

export default function UpdateAdminInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            mobile_number: user.mobile_number,
            specialization: user.specialization,
            license_address: user.license_address,
            clinic_address: user.clinic_address,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("doctor.profile.update"), {
            onSuccess: () => {
                toast.success("Profile has been updated!");
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <InputLabel
                        htmlFor="mobile_number"
                        value="Contact Number"
                    />

                    <TextInput
                        id="mobile_number"
                        type="number"
                        className="mt-1 block w-full"
                        value={data.mobile_number || ""}
                        onChange={(e) =>
                            setData("mobile_number", e.target.value)
                        }
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.mobile_number}
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="specialization"
                        value="Specialization"
                    />

                    <TextInput
                        id="specialization"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.specialization || ""}
                        onChange={(e) =>
                            setData("specialization", e.target.value)
                        }
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.specialization}
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="license_address"
                        value="License Address"
                    />

                    <TextInput
                        id="license_address"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.license_address || ""}
                        onChange={(e) =>
                            setData("license_address", e.target.value)
                        }
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.license_address}
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="clinic_address"
                        value="Clinic Address"
                    />

                    <TextInput
                        id="clinic_address"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.clinic_address || ""}
                        onChange={(e) =>
                            setData("clinic_address", e.target.value)
                        }
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.clinic_address}
                    />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
