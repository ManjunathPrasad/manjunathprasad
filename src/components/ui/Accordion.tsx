import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface AccordionItem {

    id: string;

    title: string;

    subtitle?: string;

    content: ReactNode;

}

type Props = {

    items: AccordionItem[];

    defaultOpen?: string;

};

export default function Accordion({

    items,

    defaultOpen

}: Props) {

    const [openItem, setOpenItem] = useState<string | null>(
        defaultOpen ?? null
    );

    function toggle(id: string) {

        setOpenItem(current =>
            current === id ? null : id
        );

    }

    return (

        <div className="space-y-5">

            {items.map(item => {

                const isOpen = openItem === item.id;

                return (

                    <div
                        key={item.id}
                        className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            shadow-sm
                            overflow-hidden
                        "
                    >

                        <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            className="
                                w-full
                                flex
                                items-center
                                justify-between
                                p-6
                                text-left
                            "
                        >

                            <div>

                                <h3 className="text-xl font-bold text-slate-900">

                                    {item.title}

                                </h3>

                                {item.subtitle && (

                                    <p className="mt-2 text-slate-500">

                                        {item.subtitle}

                                    </p>

                                )}

                            </div>

                            <motion.div
                                animate={{
                                    rotate: isOpen ? 180 : 0
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                            >

                                <ChevronDown />

                            </motion.div>

                        </button>

                        <AnimatePresence initial={false}>

                            {isOpen && (

                                <motion.div
                                    initial={{
                                        height: 0,
                                        opacity: 0
                                    }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0
                                    }}
                                    transition={{
                                        duration: 0.25
                                    }}
                                >

                                    <div className="px-6 pb-6">

                                        {item.content}

                                    </div>

                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                );

            })}

        </div>

    );

}