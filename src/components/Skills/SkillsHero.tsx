export default function SkillsHero() {

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-slate-950
                via-slate-900
                to-blue-950
                py-24
                md:py-36
            "
        >

            {/* Background Glow */}

            <div className="absolute inset-0">

                <div
                    className="
                        absolute
                        top-10
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

                <div className="max-w-5xl">

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-400
                            text-xs
                            md:text-sm
                            font-semibold
                        "
                    >
                        Skills & Expertise
                    </p>

                    <h1
                        className="
                            mt-8
                            text-5xl
                            md:text-7xl
                            lg:text-8xl
                            font-black
                            text-white
                            leading-tight
                        "
                    >
                        Building Systems
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
                            Across Research
                            & Industry
                        </span>

                    </h1>

                    <p
                        className="
                            mt-10
                            max-w-3xl
                            text-lg
                            md:text-xl
                            text-slate-300
                            leading-relaxed
                        "
                    >
                        From enterprise software engineering and cloud
                        platforms to Vision-Language Models and
                        trustworthy AI, my journey spans academia,
                        industry, and research.
                    </p>

                </div>

                {/* Stats

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
                            value: "9+",
                            label: "Years Teaching"
                        },
                        {
                            value: "5",
                            label: "Years Industry"
                        },
                        {
                            value: "3",
                            label: "Research Papers"
                        },
                        {
                            value: "25+",
                            label: "Technologies"
                        }
                    ].map((item) => (

                        <div
                            key={item.label}
                            className="
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-6
                            "
                        >

                            <div
                                className="
                                    text-3xl
                                    md:text-5xl
                                    font-black
                                    text-white
                                "
                            >
                                {item.value}
                            </div>

                            <div
                                className="
                                    mt-2
                                    text-slate-400
                                "
                            >
                                {item.label}
                            </div>

                        </div>

                    ))}

                </div> */}

            </div>

        </section>

    );

}