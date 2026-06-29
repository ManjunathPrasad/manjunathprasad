type Props = {

    text: string;

    search: string;

};

export default function HighlightText({

    text,

    search

}: Props) {

    if (!search.trim()) {

        return <>{text}</>;

    }

    const escapedSearch = search.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

    const regex = new RegExp(`(${escapedSearch})`, "gi");

    const parts = text.split(regex);

    return (

        <>

            {parts.map((part, index) =>

                regex.test(part) ? (

                    <mark
                        key={index}
                        className="
                            rounded
                            bg-yellow-200
                            px-1
                            font-semibold
                            text-slate-900
                        "
                    >

                        {part}

                    </mark>

                ) : (

                    <span key={index}>

                        {part}

                    </span>

                )

            )}

        </>

    );

}