import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { authors } from "../../data/reading/authors";

// Import author images from assets/authors folder
import dostoevskyImg from "../../assets/Authors/dostoevsky.jpg";
import camusImg from "../../assets/Authors/camus.jpg";
import kafkaImg from "../../assets/Authors/kafka.jpg";
import kuvempuImg from "../../assets/Authors/kuvempu.jpg";
import tejaswiImg from "../../assets/Authors/tejaswi.jpg";
import lankeshImg from "../../assets/Authors/lankesh.jpg";
import orwellImg from "../../assets/Authors/orwell.jpg"
import gandhiImg from "../../assets/Authors/gandhi.jpg";
import tolstoyImg from "../../assets/Authors/leo-tolstoy.jpg";

const authorImages: Record<string, string> = {
    "MK Gandhi": gandhiImg,
    "Fyodor Dostoevsky": dostoevskyImg,
    "Leo Tolstoy": tolstoyImg ,
    "Albert Camus": camusImg,
    "Franz Kafka": kafkaImg,
    "Kuvempu": kuvempuImg,
    "K. P. Poornachandra Tejaswi": tejaswiImg,
    "P. Lankesh": lankeshImg,
    "George Orwell": orwellImg,
};

export default function FavoriteAuthors() {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const animationRef = useRef<number | null>(null);
    const scrollSpeed = 0.8;

    const displayAuthors = [
        ...authors,
        ...authors,
        ...authors
    ];

    const autoScroll = () => {
        if (!carouselRef.current) return;
        if (!isHovering && !isDragging) {
            carouselRef.current.scrollLeft += scrollSpeed;
            if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 3) {
                carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3 - carouselRef.current.clientWidth;
            }
            if (carouselRef.current.scrollLeft <= 0) {
                carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3;
            }
        }
        animationRef.current = requestAnimationFrame(autoScroll);
    };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(autoScroll);
        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isHovering, isDragging]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        const startX = e.pageX - carouselRef.current.offsetLeft;
        const scrollLeft = carouselRef.current.scrollLeft;

        const handleMouseMove = (e: MouseEvent) => {
            if (!carouselRef.current) return;
            const x = e.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 1.5;
            carouselRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <section className="py-28 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
                        Favorite Authors
                    </p>
                    <h2 className="mt-4 text-4xl md:text-6xl font-black">
                        Writers Who Influenced Me
                    </h2>
                </div>
            </div>

            <div className="mt-16 relative group">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="
                        flex
                        gap-8
                        overflow-x-auto
                        scroll-smooth
                        cursor-grab
                        active:cursor-grabbing
                        px-8
                        pb-6
                        select-none
                        [&::-webkit-scrollbar]:h-1.5
                        [&::-webkit-scrollbar-track]:bg-gray-200
                        [&::-webkit-scrollbar-thumb]:bg-gray-400
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:hover:bg-gray-500
                    "
                >
                    {displayAuthors.map((author, index) => (
                        <motion.div
                            key={`${author.id}-${index}`}
                            className="
                                group/card
                                flex-shrink-0
                                w-[180px]
                                md:w-[200px]
                                select-none
                            "
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="
                                bg-white 
                                rounded-2xl 
                                overflow-hidden
                                shadow-lg 
                                border 
                                border-gray-200
                                transition-all
                                duration-500
                                group-hover/card:shadow-2xl
                            ">
                                {/* Author Portrait Image */}
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    <img
                                        src={authorImages[author.name]}
                                        alt={author.name}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/card:scale-110"
                                    />
                                </div>

                                {/* Author Name underneath */}
                                <div className="p-4 text-center">
                                    <h3 className="font-bold text-gray-800 text-base md:text-sm">
                                        {author.name}
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500">
                                        {author.country}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Instruction indicator */}
            <div className="text-center mt-8">
                <p className="text-sm text-gray-400">
                    ← Drag to scroll • Hover to pause →
                </p>
            </div>
        </section>
    );
}