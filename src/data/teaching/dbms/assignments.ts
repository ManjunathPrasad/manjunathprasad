export interface Assignment {

    id: number;

    title: string;

    dueDate: string;

    status: "Released" | "Upcoming" | "Closed";

}

export const dbmsAssignments: Assignment[] = [

    {
        id: 1,
        title: "Assignment 1",
        dueDate: "15 Jul 2026",
        status: "Released"
    }

];