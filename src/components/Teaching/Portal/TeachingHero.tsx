import {
    BookOpen,
    Users,
    GraduationCap,
    FlaskConical
} from "lucide-react";

import HeroButton from "../CourseLayout/HeroButton";
import HeroStatsCard from "../CourseLayout/HeroStatsCard";

export default function TeachingHero() {

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-blue-50
                via-white
                to-white
                border-b
                border-slate-200
            "
        >

            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top_right,#dbeafe_0%,transparent_40%)]
                    opacity-70
                "
            />

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-6
                    py-24
                "
            >

                {/* Heading */}

                <div
                    className="
                        max-w-4xl
                    "
                >

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-600
                            text-sm
                            font-semibold
                        "
                    >
                        Teaching
                    </p>

                    <h1
                        className="
                            mt-5
                            text-5xl
                            md:text-7xl
                            font-black
                            leading-tight
                            text-slate-900
                        "
                    >
                        Teaching is not just
                        <br />

                        delivering lectures.

                    </h1>

                    <p
                        className="
                            mt-8
                            max-w-3xl
                            text-xl
                            leading-9
                            text-slate-600
                        "
                    >
                        Every lecture, laboratory session,
                        assignment and learning resource is
                        organized here to help students learn
                        beyond the classroom.
                    </p>

                </div>

                {/* Buttons */}

                <div
                    className="
                        mt-12
                        flex
                        flex-wrap
                        gap-4
                    "
                >

                    <HeroButton
                        title="Current Courses"
                        href="#current-courses"
                        primary
                    />

                    <HeroButton
                        title="Academic Calendar"
                        href="#semester-timeline"
                    />

                </div>

                {/* Statistics */}

                <div
                    className="
                        mt-20
                        grid
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >

                    <HeroStatsCard
                        icon={BookOpen}
                        value="1"
                        label="Course"
                    />

                    <HeroStatsCard
                        icon={Users}
                        value="2"
                        label="Students"
                    />

                    <HeroStatsCard
                        icon={GraduationCap}
                        value="40"
                        label="Theory Hours"
                    />

                    <HeroStatsCard
                        icon={FlaskConical}
                        value="24"
                        label="Laboratory Hours"
                    />

                </div>

            </div>

        </section>

    );

}