import {MonthCalendarModel} from "../../models/MonthCalendarModel";
import CellHoursCalendar from "./CellHoursCalendar";
import CellEventCalendar from "./CellEventCalendar";
import React from "react";
import {CalendarModel} from "../../models/CalendarModel";

export default function BodyCalendar({
                                         currentNumberMonth,
                                         calendar
                                     }: { currentNumberMonth: number, calendar: CalendarModel }) {
    const currentMonth = calendar[currentNumberMonth];
    console.log('currentMonth', currentMonth);
    if (currentMonth !== undefined) {
        return (<>
            <div className="overflow-y-auto">
                <div className="flex flex-col">
                    <div className="py-1 flex justify-evenly items-center">
                        <div className={"flex-1 text-center"}></div>
                        {currentMonth?.days.map((day: any, index: number) => {
                            return (
                                <div className={"border flex-1 text-center"} key={index}>
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex gap-0.5 justify-evenly">
                        <div className="flex-1 flex flex-col">
                            {currentMonth?.hours.map((hour, index: number) => {
                                return <CellHoursCalendar key={index} useHour={hour}/>;
                            })}
                        </div>
                        {currentMonth?.weeks[0].map((week, index: number) => {
                            return (<div className={`flex-1 flex flex-col text-center border`}
                                         key={index}>
                                    {week.hours.map((hour, index: number) => (
                                        <CellEventCalendar key={index} hour={hour} week={week}/>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>);
    } else {
        return <></>
    }
};