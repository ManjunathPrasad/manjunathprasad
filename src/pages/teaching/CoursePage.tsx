import Layout from "../../components/layout/Layout";

import CourseHero from "../../components/Teaching/CourseLayout/CourseHero";
import CourseNavigation from "../../components/Teaching/CourseLayout/CourseNavigation";
import CourseOverview from "../../components/Teaching/CourseLayout/CourseOverview";
import CourseDashboard from "../../components/Teaching/CourseLayout/CourseDashboard";
import CourseSyllabus from "../../components/Teaching/CourseLayout/CourseSyllabus";
import CourseJournal from "../../components/Teaching/CourseLayout/CourseJournal";
import LaboratoryStudio from "../../components/Teaching/CourseLayout/LaboratoryStudio";
import Assignments from "../../components/Teaching/CourseLayout/Assignments";
import ResourceLibrary from "../../components/Teaching/CourseLayout/ResourceLibrary";
import Announcements from "../../components/Teaching/CourseLayout/Announcements";
import { dbmsCourse } from "../../data/teaching/dbms";

export default function CoursePage() {
    return (
        <Layout>

            <CourseHero course={dbmsCourse} />

            <CourseNavigation />

            <CourseOverview />
            
            <Announcements />

            <CourseDashboard />

            <CourseSyllabus />

            <CourseJournal />

            <LaboratoryStudio />

            <Assignments />

            <ResourceLibrary />

        </Layout>
    );
}