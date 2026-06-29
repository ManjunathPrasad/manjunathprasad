import SectionHeader from "./SectionHeader";

export default function Assignments() {
    return (
        <section
            id="assignments"
            className="
                scroll-mt-36
                py-20
                border-t
                border-slate-200
            "
        >
            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Continuous Assessment"
                    title="Assignments"
                    description="Course assignments, submission deadlines and grading details."
                />

                <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">

                    <h3 className="text-2xl font-bold">
                        No assignments released
                    </h3>

                    <p className="mt-4 text-slate-600">
                        Assignment notifications will appear here once released.
                    </p>

                </div>

            </div>
        </section>
    );
}