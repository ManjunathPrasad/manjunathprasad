import { useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    BriefcaseBusiness,
    Brain,
    Cloud
} from "lucide-react";

const nodes = {
    academia: {
        title: "Academia",
        color: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-700",
        icon: GraduationCap,
        content: [
            "Lecturer (2008–2009)",
            "Assistant Professor - Canara Engineering College",
            "Assistant Professor - NMAM Institute of Technology",
            "Assistant Professor - Nitte Institute of Professional Education",
            "Assistant Professor - MITE (Present)"
        ]
    },

    industry: {
        title: "Industry",
        color: "bg-purple-500",
        light: "bg-purple-50",
        text: "text-purple-700",
        icon: BriefcaseBusiness,
        content: [
            "Technology Lead (2019–2024)",
            "Microsoft Corporation",
            "Travelers Insurance",
            "Charles Schwab",
            "Enterprise Software Engineering"
        ]
    },

    research: {
        title: "Research",
        color: "bg-green-500",
        light: "bg-green-50",
        text: "text-green-700",
        icon: Brain,
        content: [
            "Vision-Language Models",
            "Computer Vision",
            "Trustworthy AI",
            "Hallucination Detection",
            "Multimodal Learning"
        ]
    },

    cloud: {
        title: "Cloud",
        color: "bg-orange-500",
        light: "bg-orange-50",
        text: "text-orange-700",
        icon: Cloud,
        content: [
            "Microsoft Azure",
            "AWS",
            "Azure DevOps",
            "CI/CD Pipelines",
            "Cloud Native Applications"
        ]
    }
};

export default function CareerMap() {

    const [selected, setSelected] =
        useState<keyof typeof nodes>("academia");

    const selectedNode = nodes[selected];

    return (

        <section className="py-32">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >

                    <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Interactive Career Map
                    </p>

                    <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                        Academia. Industry.
                        <br />
                        Research. Cloud.
                    </h2>

                    <p className="mt-6 text-xl text-gray-600">
                        Explore the domains that have shaped my
                        professional journey.
                    </p>

                </motion.div>

                {/* Desktop Map */}

                <div className="hidden lg:flex mt-24 flex-col items-center">

                    <div className="relative w-full max-w-5xl h-[600px]">

                        {/* Horizontal Line */}

                        <div className="absolute left-[18%] right-[18%] top-1/2 h-[2px] bg-gradient-to-r from-blue-300 via-gray-300 to-purple-300" />

                        {/* Vertical Line */}

                        <div className="absolute left-1/2 top-[15%] bottom-[15%] w-[2px] bg-gradient-to-b from-green-300 via-gray-300 to-orange-300" />

                        {/* Center Node */}

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                                w-56
                                h-56
                                rounded-full
                                bg-black
                                text-white
                                flex
                                items-center
                                justify-center
                                text-center
                                shadow-2xl
                                z-20
                            "
                        >
                            <div>

                                <p className="text-3xl font-bold">
                                    Manjunath
                                </p>

                                <p className="text-xl">
                                    Prasad
                                </p>

                            </div>

                        </motion.div>

                        {/* Research */}

                        <NodeButton
                            nodeKey="research"
                            selected={selected}
                            setSelected={setSelected}
                            position="top"
                        />

                        {/* Academia */}

                        <NodeButton
                            nodeKey="academia"
                            selected={selected}
                            setSelected={setSelected}
                            position="left"
                        />

                        {/* Industry */}

                        <NodeButton
                            nodeKey="industry"
                            selected={selected}
                            setSelected={setSelected}
                            position="right"
                        />

                        {/* Cloud */}

                        <NodeButton
                            nodeKey="cloud"
                            selected={selected}
                            setSelected={setSelected}
                            position="bottom"
                        />

                    </div>

                </div>

                {/* Mobile Layout */}

                <div className="lg:hidden mt-16 space-y-6">

                    {Object.entries(nodes).map(([key, node]) => {

                        const Icon = node.icon;

                        return (

                            <button
                                key={key}
                                onClick={() =>
                                    setSelected(
                                        key as keyof typeof nodes
                                    )
                                }
                                className={`
                                    w-full
                                    p-5
                                    rounded-3xl
                                    border
                                    transition-all
                                    ${
                                        selected === key
                                            ? "border-black shadow-xl"
                                            : "border-gray-200"
                                    }
                                `}
                            >
                                <div className="flex items-center gap-4">

                                    <div
                                        className={`
                                            w-12
                                            h-12
                                            rounded-xl
                                            flex
                                            items-center
                                            justify-center
                                            text-white
                                            ${node.color}
                                        `}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <span className="font-semibold text-lg">
                                        {node.title}
                                    </span>

                                </div>
                            </button>

                        );

                    })}

                </div>

                {/* Details Card */}

                <motion.div
                    key={selected}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                        mt-16
                        max-w-4xl
                        mx-auto
                        rounded-3xl
                        border
                        border-gray-200
                        bg-white
                        shadow-xl
                        overflow-hidden
                    "
                >

                    <div
                        className={`
                            px-8
                            py-6
                            ${selectedNode.light}
                        `}
                    >

                        <h3
                            className={`
                                text-3xl
                                font-bold
                                ${selectedNode.text}
                            `}
                        >
                            {selectedNode.title}
                        </h3>

                    </div>

                    <div className="p-8">

                        <ul className="space-y-4">

                            {selectedNode.content.map((item) => (

                                <li
                                    key={item}
                                    className="
                                        flex
                                        items-start
                                        gap-4
                                        text-lg
                                        text-gray-700
                                    "
                                >
                                    <span
                                        className={`
                                            mt-2
                                            w-2
                                            h-2
                                            rounded-full
                                            ${selectedNode.color}
                                        `}
                                    />

                                    {item}

                                </li>

                            ))}

                        </ul>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

function NodeButton({
    nodeKey,
    selected,
    setSelected,
    position
}: any) {

    const node = nodes[nodeKey];
    const Icon = node.icon;

    const positions: any = {
        top: "left-1/2 top-0 -translate-x-1/2",
        left: "left-0 top-1/2 -translate-y-1/2",
        right: "right-0 top-1/2 -translate-y-1/2",
        bottom: "left-1/2 bottom-0 -translate-x-1/2"
    };

    return (

        <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => setSelected(nodeKey)}
            className={`
                absolute
                ${positions[position]}
                w-36
                h-36
                rounded-full
                text-white
                shadow-xl
                flex
                flex-col
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                ${node.color}
                ${
                    selected === nodeKey
                        ? "ring-8 ring-black/10 scale-110"
                        : ""
                }
            `}
        >
            <Icon size={28} />

            <span className="font-semibold">
                {node.title}
            </span>

        </motion.button>

    );
}