export default function ResearchHero() {

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-[#08111f]
                py-28
                md:py-40
            "
        >

            {/* Background Glow */}

            <div className="absolute inset-0">

                <div
                    className="
                        absolute
                        top-20
                        left-10
                        h-72
                        w-72
                        rounded-full
                        bg-blue-600/20
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        top-40
                        right-10
                        h-96
                        w-96
                        rounded-full
                        bg-purple-600/20
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
                        Research Vision
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
                        Can AI
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
                            Know When
                            It Is Wrong?
                        </span>

                    </h1>

                    <p
                        className="
                            mt-10
                            text-lg
                            md:text-xl
                            text-slate-300
                            max-w-3xl
                            leading-relaxed
                        "
                    >
                        My research explores hallucination detection,
                        confidence-grounding alignment, interpretability,
                        and agentic reasoning in Vision-Language Models,
                        with the goal of building trustworthy multimodal AI.
                    </p>

                    <div
                        className="
                            mt-12
                            flex
                            flex-wrap
                            gap-4
                        "
                    >

                        {[
                            "Vision-Language Models",
                            "Trustworthy AI",
                            "Hallucination Detection",
                            "Agentic Systems"
                        ].map((item) => (

                            <span
                                key={item}
                                className="
                                    px-5
                                    py-3
                                    rounded-full
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-slate-200
                                    backdrop-blur-md
                                "
                            >
                                {item}
                            </span>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}