const questions = [

    {
        question:
            "Can Vision-Language Models know when they are hallucinating?",

        category:
            "Detection"
    },

    {
        question:
            "Can confidence be calibrated using grounding evidence?",

        category:
            "Alignment"
    },

    {
        question:
            "Can hallucinations be mitigated during decoding?",

        category:
            "Generation"
    },

    {
        question:
            "Can internal representations reveal misalignment?",

        category:
            "Interpretability"
    },

    {
        question:
            "Can multimodal agents critique themselves before responding?",

        category:
            "Agentic AI"
    }

];

export default function ResearchQuestions() {

    return (

        <section
            className="
                py-32
                bg-[#08111f]
                text-white
            "
        >

            <div className="max-w-6xl mx-auto px-6">

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
                        Open Questions
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                        "
                    >
                        Research Notebook
                    </h2>

                    <p
                        className="
                            mt-6
                            text-lg
                            text-slate-300
                            max-w-3xl
                            mx-auto
                        "
                    >
                        The questions currently guiding
                        the next phase of my research.
                    </p>

                </div>

                <div className="mt-20 space-y-6">

                    {questions.map((item) => (

                        <div
                            key={item.question}
                            className="
                                group
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-lg
                                p-8
                                hover:bg-white/10
                                hover:border-blue-400/40
                                transition-all
                                duration-300
                            "
                        >

                            <div
                                className="
                                    flex
                                    flex-col
                                    md:flex-row
                                    md:items-center
                                    md:justify-between
                                    gap-4
                                "
                            >

                                <h3
                                    className="
                                        text-xl
                                        md:text-2xl
                                        font-semibold
                                    "
                                >
                                    {item.question}
                                </h3>

                                <span
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-blue-500/20
                                        text-blue-300
                                        text-sm
                                        w-fit
                                    "
                                >
                                    {item.category}
                                </span>

                            </div>

                            <div
                                className="
                                    mt-4
                                    h-1
                                    rounded-full
                                    bg-gradient-to-r
                                    from-blue-500
                                    via-purple-500
                                    to-pink-500
                                    scale-x-0
                                    origin-left
                                    group-hover:scale-x-100
                                    transition-transform
                                    duration-500
                                "
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}