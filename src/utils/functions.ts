export function getNumberCurrentMonth(): number {
    const date = new Date();
    return date.getMonth();
}

export function getCurrentMonthName(): string {
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
}

export function getFullYear(): number {
    const date = new Date();
    return date.getFullYear();
}