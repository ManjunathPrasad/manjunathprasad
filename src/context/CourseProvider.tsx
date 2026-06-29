import {
    useState,
    type ReactNode
} from "react";

import { dbmsCourse } from "../data/teaching/dbms";

import { CourseContext } from "./CourseContext";

type Props = {

    children: ReactNode;

};

export function CourseProvider({

    children

}: Props) {

    const [course, setCourse] = useState(dbmsCourse);

    return (

        <CourseContext.Provider
            value={{
                course,
                setCourse
            }}
        >

            {children}

        </CourseContext.Provider>

    );

}