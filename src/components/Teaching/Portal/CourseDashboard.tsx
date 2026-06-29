import {
    BookOpen,
    FlaskConical,
    GraduationCap,
    FileText
} from "lucide-react";

import { dbmsProgress } from "../../../data/teaching/dbms";

export default function CourseDashboard() {

    return (

        <section className="py-16 border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-10">

                    <p className="uppercase tracking-[0.3em] text-blue-600 text-sm font-semibold">
                        Course Progress
                    </p>

                    <h2 className="mt-3 text-4xl font-black text-slate-900">
                        Semester Dashboard
                    </h2>

                </div>

                <div className="grid gap-6 md:grid-cols-4">

                    <div className="bg-white rounded-3xl border p-6 shadow-sm">

                        <BookOpen className="h-8 w-8 text-blue-600" />

                        <p className="mt-4 text-sm text-slate-500">
                            Theory Progress
                        </p>

                        <h3 className="text-3xl font-black">
                            {dbmsProgress.completedTheoryHours}
                            /
                            {dbmsProgress.theoryHours}
                        </h3>

                        <p className="text-slate-500">
                            Hours Completed
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl border p-6 shadow-sm">

                        <FlaskConical className="h-8 w-8 text-purple-600" />

                        <p className="mt-4 text-sm text-slate-500">
                            Lab Progress
                        </p>

                        <h3 className="text-3xl font-black">
                            {dbmsProgress.completedLabHours}
                            /
                            {dbmsProgress.labHours}
                        </h3>

                        <p className="text-slate-500">
                            Hours Completed
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl border p-6 shadow-sm">

                        <GraduationCap className="h-8 w-8 text-green-600" />

                        <p className="mt-4 text-sm text-slate-500">
                            Classes
                        </p>

                        <h3 className="text-3xl font-black">
                            {dbmsProgress.completedClasses}
                            /
                            {dbmsProgress.totalClasses}
                        </h3>

                        <p className="text-slate-500">
                            Sessions Conducted
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl border p-6 shadow-sm">

                        <FileText className="h-8 w-8 text-orange-600" />

                        <p className="mt-4 text-sm text-slate-500">
                            Assignments
                        </p>

                        <h3 className="text-3xl font-black">
                            {dbmsProgress.assignmentsReleased}
                        </h3>

                        <p className="text-slate-500">
                            Released
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}