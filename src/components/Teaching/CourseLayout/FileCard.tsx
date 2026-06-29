import { FileText, ExternalLink } from "lucide-react";

interface FileCardProps {

    title: string;

    description?: string;

    href: string;

    disabled?: boolean;

}

export default function FileCard({

    title,

    description,

    href,

    disabled = false,

}: FileCardProps) {

    return (

        <a

            href={disabled ? undefined : href}

            target="_blank"

            rel="noopener noreferrer"

            className={`

                group

                flex

                items-center

                justify-between

                rounded-2xl

                border

                p-5

                transition-all

                duration-300

                ${

                    disabled

                        ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-60"

                        : "border-slate-200 bg-white hover:border-blue-500 hover:shadow-lg"

                }

            `}

        >

            <div className="flex items-center gap-4">

                <div
                    className="
                        rounded-xl
                        bg-blue-50
                        p-3
                    "
                >

                    <FileText
                        size={22}
                        className="text-blue-600"
                    />

                </div>

                <div>

                    <h3
                        className="
                            font-semibold
                            text-slate-900
                        "
                    >
                        {title}
                    </h3>

                    {description && (

                        <p
                            className="
                                mt-1
                                text-sm
                                text-slate-500
                            "
                        >
                            {description}
                        </p>

                    )}

                </div>

            </div>

            {!disabled && (

                <ExternalLink

                    size={20}

                    className="
                        text-slate-400
                        transition
                        group-hover:text-blue-600
                    "

                />

            )}

        </a>

    );

}