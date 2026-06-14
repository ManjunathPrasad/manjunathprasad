// import Layout from "../components/layout/Layout";

// export default function ContactPage() {

//     return (

//         <Layout>

//             <section
//                 className="
//                     relative
//                     overflow-hidden
//                     min-h-screen
//                     bg-gray-50
//                 "
//             >

//                 {/* Background Effects */}

//                 <div className="absolute inset-0 -z-10">

//                     <div
//                         className="
//                             absolute
//                             top-20
//                             left-10
//                             h-72
//                             w-72
//                             rounded-full
//                             bg-blue-100
//                             blur-3xl
//                             opacity-70
//                         "
//                     />

//                     <div
//                         className="
//                             absolute
//                             bottom-20
//                             right-10
//                             h-80
//                             w-80
//                             rounded-full
//                             bg-purple-100
//                             blur-3xl
//                             opacity-70
//                         "
//                     />

//                 </div>

//                 <div className="max-w-7xl mx-auto px-6 py-24">

//                     {/* Hero */}

//                     <div className="text-center">

//                         <p
//                             className="
//                                 uppercase
//                                 tracking-[0.35em]
//                                 text-blue-600
//                                 text-sm
//                                 font-semibold
//                             "
//                         >
//                             Contact
//                         </p>

//                         <h1
//                             className="
//                                 mt-6
//                                 text-5xl
//                                 md:text-7xl
//                                 font-black
//                                 leading-tight
//                             "
//                         >
//                             Let's Build
//                             <br />

//                             <span
//                                 className="
//                                     bg-gradient-to-r
//                                     from-blue-600
//                                     via-purple-600
//                                     to-pink-600
//                                     bg-clip-text
//                                     text-transparent
//                                 "
//                             >
//                                 Something Meaningful
//                             </span>

//                         </h1>

//                         <p
//                             className="
//                                 mt-8
//                                 max-w-3xl
//                                 mx-auto
//                                 text-lg
//                                 md:text-xl
//                                 text-gray-600
//                                 leading-relaxed
//                             "
//                         >
//                             Interested in research collaboration,
//                             academic partnerships, student mentoring,
//                             invited talks, or industry projects?
//                             I would be happy to connect.
//                         </p>

//                     </div>

//                     {/* Contact Section */}

//                     <div
//                         className="
//                             mt-20
//                             grid
//                             lg:grid-cols-2
//                             gap-10
//                         "
//                     >

//                         {/* Contact Information */}

//                         <div
//                             className="
//                                 bg-white
//                                 rounded-3xl
//                                 border
//                                 border-gray-100
//                                 shadow-xl
//                                 p-10
//                             "
//                         >

//                             <h2 className="text-3xl font-black">
//                                 Contact Information
//                             </h2>

//                             <div className="mt-10 space-y-8">

//                                 <div>

//                                     <p className="text-gray-500 text-sm">
//                                         Email
//                                     </p>

//                                     <p className="font-semibold text-lg mt-1">
//                                         manjunathprasad@mite.ac.in
//                                     </p>

//                                 </div>

//                                 <div>

//                                     <p className="text-gray-500 text-sm">
//                                         Institution
//                                     </p>

//                                     <p className="font-semibold text-lg mt-1">
//                                         Mangalore Institute of Technology &
//                                         Engineering
//                                     </p>

//                                 </div>

//                                 <div>

//                                     <p className="text-gray-500 text-sm">
//                                         Research Areas
//                                     </p>

//                                     <p className="font-semibold text-lg mt-1">
//                                         Vision-Language Models,
//                                         Hallucination Detection,
//                                         Multimodal AI,
//                                         AI Agents
//                                     </p>

//                                 </div>

//                                 <div>

//                                     <p className="text-gray-500 text-sm">
//                                         Availability
//                                     </p>

//                                     <p className="font-semibold text-lg mt-1 text-green-600">
//                                         Open for Research Collaboration
//                                     </p>

//                                 </div>

//                             </div>

//                         </div>

//                         {/* Contact Form */}

//                         <div
//                             className="
//                                 bg-white
//                                 rounded-3xl
//                                 border
//                                 border-gray-100
//                                 shadow-xl
//                                 p-10
//                             "
//                         >

//                             <h2 className="text-3xl font-black">
//                                 Send a Message
//                             </h2>

//                             <form className="mt-10 space-y-6">

//                                 <div>

//                                     <label className="block text-sm font-medium mb-2">
//                                         Name
//                                     </label>

//                                     <input
//                                         type="text"
//                                         placeholder="Your Name"
//                                         className="
//                                             w-full
//                                             rounded-xl
//                                             border
//                                             border-gray-300
//                                             px-4
//                                             py-3
//                                             outline-none
//                                             focus:border-blue-500
//                                         "
//                                     />

//                                 </div>

//                                 <div>

//                                     <label className="block text-sm font-medium mb-2">
//                                         Email
//                                     </label>

//                                     <input
//                                         type="email"
//                                         placeholder="your@email.com"
//                                         className="
//                                             w-full
//                                             rounded-xl
//                                             border
//                                             border-gray-300
//                                             px-4
//                                             py-3
//                                             outline-none
//                                             focus:border-blue-500
//                                         "
//                                     />

//                                 </div>

//                                 <div>

//                                     <label className="block text-sm font-medium mb-2">
//                                         Subject
//                                     </label>

//                                     <input
//                                         type="text"
//                                         placeholder="Research Collaboration"
//                                         className="
//                                             w-full
//                                             rounded-xl
//                                             border
//                                             border-gray-300
//                                             px-4
//                                             py-3
//                                             outline-none
//                                             focus:border-blue-500
//                                         "
//                                     />

