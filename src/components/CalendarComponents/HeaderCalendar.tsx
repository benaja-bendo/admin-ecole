import {MonthCalendarModel} from "../../models/MonthCalendarModel";
import Tooltip from "@mui/joy/Tooltip";
import {IconButton, Typography} from "@mui/joy";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import {CalendarModel} from "../../models/CalendarModel";


export default function HeaderCalendar(
    {
        calendar,
        currentNumberMonth,
        setCurrentNumberMonth,
        currentNumberWeek,
        setCurrentNumberWeek
    }: {
        calendar: CalendarModel,
        currentNumberMonth: number,
        setCurrentNumberMonth: (b: number) => void
        currentNumberWeek: number,
        setCurrentNumberWeek: (b: number) => void
    }
) {
    const currentMonth = calendar[currentNumberMonth];
    console.log('currentNumberMonth', currentNumberMonth);
    const handleChangeMonth = (type: string): void => {
        if (type === "next") {
            setCurrentNumberMonth(currentNumberMonth + 1);
        } else if (type === "previous") {
            setCurrentNumberMonth(currentNumberMonth - 1);
        }
    }
    const handleChangeWeek = (type: string): void => {
        if (type === "next") {
            setCurrentNumberWeek(currentNumberWeek + 1);
        } else if (type === "previous") {
            setCurrentNumberWeek(currentNumberWeek - 1);
        }
    }
    return (
        <>
            <div className="flex items-center">
                <div className="flex items-center">
                    <Tooltip title="mois précedent" variant="soft">
                        <IconButton variant="plain" onClick={() => handleChangeMonth('previous')}>
                            <KeyboardDoubleArrowLeftIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="semaine précedente" variant="soft">
                        <IconButton variant="plain" onClick={() => handleChangeWeek('previous')}>
                            <KeyboardArrowLeftIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Typography level="h4" component="h2" fontWeight="md">
                        {currentMonth?.month_name} - semaine {currentNumberWeek + 1}
                    </Typography>
                </div>
                <div className="flex items-center">
                    <Tooltip title="semaine suivante" variant="soft">
                        <IconButton variant="plain" onClick={() => handleChangeWeek('next')}>
                            <KeyboardArrowRightIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="mois suivant" variant="soft">
                        <IconButton variant="plain" onClick={() => handleChangeMonth('next')}>
                            <KeyboardDoubleArrowRightIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};