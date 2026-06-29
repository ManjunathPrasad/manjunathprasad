export interface CourseResource {

    id: number;

    category:
        | "Lecture Notes"
        | "Presentations"
        | "Lab Manuals"
        | "SQL Scripts"
        | "Assignments"
        | "Reference Books"
        | "Previous Question Papers";

    title: string;

    uploaded: boolean;

    file: string;

}

export const dbmsResources: CourseResource[] = [

    {
        id: 1,
        category: "Lecture Notes",
        title: "Unit 1 - Introduction to Database Systems",
        uploaded: false,
        file: ""
    },

    {
        id: 2,
        category: "Presentations",
        title: "Introduction to Database Systems",
        uploaded: false,
        file: ""
    },

    {
        id: 3,
        category: "Lab Manuals",
        title: "Laboratory Manual",
        uploaded: false,
        file: ""
    },

    {
        id: 4,
        category: "SQL Scripts",
        title: "Practice SQL Queries",
        uploaded: false,
        file: ""
    },

    {
        id: 5,
        category: "Assignments",
        title: "Assignment 1",
        uploaded: false,
        file: ""
    },

    {
        id: 6,
        category: "Reference Books",
        title: "Database System Concepts",
        uploaded: false,
        file: ""
    },

    {
        id: 7,
        category: "Previous Question Papers",
        title: "Summer Semester Question Paper",
        uploaded: false,
        file: ""
    }

];