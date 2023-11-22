import React from "react";
import InputError from "./InputError";

export default function AvailableTimes({ availableTimes, errors }) {
    return (
        <div>
            <h3>Available Times:</h3>
            <select
                name="availableTime"
                id="availableTime"
                className="border-2 slide-up mt-1 text-sm rounded-sm border-gray-300 w-full"
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <InputError message={errors.availableTimes} className="mt-2" />
        </div>
    );
}
