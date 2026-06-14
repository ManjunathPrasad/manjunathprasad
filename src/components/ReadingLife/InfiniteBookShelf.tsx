import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Books } from "../../data/reading/books";

export default function InfiniteBookShelf() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);
    const scrollSpeed = 1; // pixels per frame

    const displayBooks = [...Books, ...Books, ...Books]; // Triple for seamless infinite scroll

    // Auto-scroll function
    const autoScroll = () => {
        if (!carouselRef.current) return;
        if (!isHovering && !isDragging) {
            carouselRef.current.scrollLeft += scrollSpeed;
            
            // Reset to beginning when reaching the end of the second set
            if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 3) {
                carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3 - carouselRef.current.clientWidth;
            }
            // Reset to end when scrolling too far left
            if (carouselRef.current.scrollLeft <= 0) {
                carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3;
            }
        }
        animationRef.current = requestAnimationFrame(autoScroll);
    };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(autoScroll);
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isHovering, isDragging]);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -400,
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 400,
                behavior: "smooth"
            });
        }
    };

    // Mouse drag functionality
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        const startX = e.pageX - carouselRef.current.offsetLeft;
        const scrollLeftPos = carouselRef.current.scrollLeft;
        
        const handleMouseMove = (e: MouseEvent) => {
            if (!carouselRef.current) return;
            const x = e.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 1.5;
            carouselRef.current.scrollLeft = scrollLeftPos - walk;
        };
        
        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (

        <section className="py-28 overflow-hidden bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-600
                            text-sm
                            font-semibold
                        "
                    >
                        Reading Collection
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            md:text-6xl
                            font-black
                            tracking-tight
                        "
                    >
                        Books That Shaped My Thinking
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl
                            mx-auto
                            text-gray-600
                            text-lg
                            leading-relaxed
                        "
                    >
                        A lifelong journey through literature, philosophy,
                        psychology, science, and ideas that continue to
                        influence both my research and teaching.
                    </p>

                </div>

            </div>

            <div className="mt-20 relative group">

                {/* Gradient overlays */}
                <div
                    className="
                        absolute
                        left-0
                        top-0
                        w-32
                        h-full
                        bg-gradient-to-r
                        from-white
                        to-transparent
                        z-10
                        pointer-events-none
                    "
                />

                <div
                    className="
                        absolute
                        right-0
                        top-0
                        w-32
                        h-full
                        bg-gradient-to-l
                        from-white
                        to-transparent
                        z-10
                        pointer-events-none
                    "
                />

                {/* Scroll Buttons - Only visible on hover */}
                <button
                    onClick={scrollLeft}
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        z-20
                        bg-white/90
                        backdrop-blur-sm
                        rounded-full
                        p-3
                        shadow-lg
                        border
                        border-gray-200
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:scale-110
                        cursor-pointer
                        pointer-events-auto
                    "
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <button
                    onClick={scrollRight}
                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        z-20
                        bg-white/90
                        backdrop-blur-sm
                        rounded-full
                        p-3
                        shadow-lg
                        border
                        border-gray-200
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:scale-110
                        cursor-pointer
                        pointer-events-auto
                    "
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="
                        flex
                        gap-8
                        overflow-x-auto
                        scroll-smooth
                        cursor-grab
                        active:cursor-grabbing
                        px-8
                        pb-4
                        select-none
                        [&::-webkit-scrollbar]:h-1.5
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
                    "
                >
                    {displayBooks.map((book, index) => (

                        <div
                            key={`${book.id}-${index}`}
                            className="
                                group/book
                                flex-shrink-0
                                w-[180px]
                                md:w-[220px]
                                select-none
                            "
                        >

                            <div
                                className="
                                    rounded-3xl
                                    overflow-hidden
                                    bg-white
                                    border
                                    border-gray-200
                                    shadow-lg
                                    group-hover/book:shadow-2xl
                                    group-hover/book:-translate-y-3
                                    transition-all
                                    duration-500
                                    cursor-pointer
                                "
                            >

                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="
                                        w-full
                                        h-[260px]
                                        md:h-[320px]
                                        object-cover
                                        pointer-events-none
                                    "
                                />

                            </div>

                            <div className="mt-5 text-center">

                                <h3
                                    className="
                                        font-bold
                                        text-lg
                                        leading-snug
                                        line-clamp-2
                                    "
                                >
                                    {book.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    {book.author}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}