export default function ResearchProgram() {

    const stages = [

        "Entropy",

        "HAlign",

        "HAlign-T",

        "Decoding",

        "Representation",

        "Mechanistic",

        "Polly"

    ];

    return (

        <section
            className="
                py-32
                bg-[#0f172a]
                text-white
            "
        >

            <div className="max-w-7xl mx-auto px-6">

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
                        Current Research Program
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                        "
                    >
                        The Seven-Paper Journey
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl
                            mx-auto
                            text-slate-300
                            text-lg
                        "
                    >
                        A long-term research trajectory progressing
                        from hallucination detection to grounded
                        multimodal agents.
                    </p>

                </div>

                <div
                    className="
                        mt-20
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        lg:grid-cols-7
                        gap-6
                    "
                >

                    {stages.map((stage, index) => (

                        <div
                            key={stage}
                            className="
                                group
                                relative
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-lg
                                p-6
                                text-center
                                hover:bg-white/10
                                transition-all
                            "
                        >

                            <div
                                className="
                                    text-3xl
                                    font-black
                                    text-blue-400
                                "
                            >
                                P{index + 1}
                            </div>

                            <div
                                className="
                                    mt-3
                                    font-semibold
                                "
                            >
                                {stage}
                            </div>

                        </div>

                    ))}

                </div>

                <div
                    className="
                        mt-16
                        rounded-3xl
                        bg-gradient-to-r
                        from-blue-600
                        via-purple-600
                        to-pink-600
                        p-8
                        md:p-10
                    "
                >

                    <h3
                        className="
                            text-3xl
                            md:text-4xl
                            font-black
                        "
                    >
                        Core Hypothesis
                    </h3>

                    <p
                        className="
                            mt-6
                            text-lg
                            text-white/90
                            leading-relaxed
                        "
                    >
                        Confidence-grounding misalignment is a
                        fundamental signal underlying hallucination,
                        detection, mitigation, interpretability,
                        and future multimodal agent design.
                    </p>

                </div>

            </div>

        </section>

    );

}