const skills = [

    {
        title: "Literature Review",
        subtitle: "Research Discovery",

        description:
            "Systematically surveying state-of-the-art literature, identifying research gaps, synthesizing evidence, and formulating novel research directions.",

        color:
            "from-blue-500 to-cyan-500"
    },

    {
        title: "Experimental Design",
        subtitle: "Scientific Investigation",

        description:
            "Designing reproducible experiments, benchmark evaluations, ablation studies, and statistically sound validation frameworks.",

        color:
            "from-purple-500 to-pink-500"
    },

    {
        title: "Research Implementation",
        subtitle: "Technical Execution",

        description:
            "Conducting experiments and investigations by implementing existing and novel hypotheses to achieve strong evidence for proposed method implementations using Python and PyTorch.",

        color:
            "from-rose-500 to-orange-500"
    },

    {
        title: "Scientific Writing",
        subtitle: "Research Communication",

        description:
            "Preparing conference papers, journal manuscripts, technical reports, proposals, and scholarly documentation using professional publication standards.",

        color:
            "from-green-500 to-emerald-500"
    },

    {
        title: "Research Mentoring",
        subtitle: "Academic Leadership",

        description:
            "Guiding student projects, supervising capstone work, mentoring research initiatives, and fostering a culture of inquiry and innovation.",

        color:
            "from-orange-500 to-red-500"
    }

];

export default function ResearchSkills() {

    return (

        <section className="py-28 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center">

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-600
                            text-sm
                            font-semibold
                        "
                    >
                        Research Excellence
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                        "
                    >
                        Research Competencies
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl
                            mx-auto
                            text-lg
                            text-gray-600
                            leading-relaxed
                        "
                    >
                        Research extends beyond coding and experimentation.
                        It involves discovery, critical thinking,
                        communication, mentorship, and the ability to
                        transform ideas into impactful contributions.
                    </p>

                </div>

                {/* Stats Banner */}

                <div
                    className="
                        mt-16
                        grid
                        grid-cols-2
                        lg:grid-cols-4
                        gap-6
                    "
                >

                    {[
                        {
                            value: "3",
                            label: "Papers Submitted"
                        },
                        {
                            value: "7",
                            label: "Research Roadmap"
                        },
                        {
                            value: "10+",
                            label: "Years Teaching"
                        },
                        {
                            value: "AI",
                            label: "Research Focus"
                        }
                    ].map((item) => (

                        <div
                            key={item.label}
                            className="
                                bg-white
                                rounded-3xl
                                p-6
                                border
                                border-gray-200
                                shadow-md
                                text-center
                            "
                        >

                            <div
                                className="
                                    text-3xl
                                    md:text-4xl
                                    font-black
                                    text-slate-900
                                "
                            >
                                {item.value}
                            </div>

                            <div
                                className="
                                    mt-2
                                    text-gray-500
                                "
                            >
                                {item.label}
                            </div>

                        </div>

                    ))}

                </div>

                {/* Competency Cards - Fixed Grid */}

                <div
                    className="
                        mt-20
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-5
                        gap-8
                    "
                >

                    {skills.map((skill) => (

                        <div
                            key={skill.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                border
                                border-gray-200
                                p-8
                                shadow-lg
                                hover:-translate-y-3
                                hover:shadow-2xl
                                transition-all
                                duration-500
                                flex
                                flex-col
                                h-full
                            "
                        >

                            {/* Gradient Bar */}

                            <div
                                className={`
                                    h-2
                                    rounded-full
                                    bg-gradient-to-r
                                    ${skill.color}
                                `}
                            />

                            {/* Hover Glow */}

                            <div
                                className={`
                                    absolute
                                    inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                    bg-gradient-to-br
                                    ${skill.color}
                                `}
                                style={{
                                    filter: "blur(120px)"
                                }}
                            />

                            <div className="relative flex-1">

                                <p
                                    className="
                                        mt-6
                                        uppercase
                                        tracking-wider
                                        text-xs
                                        font-semibold
                                        text-gray-500
                                    "
                                >
                                    {skill.subtitle}
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        text-2xl
                                        font-black
                                    "
                                >
                                    {skill.title}
                                </h3>

                                <p
                                    className="
                                        mt-6
                                        text-gray-600
                                        leading-relaxed
                                    "
                                >
                                    {skill.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom Statement */}

                <div
                    className="
                        mt-20
                        rounded-[2rem]
                        bg-gradient-to-r
                        from-blue-600
                        via-purple-600
                        to-pink-600
                        p-10
                        md:p-14
                        text-white
                        text-center
                        shadow-2xl
                    "
                >

                    <h3
                        className="
                            text-3xl
                            md:text-4xl
                            font-black
                        "
                    >
                        Research Is A Process Of Discovery
                    </h3>

                    <p
                        className="
                            mt-6
                            max-w-4xl
                            mx-auto
                            text-lg
                            leading-relaxed
                            text-white/90
                        "
                    >
                        My research philosophy combines rigorous
                        experimentation, interdisciplinary thinking,
                        and continuous learning to address challenges
                        in Vision-Language Models, trustworthy AI,
                        and future multimodal intelligent systems.
                    </p>

                </div>

            </div>

        </section>

    );

}