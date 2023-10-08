import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../style/toastStyle.css";
// import InputNumber from "@/Components/InputNumber";

export default function AppointmentForm({ auth }) {
    // const services = props.services;
    // const doctors = props.doctors;

    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        name: auth.user.name,
        email: auth.user.email,
        date: "",
        time: "",
        doctors: "",
        service: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(
            route("appointment/create.store", {
                onSuccess: () => {
                    // toast.success("Schedule has been created!", {
                    //     position: toast.POSITION.BOTTOM_RIGHT,
                    //     className: "toast-success",
                    // });
                },
            })
        );
    };

    const [minDate, setMinDate] = useState("");

    useEffect(() => {
        // Get the current date in ISO format (YYYY-MM-DD)
        const currentDate = new Date().toISOString().split("T")[0];
        setMinDate(currentDate);
    }, []);

    const [minTime, setMinTime] = useState("");

    useEffect(() => {
        // Get the current date in ISO format (YYYY-MM-DD)
        const currentDate = new Date().toISOString().split("T")[0];
        setMinDate(currentDate);

        // Get the current time in HH:MM format
        const now = new Date();
        const currentHours = now.getHours().toString().padStart(2, "0");
        const currentMinutes = now.getMinutes().toString().padStart(2, "0");
        const currentTime = `${currentHours}:${currentMinutes}`;
        setMinTime(currentTime);
    }, []);

    return (
        <AuthenticatedLayout
            auth={auth.user}
            // errors={props.errors}
            header={
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold leading-tight text-gray-800">
                        Create Appointment{" "}
                    </h1>
                </div>
            }
        >
            <Head title="Set Appointment" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex md:justify-center">
                    <div className="overflow-hidden bg-white md:w-[79vw] shadow-sm sm:rounded-lg">
                        <div className="w-full p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <div className=" p-5">
                                        <h1 className="text-2xl font-semibold">
                                            Contact Information
                                        </h1>
                                        <div className="space-y-3 pt-5">
                                            <InputLabel
                                                htmlFor="name"
                                                value="Name"
                                            />
                                            <TextInput
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                className="w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter your name"
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="space-y-3 pt-5">
                                            <InputLabel
                                                htmlFor="email"
                                                value="Email"
                                            />
                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter your email"
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div className=" p-5">
                                        <h1 className="text-2xl font-semibold">
                                            Date and Time
                                        </h1>
                                        <div className="space-y-3 pt-5">
                                            <InputLabel
                                                htmlFor="date"
                                                value="Preferred Date"
                                            />
                                            <TextInput
                                                type="date"
                                                id="date"
                                                name="date"
                                                min={minDate}
                                                value={data.date}
                                                onChange={(e) =>
                                                    setData(
                                                        "date",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full"
                                            />
                                            <InputError
                                                message={errors.date}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="space-y-3 pt-5">
                                            <InputLabel
                                                htmlFor="time"
                                                value="Preferred Time"
                                            />
                                            <select
                                                name="time"
                                                id="time"
                                                value={data.time}
                                                onChange={(e) =>
                                                    setData(
                                                        "time",
                                                        e.target.value
                                                    )
                                                }
                                                className="slide-up block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-secondaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6 "
                                            >
                                                <option
                                                    value="default"
                                                    selected
                                                >
                                                    --Select Time--
                                                </option>
                                                <option value="08:00">
                                                    8:00 AM
                                                </option>
                                                <option value="09:00">
                                                    9:00 AM{" "}
                                                </option>
                                                <option value="10:00">
                                                    10:00 AM{" "}
                                                </option>
                                                <option value="11:00">
                                                    11:00 AM{" "}
                                                </option>
                                                <option value="12:00">
                                                    12:00 PM{" "}
                                                </option>
                                                <option value="13:00">
                                                    1:00 PM{" "}
                                                </option>
                                                <option value="14:00">
                                                    2:00 PM{" "}
                                                </option>
                                                <option value="15:00">
                                                    3:00 PM{" "}
                                                </option>
                                                <option value="16:00">
                                                    4:00 PM{" "}
                                                </option>
                                            </select>
                                            <InputError
                                                message={errors.time}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="space-y-3 pt-5">
                                            <InputLabel
                                                htmlFor="doctor"
                                                value="Select Doctor"
                                            />
                                            <select
                                                name="doctors_id"
                                                id="doctor"
                                                value={data.doctors_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "doctors_id",
                                                        e.target.value
                                                    )
                                                }
                                                className="slide-up block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-secondaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6 "
                                            >
                                                <option
                                                    value="default"
                                                    selected
                                                >
                                                    --Select Doctor--
                                                </option>
                                                <option value="1">
                                                    Dr. Vicente Lao
                                                </option>
                                            </select>
                                            <InputError
                                                message={errors.doctors_id}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="space-y-3 pt-5">
                                            <InputLabel
                                                htmlFor="service"
                                                value="Select Service"
                                            />
                                            <select
                                                name="service"
                                                id="service"
                                                value={data.service}
                                                onChange={(e) =>
                                                    setData(
                                                        "service",
                                                        e.target.value
                                                    )
                                                }
                                                className="slide-up block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-secondaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6 "
                                            >
                                                <option
                                                    value="default"
                                                    selected
                                                >
                                                    --Select Services--
                                                </option>
                                                {/* {services.map((service) => {
                                                    return (
                                                        <option
                                                            key={service.id}
                                                            value={service.id}
                                                        >
                                                            {
                                                                service.service_name
                                                            }
                                                        </option>
                                                    );
                                                })} */}
                                            </select>
                                            <InputError
                                                message={errors.service}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <PrimaryButton
                                                disabled={processing}
                                            >
                                                Book
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
