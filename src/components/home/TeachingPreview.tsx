import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Brain, Code2, GitBranch, Cloud } from "lucide-react";

const courses = [
    {
        icon: Brain,
        title: "Artificial Intelligence",
        description:
            "Foundations of intelligent systems, reasoning, and machine learning."
    },
    {
        icon: Code2,
        title: "Programming",
        description:
            "Building strong computational thinking through modern programming practices."
    },
    {
        icon: BookOpen,
        title: "Software Engineering",
        description:
            "Designing scalable systems using engineering principles and agile methods."
    },
    {
    icon: Cloud,
    title: "Microsoft Azure",
    description:
        "Cloud architecture, Azure services, DevOps pipelines, automation, and application deployment."
    },
    {
        icon: GitBranch,
        title: "Amazon Web Services",
        description:
            "AWS cloud infrastructure, scalable application design, DevOps workflows, and operational excellence."
    },
    {
        icon: GraduationCap,
        title: "Research Mentoring",
        description:
            "Guiding students in research, innovation, and academic publishing."
    }
];

export default function TeachingPreview() {
    return (
        <section className="py-32 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Teaching
                    </p>

                    <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                        Educating Future
                        <br />
                        AI Engineers
                    </h2>

                    <p className="mt-6 text-xl text-gray-600">
                        Combining academic rigor, industry experience,
                        and research-driven learning to prepare students
                        for innovation and lifelong growth.
                    </p>

                </motion.div>

                {/* Stats */}

                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="
                        grid
                        grid-cols-2
                        lg:grid-cols-4
                        gap-6
                        mt-16
                    "
                >
                    <div className="bg-white rounded-3xl p-8 shadow-md text-center">
                        <h3 className="text-4xl font-bold text-blue-600">
                            9
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Years Teaching
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-md text-center">
                        <h3 className="text-4xl font-bold text-purple-600">
                            5
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Years Industry
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-md text-center">
                        <h3 className="text-4xl font-bold text-green-600">
                            AI
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Research Driven
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-md text-center">
                        <h3 className="text-4xl font-bold text-orange-600">
                            UG
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Student Mentoring
                        </p>
                    </div>
                </motion.div> */}

                {/* Teaching Areas */}

                <div className="grid lg:grid-cols-2 gap-8 mt-20">

                    {courses.map((course, index) => {

                        const Icon = course.icon;

                        return (
                            <motion.div
                                key={course.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02
                                }}
                                className="
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-3xl
                                    p-8
                                    shadow-lg
                                "
                            >

                                <div className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    flex
                                    items-center
                                    justify-center
                                    bg-gradient-to-r
                                    from-blue-500
                                    to-purple-500
                                    text-white
                                ">
                                    <Icon size={28} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {course.title}
                                </h3>

                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {course.description}
                                </p>

                            </motion.div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
}