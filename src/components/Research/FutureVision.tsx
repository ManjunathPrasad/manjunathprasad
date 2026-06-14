export default function FutureVision() {

    const components = [

        {
            title: "Planner",
            description:
                "Generates candidate reasoning paths and multimodal action plans.",

            gradient:
                "from-blue-500 to-cyan-500"
        },

        {
            title: "Critic",
            description:
                "Evaluates confidence-grounding consistency and identifies potential hallucinations.",

            gradient:
                "from-purple-500 to-pink-500"
        },

        {
            title: "Executor",
            description:
                "Produces grounded responses while incorporating feedback from the critic.",

            gradient:
                "from-orange-500 to-red-500"
        }

    ];

    return (

        <section
            className="
                relative
                overflow-hidden
                py-32
                bg-gradient-to-br
                from-slate-950
                via-slate-900
                to-black
                text-white
            "
        >

            {/* Background Effects */}

            <div className="absolute inset-0">

                <div
                    className="
                        absolute
                        top-20
                        left-10
                        h-72
                        w-72
                        rounded-full
                        bg-blue-500/20
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        bottom-10
                        right-10
                        h-96
                        w-96
                        rounded-full
                        bg-purple-500/20
                        blur-3xl
                    "
                />

            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center">

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-400
                            text-sm
                            font-semibold
                        "
                    >
                        Future Vision
                    </p>

                    <h2
                        className="
                            mt-6
                            text-5xl
                            md:text-7xl
                            font-black
                        "
                    >
                        POLLY
                    </h2>

                    <p
                        className="
                            mt-8
                            max-w-4xl
                            mx-auto
                            text-lg
                            md:text-xl
                            text-slate-300
                            leading-relaxed
                        "
                    >
                        A long-term research direction toward
                        trustworthy multimodal intelligence,
                        where models can plan, critique,
                        and execute grounded reasoning.
                    </p>

                </div>

                {/* Polly Architecture */}

                <div
                    className="
                        mt-24
                        grid
                        md:grid-cols-3
                        gap-8
                    "
                >

                    {components.map((component) => (

                        <div
                            key={component.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-8
                                hover:-translate-y-2
                                hover:shadow-2xl
                                transition-all
                                duration-500
                            "
                        >

                            <div
                                className={`
                                    h-2
                                    rounded-full
                                    bg-gradient-to-r
                                    ${component.gradient}
                                `}
                            />

                            <h3
                                className="
                                    mt-8
                                    text-3xl
                                    font-black
                                "
                            >
                                {component.title}
                            </h3>

                            <p
                                className="
                                    mt-5
                                    text-slate-300
                                    leading-relaxed
                                "
                            >
                                {component.description}
                            </p>

                        </div>

                    ))}

                </div>

                {/* Architecture Flow */}

                <div
                    className="
                        mt-20
                        hidden
                        lg:flex
                        items-center
                        justify-center
                        gap-8
                    "
                >

                    <div
                        className="
                            px-8
                            py-4
                            rounded-2xl
                            bg-blue-500/20
                            border
                            border-blue-500/30
                        "
                    >
                        Planner
                    </div>

                    <div className="text-4xl text-slate-500">
                        →
                    </div>

                    <div
                        className="
                            px-8
                            py-4
                            rounded-2xl
                            bg-purple-500/20
                            border
                            border-purple-500/30
                        "
                    >
                        Critic
                    </div>

                    <div className="text-4xl text-slate-500">
                        →
                    </div>

                    <div
                        className="
                            px-8
                            py-4
                            rounded-2xl
                            bg-orange-500/20
                            border
                            border-orange-500/30
                        "
                    >
                        Executor
                    </div>

                </div>

                {/* Vision Statement */}

                <div
                    className="
                        mt-24
                        rounded-[2rem]
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        p-10
                        md:p-14
                    "
                >

                    <div className="max-w-4xl">

                        <p
                            className="
                                uppercase
                                tracking-[0.3em]
                                text-blue-400
                                text-xs
                                font-semibold
                            "
                        >
                            Destination
                        </p>

                        <h3
                            className="
                                mt-4
                                text-4xl
                                md:text-5xl
                                font-black
                            "
                        >
                            From Detection
                            <br />

                            <span
                                className="
                                    bg-gradient-to-r
                                    from-blue-400
                                    via-purple-400
                                    to-pink-400
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                To Self-Correcting AI
                            </span>

                        </h3>

                        <p
                            className="
                                mt-8
                                text-lg
                                text-slate-300
                                leading-relaxed
                            "
                        >
                            The ultimate objective of this research
                            trajectory is not merely detecting
                            hallucinations, but enabling AI systems
                            to recognize, critique, and correct their
                            own reasoning before producing a response.

                            Polly represents a step toward grounded,
                            interpretable, and trustworthy multimodal
                            intelligence.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}