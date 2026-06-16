import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "../../assets/profile.jpg";

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

                        {/* Student Collaboration Message with Tailwind Gradient */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="relative mt-10 p-5 bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-800 rounded-lg border border-blue-400/30 overflow-hidden shadow-xl"
                        >
                            <style>
                                {`
                                    @keyframes shimmerAnimation {
                                        0% {
                                            transform: translateX(-100%);
                                        }
                                        100% {
                                            transform: translateX(100%);
                                        }
                                    }
                                    .shimmer-effect {
                                        animation: shimmerAnimation 2.5s ease-in-out infinite;s
                                    }
                                `}
                            </style>
                            
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 shimmer-effect bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                            
                            <div className="relative z-10">
                                <div className="relative z-10">
                                    <p className="text-white text-sm">
                                        <span className="font-bold text-white">Looking for Students</span><br /> <br />
                                        <span className="text-white/90">
                                            I am always looking for self-motivated undergraduate or graduate students. <br />
                                            Feel free to contact me with your CV. <br /><br />
                                        </span>
                                    </p>
                                    <Link 
                                        to="/contact"
                                        className="text-white font-semibold text-sm hover:text-white/80">
                                        Get in Touch →
                                    </Link>
                                </div>
                            </div>
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
                            src={profileImage}
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