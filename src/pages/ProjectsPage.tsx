import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                <Navbar />
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="py-32 text-center"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                        Research Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Exploring trustworthy AI, vision-language models, and multimodal systems.
                    </p>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}