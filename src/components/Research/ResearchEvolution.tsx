const evolution = [

    {
        year: "P1",
        title: "Entropy",
        insight:
            "Can model confidence detect hallucinations?",

        color:
            "from-blue-500 to-cyan-500"
    },

    {
        year: "P2",
        title: "HAlign",
        insight:
            "Confidence alone is insufficient. Grounding matters.",

        color:
            "from-purple-500 to-pink-500"
    },

    {
        year: "P3",
        title: "HAlign-T",
        insight:
            "Misalignment exists at the token level.",

        color:
            "from-green-500 to-emerald-500"
    },

    {
        year: "P4",
        title: "Decoding",

        insight:
            "Can hallucinations be prevented during generation?",

        color:
            "from-orange-500 to-yellow-500"
    },

    {
        year: "P5",
        title: "Representation",

        insight:
            "Can models learn internal misalignment representations?",

        color:
            "from-pink-500 to-rose-500"
    },

    {
        year: "P6",
        title: "Mechanistic",

        insight:
            "What mechanisms produce hallucinations?",

        color:
            "from-indigo-500 to-violet-500"
    },

    {
        year: "P7",
        title: "Polly",

        insight:
            "Can AI critique itself before responding?",

        color:
            "from-red-500 to-orange-500"
    }

];

export default function ResearchEvolution() {

    return (

        <section className="py-32 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

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
                        Research Evolution
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                        "
                    >
                        How The Idea Evolved
                    </h2>

                    <p
                        className="
                            mt-6
                            text-lg
                            text-gray-600
                            max-w-3xl
                            mx-auto
                        "
                    >
                        Each paper is not an isolated project.
                        Every stage emerged from a limitation
                        discovered in the previous stage.
                    </p>

                </div>

                <div className="mt-24">

                    {evolution.map((item, index) => (

                        <div
                            key={item.year}
                            className="
                                relative
                                flex
                                items-start
                                gap-8
                                mb-20
                                group
                            "
                        >

                            {/* Timeline */}

                            <div className="flex flex-col items-center">

                                <div
                                    className={`
                                        h-20
                                        w-20
                                        rounded-full
                                        bg-gradient-to-r
                                        ${item.color}
                                        text-white
                                        font-black
                                        flex
                                        items-center
                                        justify-center
                                        shadow-xl
                                        group-hover:scale-110
                                        transition-all
                                    `}
                                >
                                    {item.year}
                                </div>

                                {index !== evolution.length - 1 && (

                                    <div
                                        className="
                                            w-1
                                            h-24
                                            bg-gradient-to-b
                                            from-gray-300
                                            to-gray-100
                                        "
                                    />

                                )}

                            </div>

                            {/* Card */}

                            <div
                                className="
                                    flex-1
                                    rounded-3xl
                                    bg-white
                                    border
                                    border-gray-200
                                    p-8
                                    shadow-lg
                                    hover:shadow-2xl
                                    transition-all
                                "
                            >

                                <h3
                                    className="
                                        text-3xl
                                        font-black
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        text-lg
                                        text-gray-600
                                        leading-relaxed
                                    "
                                >
                                    {item.insight}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}