//                                 </div>

//                                 <div>

//                                     <label className="block text-sm font-medium mb-2">
//                                         Message
//                                     </label>

//                                     <textarea
//                                         rows={6}
//                                         placeholder="Tell me about your project, collaboration, or inquiry..."
//                                         className="
//                                             w-full
//                                             rounded-xl
//                                             border
//                                             border-gray-300
//                                             px-4
//                                             py-3
//                                             outline-none
//                                             resize-none
//                                             focus:border-blue-500
//                                         "
//                                     />

//                                 </div>

//                                 <button
//                                     type="submit"
//                                     className="
//                                         w-full
//                                         rounded-xl
//                                         bg-gradient-to-r
//                                         from-blue-600
//                                         via-purple-600
//                                         to-pink-600
//                                         py-4
//                                         text-white
//                                         font-semibold
//                                         hover:scale-[1.02]
//                                         transition-all
//                                     "
//                                 >
//                                     Send Message
//                                 </button>

//                             </form>

//                         </div>

//                     </div>

//                 </div>

//             </section>

//         </Layout>

//     );

// }

import Layout from "../components/layout/Layout";

export default function ContactPage() {

    return (

        <Layout>

            <section
                className="
                    relative
                    overflow-hidden
                    min-h-screen
                    bg-gray-50
                "
            >

                {/* Background Effects */}

                <div className="absolute inset-0 -z-10">

                    <div
                        className="
                            absolute
                            top-20
                            left-10
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
                            right-10
                            h-80
                            w-80
                            rounded-full
                            bg-purple-100
                            blur-3xl
                            opacity-70
                        "
                    />

                </div>

                <div className="max-w-7xl mx-auto px-6 py-24">

                    {/* Hero */}

                    <div className="text-center">

                        <p
                            className="
                                uppercase
                                tracking-[0.35em]
                                text-blue-600
                                text-sm
                                font-semibold
                            "
                        >
                            Contact
                        </p>

                        <h1
                            className="
                                mt-6
                                text-5xl
                                md:text-7xl
                                font-black
                                leading-tight
                            "
                        >
                            Let's Build
                            <br />

                            <span
                                className="
                                    bg-gradient-to-r
                                    from-blue-600
                                    via-purple-600
                                    to-pink-600
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Something Meaningful
                            </span>

                        </h1>

                        <p
                            className="
                                mt-8
                                max-w-3xl
                                mx-auto
                                text-lg
                                md:text-xl
                                text-gray-600
                                leading-relaxed
                            "
                        >
                            Interested in research collaboration,
                            academic partnerships, student mentoring,
                            invited talks, or industry projects?
                            I would be happy to connect.
                        </p>

                    </div>

                    {/* Contact Section */}

                    <div
                        className="
                            mt-20
                            grid
                            lg:grid-cols-2
                            gap-10
                        "
                    >

                        {/* Contact Information */}

                        <div
                            className="
                                bg-white
                                rounded-3xl
                                border
                                border-gray-100
                                shadow-xl
                                p-10
                            "
                        >

                            <h2 className="text-3xl font-black">
                                Contact Information
                            </h2>

                            <div className="mt-10 space-y-8">

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Email
                                    </p>

                                    <p className="font-semibold text-lg mt-1">
                                        manjunathprasad@mite.ac.in
                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Institution
                                    </p>

                                    <p className="font-semibold text-lg mt-1">
                                        Mangalore Institute of Technology &
                                        Engineering
                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Research Areas
                                    </p>

                                    <p className="font-semibold text-lg mt-1">
                                        Vision-Language Models,
                                        Hallucination Detection,
                                        Multimodal AI,
                                        AI Agents
                                    </p>

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Availability
                                    </p>

                                    <p className="font-semibold text-lg mt-1 text-green-600">
                                        Open for Research Collaboration
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Contact Status Card */}

                        <div
                            className="
                                bg-white
                                rounded-3xl
                                border
                                border-gray-100
                                shadow-xl
                                p-10
                                flex
                                flex-col
                                justify-center
                            "
                        >

                            <div
                                className="
                                    h-20
                                    w-20
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-blue-600
                                    via-purple-600
                                    to-pink-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                    font-bold
                                "
                            >
                                ✉
                            </div>

                            <h2 className="text-3xl font-black mt-8">
                                Contact Form Under Development
                            </h2>

                            <p
                                className="
                                    mt-6
                                    text-gray-600
                                    leading-relaxed
                                    text-lg
                                "
                            >
                                The online contact form is currently under
                                development.
                            </p>

                            <p
                                className="
                                    mt-4
                                    text-gray-600
                                    leading-relaxed
                                    text-lg
                                "
                            >
                                For research collaborations, student mentoring,
                                invited talks, consultancy opportunities, or
                                academic discussions, you are welcome to write
                                directly to my email address.
                            </p>

                            <a
                                href="mailto:manjunathprasad@mite.ac.in"
                                className="
                                    mt-8
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-blue-600
                                    via-purple-600
                                    to-pink-600
                                    px-6
                                    py-4
                                    text-white
                                    font-semibold
                                    hover:scale-[1.02]
                                    transition-all
                                    duration-300
                                "
                            >
                                Write an Email
                            </a>

                            <div
                                className="
                                    mt-6
                                    text-sm
                                    text-green-600
                                    font-medium
                                "
                            >
                                Typically responds within 1–3 business days.
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </Layout>

    );

}