import { teachingStats } from "../../data/teaching/teachingStats";
import SectionHeader from "../Teaching/CourseLayout/SectionHeader";

export default function TeachingStats() {

    return (

        <section className="py-20 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Teaching at a Glance"
                    title="Teaching Statistics"
                    description="A quick overview of my teaching responsibilities during the current academic year."
                    align="center"
                />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {teachingStats.map((stat) => (

                        <div
                            key={stat.id}
                            className="
                                bg-white
                                rounded-3xl
                                border
                                border-slate-200
                                p-8
                                text-center
                                shadow-sm
                                hover:shadow-lg
                                transition-all
                                duration-300
                            "
                        >

                            <h3
                                className="
                                    text-5xl
                                    font-black
                                    text-blue-600
                                "
                            >
                                {stat.value}
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-slate-600
                                    font-medium
                                "
                            >
                                {stat.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}