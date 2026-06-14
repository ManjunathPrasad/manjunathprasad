import { motion } from "framer-motion";

const focusAreas = [
    {
        title: "Research",
        description:
            "Vision-Language Models, Multimodal AI, and Hallucination Detection",
        gradient:
            "from-blue-500 to-cyan-500",
    },
    {
        title: "Publications",
        description:
            "Building a coherent research agenda in trustworthy AI systems",
        gradient:
            "from-purple-500 to-pink-500",
    },
    {
        title: "Teaching",
        description:
            "Software Engineering, AI, Machine Learning, and Programming",
        gradient:
            "from-emerald-500 to-teal-500",
    },
    {
        title: "Vision Lab",
        description:
            "Establishing a Vision-Language Intelligence research ecosystem",
        gradient:
            "from-orange-500 to-red-500",
    },
];

export default function CurrentFocus() {
    return (
        <section className="py-32">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <p className="text-blue-600 font-semibold uppercase tracking-widest">
                        Currently Building
                    </p>

                    <h2 className="mt-4 text-5xl lg:text-6xl font-bold">
                        Trustworthy Vision-Language
                        <br />
                        AI Systems
                    </h2>

                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                        Exploring multimodal intelligence through research,
                        teaching, innovation, and collaborative learning.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {focusAreas.map((area, index) => (

                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.7,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="group"
                        >

                            <div
                                className={`
                                    rounded-3xl p-[2px]
                                    bg-gradient-to-r
                                    ${area.gradient}
                                `}
                            >

                                <div
                                    className="
                                        h-full
                                        rounded-3xl
                                        bg-white
                                        p-8
                                    "
                                >

                                    <div
                                        className={`
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-gradient-to-r
                                            ${area.gradient}
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