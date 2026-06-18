import { useState } from "react";
import { quotes } from "../../data/reading/quotes";

export default function QuoteOfTheDay() {

    const [quote] = useState(() => {

        const randomIndex = Math.floor(
            Math.random() * quotes.length
        );

        return quotes[randomIndex];

    });

    return (
        <section className="py-28 bg-slate-950 text-white">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold">
                    Quote Collection
                </p>

                <blockquote className="kannada-quote mt-10 text-3xl md:text-5xl font-medium leading-relaxed">
                    "{quote.text}"
                </blockquote>

                <p className="kannada-quote mt-10 text-blue-300 text-lg">
                    {quote.author}
                </p>

                <p className="kannada-quote mt-2 text-slate-400">
                    {quote.source}
                </p>

            </div>

        </section>
    );
}