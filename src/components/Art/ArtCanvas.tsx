import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { paintings } from "../../data/paintings";

export default function ArtCanvas() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const currentPainting = paintings[currentIndex];

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % paintings.length);
            }, 5000);
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, paintings.length]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + paintings.length) % paintings.length);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % paintings.length);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <p className="uppercase tracking-[0.35em] text-amber-400 text-sm font-semibold">
                        Art Gallery
                    </p>
                    <h1 className="mt-4 text-5xl md:text-7xl font-black text-white">
                        My Virtual Museum
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        A curated collection of masterpieces that inspire me
                    </p>
                </motion.div>

                {/* Main Canvas */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
                        aria-label="Previous painting"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
                        aria-label="Next painting"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Painting Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col lg:flex-row gap-8 items-center justify-center"
                        >
                            {/* Painting Image */}
                            <div className="flex-1 max-w-3xl">
                                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                                    <img
                                        src={currentPainting.image}
                                        alt={currentPainting.title}
                                        className="w-full h-auto object-contain max-h-[60vh]"
                                    />
                                </div>
                            </div>

                            {/* Painting Details */}
                            <div className="flex-1 max-w-md">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {currentPainting.title}
                                    </h2>
                                    <p className="text-2xl text-amber-400 font-semibold mb-6">
                                        {currentPainting.painter}
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-gray-400">
                                                Year
                                            </p>
                                            <p className="text-lg text-white">
                                                {currentPainting.year}
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-gray-400">
                                                Art Movement
                                            </p>
                                            <p className="text-lg text-white">
                                                {currentPainting.artMovement}
                                            </p>
                                        </div>
                                        
                                        {currentPainting.description && (
                                            <div>
                                                <p className="text-sm uppercase tracking-wider text-gray-400">
                                                    About
                                                </p>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {currentPainting.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Thumbnail Navigation */}
                    <div className="mt-8 flex gap-2 overflow-x-auto justify-center pb-4">
                        {paintings.map((painting, index) => (
                            <button
                                key={painting.id}
                                onClick={() => goToSlide(index)}
                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                    index === currentIndex
                                        ? "border-amber-400 scale-110"
                                        : "border-white/30 hover:border-white/60"
                                }`}
                            >
                                <img
                                    src={painting.image}
                                    alt={painting.title}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400">
                            {currentIndex + 1} / {paintings.length}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}