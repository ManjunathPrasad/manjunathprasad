import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Menu,
    X,
    ChevronDown
} from "lucide-react";

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const primaryItems = [
        { name: "Home", path: "/" },
        { name: "Teaching", path: "/teaching" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" }
    ];

    const researchItems = [
        { name: "Research Overview", path: "/research" },
        { name: "Publications", path: "/publications" },
        // { name: "Projects", path: "/projects" },
        { name: "Students", path: "/students" }
    ];

    const aboutItems = [
        { name: "About Me", path: "/about" },
        { name: "Reading Life", path: "/reading-life" },
        { name: "Art Connoisseur", path: "/art-gallery" }
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
                                    text-[10px]
                                    md:text-[11px]
                                    tracking-[0.15em]
                                    uppercase
                                    mt-1
                                    text-slate-500
                                "
                            >
                                AI Researcher & Art Connoisseur
                            </span>

                        </div>

                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden lg:flex items-center gap-8">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-600 font-medium"
                                    : "text-gray-600 hover:text-black transition"
                            }
                        >
                            Home
                        </NavLink>

                        {/* Research Dropdown */}

                        <div
                            className="relative group"
                        >

                            <button
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    text-sm
                                    font-medium
                                    text-gray-600
                                    hover:text-black
                                    transition
                                    py-2
                                "
                            >
                                Research

                                <ChevronDown
                                    size={16}
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                />
                            </button>

                            <div
                                className="
                                    absolute
                                    left-0
                                    top-full
                                    pt-2
                                    invisible
                                    opacity-0
                                    group-hover:visible
                                    group-hover:opacity-100
                                    transition-all
                                    duration-200
                                    z-50
                                "
                            >
                                <div
                                    className="
                                        w-64
                                        bg-white
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        shadow-xl
                                        overflow-hidden
                                    "
                                >
                                    {researchItems.map((item) => (

                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="
                                                block
                                                px-5
                                                py-4
                                                text-sm
                                                text-gray-700
                                                hover:bg-slate-50
                                                transition
                                            "
                                        >
                                            {item.name}
                                        </NavLink>

                                    ))}
                                </div>
                            </div>

                        </div>

                        {primaryItems
                            .filter(item => item.name !== "Home")
                            .map((item) => (

                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-purple-600 font-medium"
                                            : "text-gray-600 hover:text-black transition"
                                    }
                                >
                                    {item.name}
                                </NavLink>

                            ))}

                        {/* About Dropdown with Art Connoisseur inside */}

                        <div
                            className="relative group"
                        >

                            <button
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    text-sm
                                    font-medium
                                    text-gray-600
                                    hover:text-black
                                    transition
                                    py-2
                                "
                            >
                                About

                                <ChevronDown
                                    size={16}
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                />
                            </button>

                            <div
                                className="
                                    absolute
                                    left-0
                                    top-full
                                    pt-2
                                    invisible
                                    opacity-0
                                    group-hover:visible
                                    group-hover:opacity-100
                                    transition-all
                                    duration-200
                                    z-50
                                "
                            >
                                <div
                                    className="
                                        w-56
                                        bg-white
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        shadow-xl
                                        overflow-hidden
                                    "
                                >
                                    {aboutItems.map((item) => (

                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className="
                                                block
                                                px-5
                                                py-4
                                                text-sm
                                                text-gray-700
                                                hover:bg-slate-50
                                                transition
                                            "
                                        >
                                            {item.name}
                                        </NavLink>

                                    ))}
                                </div>
                            </div>

                        </div>

                    </nav>

                    {/* Mobile Hamburger */}

                    <button
                        onClick={() =>
                            setMobileMenuOpen(!mobileMenuOpen)
                        }
                        className="
                            lg:hidden
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
                    lg:hidden
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                        mobileMenuOpen
                            ? "max-h-[900px] border-t border-gray-200"
                            : "max-h-0"
                    }
                `}
            >

                <div className="bg-white px-6 py-4">

                    <nav className="flex flex-col gap-2">

                        <NavLink
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-xl hover:bg-slate-50"
                        >
                            Home
                        </NavLink>

                        <div className="pt-3">

                            <div
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.25em]
                                    text-gray-400
                                    px-4
                                    mb-2
                                "
                            >
                                Research
                            </div>

                            {researchItems.map((item) => (

                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="
                                        block
                                        px-4
                                        py-3
                                        rounded-xl
                                        hover:bg-slate-50
                                    "
                                >
                                    {item.name}
                                </NavLink>

                            ))}

                        </div>

                        <NavLink
                            to="/teaching"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-xl hover:bg-slate-50"
                        >
                            Teaching
                        </NavLink>

                        <NavLink
                            to="/skills"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-xl hover:bg-slate-50"
                        >
                            Skills
                        </NavLink>

                        <div className="pt-3">

                            <div
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.25em]
                                    text-gray-400
                                    px-4
                                    mb-2
                                "
                            >
                                About
                            </div>

                            {aboutItems.map((item) => (

                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="
                                        block
                                        px-4
                                        py-3
                                        rounded-xl
                                        hover:bg-slate-50
                                    "
                                >
                                    {item.name}
                                </NavLink>

                            ))}

                        </div>

                        <NavLink
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-xl hover:bg-slate-50"
                        >
                            Contact
                        </NavLink>

                    </nav>

                </div>

            </div>

        </header>

    );
}