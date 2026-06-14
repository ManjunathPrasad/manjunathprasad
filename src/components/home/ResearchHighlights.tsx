import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const papers = [
    {
        category: "Vision-Language Models",
        title: "Entropy for Hallucination Detection",
        color: "from-blue-500 to-cyan-500",
        badge: "bg-blue-50 text-blue-700",
        description:
            "Token-level uncertainty analysis for hallucination detection in Vision-Language Models."
    },
    {
        category: "Alignment",
        title: "HAlign",
        color: "from-pink-500 to-purple-500",
        badge: "bg-pink-50 text-pink-700",
        description:
            "Confidence-grounding misalignment modeling for hallucination detection."
    },
    {
        category: "Multimodal Reasoning",
        title: "HAlign-T",
        color: "from-purple-500 to-indigo-500",
        badge: "bg-purple-50 text-purple-700",
        description:
            "Token-level multimodal alignment analysis for fine-grained hallucination detection."
    },
    {
        category: "Trustworthy AI",
        title: "Mitigation",
        color: "from-green-500 to-emerald-500",
        badge: "bg-green-50 text-green-700",
        description:
            "Alignment-aware decoding strategies for reducing hallucinations in multimodal systems."
    },
    {
        category: "Applied Vision-Language AI",
        title: "Remote Sensing Scene Classification",
        color: "from-orange-500 to-red-500",
        badge: "bg-orange-50 text-orange-700",
        description:
            "Domain-adaptive CLIP framework with hybrid CNN-Transformer feature learning for zero-shot and few-shot remote sensing scene classification."
    }
];

export default function ResearchHighlights() {
    return (
        <section className="py-32">

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Research Highlights
                    </p>

                    <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                        Building Trustworthy
                        <br />
                        Multimodal Intelligence
                    </h2>

                    <p className="mt-6 text-xl text-gray-600">
                        Selected contributions from an evolving research agenda
                        focused on hallucination detection, multimodal alignment,
                        reasoning, and trustworthy AI systems.
                    </p>
                </motion.div>

                {/* Research Cards */}

                <div className="grid lg:grid-cols-2 gap-8 mt-20">

                    {papers.map((paper, index) => (

                        <motion.div
                            key={paper.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-gray-200
                                bg-white
                                shadow-lg
                                p-8
                            "
                        >
                            {/* Gradient Accent */}

                            <div
                                className={`
                                    absolute
                                    top-0
                                    left-0
                                    w-full
                                    h-1
                                    bg-gradient-to-r
                                    ${paper.color}
                                `}
                            />

                            {/* Category Badge */}

                            <span
                                className={`
                                    inline-flex
                                    px-3
                                    py-1
                                    rounded-full
                                    text-xs
                                    font-medium
                                    ${paper.badge}
                                `}
                            >
                                {paper.category}
                            </span>

                            {/* Title */}

                            <h3 className="mt-6 text-3xl font-bold">
                                {paper.title}
                            </h3>

                            {/* Description */}

                            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                                {paper.description}
                            </p>

                            {/* Visual Accent */}

                            <div
                                className={`
                                    mt-8
                                    h-16
                                    w-16
                                    rounded-2xl
                                    bg-gradient-to-r
                                    ${paper.color}
                                    opacity-90
                                    group-hover:scale-110
                                    transition-all
                                    duration-300
                                `}
                            />

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
                        to="/publications"
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
                        Explore Publications

                        <ArrowRight size={18} />
                    </Link>
                </motion.div>

            </div>

        </section>
    );
}