import type { LucideIcon } from "lucide-react";

interface HeroStatsCardProps {

    icon: LucideIcon;

    value: string | number;

    label: string;

}

export default function HeroStatsCard({

    icon: Icon,

    value,

    label,

}: HeroStatsCardProps) {

    return (

        <div
            className="
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                border
                border-slate-200
                shadow-sm
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <div
                className="
                    mx-auto
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                "
            >

                <Icon
                    size={28}
                    className="text-blue-600"
                />

            </div>

            <h3
                className="
                    mt-5
                    text-4xl
                    font-black
                    text-slate-900
                "
            >
                {value}
            </h3>

            <p
                className="
                    mt-2
                    text-slate-500
                    font-medium
                "
            >
                {label}
            </p>

        </div>

    );

}