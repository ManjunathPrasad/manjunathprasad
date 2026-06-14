import { motion } from "framer-motion";

const researchAreas = [
    {
        title: "Vision-Language Models",
        description:
            "Understanding and improving multimodal systems that connect visual perception with language understanding.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Hallucination Detection",
        description:
            "Developing reliable methods to identify and measure hallucinations in AI-generated descriptions.",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Multimodal AI",
        description:
            "Combining information from images, text, and structured knowledge for intelligent reasoning.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Trustworthy AI",
        description:
            "Building AI systems that are transparent, reliable, interpretable, and robust.",
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Human-AI Alignment",
        description:
            "Investigating methods to align AI behaviour with human expectations and intentions.",
        gradient: "from-indigo-500 to-blue-600",
    },
    {
        title: "Vision Lab Initiative",
        description:
            "Creating a collaborative ecosystem for research, innovation, mentoring, and experimentation.",
        gradient: "from-fuchsia-500 to-violet-500",
    },
];

export default function ResearchAgenda() {
    return (
        <section className="py-32 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <p className="text-purple-600 font-semibold uppercase tracking-widest">
                        Research Focus
                    </p>

                    <h2 className="mt-4 text-5xl lg:text-6xl font-bold">
                        Exploring the Future of
                        <br />
                        Multimodal Intelligence
                    </h2>

                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                        My research focuses on building intelligent systems that
                        understand, reason, and interact reliably across vision
                        and language modalities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {researchAreas.map((area, index) => (

                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                            }}
                            className="group"
                        >

                            <div
                                className={`
                                    h-full rounded-3xl p-[2px]
                                    bg-gradient-to-r ${area.gradient}
                                `}
                            >
                                <div
                                    className="
                                        h-full bg-white rounded-3xl
                                        p-8
                                    "
                                >

                                    <div
                                        className={`
                                            w-14 h-14 rounded-2xl
                                            bg-gradient-to-r ${area.gradient}
                                        `}
                                    />

                                    <h3 className="mt-6 text-2xl font-bold">
                                        {area.title}
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {area.description}
                                    </p>

                                </div>
                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}