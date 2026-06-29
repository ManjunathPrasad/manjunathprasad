import { Link } from "react-router-dom";
import {
    BookOpen,
    FlaskConical,
    Users,
    ArrowRight,
    GraduationCap
} from "lucide-react";

import type { CurrentCourse } from "../../types/CurrentCourse";

interface CoursePreviewCardProps {
    course: CurrentCourse;
}

export default function CoursePreviewCard({
    course,
}: CoursePreviewCardProps) {

    const theoryPercentage =
        (course.completedTheoryHours / course.theoryHours) * 100;

    const labPercentage =
        (course.completedLabHours / course.labHours) * 100;

    return (

        <div
            className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                p-7
                flex
                flex-col
            "
        >

            {/* Course Code */}

            <span
                className="
                    w-fit
                    rounded-full
                    bg-blue-50
                    text-blue-700
                    text-xs
                    font-semibold
                    px-3
                    py-1
                "
            >
                {course.code}
            </span>

            {/* Title */}

            <h3 className="mt-5 text-2xl font-black text-slate-900">
                {course.title}
            </h3>

            <p className="mt-2 text-slate-500">
                {course.semester}
            </p>

            {/* Stats */}

            <div className="mt-6 space-y-5">

                {/* Theory */}

                <div>

                    <div className="flex items-center justify-between text-sm">

                        <div className="flex items-center gap-2">

                            <BookOpen
                                size={18}
                                className="text-blue-600"
                            />

                            <span>Theory</span>

                        </div>

                        <span className="font-semibold">
                            {course.completedTheoryHours}/{course.theoryHours}
                        </span>

                    </div>

                    <div className="mt-2 h-2 rounded-full bg-slate-200">

                        <div
                            className="h-2 rounded-full bg-blue-600"
                            style={{
                                width: `${theoryPercentage}%`,
                            }}
                        />

                    </div>

                </div>

                {/* Lab */}

                <div>

                    <div className="flex items-center justify-between text-sm">

                        <div className="flex items-center gap-2">

                            <FlaskConical
                                size={18}
                                className="text-purple-600"
                            />

                            <span>Laboratory</span>

                        </div>

                        <span className="font-semibold">
                            {course.completedLabHours}/{course.labHours}
                        </span>

                    </div>

                    <div className="mt-2 h-2 rounded-full bg-slate-200">

                        <div
                            className="h-2 rounded-full bg-purple-600"
                            style={{
                                width: `${labPercentage}%`,
                            }}
                        />

                    </div>

                </div>

            </div>

            {/* Footer */}

            <div className="mt-8 flex flex-wrap gap-4 text-sm">

                <div className="flex items-center gap-2 text-slate-600">

                    <GraduationCap size={18} />

                    {course.credits} Credits

                </div>

                <div className="flex items-center gap-2 text-slate-600">

                    <Users size={18} />

                    {course.students} Students

                </div>

            </div>

            {/* Status */}

            <div className="mt-6">

                <span
                    className="
                        inline-flex
                        items-center
                        rounded-full
                        bg-green-100
                        text-green-700
                        text-sm
                        font-medium
                        px-3
                        py-1
                    "
                >
                    {course.status}
                </span>

            </div>

            {/* Button */}

            <Link
                to={course.route}
                className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-600
                    hover:text-blue-700
                    transition
                "
            >
                Continue Learning

                <ArrowRight size={18} />

            </Link>

        </div>

    );
}