import { useContext } from "react";

import { CourseContext } from "./CourseContext";

export function useCourse() {

    return useContext(CourseContext);

}