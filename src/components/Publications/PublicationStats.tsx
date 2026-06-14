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

                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm opacity-80">
                        Current Mission
                    </p>

                    <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
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

                    <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500">
                        Current Status
                    </p>

                    <div className="mt-6 space-y-6 flex-1">

                        {/* ACL Row */}
                        <div className="flex flex-wrap justify-between items-start gap-2">
                            <span className="text-sm md:text-base flex-1 min-w-[180px]">
                                Association Computational Linguistics (ACL) - ACL Rolling Reviews
                            </span>
                            <span className="font-bold text-blue-600 whitespace-nowrap">
                                3 Papers
                            </span>
                        </div>

                        {/* EMNLP Row - Fixed alignment */}
                        <div className="flex flex-wrap justify-between items-start gap-2">
                            <span className="text-sm md:text-base flex-1 min-w-[180px]">
                                Empirical Methods in Natural Language Processing (EMNLP) - Main Conference
                            </span>
                            <span className="font-bold text-purple-600 whitespace-nowrap">
                                P2 · P3
                            </span>
                        </div>

                        {/* Pandora Row */}
                        <div className="flex flex-wrap justify-between items-start gap-2">
                            <span className="text-sm md:text-base flex-1 min-w-[180px]">
                                Pandora Workshop - EMNLP
                            </span>
                            <span className="font-bold text-green-600 whitespace-nowrap">
                                P1
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

                        // P1, P2, P3 are submitted, P4 is ready to submit
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