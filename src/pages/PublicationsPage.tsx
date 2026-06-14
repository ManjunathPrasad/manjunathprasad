import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PublicationsHero from "../components/Publications/PublicationsHero";
import PublicationStats from "../components/Publications/PublicationStats";
import PublicationGrid from "../components/Publications/PublicationGrid";
import ResearchTrajectory from "../components/Publications/ResearchTrajectory";
import Navbar from "../components/layout/Navbar";

export default function PublicationsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Scroll to top whenever the Publications page is loaded/accessed
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
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                <Navbar />
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, scale: 0.98 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                        }}
                    >
                        <PublicationsHero />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                    delayChildren: 0.15
                                }
                            }
                        }}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                            }}
                        >
                            <PublicationStats />
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                            }}
                        >
                            <PublicationGrid />
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                            }}
                        >
                            <ResearchTrajectory />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}