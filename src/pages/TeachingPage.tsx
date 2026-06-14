import Layout from "../components/layout/Layout";
import { GraduationCap } from "lucide-react";

export default function TeachingPage() {

    return (

        <Layout>

            <section
                className="
                    min-h-[80vh]
                    flex
                    items-center
                    justify-center
                    px-6
                    bg-gray-50
                    relative
                    overflow-hidden
                "
            >

                {/* Background Blobs */}

                <div className="absolute inset-0 -z-10">

                    <div
                        className="
                            absolute
                            top-20
                            left-20
                            h-72
                            w-72
                            rounded-full
                            bg-blue-100
                            blur-3xl
                            opacity-70
                        "
                    />

                    <div
                        className="
                            absolute
                            bottom-20
                            right-20
                            h-80
                            w-80
                            rounded-full
                            bg-purple-100
                            blur-3xl
                            opacity-70
                        "
                    />

                </div>

                <div
                    className="
                        max-w-4xl
                        mx-auto
                        text-center
                        bg-white
                        rounded-3xl
                        shadow-xl
                        border
                        border-gray-100
                        p-12
                        md:p-16
                    "
                >

                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                            <GraduationCap className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    <p
                        className="
                            uppercase
                            tracking-[0.3em]
                            text-blue-600
                            text-sm
                            font-semibold
                        "
                    >
                        Teaching Portal
                    </p>

                    <h1
                        className="
                            mt-6
                            text-4xl
                            md:text-6xl
                            font-black
                            leading-tight
                        "
                    >
                        Class Not Yet In Session
                    </h1>

                    <p
                        className="
                            mt-8
                            text-lg
                            md:text-xl
                            text-gray-600
                            leading-relaxed
                        "
                    >
                        The Teaching page is currently preparing lecture notes,
                        arranging assignments, polishing slides, and convincing
                        students that deadlines are important.
                    </p>

                    <div
                        className="
                            mt-10
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-50
                            via-purple-50
                            to-pink-50
                            p-6
                            text-gray-700
                            text-lg
                        "
                    >
                        <span className="font-semibold">
                            Current Status:
                        </span>
                        {" "}
                        Semester loading...
                        <br />
                        Expected availability once the next academic term
                        officially commences.
                    </div>

                    <div
                        className="
                            mt-8
                            text-sm
                            text-gray-500
                            italic
                        "
                    >
                        "A teacher affects eternity; he can never tell where
                        his influence stops." — Henry Adams
                    </div>

                </div>

            </section>

        </Layout>

    );

}