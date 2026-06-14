import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
    // Update this path to your actual CV file location
    const cvPdfPath = "../src/public/CV-Manjunath-Prasad.pdf";
    // Or if using external link:
    // const cvPdfPath = "https://drive.google.com/your-cv-link";

    return (
        <section className="min-h-[75vh] flex items-center">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side */}

                    <div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-blue-600 font-semibold tracking-wide mb-5"
                        >
                            Assistant Professor • Multimodal & Trustworthy AI Researcher
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-7xl lg:text-8xl font-bold leading-tight"
                        >
                            Manjunath
                            <br />
                            Prasad H. R.
                        </motion.h1>

                        {/* Research Areas */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-wrap gap-3 mt-8"
                        >
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                Vision-Language Models
                            </span>

                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                Multimodal AI
                            </span>

                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                Hallucination Detection
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-8 text-xl text-gray-600 max-w-2xl leading-relaxed"
                        >
                            Building Vision-Language AI Systems for Trustworthy Multimodal Intelligence
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex gap-4 mt-10"
                        >
                            <Link
                                to="/research"
                                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
                            >
                                View Research
                            </Link>

                            <a
                                href={cvPdfPath}
                                download="Manjunath_Prasad_CV.pdf"
                                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
                            >
                                Download CV
                            </a>
                        </motion.div>

                    </div>

                    {/* Right Side */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <img
                            src="../src/assets/profile.jpg"
                            alt="Manjunath Prasad"
                            className="w-80 h-80 rounded-full object-cover shadow-2xl"
                            style={{ objectPosition: "center 5%" }}
                        />
                    </motion.div>

                </div>

            </div>

        </section>
    );
}