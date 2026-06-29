import Card from "./Card";

type Props = {

    icon: React.ReactNode;

    title: string;

    subtitle: string;

    available: boolean;

    buttonText?: string;

    onClick?: () => void;

};

export default function FileCard({

    icon,

    title,

    subtitle,

    available,

    buttonText,

    onClick

}: Props) {

    return (

        <Card className="p-6">

            <div className="text-slate-500">

                {icon}

            </div>

            <h3 className="mt-5 text-lg font-bold">

                {title}

            </h3>

            <p className="mt-2 text-sm text-slate-500">

                {subtitle}

            </p>

            <button
                type="button"
                disabled={!available}
                onClick={onClick}
                className={`
                    mt-6
                    w-full
                    rounded-xl
                    py-3
                    font-semibold
                    transition
                    ${
                        available
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-slate-200 text-slate-500 cursor-not-allowed"
                    }
                `}
            >

                {available
                    ? buttonText ?? "Open"
                    : "Coming Soon"}    

            </button>

        </Card>

    );

}