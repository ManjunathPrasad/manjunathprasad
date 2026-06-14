import { motion } from "framer-motion";

const roadmap = [
    {
        year: "2026",
        title: "Entropy",
        status: "Under Review",
        color: "from-purple-500 to-pink-500",
        description:
            "Token-level uncertainty for hallucination detection in vision-language models."
    },
    {
        year: "2026",
        title: "HAlign",
        status: "Under Review",
        color: "from-purple-500 to-pink-500",
        description:
            "Confidence-grounding misalignment modeling for hallucination detection."
    },
    {
        year: "2026",
        title: "HAlign-T",
        status: "Under Review",
        color: "from-fuchsia-500 to-violet-500",
        description:
            "Token-level multimodal alignment analysis."
    },
    {
        year: "2026",
        title: "Mitigation",
        status: "Ready for Submission",
        color: "from-green-500 to-emerald-500",
        description:
            "Alignment-aware decoding strategies to reduce hallucinations."
    },
    {
        year: "2027",
        title: "Mechanistic Analysis",
        status: "Planned",
        color: "from-orange-500 to-red-500",
        description:
            "Understanding internal multimodal representations."
    },
    {
        year: "2027",
        title: "Polly Framework",
        status: "Vision",
        color: "from-indigo-500 to-blue-600",
        description:
            "Planner-Critic-Executor architecture for trustworthy multimodal intelligence."
    }
];

export default function ResearchEvolution() {
    return (
        <section className="py-24 lg:py-40">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20 lg:mb-28"
                >
                    <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
                        Research Evolution
                    </p>

                    <h2 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                        Towards Trustworthy
                        <br />
                        Multimodal Intelligence
                    </h2>

                    <p className="mt-8 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        A long-term research journey progressing from
                        hallucination detection toward trustworthy,
                        interpretable, and aligned AI systems.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="relative">

                    {/* Mobile Line */}

                    <div
                        className="
                            lg:hidden
                            absolute
                            left-4
                            top-0
                            bottom-0
                            w-1
                            rounded-full
                            bg-gradient-to-b
                            from-blue-500
                            via-purple-500
                            to-orange-500
                        "
                    />

                    {/* Desktop Line */}

                    <div
                        className="
                            hidden
                            lg:block
                            absolute
                            left-1/2
                            top-0
                            -translate-x-1/2
                            w-1
                            h-full
                            rounded-full
                            bg-gradient-to-b
                            from-blue-500
                            via-purple-500
                            to-orange-500
                        "
                    />

                    {roadmap.map((item, index) => {

                        const isLeft = index % 2 === 0;

                        return (

                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                                className="
                                    relative
                                    mb-12
                                    lg:mb-24
                                "
                            >

                                {/* Mobile Layout */}

                                <div className="lg:hidden ml-12">

                                    <div
                                        className={`
                                            absolute
                                            left-4
                                            top-10
                                            -translate-x-1/2
                                            w-5
                                            h-5
                                            rounded-full
                                            bg-gradient-to-r
                                            ${item.color}
                                            shadow-lg
                                        `}
                                    />

                                    <motion.div
                                        whileHover={{
                                            y: -4
                                        }}
                                        className="
                                            bg-white
                                            border
                                            border-gray-200
                                            rounded-3xl
                                            p-6
                                            shadow-lg
                                        "
                                    >
                                        <span className="text-sm font-semibold text-gray-400">
                                            {item.year}
                                        </span>

                                        <div className="mt-3">
                                            <span
                                                className={`
                                                    inline-block
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-xs
                                                    text-white
                                                    bg-gradient-to-r
                                                    ${item.color}
                                                `}
                                            >
                                                {item.status}
                                            </span>
                                        </div>

                                        <h3 className="mt-4 text-2xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-gray-600">
                                            {item.description}
                                        </p>
                                    </motion.div>

                                </div>

                                {/* Desktop Layout */}

                                <div
                                    className={`
                                        hidden
                                        lg:flex
                                        items-center
                                        ${isLeft ? "flex-row" : "flex-row-reverse"}
                                    `}
                                >

                                    {/* Card */}

                                    <div className="w-[45%]">

                                        <motion.div
                                            whileHover={{
                                                y: -10,
                                                scale: 1.03
                                            }}
                                            className="
                                                relative
                                                bg-white
                                                border
                                                border-gray-200
                                                rounded-3xl
                                                p-8
                                                shadow-lg
                                            "
                                        >
                                            <span className="text-sm font-semibold text-gray-400">
                                                {item.year}
                                            </span>

                                            <div className="mt-3">
                                                <span
                                                    className={`
                                                        inline-block
                                                        px-4
                                                        py-1
                                                        rounded-full
                                                        text-sm
                                                        text-white
                                                        bg-gradient-to-r
                                                        ${item.color}
                                                    `}
                                                >
                                                    {item.status}
                                                </span>
                                            </div>

                                            <h3 className="mt-5 text-3xl font-bold">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </motion.div>

                                    </div>

                                    {/* Center Connector */}

                                    <div className="w-[10%] relative flex justify-center">

                                        <div
                                            className={`
                                                w-6
                                                h-6
                                                rounded-full
                                                bg-gradient-to-r
                                                ${item.color}
                                                shadow-lg
                                                z-10
                                            `}
                                        />

                                        <div
                                            className="
                                                absolute
                                                top-1/2
                                                w-full
                                                h-[2px]
                                                bg-gray-300
                                            "
                                        />
                                    </div>

                                    {/* Empty Side */}

                                    <div className="w-[45%]" />

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}