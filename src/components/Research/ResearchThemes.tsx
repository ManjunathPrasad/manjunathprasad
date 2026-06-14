const pillars = [

    {
        title: "Hallucination Detection",
        description:
            "Understanding when models generate content unsupported by visual evidence.",

        gradient:
            "from-blue-500 to-cyan-500"
    },

    {
        title: "Grounding Alignment",
        description:
            "Measuring confidence-grounding consistency in multimodal reasoning.",

        gradient:
            "from-purple-500 to-pink-500"
    },

    {
        title: "Interpretability",
        description:
            "Understanding the internal mechanisms behind hallucination behavior.",

        gradient:
            "from-green-500 to-emerald-500"
    },

    {
        title: "Agentic Intelligence",
        description:
            "Designing self-correcting multimodal systems through critique and planning.",

        gradient:
            "from-orange-500 to-red-500"
    }

];

export default function ResearchThemes() {

    return (

        <section className="py-28 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <p
                        className="
                            uppercase
                            tracking-[0.3em]
                            text-blue-600
                            text-sm
                            font-semibold
                        "
                    >
                        Research Compass
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                        "
                    >
                        Four Directions
                    </h2>

                </div>

                <div
                    className="
                        mt-20
                        grid
                        md:grid-cols-2
                        gap-8
                    "
                >

                    {pillars.map((pillar) => (

                        <div
                            key={pillar.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                p-8
                                shadow-lg
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
                                    ${pillar.gradient}
                                `}
                            />

                            <h3
                                className="
                                    mt-8
                                    text-3xl
                                    font-bold
                                "
                            >
                                {pillar.title}
                            </h3>

                            <p
                                className="
                                    mt-5
                                    text-gray-600
                                    leading-relaxed
                                "
                            >
                                {pillar.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}