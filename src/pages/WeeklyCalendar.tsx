import http from "../services/http";
import {JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState} from "react";

export default function WeeklyCalendar() {
    const [ecole, setEcole] = useState('' as any);
    const [numeroSemaine, setNumeroSemaine] = useState(0 as number);
    const [nameMonth, setNameMonth] = useState('' as string);
    const [hours, setHours] = useState([] as any);
    const [nameDays, setNameDays] = useState([] as any);
    const [weeks, setWeeks] = useState([[]] as any);

    const getEcole = async () => {
        const response = await http.get('/ecoles/1')
        setEcole(response.data.data)
    }
    const getCalendar = async () => {
        const response = await http.get('/calendar/1')
        const data = response.data.data.calendars_json[0] // recuperer à ce niveau du mois en cours
        setHours(data.hours)
        setNameMonth(data.month_name)
        setNameDays(data.days)
        setWeeks(data.weeks)
    }
    useEffect(() => {
        getEcole()
        getCalendar()
    }, [])
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between">
                <button onClick={() => {
                    setNumeroSemaine(numeroSemaine - 1)
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                        disabled={numeroSemaine === 0}>
                    semaine précédente
                </button>
                <h3 className="text-center text-3xl font-bold">
                    Emploi du temps de l'école
                    <span className="text-red-600"> {ecole?.name}</span></h3>
                <button onClick={() => {
                    setNumeroSemaine(numeroSemaine + 1)
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                        disabled={numeroSemaine === weeks.length}>
                    semaine suivante
                </button>
            </div>
            <span>{nameMonth}</span>
            <div className="flex gap-1">
                <div className="p-2 border w-24 flex flex-col mt-9">
                    {hours.map((hour: { is_pause: any; hour: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => {
                        return (<div key={index}
                                     className={hour.is_pause ? 'text-red-600' : 'text-blue-600'}>{hour?.hour}</div>);
                    })}
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="h-9  flex justify-evenly items-center">
                        {nameDays.map((nameDay, index) => {
                            return (
                                <div className={'border flex-1 text-center'} key={index}>{nameDay}</div>);
                        })}
                    </div>
                    <div className="flex-1 flex gap-0.5 justify-evenly">
                        {weeks[numeroSemaine].map((week, index) => {
                            return (<div
                                className={`flex flex-col flex-1 text-center border ${week?.is_weekend ? 'bg-red-400' : 'bg-blue-100'}`}
                                key={index}>
                                {week?.hours.map((hour, index) => {
                                    return (<div key={index}
                                                 className={hour.is_pause ? 'bg-red-600' : ''}>{hour?.event.name}</div>)
                                })}
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}