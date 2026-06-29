import { dbmsJournal } from "../../../data/teaching/dbms";

import SectionHeader from "./SectionHeader";
import LectureCard from "./LectureCard";

export default function CourseJournal() {

    return (

            <section
                id="journal"
                className="
                    scroll-mt-36
                    py-20
                    border-t
                    border-slate-200"
            >

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Daily Teaching Log"
                    title="Class Journal"
                    description="A chronological record of every theory class conducted during the semester including topics covered, notes, presentations and learning resources."
                />

                <div className="relative mt-14">

                    <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200" />

                    <div className="space-y-12">

                        {dbmsJournal.map((lecture) => (

                            <div
                                key={lecture.id}
                                className="relative flex gap-8"
                            >

                                <div
                                    className="
                                        relative
                                        z-10
                                        w-16
                                        h-16
                                        rounded-full
                                        bg-blue-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                        shadow-lg
                                    "
                                >
                                    {lecture.classNo}
                                </div>

                                <div className="flex-1">

                                    <LectureCard
                                        lecture={lecture}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}