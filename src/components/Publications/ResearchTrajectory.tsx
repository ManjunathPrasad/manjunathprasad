"use client";

import { useState, useEffect, useRef } from "react";

export default function ResearchTrajectory() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const roadmap = [
        {
            title: "P1",
            name: "Entropy",
            status: "Completed",
            description: "Foundational research on uncertainty quantification in VLMs",
            year: "2024",
            icon: "✓"
        },
        {
            title: "P2",
            name: "HAlign",
            status: "Completed",
            description: "Hallucination detection through confidence-grounding alignment",
            year: "2024",
            icon: "✓"
        },
        {
            title: "P3",
            name: "HAlign-T",
            status: "Completed",
            description: "Temporal extension for dynamic multimodal scenarios",
            year: "2024",
            icon: "✓"
        },
        {
            title: "P4",
            name: "Decoding",
            status: "Current",
            description: "Interpretable decoding strategies for VLM outputs",
            year: "2025",
            icon: "●"
        },
        {
            title: "P5",
            name: "Representation",
            status: "Planned",
            description: "Learning robust multimodal representations",
            year: "2025",
            icon: "○"
        },
        {
            title: "P6",
            name: "Mechanistic",
            status: "Planned",
            description: "Mechanistic interpretability of vision-language models",
            year: "2025",
            icon: "○"
        },
        {
            title: "P7",
            name: "Polly",
            status: "Vision",
            description: "Autonomous agents with grounded multimodal reasoning",
            year: "2026",
            icon: "★"
        }
    ];

    // Scroll progress tracking for interactive line
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollableDistance = roadmap.length - 1;
                const progress = Math.min(Math.max((window.scrollY - rect.top + 200) / 400, 0), scrollableDistance);
                setScrollProgress(progress);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getStatusStyles = (status: string) => {
        switch(status) {
            case "Completed":
                return {
                    node: "from-emerald-500 to-green-500",
                    bg: "bg-emerald-50",
                    text: "text-emerald-700",
                    border: "border-emerald-200",
                    glow: "shadow-emerald-200",
                    dot: "bg-emerald-500"
                };
            case "Current":
                return {
                    node: "from-blue-500 to-cyan-500",
                    bg: "bg-blue-50",
                    text: "text-blue-700",
                    border: "border-blue-200",
                    glow: "shadow-blue-200",
                    dot: "bg-blue-500 animate-pulse"
                };
            case "Planned":
                return {
                    node: "from-slate-400 to-slate-500",
                    bg: "bg-slate-50",
                    text: "text-slate-600",
                    border: "border-slate-200",
                    glow: "shadow-slate-200",
                    dot: "bg-slate-400"
                };
            case "Vision":
                return {
                    node: "from-amber-500 to-orange-500",
                    bg: "bg-amber-50",
                    text: "text-amber-700",
                    border: "border-amber-200",
                    glow: "shadow-amber-200",
                    dot: "bg-amber-500"
                };
            default:
                return {
                    node: "from-gray-400 to-gray-500",
                    bg: "bg-gray-50",
                    text: "text-gray-600",
                    border: "border-gray-200",
                    glow: "shadow-gray-200",
                    dot: "bg-gray-400"
                };
        }
    };

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
                        <p className="uppercase tracking-[0.25em] text-blue-600 text-xs font-bold">
                            Long-Term Research Agenda
                        </p>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                            Research Trajectory
                        </span>
                    </h2>
                    
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
                    
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        From hallucination detection to grounded AI agents — a progressive research roadmap
                    </p>
                </div>

                {/* Desktop Interactive Timeline */}
                <div className="hidden lg:block relative mt-20">
                    
                    {/* Timeline Track */}
                    <div className="relative mb-16">
                        {/* Background Line */}
                        <div className="absolute top-8 left-0 right-0 h-1 bg-slate-200 rounded-full" />
                        
                        {/* Animated Progress Line */}
                        <div 
                            className="absolute top-8 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-300"
                            style={{ width: `${(scrollProgress / (roadmap.length - 1)) * 100}%` }}
                        />
                        
                        {/* Timeline Nodes */}
                        <div className="relative flex justify-between">
                            {roadmap.map((item, index) => {
                                const styles = getStatusStyles(item.status);
                                const isActive = activeIndex === index;
                                const progress = (scrollProgress / (roadmap.length - 1)) * 100;
                                const isPassed = (index / (roadmap.length - 1)) * 100 <= progress;
                                
                                return (
                                    <div
                                        key={item.title}
                                        className="flex flex-col items-center group cursor-pointer"
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        {/* Node Container */}
                                        <div className="relative">
                                            {/* Pulsing Ring for Current/Active */}
                                            {(item.status === "Current" || isActive) && (
                                                <div className={`
                                                    absolute -inset-2 rounded-full bg-gradient-to-r ${styles.node} 
                                                    opacity-30 animate-ping
                                                `} />
                                            )}
                                            
                                            {/* Main Node */}
                                            <div className={`
                                                relative z-10 w-16 h-16 rounded-full 
                                                bg-gradient-to-r ${styles.node}
                                                flex items-center justify-center
                                                text-white font-black text-xl
                                                shadow-xl transform transition-all duration-500
                                                group-hover:scale-125 group-hover:shadow-2xl
                                                ${isPassed ? 'scale-105' : ''}
                                            `}>
                                                {item.title}
                                            </div>
                                        </div>
                                        
                                        {/* Name Label */}
                                        <div className="mt-4 text-center">
                                            <div className="font-bold text-slate-800 text-base">
                                                {item.name}
                                            </div>
                                            <div className={`text-xs font-semibold mt-1 ${styles.text}`}>
                                                {item.status}
                                            </div>
                                            <div className="text-xs text-slate-400 mt-1">
                                                {item.year}
                                            </div>
                                        </div>
                                        
                                        {/* Hover Card */}
                                        {isActive && (
                                            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 mt-2 w-64 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                                                <div className={`bg-white rounded-xl p-4 shadow-2xl border-l-4 ${styles.border}`}>
                                                    <p className="text-sm text-slate-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                {/* Tooltip Arrow */}
                                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-200" />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Interactive Legend */}
                    <div className="mt-20 flex justify-center gap-8">
                        {["Completed", "Current", "Planned", "Vision"].map((status) => {
                            const styles = getStatusStyles(status);
                            return (
                                <div key={status} className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${styles.node}`} />
                                    <span className="text-xs text-slate-600">{status}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile/Tablet Interactive Timeline */}
                <div className="lg:hidden mt-12">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />
                        
                        <div className="space-y-6">
                            {roadmap.map((item, index) => {
                                const styles = getStatusStyles(item.status);
                                const [isExpanded, setIsExpanded] = useState(false);
                                
                                return (
                                    <div
                                        key={item.title}
                                        className="relative group"
                                    >
                                        {/* Node */}
                                        <div className="absolute left-0 top-2">
                                            <div className={`
                                                w-12 h-12 rounded-full 
                                                bg-gradient-to-r ${styles.node}
                                                flex items-center justify-center
                                                text-white font-bold text-sm
                                                shadow-lg transform transition-all duration-300
                                                group-hover:scale-110
                                            `}>
                                                {item.title}
                                            </div>
                                        </div>
                                        
                                        {/* Content Card */}
                                        <div 
                                            className="ml-16 pl-4 cursor-pointer"
                                            onClick={() => setIsExpanded(!isExpanded)}
                                        >
                                            <div className={`
                                                rounded-2xl bg-white border ${styles.border}
                                                p-5 shadow-md transition-all duration-300
                                                hover:shadow-xl
                                            `}>
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h4 className="font-bold text-slate-800 text-lg">
                                                            {item.name}
                                                        </h4>
                                                        <div className={`text-xs font-semibold mt-1 ${styles.text}`}>
                                                            {item.status} • {item.year}
                                                        </div>
                                                    </div>
                                                    <svg 
                                                        className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                                
                                                {/* Expandable Description */}
                                                <div className={`
                                                    overflow-hidden transition-all duration-300
                                                    ${isExpanded ? 'max-h-32 mt-4' : 'max-h-0'}
                                                `}>
                                                    <p className="text-sm text-slate-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Journey Summary Banner */}
                <div className="mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                                Current Milestone
                            </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-black text-white">
                            Advancing Toward Agentic AI
                        </h3>
                        
                        <p className="mt-4 text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            3 papers completed, 1 in progress, building toward autonomous 
                            multimodal reasoning systems with grounded confidence estimation.
                        </p>
                        
                        {/* Progress Stats */}
                        <div className="mt-8 flex flex-wrap justify-center gap-8">
                            <div>
                                <div className="text-2xl font-black text-emerald-400">3</div>
                                <div className="text-xs text-slate-400">Completed</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-blue-400">1</div>
                                <div className="text-xs text-slate-400">In Progress</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-amber-400">3</div>
                                <div className="text-xs text-slate-400">Planned</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}