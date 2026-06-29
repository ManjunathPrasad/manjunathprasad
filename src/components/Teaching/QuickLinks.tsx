import { quickLinks } from "../../data/teaching/quickLinks";
import SectionHeader from "../Teaching/CourseLayout/SectionHeader";

export default function QuickLinks() {

    return (

        <section className="py-24 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Student Resources"
                    title="Quick Links"
                    description="Frequently accessed academic resources and important links."
                    align="center"
                />

                <div
                    className="
                        mt-14
                        grid
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >

                    {quickLinks.map((item) => {

                        const Icon = item.icon;

                        return (

                            <a
                                key={item.id}
                                href={item.href}
                                className="
                                    rounded-3xl
                                    bg-white
                                    border
                                    border-slate-200
                                    p-7
                                    hover:border-blue-500
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                "
                            >

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-blue-50
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Icon
                                        className="text-blue-600"
                                        size={26}
                                    />

                                </div>

                                <h3
                                    className="
                                        mt-6
                                        text-xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-slate-600
                                        leading-7
                                    "
                                >
                                    {item.description}
                                </p>

                            </a>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}