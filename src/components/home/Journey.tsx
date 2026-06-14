import { motion } from "framer-motion";
import { timelineData } from "../../data/timeline";

export default function Journey() {
    return (
        <section className="py-32 bg-white">

            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold">
                        My Journey
                    </h2>

                    <p className="mt-4 text-xl text-gray-600">
                        From engineering education to industry leadership,
                        academia, and AI research.
                    </p>
                </motion.div>

                <div className="relative">

                    {/* Timeline Line */}

                    <div className="absolute left-6 top-0 h-full w-1 bg-blue-200" />

                    {timelineData.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="relative pl-20 pb-12"
                        >

                            {/* Dot */}

                            <div className="absolute left-[15px] top-2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow" />

                            <p className="text-blue-600 font-semibold">
                                {item.period}
                            </p>

                            <h3 className="text-2xl font-bold mt-2">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-gray-700">
                                {item.organization}
                            </p>

                            <p className="text-gray-500">
                                {item.location}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}