const categories = [

    {
        title: "AI & Machine Learning",

        description:
            "Building intelligent systems through machine learning, deep learning, and multimodal AI research.",

        technologies: [
            "Python",
            "PyTorch",
            "NumPy",
            "SciPy",
            "Pandas",
            "Scikit-Learn",
            "Matplotlib"
        ],

        gradient:
            "from-blue-500 to-cyan-500"
    },

    {
        title: "Full Stack Development",

        description:
            "Designing scalable web applications and enterprise-grade software solutions.",

        technologies: [
            "ASP.NET Core MVC",
            "ASP.NET Core Web API",
            "React",
            "TypeScript",
            "JavaScript",
            "CSS - TailwindCSS"
        ],

        gradient:
            "from-purple-500 to-pink-500"
    },

    {
        title: "Cloud & DevOps",

        description:
            "Deploying, automating, and managing modern cloud-native application ecosystems.",

        technologies: [
            "Azure - VMs, SQL DB, Cosmos DB, API Management, Message Queue Driven systems, Containerization",
            "Azure DevOps",
            "AWS - Lambda, API Gateway, Terraform, EC2, Relational DBs, DynamoDB",
            "CI/CD",
            "Pipelines"
        ],

        gradient:
            "from-green-500 to-emerald-500"
    },

    {
        title: "Software Testing",

        description:
            "Ensuring quality through automated testing, validation frameworks, and test-driven practices.",

        technologies: [
            "Playwright",
            "Selenium",
            "MSTest",
            "xUnit",
            "NUnit",
            "Moq",
            "Auto Moq",
            "Auto Fixtures",
            "Fluent Assertions"
        ],

        gradient:
            "from-orange-500 to-red-500"
    },

    {
        title: "Database Systems",

        description:
            "Managing relational and NoSQL databases powering enterprise and research applications.",

        technologies: [
            "SQL Server",
            "MongoDB",
            "Oracle"
        ],

        gradient:
            "from-indigo-500 to-violet-500"
    },

    {
        title: "Research & Innovation",

        description:
            "Advancing trustworthy AI through multimodal learning, hallucination detection, and model alignment.",

        technologies: [
            "Vision-Language Models",
            "Multimodal AI",
            "Hallucination Detection",
            "Model Alignment"
        ],

        gradient:
            "from-pink-500 to-rose-500"
    }

];

export default function TechnicalDomains() {

    return (

        <section className="py-32 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center">

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-600
                            text-sm
                            font-semibold
                        "
                    >
                        Technical Expertise
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                        "
                    >
                        Technology Domains
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl
                            mx-auto
                            text-lg
                            text-gray-600
                            leading-relaxed
                        "
                    >
                        A multidisciplinary foundation spanning
                        software engineering, cloud computing,
                        artificial intelligence, testing,
                        and academic research.
                    </p>

                </div>

                {/* Domain Cards */}

                <div
                    className="
                        mt-20
                        grid
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-8
                    "
                >

                    {categories.map((category) => (

                        <div
                            key={category.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[2rem]
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

                            {/* Top Gradient */}

                            <div
                                className={`
                                    h-2
                                    bg-gradient-to-r
                                    ${category.gradient}
                                `}
                            />

                            {/* Hover Glow */}

                            <div
                                className={`
                                    absolute
                                    inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                    bg-gradient-to-br
                                    ${category.gradient}
                                `}
                                style={{
                                    filter: "blur(140px)"
                                }}
                            />

                            <div className="relative p-8">

                                <h3
                                    className="
                                        text-3xl
                                        font-black
                                    "
                                >
                                    {category.title}
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        text-gray-600
                                        leading-relaxed
                                    "
                                >
                                    {category.description}
                                </p>

                                {/* Divider */}

                                <div
                                    className="
                                        mt-8
                                        h-px
                                        bg-gray-200
                                    "
                                />

                                {/* Technologies */}

                                <div
                                    className="
                                        mt-8
                                        flex
                                        flex-wrap
                                        gap-3
                                    "
                                >

                                    {category.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="
                                                px-4
                                                py-2
                                                rounded-full
                                                bg-slate-100
                                                text-slate-700
                                                text-sm
                                                font-medium
                                                hover:bg-slate-900
                                                hover:text-white
                                                transition-all
                                                duration-300
                                            "
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom Capability Statement */}

                <div
                    className="
                        mt-24
                        rounded-[2rem]
                        bg-gradient-to-r
                        from-slate-900
                        via-blue-900
                        to-slate-900
                        p-10
                        md:p-14
                        text-white
                        shadow-2xl
                    "
                >

                    <div className="max-w-4xl">

                        <p
                            className="
                                uppercase
                                tracking-[0.3em]
                                text-blue-300
                                text-xs
                                font-semibold
                            "
                        >
                            Capability Statement
                        </p>

                        <h3
                            className="
                                mt-4
                                text-3xl
                                md:text-5xl
                                font-black
                            "
                        >
                            Bridging Industry,
                            Research, and Education
                        </h3>

                        <p
                            className="
                                mt-6
                                text-lg
                                text-slate-300
                                leading-relaxed
                            "
                        >
                            My technical expertise spans enterprise
                            software engineering, cloud platforms,
                            AI research, and higher education,
                            enabling me to connect theoretical ideas
                            with practical implementation and
                            real-world impact.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}