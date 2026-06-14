const companies = [
    {
        name: "Charles Schwab",
        location: "Austin, Texas, USA",
        role: ".NET Framework Backend API Development",
        period: "Trading Technology Systems - Equity, Mutual Funds, and Contingencies",
        years: "Domain Expertise",

        accent:
            "from-emerald-500 to-green-600"
    },
    

    {
        name: "Microsoft Corporation",
        location: "Redmond, Washington, USA",
        role: "Azure Full Stack Development",
        period: "Enterprise Software Engineering with Azure full stack development and Microsoft CRM customer Service",
        years: "Cloud and Full Stack",

        accent:
            "from-blue-500 to-cyan-500"
    },

    {
        name: "Travelers",
        location: "Hartford, Connecticut, USA",
        role: ".NET Backend Development",
        period: "Large-Scale Enterprise Applications",
        years: "Productivity & Scale",

        accent:
            "from-purple-500 to-pink-500"
    },

    {
        name: "Infosys",
        location: "Multiple Locations, India/USA",
        role: "Technology Lead",
        period: "Leadership & Delivery",
        years: "Technical Leadership",

        accent:
            "from-orange-500 to-red-500"
    }

];

export default function IndustryTimeline() {

    return (

        <section className="py-24 md:py-32 bg-slate-50">

            <div className="max-w-7xl mx-auto px-1">

                {/* Header */}

                <div className="text-center">

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-600
                            text-xs
                            md:text-sm
                            font-semibold
                        "
                    >
                        Industry Journey
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                        "
                    >
                        Enterprise Experience
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl
                            mx-auto
                            text-gray-600
                            text-lg
                        "
                    >
                        Building enterprise software, leading teams,
                        and solving real-world engineering challenges
                        before transitioning into AI research.
                    </p>

                </div>

                {/* Timeline Cards */}

                <div
                    className="
                        mt-20
                        grid
                        md:grid-cols-2
                        xl:grid-cols-4
                        gap-8
                    "
                >

                    {companies.map((company, index) => (

                        <div
                            key={company.name}
                            className="
                                group
                                relative
                            "
                        >

                            {/* Step Number */}

                            <div
                                className="
                                    absolute
                                    -top-5
                                    left-8
                                    z-20
                                    h-12
                                    w-12
                                    rounded-2xl
                                    bg-white
                                    border
                                    border-gray-200
                                    shadow-lg
                                    flex
                                    items-center
                                    justify-center
                                    text-lg
                                    font-black
                                "
                            >
                                {index + 1}
                            </div>

                            <div
                                className="
                                    h-full
                                    rounded-[2rem]
                                    overflow-hidden
                                    bg-white
                                    border
                                    border-gray-200
                                    shadow-lg
                                    hover:shadow-2xl
                                    hover:-translate-y-3
                                    transition-all
                                    duration-500
                                "
                            >

                                {/* Gradient Header */}

                                <div
                                    className={`
                                        h-32
                                        bg-gradient-to-r
                                        ${company.accent}
                                        relative
                                    `}
                                >

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-black/10
                                        "
                                    />

                                </div>

                                {/* Content */}

                                <div className="p-8">

                                    <div
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-wider
                                            text-gray-400
                                            font-semibold
                                        "
                                    >
                                        {company.years}
                                    </div>

                                    <h3
                                        className="
                                            mt-3
                                            text-3xl
                                            font-black
                                        "
                                    >
                                        {company.name}
                                    </h3>

                                    {/* Location Badge */}
                                    <div className="mt-2 flex items-center gap-1">
                                        <svg 
                                            className="w-4 h-4 text-gray-500" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                            />
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                            />
                                        </svg>
                                        <p className="text-sm text-gray-500 font-medium">
                                            {company.location}
                                        </p>
                                    </div>

                                    <p
                                        className="
                                            mt-4
                                            text-blue-600
                                            font-semibold
                                            text-lg
                                        "
                                    >
                                        {company.role}
                                    </p>

                                    <p
                                        className="
                                            mt-6
                                            text-gray-600
                                            leading-relaxed
                                        "
                                    >
                                        {company.period}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom Career Summary */}

                <div
                    className="
                        mt-20
                        rounded-[2rem]
                        overflow-hidden
                        bg-gradient-to-r
                        from-slate-900
                        via-blue-900
                        to-slate-900
                        p-10
                        md:p-14
                        text-white
                        relative
                    "
                >

                    <div
                        className="
                            absolute
                            right-0
                            top-0
                            h-64
                            w-64
                            rounded-full
                            bg-blue-500/20
                            blur-3xl
                        "
                    />

                    <div className="relative">

                        <p
                            className="
                                uppercase
                                tracking-[0.3em]
                                text-blue-300
                                text-xs
                                font-semibold
                            "
                        >
                            Career Evolution
                        </p>

                        <h3
                            className="
                                mt-4
                                text-3xl
                                md:text-5xl
                                font-black
                            "
                        >
                            Software Engineer →
                            Technology Lead →
                            AI Researcher
                        </h3>

                        <p
                            className="
                                mt-6
                                max-w-4xl
                                text-slate-300
                                text-lg
                                leading-relaxed
                            "
                        >
                            Experience across enterprise software,
                            cloud systems, financial technology,
                            large-scale application development,
                            technical leadership, and modern AI research
                            provides a unique foundation for building
                            trustworthy intelligent systems.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}