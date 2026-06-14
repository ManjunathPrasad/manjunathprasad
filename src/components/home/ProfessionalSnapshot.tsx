import { motion } from "framer-motion";

const stats = [
    {
        value: "9+",
        label: "Years in Academia",
        color: "text-blue-600"
    },
    {
        value: "5+",
        label: "Years in Industry",
        color: "text-purple-600"
    },
    {
        value: "AI",
        label: "Vision-Language Research",
        color: "text-emerald-700"  // Rich dark green
    },
    {
        value: "Cloud",
        label: "Azure • AWS • DevOps",
        color: "text-amber-700"  // Rich dark gold/amber
    }
];

export default function ProfessionalSnapshot() {
    return (
        <section className="py-32">
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
                        Professional Snapshot
                    </p>
                    <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                        Academia, Industry
                        <br />
                        and AI Research
                    </h2>
                    <p className="mt-6 text-xl text-gray-600">
                        Bridging teaching, software engineering,
                        cloud technologies, and trustworthy
                        multimodal AI research.
                    </p>
                </motion.div>

                {/* Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
                    {stats.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6
                            }}
                            className="text-center"
                        >
                            <h3
                                className={`
                                    text-6xl
                                    lg:text-8xl
                                    font-bold
                                    tracking-tight
                                    ${item.color}
                                `}
                            >
                                {item.value}
                            </h3>
                            <p
                                className="
                                    mt-4
                                    text-lg
                                    lg:text-xl
                                    text-gray-600
                                "
                            >
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}