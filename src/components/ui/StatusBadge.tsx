import {
    CheckCircle2,
    Circle,
    PlayCircle
} from "lucide-react";

type Status =

    | "Completed"
    | "Current"
    | "Upcoming"
    | "Released"
    | "Closed";

type Props = {

    status: Status;

};

export default function StatusBadge({

    status

}: Props) {

    switch (status) {

        case "Completed":

            return (

                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                    <CheckCircle2 size={16} />

                    Completed

                </span>

            );

        case "Current":

            return (

                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                    <PlayCircle size={16} />

                    Current

                </span>

            );

        default:

            return (

                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">

                    <Circle size={15} />

                    {status}

                </span>

            );

    }

}