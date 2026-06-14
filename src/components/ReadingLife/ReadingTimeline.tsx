import { readingTimeline } from "../../data/reading/timeline";

export default function ReadingTimeline() {
    // Only show if there's meaningful data
    if (!readingTimeline.length) return null;
    
    return (
        <section className="py-20 bg-slate-50">

            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-12">

                    <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
                        Reading Journey
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-black">
                        Evolution of Interests
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {readingTimeline.map((item) => (
                        <div key={item.year} className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-20 font-bold text-blue-600">
                                {item.year}
                            </div>
                            <div className="text-gray-600">
                                {item.milestone}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}