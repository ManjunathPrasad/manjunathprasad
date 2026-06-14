const journey = [
    {
        year: "2004 - 08",
        title: "C Programming, C++, Java, and C#",
        description: "Foundation in structured programming, algorithms, and problem solving.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        year: "2009 - 11",
        title: "C# and .NET",
        description: "In-house project development using C#, ASP.NET, and SQL Server.",
        color: "from-purple-500 to-pink-500"
    },
    {
        year: "2011 - 16",
        title: "Web Development",
        description: "Transition into Web technologies",
        color: "from-green-500 to-emerald-500"
    },
    {
        year: "2017 - 19",
        title: "Machine Learning",
        description: "Learning statistical modeling, supervised learning, and deep learning.",
        color: "from-orange-500 to-red-500"
    },
    {
        year: "2019 - 24",
        title: "Enterprise Experience",
        description: "Built several enterprise systems using ASP.NET Full Stack Development",
        color: "from-cyan-500 to-blue-500"
    },
    {
        year: "2024 - 26",
        title: "Computer Vision and NLP",
        description: "Understanding image representations, CNNs, and visual reasoning.",
        color: "from-indigo-500 to-violet-500"
    },
    {
        year: "2026",
        title: "Vision-Language Models",
        description: "Researching multimodal learning, hallucination detection, and alignment.",
        color: "from-pink-500 to-rose-500"
    },
    {
        year: "Future",
        title: "Agentic AI",
        description: "Building intelligent systems capable of planning, reasoning, and execution.",
        color: "from-amber-500 to-orange-600"
    }
];

export default function LearningJourney() {
    return (
        <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
            
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
                
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-24">
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="h-px w-8 bg-blue-500/50" />
                            <p className="uppercase tracking-[0.3em] text-blue-400 text-xs font-semibold">
                                Learning Journey
                            </p>
                            <div className="h-px w-8 bg-blue-500/50" />
                        </div>
                    </div>
                    
                    <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
                        <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                            Evolution of Skills
                        </span>
                    </h2>
                    
                    <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed font-light">
                        From software engineering foundations to multimodal AI research and future agentic systems
                    </p>
                    
                    <div className="mt-8 flex justify-center">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                </div>

                {/* Timeline Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {journey.map((item, index) => (
                        <div
                            key={item.title}
                            className="group relative"
                            style={{
                                animation: `fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards`,
                                animationDelay: `${index * 0.05}s`,
                                opacity: 0
                            }}
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl group-hover:blur-2xl`} />
                            
                            {/* Main Card */}
                            <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                                
                                {/* Top Gradient Bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                                
                                {/* Content Container */}
                                <div className="p-6 pt-8 h-full flex flex-col">
                                    
                                    {/* Year Section */}
                                    <div className="mb-4">
                                        <span className="text-sm font-mono tracking-wider text-blue-400 opacity-80">
                                            {item.year}
                                        </span>
                                        <div className={`w-12 h-px bg-gradient-to-r ${item.color} mt-2 group-hover:w-20 transition-all duration-500`} />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                                        {item.description}
                                    </p>
                                    
                                    {/* Future Badge */}
                                    {item.year === "Future" && (
                                        <div className="mt-5 pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-2 text-xs">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                                <span className="text-amber-400 font-medium tracking-wide">
                                                    NEXT MILESTONE
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Decorative Element */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Key Milestones Section */}
                <div className="mt-24 grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
                    {[
                        { value: "8+", label: "Years of Experience", metric: "Enterprise Software" },
                        { value: "12+", label: "Technologies Mastered", metric: "Full Stack & AI" },
                        { value: "5+", label: "Research Publications", metric: "In Submission" }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                            <div className="text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-semibold text-slate-300 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-slate-500">
                                {stat.metric}
                            </div>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* Horizontal Timeline Visualization */}
                <div className="mt-24 hidden lg:block px-8">
                    <div className="relative py-8">
                        {/* Timeline Track */}
                        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                        
                        {/* Timeline Nodes */}
                        <div className="flex justify-between relative">
                            {journey.map((item, index) => (
                                <div key={item.title} className="flex flex-col items-center group cursor-pointer">
                                    {/* Node */}
                                    <div className="relative z-10">
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} shadow-lg transition-all duration-300 group-hover:scale-150 group-hover:shadow-xl`}>
                                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        </div>
                                    </div>
                                    
                                    {/* Year Label */}
                                    <div className="mt-3">
                                        <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
                                            {item.year}
                                        </span>
                                    </div>
                                    
                                    {/* Tooltip Line */}
                                    <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform -translate-x-1/2 left-1/2 w-48">
                                        <div className="bg-slate-800 rounded-lg px-3 py-2 text-center border border-slate-700 shadow-xl">
                                            <p className="text-xs font-medium text-white">{item.title}</p>
                                            <div className="text-[10px] text-slate-400 mt-1">{item.description.substring(0, 50)}...</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Strategic Direction Banner */}
                <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-white/10 backdrop-blur-xl p-10 md:p-14 relative overflow-hidden group">
                    {/* Animated Border Accents */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    
                    <div className="relative text-center">
                        {/* Direction Badge */}
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-semibold">
                                Current Direction
                            </span>
                            <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-400" />
                        </div>
                        
                        {/* Main Statement */}
                        <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                            <span className="text-white">Industry Experience</span>
                            <span className="text-blue-400 mx-3 inline-block animate-pulse">→</span>
                            <span className="text-white">Research Excellence</span>
                            <span className="text-purple-400 mx-3 inline-block animate-pulse">→</span>
                            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                Agentic Intelligence
                            </span>
                        </h3>
                        
                        {/* Description */}
                        <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-relaxed text-base font-light">
                            The journey combines enterprise software engineering, cloud systems, machine learning,
                            computer vision, and vision-language research into a long-term pursuit of trustworthy and
                            autonomous AI systems.
                        </p>
                        
                        {/* Action Button */}
                        <button className="group/btn mt-8 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm font-semibold border border-white/10 hover:border-white/20 relative overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Research Journey
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                        </button>
                    </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-16 flex justify-center">
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                    </div>
                </div>
            </div>

            {/* Animation Keyframes */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}