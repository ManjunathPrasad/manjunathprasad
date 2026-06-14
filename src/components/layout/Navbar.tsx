import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Research", path: "/research" },
        { name: "Publications", path: "/publications" },
        { name: "Skills", path: "/skills" },
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

                    {/* Logo */}

                    <Link
                        to="/"
                        className="group relative"
                    >

                        <div className="flex flex-col">

                            <div className="relative">

                                <span
                                    className="
                                        text-xl
                                        md:text-2xl
                                        font-black
                                        tracking-tight
                                        bg-gradient-to-r
                                        from-blue-600
                                        via-purple-600
                                        to-pink-600
                                        bg-clip-text
                                        text-transparent
                                    "
                                >
                                    Manjunath Prasad
                                </span>

                                <span
                                    className="
                                        absolute
                                        -bottom-1
                                        left-0
                                        w-0
                                        h-0.5
                                        bg-gradient-to-r
                                        from-blue-500
                                        to-purple-500
                                        group-hover:w-full
                                        transition-all
                                        duration-500
                                    "
                                />

                            </div>

                            <div
                                className="
                                    text-[10px]
                                    md:text-[11px]
                                    tracking-[0.15em]
                                    uppercase
                                    mt-1
                                    text-slate-500
                                "
                            >
                                AI Researcher
                            </div>

                        </div>

                    </Link>

                    {/* Desktop Navigation */}

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
                                            : "text-gray-600 hover:text-black"
                                    }
                                `
                                }
                            >

                                {({ isActive }) => (
                                    <>

                                        {item.name}

                                        <span
                                            className={`
                                                absolute
                                                left-0
                                                -bottom-2
                                                h-[2px]
                                                rounded-full
                                                bg-gradient-to-r
                                                from-blue-500
                                                via-purple-500
                                                to-pink-500
                                                transition-all
                                                duration-300
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

                    {/* Mobile Hamburger */}

                    <button
                        onClick={() =>
                            setMobileMenuOpen(!mobileMenuOpen)
                        }
                        className="
                            md:hidden
                            p-2
                            rounded-xl
                            hover:bg-gray-100
                            transition
                        "
                    >

                        {
                            mobileMenuOpen
                                ? <X size={26} />
                                : <Menu size={26} />
                        }

                    </button>

                </div>

            </div>

            {/* Mobile Menu */}

            <div
                className={`
                    md:hidden
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                        mobileMenuOpen
                            ? "max-h-[500px] border-t border-gray-200"
                            : "max-h-0"
                    }
                `}
            >

                <div className="px-6 py-4 bg-white">

                    <nav className="flex flex-col gap-2">

                        {navItems.map((item) => (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() =>
                                    setMobileMenuOpen(false)
                                }
                                className={({ isActive }) =>
                                    `
                                    px-4
                                    py-3
                                    rounded-xl
                                    font-medium
                                    transition-all
                                    ${
                                        isActive
                                            ? "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-purple-700"
                                            : "text-gray-700 hover:bg-gray-50"
                                    }
                                `
                                }
                            >
                                {item.name}
                            </NavLink>

                        ))}

                    </nav>

                </div>

            </div>

        </header>

    );
}