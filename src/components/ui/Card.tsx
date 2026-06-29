type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Card({
    children,
    className = ""
}: CardProps) {

    return (

        <div
            className={`
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition
                hover:shadow-lg
                ${className}
            `}
        >
            {children}
        </div>

    );

}