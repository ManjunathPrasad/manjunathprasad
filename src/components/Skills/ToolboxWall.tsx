const tools = [

    "C#",
    ".NET",
    "ASP.NET Core",
    "React",
    "TypeScript",
    "JavaScript",
    "Azure",
    "Azure DevOps",
    "AWS",
    "Git",
    "Bitbucket",
    "Bamboo",
    "SQL Server",
    "MongoDB",
    "Oracle DB",
    "IBM DB2",
    "Python",
    "PyTorch",
    "NumPy",
    "SciPy",
    "Pandas",
    "Scikit-Learn",
    "Matplotlib",
    "Playwright",
    "Selenium",
    "Docker",
    "REST API",
    "MVC",
    "Web API",
    "CI/CD",
    "LaTeX",
    "Confluence",
    "Service Now"

];

export default function ToolboxWall() {

    return (

        <section className="py-28 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
                        Toolbox
                    </p>

                    <h2 className="mt-4 text-4xl md:text-6xl font-black">
                        Technologies I Work With
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
                        A collection of technologies spanning software
                        engineering, cloud computing, testing,
                        artificial intelligence, and research.
                    </p>

                </div>

                <div
                    className="
                        mt-20
                        flex
                        flex-wrap
                        justify-center
                        gap-4
                    "
                >

                    {tools.map((tool) => (

                        <div
                            key={tool}
                            className="
                                px-6
                                py-4
                                rounded-2xl
                                bg-white
                                border
                                border-gray-200
                                shadow-md
                                hover:shadow-xl
                                hover:-translate-y-1
                                hover:bg-gradient-to-r
                                hover:from-blue-50
                                hover:to-purple-50
                                transition-all
                                duration-300
                                cursor-default
                                font-medium
                            "
                        >
                            {tool}
                        </div>

                    ))}

                </div>

                <div
                    className="
                        mt-20
                        rounded-3xl
                        bg-gradient-to-r
                        from-blue-600
                        via-purple-600
                        to-pink-600
                        p-10
                        text-center
                        text-white
                    "
                >

                    <h3 className="text-3xl md:text-4xl font-black">
                        Continuous Learning
                    </h3>

                    <p className="mt-6 text-lg max-w-3xl mx-auto">
                        Technology evolves rapidly. My approach is to
                        combine strong software engineering foundations
                        with emerging research areas such as Vision-Language
                        Models, Multimodal AI, and Agentic Systems.
                    </p>

                </div>

            </div>

        </section>

    );

}