import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Research", path: "/research" },
        { name: "Publications", path: "/publications" },
        { name: "Skills", path: "/Skills"},
        { name: "Teaching", path: "/teaching" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <header
            className="
                sticky
                top-0
                z-50
                backdrop-blur-xl
                bg-white/80
                border-b
                border-gray-200
            "
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo with Gradient Name */}
                    <Link
                        to="/"
                        className="group relative"
                    >
                        <div className="flex flex-col">
                            {/* Main Name with Gradient */}
                            <div className="relative">
                                <span className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Manjunath Prasad
                                </span>
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-out" />
                            </div>
                            
                            {/* Subtitle / Tagline with Gradient */}
                            <div className="text-[10px] md:text-[11px] tracking-[0.15em] uppercase mt-1 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                                AI RESEARCHER
                            </div>
                        </div>
                    </Link>

                    {/* Navigation with Gradient Hover Effects */}
                    <nav className="hidden md:flex items-center gap-8">

                        {navItems.map((item) => (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `
                                    relative
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-300
                                    group/link
                                    ${
                                        isActive
                                            ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                                            : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                                    }
                                `
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.name}

                                        {/* Active Indicator with Gradient */}
                                        <span
                                            className={`
                                                absolute
                                                left-0
                                                -bottom-2
                                                h-[2px]
                                                bg-gradient-to-r
                                                from-blue-500
                                                via-purple-500
                                                to-pink-500
                                                transition-all
                                                duration-300
                                                rounded-full
                                                ${
                                                    isActive
                                                        ? "w-full"
                                                        : "w-0 group-hover/link:w-full"
                                                }
                                            `}
                                        />
                                    </>
                                )}
                            </NavLink>

                        ))}

                    </nav>

                </div>

            </div>
        </header>
    );
}