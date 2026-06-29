type ProgressBarProps = {

    percentage: number;

    color?: string;

};

export default function ProgressBar({

    percentage,

    color = "bg-blue-600"

}: ProgressBarProps) {

    return (

        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

            <div
                className={`${color} h-full rounded-full transition-all duration-700`}
                style={{
                    width: `${percentage}%`
                }}
            />

        </div>

    );

}