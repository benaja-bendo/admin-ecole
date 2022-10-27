import {HourModel} from "./HourModel";
import {WeekModel} from "./WeekModel";

export type MonthCalendarModel = {
    month_name: string;
    hours: HourModel[];
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    weeks: [WeekModel[]];
}