import Card from "./Card";

type Props = {

    icon: React.ReactNode;

    title: string;

    value: string | number;

};

export default function InfoCard({

    icon,

    title,

    value

}: Props) {

    return (

        <Card className="p-5 bg-slate-50">

            <div className="flex items-center gap-3">

                {icon}

                <span className="font-semibold">

                    {title}

                </span>

            </div>

            <p className="mt-4 text-2xl font-black">

                {value}

            </p>

        </Card>

    );

}