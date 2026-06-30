import { ArrowRight } from "lucide-react";

interface HeroButtonProps {

    title: string;

    href?: string;

    onClick?: () => void;

    target?: string;

    rel?: string;

    primary?: boolean;

}

export default function HeroButton({

    title,

    href,

    onClick,

    target,

    rel,

    primary = false,

}: HeroButtonProps) {

    const className = `
        inline-flex
        items-center
        gap-2
        rounded-2xl
        px-7
        py-4
        font-semibold
        transition-all
        duration-300

        ${
            primary
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "border border-slate-300 bg-white hover:border-blue-600"
        }
    `;

    if (onClick) {

        return (

            <button
                type="button"
                onClick={onClick}
                className={className}
            >

                {title}

                <ArrowRight size={18} />

            </button>

        );

    }

    return (

        <a
            href={href}
            target={target}
            rel={rel}
            className={className}
        >

            {title}

            <ArrowRight size={18} />

        </a>

    );

}