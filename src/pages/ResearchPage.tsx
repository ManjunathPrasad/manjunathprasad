import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ResearchHero from "../components/Research/ResearchHero";
import ResearchThemes from "../components/Research/ResearchThemes";
import ResearchProgram from "../components/Research/ResearchProgram";
import ResearchEvolution from "../components/Research/ResearchEvolution";
import ResearchQuestions from "../components/Research/ResearchQuestions";
import FutureVision from "../components/Research/FutureVision";

export default function ResearchPage() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Scroll to top whenever the Research page is loaded/accessed
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        setIsVisible(false);
        
        // Small delay to reset animation
        const resetTimer = setTimeout(() => {
            setIsVisible(true);
        }, 50);
        
        return () => clearTimeout(resetTimer);
    }, [location.pathname]); // Re-run when the route changes to this page

    // Also scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50"
            >
                <motion.div
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <ResearchHero />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <ResearchThemes />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <ResearchProgram />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <ResearchEvolution />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <ResearchQuestions />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <FutureVision />
                    </motion.div>
                </motion.div>
            </motion.div>
        </Layout>
    );
}