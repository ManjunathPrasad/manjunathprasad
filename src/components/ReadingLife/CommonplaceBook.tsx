export default function CommonplaceBook() {
    return (
        <section className="py-28">

            <div className="max-w-5xl mx-auto px-6 text-center">

                <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
                    Commonplace Book
                </p>

                <h2 className="mt-4 text-4xl md:text-6xl font-black">
                    Collected Thoughts
                </h2>

                <div className="mt-12 bg-slate-50 rounded-3xl p-10 border">

                    <blockquote className="text-2xl italic leading-relaxed text-gray-700">
                        "The mystery of human existence lies not in just staying alive,
                        but in finding something to live for."
                    </blockquote>

                    <p className="mt-6 text-blue-600 font-semibold">
                        Fyodor Dostoevsky
                    </p>

                </div>

            </div>

        </section>
    );
}