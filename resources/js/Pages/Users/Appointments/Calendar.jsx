// ... (your imports)

// import { generateDate, months } from "@/Constants/Calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import { useState } from "react";

export default function Calendar() {
    const days = ["S", "M", "T", "W", "T", "F", "S"];

    const currentDate = dayjs();

    const [dateToday, setDateToday] = useState(currentDate);

    const [selectedDate, setSelectedDate] = useState(currentDate);

    // const handleDateClick = (clickedDate) => {
    //     setSelectedDate(clickedDate);
    //     setDateToday(clickedDate);
    // };

    return (
        // <div className="w-full">
        //     <h1 className="text-2xl font-bold font-sans">
        //         {months[dateToday.month()]}, {dateToday.year()}
        //     </h1>
        //     <div className="flex w-full items-center gap-5">
        //         <div className="w-10 h-10 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
        //             <ChevronLeftIcon
        //                 className="w-6 h-6 "
        //                 onClick={() => {
        //                     setDateToday(
        //                         dateToday.month(dateToday.month() - 1)
        //                     );
        //                 }}
        //             />
        //         </div>
        //         <div className="w-full">
        //             <div className="w-full grid grid-cols-7 h-14 ">
        //                 {days.map((day, index) => {
        //                     return (
        //                         <h1
        //                             key={index}
        //                             className="h-14 flex items-center justify-center font-bold "
        //                         >
        //                             {day}
        //                         </h1>
        //                     );
        //                 })}
        //             </div>
        //             <div className="w-full grid grid-cols-7 place-content-center">
        //                 {generateDate(dateToday.month(), dateToday.year()).map(
        //                     ({ date, currentMonth, disabled }, index) => {
        //                         return (
        //                             <div
        //                                 key={index}
        //                                 className="h-14  flex items-center justify-center"
        //                             >
        //                                 <h1
        //                                     className={`${
        //                                         currentMonth
        //                                             ? selectedDate
        //                                                   .toDate()
        //                                                   .toDateString() ===
        //                                               date
        //                                                   .toDate()
        //                                                   .toDateString()
        //                                                 ? "bg-primaryColor text-white"
        //                                                 : disabled
        //                                                 ? "text-gray-400 cursor-not-allowed bg-transparent "
        //                                                 : "text-gray-700  hover:bg-gray-300"
        //                                             : "text-gray-400"
        //                                     } h-10 w-10 flex items-center justify-center rounded-full cursor-pointer `}
        //                                     onClick={() => {
        //                                         if (!disabled) {
        //                                             setSelectedDate(date);
        //                                             // handleDateClick(date);
        //                                         }
        //                                     }}
        //                                 >
        //                                     {date.date()}
        //                                 </h1>
        //                             </div>
        //                         );
        //                     }
        //                 )}
        //             </div>
        //         </div>
        //         <div className="w-10 h-10 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
        //             <ChevronRightIcon
        //                 className="w-6 h-6"
        //                 onClick={() => {
        //                     setDateToday(
        //                         dateToday.month(dateToday.month() + 1)
        //                     );
        //                 }}
        //             />
        //         </div>
        //     </div>

        //     {/* <div>
        //         <h1>
        //             the Selected date is {selectedDate.toDate().toDateString()}
        //         </h1>
        //     </div> */}
        // </div>
        <>hello</>
    );
}
