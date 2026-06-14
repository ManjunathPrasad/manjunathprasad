export default function PublicationStats() {

    const papers = [
        "P1",
        "P2",
        "P3",
        "P4",
        "P5",
        "P6",
        "P7"
    ];

    return (

        <section className="pb-24">

            <style>
                {`
                    @keyframes borderShimmer {
                        0% {
                            transform: translateX(-120%);
                        }
                        100% {
                            transform: translateX(220%);
                        }
                    }

                    .shimmer-border {
                        position: relative;
                        overflow: hidden;
                    }

                    .shimmer-border::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 40%;
                        height: 100%;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(255,255,255,0.9),
                            transparent
                        );
                        animation: borderShimmer 2.5s linear infinite;
                        pointer-events: none;
                    }
                `}
            </style>

            {/* ===================================== */}
            {/* TOP SECTION */}
            {/* ===================================== */}

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

                {/* Mission Card */}

                <div
                    className="
                        lg:col-span-2
                        rounded-3xl
                        p-6
                        md:p-8
                        bg-gradient-to-br
                        from-blue-600
                        via-purple-600
                        to-indigo-700
                        text-white
                        shadow-xl
                        hover:shadow-2xl
                        transition-all
                        duration-500
                    "
                >

                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm opacity-80 font-semibold">
                        Current Mission
                    </p>

                    <h3 className="mt-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
                        Trustworthy Vision-Language Models
                    </h3>

                    <p className="mt-5 md:mt-6 text-base md:text-lg text-blue-100 leading-relaxed">
                        Building a unified research trajectory around
                        hallucination detection, confidence-grounding
                        alignment, interpretability, and agentic reasoning.
                    </p>

                </div>

                {/* Status Card */}

                <div
                    className="
                        rounded-3xl
                        p-6
                        md:p-8
                        bg-white
                        border
                        border-gray-100
                        shadow-lg
                        hover:shadow-xl
                        transition-all
                        flex
                        flex-col
                    "
                >

                    <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold">
                        Current Status
                    </p>

                    <div className="mt-6 space-y-6 flex-1">
                        {/* Table Header */}
                        <div className="hidden sm:grid sm:grid-cols-12 text-xs font-semibold text-gray-400 pb-2 border-b border-gray-100">
                            <div className="col-span-6">Conference / Workshop</div>
                            <div className="col-span-2 text-center">Rank</div>
                            <div className="col-span-4 text-right">Papers (First Author)</div>
                        </div>

                        {/* ACL Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start sm:items-center">
                            <div className="sm:col-span-6">
                                <span className="text-sm md:text-base">
                                    Association for Computational Linguistics (ACL) - ACL Rolling Reviews
                                </span>
                            </div>
                            <div className="sm:col-span-2">
                                <span className="inline-block sm:w-full text-center px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs font-bold">
                                    A
                                </span>
                            </div>
                            <div className="sm:col-span-4 flex justify-between sm:justify-end items-center">
                                <span className="text-xs text-gray-400 sm:hidden mr-2">Papers:</span>
                                <span className="font-bold text-blue-600 whitespace-nowrap">
                                    3 Papers
                                </span>
                            </div>
                        </div>

                        {/* EMNLP Row - with A* Rank Hyperlinked */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start sm:items-center">
                            <div className="sm:col-span-6">
                                <span className="text-sm md:text-base">
                                    Empirical Methods in Natural Language Processing (EMNLP) - Main Conference
                                </span>
                            </div>
                            <div className="sm:col-span-2">
                                <a 
                                    href="https://portal.core.edu.au/conf-ranks/?search=EMNLP&by=all&source=ICORE2026&sort=atitle&page=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block sm:w-full text-center px-2 py-0.5 bg-red-100 text-red-700 rounded-md text-xs font-bold shadow-sm hover:bg-red-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                                >
                                    A*
                                </a>
                            </div>
                            <div className="sm:col-span-4 flex justify-between sm:justify-end items-center">
                                <span className="text-xs text-gray-400 sm:hidden mr-2">Papers:</span>
                                <span className="font-bold text-purple-600 whitespace-nowrap">
                                    P2 · P3
                                </span>
                            </div>
                        </div>

                        {/* Pandora Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start sm:items-center">
                            <div className="sm:col-span-6">
                                <span className="text-sm md:text-base">
                                    Pandora Workshop
                                </span>
                            </div>
                            <div className="sm:col-span-2">
                                <span className="inline-block sm:w-full text-center px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs font-bold">
                                    —
                                </span>
                            </div>
                            <div className="sm:col-span-4 flex justify-between sm:justify-end items-center">
                                <span className="text-xs text-gray-400 sm:hidden mr-2">Papers:</span>
                                <span className="font-bold text-green-600 whitespace-nowrap">
                                    P1
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* First author note - Centered with blue/purple gradient */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex justify-center items-center">
                            <span className="text-sm flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                                <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                All papers are first-author publications
                            </span>
                        </div>
                    </div>

                </div>

            </div>

            {/* ===================================== */}
            {/* RESEARCH PROGRAM */}
            {/* ===================================== */}

            <div
                className="
                    mt-8
                    bg-white
                    rounded-3xl
                    border
                    border-gray-100
                    p-6
                    md:p-8
                    shadow-lg
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        md:justify-between
                        gap-3
                        mb-8
                    "
                >

                    <h3 className="text-xl md:text-2xl font-bold">
                        Research Program Progress
                    </h3>

                    <span className="text-blue-600 font-semibold">
                        4 / 7 Papers Active
                    </span>

                </div>

                {/* Responsive Grid */}

                <div
                    className="
                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        lg:grid-cols-7
                        gap-4
                    "
                >

                    {papers.map((paper, index) => {

                        const submitted = index < 3;
                        const readyToSubmit = index === 3;
                        const polly = index === 6;

                        return (

                            <div
                                key={paper}
                                className={`
                                    relative
                                    rounded-2xl
                                    p-5
                                    text-center
                                    border
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    group

                                    ${
                                        submitted
                                            ? `
                                                shimmer-border
                                                bg-green-50
                                                border-green-300
                                                shadow-green-100
                                              `
                                            : readyToSubmit
                                            ? `
                                                bg-yellow-50
                                                border-yellow-300
                                                shadow-yellow-100
                                              `
                                            : polly
                                            ? `
                                                bg-orange-50
                                                border-orange-200
                                              `
                                            : `
                                                bg-gray-50
                                                border-gray-200
                                              `
                                    }
                                `}
                            >

                                {submitted && (

                                    <div
                                        className="
                                            absolute
                                            top-3
                                            right-3
                                            h-3
                                            w-3
                                            rounded-full
                                            bg-green-500
                                            animate-pulse
                                        "
                                    />

                                )}

                                <div className="font-black text-xl md:text-2xl">
                                    {paper}
                                </div>

                                <div className="text-xs mt-3 text-gray-500">

                                    {
                                        submitted
                                            ? "Submitted"
                                            : readyToSubmit
                                            ? "Ready to submit"
                                            : polly
                                            ? "Polly"
                                            : "Planned"
                                    }

                                </div>

                                {submitted && (

                                    <div
                                        className="
                                            mt-3
                                            text-[10px]
                                            uppercase
                                            tracking-wider
                                            text-green-700
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        Under Review
                                    </div>

                                )}

                                {readyToSubmit && (

                                    <div
                                        className="
                                            mt-3
                                            text-[10px]
                                            uppercase
                                            tracking-wider
                                            text-yellow-700
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        Ready
                                    </div>

                                )}

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );
}