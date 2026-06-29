import Layout from "../components/layout/Layout";

import TeachingHero from "../components/Teaching/Portal/TeachingHero";
import CurrentSemesterCourses from "../components/Teaching/CurrentSemesterCourses";
import TeachingStats from "../components/Teaching/TeachingStats";
import SemesterTimeline from "../components/Teaching/SemesterTimeline";
import QuickLinks from "../components/Teaching/QuickLinks";
import TeachingPhilosophy from "../components/Teaching/Portal/TeachingPhilosophy";

export default function TeachingPage() {

    return (

        <Layout>

            <TeachingHero />

            <CurrentSemesterCourses />

            <TeachingStats />

            <SemesterTimeline />

            <QuickLinks />

            <TeachingPhilosophy />

        </Layout>

    );

}