import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

export default function StudentsPage() {
    const students = [
        {
            name: "Athmika S",
            role: "Research Student",
            period: "2024 – Present",
            focus: "Vision-Language Models, Hallucination Detection",
            milestones: [
                "Completed foundational ML & Deep Learning",
                "Completed Transformer architecture reading",
                "Now exploring Vision-Language Models (VLMs)",
                "Researching Hallucination Detection in multimodal systems"
            ],
            projects: [
                "Hallucination Detection in Vision-Language Models",
                "Confidence Grounding for Multimodal AI"
            ]
        },
        {
            name: "Manasvi K",
            role: "Research Student",
            period: "2024 – Present",
            focus: "Multimodal Learning, Hallucination Mitigation",
            milestones: [
                "Completed foundational ML & Deep Learning",
                "Completed Transformer architecture reading",
                "Now exploring Vision-Language Models (VLMs)",
                "Researching Hallucination Mitigation strategies"
            ],
            projects: [
                "Interpretability in Vision-Language Models",
                "Hallucination Detection & Prevention"
            ]
        }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-semibold">
                            Mentorship & Guidance
                        </p>
                        <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
                            Students & Researchers
                        </h1>
                        <p className="mt-6 text-xl text-gray-600">
                            Collaborating with bright minds to advance research in
                            trustworthy multimodal AI and vision-language systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Active Students Section - Single Card */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Active Research Students
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Currently mentoring exceptional students in cutting-edge AI research.
                        </p>
                    </motion.div>

                    {/* Single Card with Two Students */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 px-8 py-6">
                            <h3 className="text-2xl font-bold text-white">
                                Research Mentees
                            </h3>
                            <p className="text-blue-100 mt-1">
                                Actively collaborating on vision-language and multimodal AI research
                            </p>
                        </div>

                        {/* Students Grid inside Card */}
                        <div className="divide-y divide-gray-100">
                            {students.map((student) => (
                                <div key={student.name} className="p-8 hover:bg-gray-50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                        {/* Left - Student Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-bold text-lg">
                                                        {student.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-800">
                                                        {student.name}
                                                    </h4>
                                                    <p className="text-sm text-blue-600 font-medium">
                                                        {student.role}
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-4 space-y-3">
                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                                        Period
                                                    </p>
                                                    <p className="mt-1 text-gray-700">
                                                        {student.period}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                                        Research Focus
                                                    </p>
                                                    <p className="mt-1 text-gray-700 font-medium text-blue-700">
                                                        {student.focus}
                                                    </p>
                                                </div>

                                                {/* Milestones Section */}
                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                                                        Reading Milestones
                                                    </p>
                                                    <div className="space-y-1.5">
                                                        {student.milestones.map((milestone, idx) => (
                                                            <div key={idx} className="flex items-center gap-2">
                                                                <div className={`w-1.5 h-1.5 rounded-full ${
                                                                    idx < 2 ? 'bg-green-500' : 'bg-blue-500 animate-pulse'
                                                                }`}></div>
                                                                <span className={`text-sm ${
                                                                    idx < 2 ? 'text-gray-600' : 'text-blue-600 font-medium'
                                                                }`}>
                                                                    {milestone}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right - Projects */}
                                        <div className="flex-1">
                                            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                                                Active Projects
                                            </p>
                                            <div className="space-y-2">
                                                {student.projects.map((project, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-3 py-2 border border-blue-100"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                                        <span className="text-sm text-gray-700 font-medium">
                                                            {project}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Research Areas Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            Collaborative Research Areas
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Vision-Language Models",
                                "Hallucination Detection",
                                "Multimodal Learning",
                                "Trustworthy AI",
                                "AI Alignment",
                                "Interpretability",
                                "Agentic Reasoning",
                                "Confidence Grounding"
                            ].map((area, index) => (
                                <motion.div
                                    key={area}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                    className="bg-white rounded-xl px-4 py-3 text-center shadow-sm hover:shadow-md transition-all"
                                >
                                    <span className="text-gray-700 font-medium text-sm">
                                        {area}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 mb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-gray-500">
                            Interested in collaborating on research projects?
                        </p>
                        <a
                            href="/contact"
                            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}