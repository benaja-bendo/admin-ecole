import http from "../services/http";
import React, {
    useEffect,
    useState,
} from "react";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import {CircularProgress, Divider, Sheet, Typography} from "@mui/joy";
import {MonthCalendarModel} from "../models/MonthCalendarModel";
import {CalendarModel} from "../models/CalendarModel";
import HeaderCalendar from "../components/CalendarComponents/HeaderCalendar";
import BodyCalendar from "../components/CalendarComponents/BodyCalendar";
import {BubbleLoading} from "../icons/BubbleLoading";
import {getCurrentMonthName, getFullYear, getNumberCurrentMonth} from "../utils/functions";
import CreateCalendar from "../components/CalendarComponents/CreateCalendar";

export default function WeeklyCalendarPage() {
    const idEcole = 1;
    const [loading, setLoading] = useState(true);
    const [showSheet, setShowSheet] = useState(false);
    const [schoolYear, setSchoolYear] = useState(getFullYear() as number);
    const [currentNumberMonth, setCurrentNumberMonth] = useState(getNumberCurrentMonth() as number);
    const [currentNameMonth, setCurrenNametMonth] = useState(getCurrentMonthName() as string);
    const [currentNumberWeek, setCurrentNumberWeek] = useState(0 as number);
    const [calendar, setCalendar] = useState<CalendarModel>([] as any);
    const [currentMonth, setCurrentMonth] = useState<MonthCalendarModel>({} as MonthCalendarModel);
    const httpGetCalendar = async (idEcole: number) => {
        try {
            const response = await http.get(`/calendar?ecole_id=${idEcole}`);
            if (response.data.data.length === 0) {
                setShowSheet(true);
            } else {
                const data = response.data.data[0].calendars_json;
                setCalendar(data);
                setLoading(false);
            }
        } catch (e: any) {
            setLoading(false);
            console.error('error', e);
            if (e?.response.status === 404) {
                console.log('404');
                setShowSheet(true);
            }
        }
    };
    useEffect(() => {
        setCurrentMonth(calendar[currentNumberMonth]);
    }, [calendar]);
    useEffect(() => {
        httpGetCalendar(idEcole);
    }, []);

    if (loading) {
        return <div className="h-screen w-full grid place-items-center">
            {/*<BubbleLoading className="h-14 w-14"/>*/}
            <CircularProgress variant="solid" size="lg" />
        </div>;
    } else {
        if (showSheet) {
            return <div className="h-screen w-full grid place-items-center">
                <CreateCalendar/>
            </div>
        } else {
            return (<>
                <BasicBreadcrumbs/>
                <Sheet
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                    <Typography level="h3" component="h2" fontWeight="md">
                        Emploi du temps
                    </Typography>
                    <Divider sx={{my: "16px"}}/>
                    <div className="border rounded-md p-1">
                        <HeaderCalendar
                            currentNumberWeek={currentNumberWeek}
                            setCurrentNumberWeek={setCurrentNumberWeek}
                            calendar={calendar}
                            currentNumberMonth={currentNumberMonth}
                            setCurrentNumberMonth={setCurrentNumberMonth}/>
                        <BodyCalendar
                            currentNumberWeek={currentNumberWeek}
                            calendar={calendar}
                            currentNumberMonth={currentNumberMonth}/>
                    </div>
                </Sheet>
            </>)
        }
    }
}