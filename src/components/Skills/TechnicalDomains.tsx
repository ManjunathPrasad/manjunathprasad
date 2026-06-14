const categories = [
    {
        title: "AI & Machine Learning",
        accent: "from-violet-600 to-purple-600",
        description: "Building intelligent systems through machine learning, deep learning, and multimodal AI research.",
        technologies: ["Python", "PyTorch", "NumPy", "SciPy", "Pandas", "Scikit-Learn", "Matplotlib"]
    },
    {
        title: "Full Stack Development",
        accent: "from-blue-600 to-cyan-600",
        description: "Designing scalable web applications and enterprise-grade software solutions.",
        technologies: ["ASP.NET Core MVC", "ASP.NET Core Web API", "React", "TypeScript", "JavaScript", "TailwindCSS"]
    },
    {
        title: "Cloud & DevOps",
        accent: "from-emerald-600 to-green-600",
        description: "Deploying, automating, and managing modern cloud-native application ecosystems.",
        technologies: ["Azure", "AWS", "Azure DevOps", "CI/CD", "Terraform", "Containerization"]
    },
    {
        title: "Software Testing",
        accent: "from-orange-500 to-red-500",
        description: "Ensuring quality through automated testing, validation frameworks, and test-driven practices.",
        technologies: ["Playwright", "Selenium", "xUnit", "NUnit", "Moq", "Fluent Assertions"]
    },
    {
        title: "Database Systems",
        accent: "from-sky-600 to-blue-700",
        description: "Managing relational and NoSQL databases powering enterprise and research applications.",
        technologies: ["SQL Server", "MongoDB", "Oracle", "Cosmos DB", "DynamoDB"]
    },
    {
        title: "Research & Innovation",
        accent: "from-pink-600 to-rose-600",
        description: "Advancing trustworthy AI through multimodal learning, hallucination detection, and model alignment.",
        technologies: ["Vision-Language Models", "Multimodal AI", "Hallucination Detection", "Model Alignment"]
    }
];

export default function TechnicalDomains() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/3 blur-3xl" />
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.03) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-500" />
                        <p className="uppercase tracking-[0.25em] text-blue-600 text-xs font-bold">
                            Technical Expertise
                        </p>
                        <div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-500" />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                            Technology Domains
                        </span>
                    </h1>
                    
                    <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                        A multidisciplinary foundation spanning software engineering, cloud computing,
                        artificial intelligence, testing, and academic research.
                    </p>
                    
                    <div className="flex justify-center gap-2 mt-8">
                        <div className="w-12 h-1 rounded-full bg-blue-500" />
                        <div className="w-4 h-1 rounded-full bg-purple-500" />
                        <div className="w-2 h-1 rounded-full bg-pink-500" />
                    </div>
                </div>

                {/* Domain Cards Grid */}
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {categories.map((category, idx) => (
                        <div
                            key={category.title}
                            className="group relative"
                            style={{
                                animationDelay: `${idx * 0.07}s`,
                                animation: `cardReveal 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards`
                            }}
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.accent} rounded-2xl opacity-0 group-hover:opacity-25 transition-all duration-500 blur-xl group-hover:blur-2xl`} />
                            
                            {/* Main Card */}
                            <div className="relative h-full rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                                
                                {/* Top Gradient Accent Bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${category.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`} />
                                
                                <div className="p-7">
                                    {/* Category Identifier Dot */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.accent}`} />
                                        <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                                            Domain
                                        </span>
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                                        {category.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {category.description}
                                    </p>
                                    
                                    {/* Divider */}
                                    <div className="mb-5 pt-2">
                                        <div className="flex items-center gap-2">
                                            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                                                Technology Stack
                                            </div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                                        </div>
                                    </div>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100 hover:border-transparent hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 hover:text-white transition-all duration-300 cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                

                {/* Capability Statement Banner */}
                <div className="mt-20 group">
                    <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden shadow-2xl">
                        {/* Animated Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl" />
                        
                        <div className="relative p-10 md:p-14">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        <p className="uppercase tracking-[0.25em] text-blue-400 text-xs font-semibold">
                                            Capability Statement
                                        </p>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                        Bridging Industry,
                                        <br />
                                        Research & Education
                                    </h3>
                                    <p className="mt-5 text-slate-300 leading-relaxed max-w-2xl">
                                        My technical expertise spans enterprise software engineering, cloud platforms,
                                        AI research, and higher education, enabling me to connect theoretical ideas
                                        with practical implementation and real-world impact.
                                    </p>
                                </div>
                                
                                {/* Decorative Element */}
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent" />
                                        <span className="text-xs tracking-wider text-slate-400">INTEGRATED</span>
                                        <div className="w-12 h-px bg-gradient-to-l from-purple-400 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation Hint */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-300" />
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                            Continuously Expanding
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-300" />
                    </div>
                </div>
            </div>

            {/* Global Animation Styles */}
            <style>
                {`
                    @keyframes cardReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </section>
    );
}