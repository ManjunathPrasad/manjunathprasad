import {
    createContext,
    type Dispatch,
    type SetStateAction
} from "react";

import { dbmsCourse } from "../data/teaching/dbms";

export type CourseContextType = {

    course: typeof dbmsCourse;

    setCourse: Dispatch<SetStateAction<typeof dbmsCourse>>;

};

export const CourseContext = createContext<CourseContextType>({

    course: dbmsCourse,

    setCourse: () => {}

});