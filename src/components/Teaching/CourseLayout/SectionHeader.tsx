interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionHeader({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeaderProps) {

    const alignment =
        align === "center"
            ? "text-center mx-auto"
            : "text-left";

    return (

        <div
            className={`${alignment} max-w-3xl`}
        >

            <p
                className="
                    uppercase
                    tracking-[0.35em]
                    text-blue-600
                    text-sm
                    font-semibold
                "
            >
                {eyebrow}
            </p>

            <h2
                className="
                    mt-4
                    text-4xl
                    md:text-5xl
                    font-black
                    text-slate-900
                    leading-tight
                "
            >
                {title}
            </h2>

            {description && (

                <p
                    className="
                        mt-5
                        text-lg
                        leading-8
                        text-slate-600
                    "
                >
                    {description}
                </p>

            )}

        </div>

    );

}