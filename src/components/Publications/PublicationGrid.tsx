import { publications } from "../../data/publications";

export default function PublicationGrid() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
                        <p className="uppercase tracking-[0.25em] text-blue-600 text-xs font-bold">
                            Current Pipeline
                        </p>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                        Papers In Review
                    </h2>
                    
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
                    
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        A progressive research program investigating hallucination detection and 
                        confidence-grounding alignment in vision-language models.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />

                    {publications.map((paper, index) => {
                        const colors = [
                            {
                                node: "from-blue-500 to-cyan-500",
                                border: "border-blue-200",
                                badge: "bg-blue-50 text-blue-700",
                                dot: "bg-blue-500",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                node: "from-purple-500 to-pink-500",
                                border: "border-purple-200",
                                badge: "bg-purple-50 text-purple-700",
                                dot: "bg-purple-500",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                node: "from-emerald-500 to-green-500",
                                border: "border-emerald-200",
                                badge: "bg-emerald-50 text-emerald-700",
                                dot: "bg-emerald-500",
                                gradient: "from-emerald-500 to-green-500"
                            }
                        ];

                        const theme = colors[index % colors.length];
                        const isLast = index === publications.length - 1;

                        return (
                            <div key={paper.id} className="relative group">
                                
                                {/* Timeline Node */}
                                <div className="absolute left-2 md:left-5 top-6 z-20">
                                    <div className={`
                                        w-12 h-12 md:w-16 md:h-16 rounded-full 
                                        bg-gradient-to-r ${theme.node} 
                                        flex items-center justify-center
                                        text-white font-black text-sm md:text-base
                                        shadow-xl transform transition-all duration-300
                                        group-hover:scale-110 group-hover:shadow-2xl
                                    `}>
                                        {paper.paper}
                                    </div>
                                </div>

                                {/* Connection Line from Node to Card */}
                                <div className="absolute left-14 md:left-21 top-12 w-6 h-px bg-gradient-to-r from-slate-300 to-transparent" />

                                {/* Research Card */}
                                <div className="relative ml-20 md:ml-28 mb-12 md:mb-16">
                                    <div className={`
                                        relative rounded-2xl bg-white border ${theme.border}
                                        shadow-md hover:shadow-2xl transition-all duration-500
                                        group-hover:-translate-y-1 overflow-hidden
                                    `}>
                                        
                                        {/* Animated Gradient Border on Hover */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r ${theme.gradient} blur-xl`} />
                                        
                                        <div className="relative p-6 md:p-8">
                                            
                                            {/* Header Row */}
                                            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                                                {/* Stage Badge */}
                                                <div className={`
                                                    inline-flex items-center gap-2 px-4 py-2 rounded-full
                                                    text-xs font-semibold ${theme.badge}
                                                `}>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`} />
                                                    Research Stage {index + 1}
                                                </div>
                                                
                                                {/* Metric Badge */}
                                                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 text-white text-xs font-semibold shadow-lg">
                                                    {paper.metric}
                                                </div>
                                            </div>
                                            
                                            {/* Title */}
                                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                                                {paper.title}
                                            </h3>
                                            
                                            {/* Contribution */}
                                            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                                                {paper.contribution}
                                            </p>
                                            
                                            {/* Venue Tags */}
                                            <div className="flex flex-wrap gap-3">
                                                <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
                                                    {paper.venue}
                                                </span>
                                                <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-200">
                                                    {paper.plannedVenue}
                                                </span>
                                                <span className="px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-200 flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                                    Under Review
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Arrow Indicator between cards (except last) */}
                                    {!isLast && (
                                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                                            <div className="flex flex-col items-center">
                                                <div className="w-px h-6 bg-gradient-to-b from-slate-300 to-transparent" />
                                                <svg className="w-4 h-4 text-slate-400 mt-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pipeline Summary Footer */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-black text-blue-600">{publications.length}</div>
                            <div className="text-sm text-slate-500 mt-1">Active Papers</div>
                            <div className="text-xs text-slate-400 mt-0.5">In Research Pipeline</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-purple-600">3</div>
                            <div className="text-sm text-slate-500 mt-1">Research Stages</div>
                            <div className="text-xs text-slate-400 mt-0.5">Progressive Development</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-emerald-600">VLM</div>
                            <div className="text-sm text-slate-500 mt-1">Research Focus</div>
                            <div className="text-xs text-slate-400 mt-0.5">Vision-Language Models</div>
                        </div>
                    </div>
                    
                    {/* Bottom Note */}
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>Active Submissions</span>
                            <span className="mx-2">•</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>Under Review</span>
                            <span className="mx-2">•</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <span>Planned</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}