export default function PublicationsHero() {

    return (

        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">

            {/* Background Decorations */}

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div
                    className="
                        absolute
                        top-0
                        left-[-80px]
                        md:left-20
                        h-52
                        w-52
                        md:h-72
                        md:w-72
                        rounded-full
                        bg-blue-100
                        blur-3xl
                        opacity-60
                    "
                />

                <div
                    className="
                        absolute
                        top-20
                        right-[-100px]
                        md:right-20
                        h-60
                        w-60
                        md:h-80
                        md:w-80
                        rounded-full
                        bg-purple-100
                        blur-3xl
                        opacity-60
                    "
                />

            </div>

            <div className="text-center">

                <p
                    className="
                        text-blue-600
                        tracking-[0.25em]
                        md:tracking-[0.35em]
                        uppercase
                        text-xs
                        md:text-sm
                        font-semibold
                    "
                >
                    Research Publications
                </p>

                <h1
                    className="
                        mt-6
                        md:mt-8
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        font-black
                        tracking-tight
                        leading-tight
                    "
                >

                    Building Trustworthy

                    <br className="hidden sm:block" />

                    <span
                        className="
                            bg-gradient-to-r
                            from-blue-600
                            via-purple-600
                            to-pink-600
                            bg-clip-text
                            text-transparent
                        "
                    >
                        {" "}
                        Vision-Language Models
                    </span>

                </h1>

                <p
                    className="
                        mt-8
                        md:mt-10
                        max-w-xl
                        md:max-w-3xl
                        lg:max-w-4xl
                        mx-auto
                        text-base
                        md:text-lg
                        lg:text-xl
                        text-gray-600
                        leading-relaxed
                        px-2
                    "
                >
                    Developing reliable multimodal AI systems through
                    hallucination detection, confidence-grounding alignment,
                    interpretability, and agentic reasoning.
                </p>

                {/* Optional Research Focus Pills */}

                <div
                    className="
                        mt-10
                        flex
                        flex-wrap
                        justify-center
                        gap-3
                    "
                >

                    <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm">
                        Hallucination Detection
                    </span>

                    <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm">
                        Grounding Alignment
                    </span>

                    <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm">
                        Multimodal AI
                    </span>

                    <span className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm">
                        Agentic Systems
                    </span>

                </div>

            </div>

        </section>

    );
}