import {HourModel} from "../../models/HourModel";
import React from "react";

export default  function CellHoursCalendar({useHour}: { useHour: HourModel }) {
    return (
        <div className={`${useHour.is_pause ? "text-red-600" : "text-blue-600"} border`}>
            {useHour?.hour}
        </div>
    );
}