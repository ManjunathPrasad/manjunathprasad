import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SkillsHero from "../components/Skills/SkillsHero";
import TechnicalDomains from "../components/Skills/TechnicalDomains";
import IndustryTimeline from "../components/Skills/IndustryTimeline";
import ResearchSkills from "../components/Skills/ResearchSkills";
import LearningJourney from "../components/Skills/LearningJourney";
import ToolboxWall from "../components/Skills/ToolboxWall";

export default function SkillsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Scroll to top whenever the Skills page is loaded/accessed
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        setIsVisible(false);
        
        // Small delay to reset animation
        const resetTimer = setTimeout(() => {
            setIsVisible(true);
        }, 50);
        
        return () => clearTimeout(resetTimer);
    }, [location.pathname]);

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
                className="bg-gray-50 overflow-hidden relative"
            >
                {/* Parallax Background Element */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ y: backgroundY }}
                >
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.1
                            }
                        }
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <SkillsHero />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <TechnicalDomains />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <IndustryTimeline />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <ResearchSkills />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <LearningJourney />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <ToolboxWall />
                    </motion.div>
                </motion.div>

                {/* Back to Top Button */}
                <motion.div
                    className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.div>
            </motion.div>
        </Layout>
    );
}