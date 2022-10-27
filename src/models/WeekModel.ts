export type WeekModel = {
    day_name: string | null;
    month_name: string | null;
    number_day: number | null;
    year: number | null;
    date: string | null;
    is_weekend: boolean;
    hours: [
        {
            hour: string;
            is_pause: boolean;
            events: {
                name: string | null;
                teacher: string | null;
                room: string | null;
                color: string | null;
            }
        }
    ]
}