export interface CurrentCourse {
    id: number;

    code: string;

    title: string;

    semester: string;

    credits: number;

    theoryHours: number;
    completedTheoryHours: number;

    labHours: number;
    completedLabHours: number;

    students: number;

    status: string;

    color: string;

    route: string;
}