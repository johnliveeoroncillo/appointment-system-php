import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

export default function CalendarComponent({ onDateChange, errors, id }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = async (date) => {
        setSelectedDate(date);

        try {
            const response = await axios.get("/api/calendar/available-times", {
                params: { selectedDate: date.toISOString().split("T")[0] },
            });

            onDateChange(date, response.data.availableTimes);
        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };
    return (
        <div>
            <InputLabel htmlFor="date">
                Select Date to see available times:
            </InputLabel>
            <DatePicker
                id={id}
                selected={selectedDate}
                onChange={handleDateChange}
                className="border-2 slide-up mt-1 text-sm rounded-sm border-gray-300 w-[39.2vw]"
            />
            <InputError message={errors.date} className="mt-2" />
        </div>
    );
}
