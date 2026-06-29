import { CheckCircle2, Circle } from "lucide-react";

import SectionHeader from "../Teaching/CourseLayout/SectionHeader";

import { semesterTimeline } from "../../data/teaching/semesterTimeline";

export default function SemesterTimeline() {

    return (

        <section className="py-24">

            <div className="max-w-5xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Academic Calendar"
                    title="Semester Timeline"
                    description="Follow the overall progress of the semester from commencement to completion."
                    align="center"
                />

                <div className="mt-16">

                    {semesterTimeline.map((item, index) => (

                        <div
                            key={item.id}
                            className="flex gap-6"
                        >

                            {/* Timeline */}

                            <div className="flex flex-col items-center">

                                {

                                    item.completed
                                        ?

                                        <CheckCircle2
                                            size={28}
                                            className="text-green-600"
                                        />

                                        :

                                        <Circle
                                            size={28}
                                            className="text-slate-400"
                                        />

                                }

                                {

                                    index !== semesterTimeline.length - 1 &&

                                    <div
                                        className="
                                            w-px
                                            flex-1
                                            bg-slate-300
                                            my-2
                                        "
                                    />

                                }

                            </div>

                            {/* Content */}

                            <div
                                className="
                                    pb-12
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        text-blue-600
                                        font-semibold
                                    "
                                >
                                    {item.date}
                                </p>

                                <h3
                                    className="
                                        mt-1
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-slate-600
                                    "
                                >
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}