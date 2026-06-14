import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import miteLogo from "../../assets/mite-logo.png";
import campusImage from "../../assets/mite-campus.jpg";

export default function CurrentHome() {
    return (
        <section className="py-32">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-gray-200
                        bg-white
                        shadow-xl
                    "
                >

                    {/* Decorative Glow Effects */}

                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />

                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 p-12 lg:p-20">

                        {/* LEFT SIDE */}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >

                            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
                                Current Home
                            </p>

                            <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                                Mangalore Institute of Technology &
                                Engineering
                            </h2>

                            <p className="mt-8 text-xl font-semibold text-gray-800">
                                Assistant Professor
                            </p>

                            <p className="text-gray-600">
                                Department of Artificial Intelligence &
                                Machine Learning <br />
                                Badagamijar, Moodabidri, <br />
                                Karnataka 574225, India
                            </p>

                            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                                Contributing to research, teaching,
                                innovation, industry collaboration,
                                and the development of future AI engineers
                                through academic excellence and practical impact.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">

                                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm">
                                    Research
                                </span>

                                <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm">
                                    Teaching
                                </span>

                                <span className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm">
                                    Innovation
                                </span>

                                <span className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm">
                                    Industry Collaboration
                                </span>

                            </div>

                            <a
                                href="https://mite.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    mt-10
                                    px-6
                                    py-3
                                    rounded-xl
                                    bg-black
                                    text-white
                                    font-medium
                                    hover:scale-105
                                    hover:shadow-lg
                                    transition-all
                                    duration-300
                                "
                            >
                                Explore MITE

                                <ArrowUpRight
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />
                            </a>

                        </motion.div>

                        {/* RIGHT SIDE */}

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >

                            {/* Logo Card */}

                            <motion.div
                                whileHover={{
                                    y: -8,
                                    scale: 1.02
                                }}
                                transition={{ duration: 0.3 }}
                                className="
                                    bg-gradient-to-r
                                    from-blue-50
                                    to-orange-50
                                    rounded-3xl
                                    border
                                    border-gray-200
                                    p-8
                                    shadow-md
                                "
                            >

                                <div className="flex items-center gap-6">

                                    <img
                                        src={miteLogo}
                                        alt="MITE Logo"
                                        className="
                                            h-24
                                            w-auto
                                            object-contain
                                        "
                                    />

                                    <div>

                                        <h3 className="text-2xl font-bold">
                                            MITE
                                        </h3>

                                        <p className="text-gray-600">
                                            Invent Solutions
                                        </p>

                                        <p className="text-sm text-gray-500 mt-2">
                                            Excellence in Engineering,
                                            Innovation & Research
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                            {/* Campus Image */}

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="
                                    overflow-hidden
                                    rounded-3xl
                                    shadow-xl
                                    border
                                    border-gray-200
                                "
                            >

                                <img
                                    src={campusImage}
                                    alt="MITE Campus"
                                    className="
                                        w-full
                                        h-[380px]
                                        object-cover
                                        transition-all
                                        duration-700
                                        hover:scale-110
                                    "
                                />

                            </motion.div>

                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}