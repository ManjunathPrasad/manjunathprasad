import { useState } from "react";
import { currentlyReading } from "../../data/reading/currentlyReading";
import { BookOpen, Coffee, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// Future books to read list
const futureBooks = [
    {
        id: 1,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        reason: "A timeless exploration of idealism, reality, and the power of imagination—often called the first modern novel."
    },
    {
        id: 2,
        title: "The Castle",
        author: "Franz Kafka",
        reason: "Alienation and the search for belonging"
    },
    {
        id: 3,
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        reason: "Memory, time, and consciousness"
    },
    {
        id: 4,
        title: "Ulysses",
        author: "James Joyce",
        reason: "Stream of consciousness masterpiece"
    },

];

export default function CurrentlyReading() {
    const [currentFutureIndex, setCurrentFutureIndex] = useState(0);

    const nextFutureBook = () => {
        setCurrentFutureIndex((prev) => (prev + 1) % futureBooks.length);
    };

    const prevFutureBook = () => {
        setCurrentFutureIndex((prev) => (prev - 1 + futureBooks.length) % futureBooks.length);
    };

    const currentFutureBook = futureBooks[currentFutureIndex];

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
                        Reading Life
                    </p>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black">
                        Reading Journey
                    </h2>
                </div>

                {/* Two Column Portrait Cards */}
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
                    
                    {/* Current Reading Card */}
                    <div className="group w-full max-w-sm mx-auto">
                        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-100 h-full">
                            
                            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            
                            <div className="p-6 text-center">
                                <div className="inline-block px-3 py-1 bg-blue-50 rounded-full mb-4">
                                    <span className="text-xs font-medium text-blue-600">Currently Reading</span>
                                </div>
                                
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <BookOpen className="w-7 h-7 text-blue-600" />
                                </div>
                                
                                <h3 className="text-lg font-bold text-gray-900">
                                    {currentlyReading.title}
                                </h3>
                                
                                <p className="mt-1 text-sm text-gray-500">
                                    {currentlyReading.author}
                                </p>
                                
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 italic">
                                        "{currentlyReading.note?.substring(0, 80)}..."
                                    </p>
                                </div>
                                
                                <div className="mt-4 flex items-center justify-center gap-2">
                                    <Coffee className="w-3 h-3 text-amber-500" />
                                    <span className="text-xs text-gray-400">On hold • Resuming soon</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Future Reading Card with Navigation */}
                    <div className="group w-full max-w-sm mx-auto">
                        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-100 h-full">
                            
                            <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                            
                            <div className="p-6 text-center">
                                <div className="inline-block px-3 py-1 bg-amber-50 rounded-full mb-4">
                                    <span className="text-xs font-medium text-amber-600">Next Up</span>
                                </div>
                                
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                                    <Sparkles className="w-7 h-7 text-amber-500" />
                                </div>
                                
                                {/* Navigation Arrows */}
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <button 
                                        onClick={prevFutureBook}
                                        className="p-1 rounded-full hover:bg-gray-100 transition"
                                        aria-label="Previous book"
                                    >
                                        <ChevronLeft className="w-4 h-4 text-gray-400" />
                                    </button>
                                    
                                    <h3 className="text-lg font-bold text-gray-800 flex-1">
                                        {currentFutureBook.title}
                                    </h3>
                                    
                                    <button 
                                        onClick={nextFutureBook}
                                        className="p-1 rounded-full hover:bg-gray-100 transition"
                                        aria-label="Next book"
                                    >
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                </div>
                                
                                <p className="text-sm text-gray-500">
                                    {currentFutureBook.author}
                                </p>
                                
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 italic">
                                        "{currentFutureBook.reason}"
                                    </p>
                                </div>
                                
                                <div className="mt-4">
                                    <span className="text-xs text-gray-400">
                                        {currentFutureIndex + 1} / {futureBooks.length} in queue
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Queue Indicator */}
                <div className="flex justify-center mt-8 gap-1">
                    {futureBooks.slice(0, 5).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentFutureIndex(idx)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                                idx === currentFutureIndex 
                                    ? "bg-amber-500 w-3" 
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to book ${idx + 1}`}
                        />
                    ))}
                    {futureBooks.length > 5 && (
                        <span className="text-[10px] text-gray-400 ml-1">
                            +{futureBooks.length - 5}
                        </span>
                    )}
                </div>
            </div>
        </section>
    );
}