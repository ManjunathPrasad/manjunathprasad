import SectionHeader from "./SectionHeader";

export default function CourseOverview() {

    const objectives = [
        "Understand the fundamentals of database systems.",
        "Design databases using Entity Relationship modelling.",
        "Apply relational algebra and relational database concepts.",
        "Develop SQL queries for data definition and manipulation.",
        "Understand normalization and transaction management."
    ];

    return (

            <section
                id="overview"
                className="
                    scroll-mt-36
                    max-w-7xl
                    mx-auto
                    px-6
                    py-20
                "
            >

            <SectionHeader
                eyebrow="Course Introduction"
                title="Course Overview"
                description="Database Management Systems introduces students to database design, relational modelling, SQL, normalization, transaction management and practical database application development."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">

                {objectives.map((objective) => (

                    <div
                        key={objective}
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                        "
                    >
                        {objective}
                    </div>

                ))}

            </div>

        </section>

    );

}