import { ArrowRight } from "lucide-react";

interface HeroButtonProps {

    title: string;

    href: string;

    primary?: boolean;

}

export default function HeroButton({

    title,

    href,

    primary = false,

}: HeroButtonProps) {

    return (

        <a

            href={href}

            className={`
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
            `}
        >

            {title}

            <ArrowRight size={18} />

        </a>

    );

}