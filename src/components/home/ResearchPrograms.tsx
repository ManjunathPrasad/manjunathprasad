import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
    {
        title: "Trustworthy Multimodal Intelligence",
        color: "from-blue-500 via-purple-500 to-indigo-600",
        badge: "Core Research Program",
        description:
            "Developing reliable vision-language systems through hallucination detection, multimodal alignment, reasoning, mitigation, and trustworthy AI methodologies.",

        topics: [
            "Hallucination Detection",
            "Multimodal Alignment",
            "Trustworthy AI",
            "Reasoning",
            "Human-AI Alignment",
            "Polly Framework"
        ]
    },

    {
        title: "Applied Vision-Language AI",
        color: "from-orange-500 via-red-500 to-pink-500",
        badge: "Emerging Research Program",
        description:
            "Applying vision-language learning, domain adaptation, and foundation models to challenging real-world domains such as remote sensing and low-data environments.",

        topics: [
            "Remote Sensing",
            "Zero-Shot Learning",
            "Domain Adaptation",
            "CLIP",
            "Hybrid CNN-Transformer",
            "Few-Shot Learning"
        ]
    }
];

export default function ResearchPrograms() {
    return (
        <section className="py-32 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Research Programs
                    </p>

                    <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                        Research Themes
                        <br />
                        & Long-Term Vision
                    </h2>

                    <p className="mt-6 text-xl text-gray-600">
                        My research is organized around complementary programs
                        that advance trustworthy multimodal intelligence while
                        exploring impactful real-world applications.
                    </p>

                </motion.div>

                {/* Programs */}

                <div className="grid lg:grid-cols-2 gap-10 mt-20">

                    {programs.map((program, index) => (

                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02
                            }}
                            className="
                                relative
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                border
                                border-gray-200
                                shadow-lg
                                p-10
                            "
                        >

                            {/* Gradient Top Border */}

                            <div
                                className={`
                                    absolute
                                    top-0
                                    left-0
                                    h-1
                                    w-full
                                    bg-gradient-to-r
                                    ${program.color}
                                `}
                            />

                            {/* Badge */}

                            <span
                                className="
                                    inline-flex
                                    px-4
                                    py-2
                                    rounded-full
                                    text-xs
                                    font-semibold
                                    bg-gray-100
                                    text-gray-700
                                "
                            >
                                {program.badge}
                            </span>

                            {/* Title */}

                            <h3 className="mt-6 text-3xl font-bold leading-tight">
                                {program.title}
                            </h3>

                            {/* Description */}

                            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                                {program.description}
                            </p>

                            {/* Topics */}

                            <div className="flex flex-wrap gap-3 mt-8">

                                {program.topics.map((topic) => (

                                    <span
                                        key={topic}
                                        className="
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-gray-100
                                            text-gray-700
                                            text-sm
                                        "
                                    >
                                        {topic}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* CTA */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >

                    <Link
                        to="/research"
                        className="
                            inline-flex
                            items-center
                            gap-3
                            px-8
                            py-4
                            rounded-xl
                            bg-black
                            text-white
                            font-medium
                            hover:scale-105
                            transition-all
                            duration-300
                        "
                    >
                        Explore Research

                        <ArrowRight size={18} />
                    </Link>

                </motion.div>

            </div>

        </section>
    );
}