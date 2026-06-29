import Card from "./Card";

type Props = {

    icon: React.ReactNode;

    title: string;

    value: string | number;

};

export default function StatCard({

    icon,

    title,

    value

}: Props) {

    return (

        <Card className="p-8">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-slate-500">

                        {title}

                    </p>

                    <h3 className="mt-3 text-5xl font-black">

                        {value}

                    </h3>

                </div>

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-100
                    "
                >

                    {icon}

                </div>

            </div>

        </Card>

    );

}