import SectionHeader from "../CourseLayout/SectionHeader";

export default function TeachingPhilosophy() {

    return (

        <section className="py-24">

            <div className="max-w-5xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Teaching Philosophy"
                    title="Learning Beyond the Classroom"
                    description="Education is not limited to lectures. My goal is to help students develop conceptual understanding, practical skills, and the confidence to solve real-world problems."
                    align="center"
                />

                <div
                    className="
                        mt-14
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-10
                        shadow-sm
                    "
                >

                    <p className="text-lg leading-9 text-slate-700">

                        Every lecture is carefully planned with clear learning
                        objectives, supported by lecture notes, presentations,
                        laboratory exercises, assignments, and discussions.

                    </p>

                    <p className="mt-8 text-lg leading-9 text-slate-700">

                        I believe that students learn best when theory is
                        immediately reinforced through practical implementation.
                        Therefore, every course integrates hands-on laboratory
                        sessions, programming exercises, collaborative learning,
                        and continuous assessment.

                    </p>

                    <p className="mt-8 text-lg leading-9 text-slate-700">

                        This teaching portal serves as a centralized learning
                        space where students can revisit every lecture,
                        download learning resources, track course progress,
                        and continue learning beyond the classroom.

                    </p>

                </div>

            </div>

        </section>

    );

}