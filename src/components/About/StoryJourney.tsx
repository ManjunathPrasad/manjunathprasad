import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Circle } from "lucide-react";

import bgsitCampus from "../../assets/BGSIT-campus.jpg";
import cecCampus from "../../assets/CEC.jpg";
import nmamitCampus from "../../assets/NMAMIT-campus.jpeg";
import nitteCampus from "../../assets/nitte-campus.jpeg";
import miteCampus from "../../assets/mite-campus.jpg";

import microsoftLogo from "../../assets/Microsoft_logo.png";
import microsoftCampus from "../../assets/microsoft-campus.jpg";

import travellersLogo from "../../assets/Travellers_logo.png";
import travellersCampus from "../../assets/travellers-campus.jpg";

import schwabLogo from "../../assets/Charles_Schwab_Corporation_logo.png";
import schwabCampus from "../../assets/charles-schwab-campus.jpg";
import Footer from "../layout/Footer";

// Placeholder images for qualifications (update these with actual images later)
import bcePlaceholder from "../../assets/bce.jpg";
import umassPlaceholder from "../../assets/umass.jpg";
import bitmPlaceholder from "../../assets/bitm.jpg";
import vtuPlaceholder from "../../assets/vtu.jpg";

const chapters = [
    {
        number: "01",
        title: "The Scholar",
        period: "2008 – Present",
        color: "bg-emerald-500",
        description:
            "A lifelong learner committed to academic excellence, earning degrees across computer science and engineering, and currently pursuing doctoral research in Vision-Language Integration.",
        qualifications: [
            {
                degree: "Ph.D. in Computer Science",
                institution: "Visvesvaraya Technological University, Belagavi",
                affiliatedCollege: "Ballari Institute of Technology and Management",
                year: "Expected May 2027",
                focus: "Vision-Language Integration for Real-World Applications",
                status: "Ongoing",
                location: "Belagavi, Karnataka, India",
                image: vtuPlaceholder,
                description: "Engaged in advanced research and IEEE journal submission in Vision-Language Models and Multimodal Learning at BITM research center."
            },
            {
                degree: "M.S. in Computer and Information Sciences",
                institution: "University of Massachusetts",
                affiliatedCollege: "",
                year: "2019",
                focus: "Generative Adversarial Networks (GANs) for Human Face Super-Resolution",
                status: "Completed",
                location: "Massachusetts, USA",
                image: umassPlaceholder,
                description: "Master's project focused on GANs for human face super-resolution. Relevant coursework in Machine Learning."
            },
            {
                degree: "M.Tech in Computer Network Engineering",
                institution: "Visvesvaraya Technological University, Belagavi",
                affiliatedCollege: "Ballari Institute of Technology and Management",
                year: "2011",
                focus: "Network Security",
                status: "Completed",
                location: "Belagavi, Karnataka, India",
                image: bitmPlaceholder,
                description: "Completed Master's project in the area of Network Security with coursework focus on Computer Networks at BITM."
            },
            {
                degree: "B.E. in Computer Science and Engineering",
                institution: "Visvesvaraya Technological University, Belagavi",
                affiliatedCollege: "Bahubali College of Engineering",
                year: "2008",
                focus: "Project at Global Edge Software Systems, Bangalore",
                status: "Completed",
                location: "Belagavi, Karnataka, India",
                image: bcePlaceholder,
                description: "Completed Bachelor's degree project at Global Edge Software Systems, Bangalore at Bahubali College of Engineering."
            }
        ]
    },
    {
        number: "02",
        title: "The Teacher",
        period: "2008 – Present",
        color: "bg-blue-500",
        description:
            "Built a foundation in computer science education through teaching, mentoring, curriculum development, and academic leadership across multiple institutions.",
        highlights: [
            "BGS Institute of Technology",
            "Canara Engineering College",
            "NMAM Institute of Technology",
            "Nitte University",
            "MITE"
        ]
    },
    {
        number: "03",
        title: "The Engineer",
        period: "2019 – 2024",
        color: "bg-purple-500",
        description:
            "Worked as a Technology Lead for global clients through Infosys Limited delivering enterprise software solutions for global organizations across insurance, finance, and technology sectors.",
        highlights: [
            "Microsoft Corporation",
            "Travelers Insurance",
            "Charles Schwab",
            "Enterprise Architecture",
            "Technology Leadership"
        ]
    },
    {
        number: "04",
        title: "The Researcher",
        period: "2024 – Present",
        color: "bg-green-500",
        description:
            "Focused on trustworthy multimodal AI, hallucination detection, alignment analysis, and vision-language systems.",
        highlights: [
            "Vision-Language Models",
            "Trustworthy AI",
            "Computer Vision",
            "Hallucination Detection",
            "Multimodal Learning"
        ]
    },
    {
        number: "05",
        title: "The Builder",
        period: "Future",
        color: "bg-orange-500",
        description:
            "Building AI research programs, cloud-native systems, academic collaborations, and future research laboratories.",
        highlights: [
            "Vision Lab",
            "Cloud Platforms",
            "Azure",
            "AWS",
            "Polly Framework"
        ]
    }
];

const academiaDetails = [
    {
        name: "Adichunchanagiri University (Formerly BGS Institute of Technology)",
        shortName: "Adichunchanagiri University",
        role: "Lecturer",
        duration: "Aug 2008 – Jun 2009",
        location: "B.G. Nagar, Mandya, Karnataka, India",
        image: bgsitCampus,
        description:
            "Started my academic career teaching Computer Science and Engineering courses while mentoring undergraduate students."
    },
    {
        name: "Canara Engineering College",
        shortName: "Canara Engineering College",
        role: "Assistant Professor",
        duration: "Jun 2011 – May 2014",
        location: "Mangaluru, Karnataka, India",
        image: cecCampus,
        description:
            "Taught core computer science subjects and contributed to academic activities, student mentoring, and curriculum delivery."
    },
    {
        name: "NMAM Institute of Technology",
        shortName: "NMAM Institute of Technology",
        role: "Assistant Professor",
        duration: "Jun 2014 – Jan 2017",
        location: "Nitte, Karnataka, India",
        image: nmamitCampus,
        description:
            "Engaged in teaching, project supervision, and departmental academic responsibilities in Computer Science and Engineering."
    },
    {
        name: "Nitte Institute of Professional Education",
        shortName: "Nitte Institute of Professional Education, Nitte (Deemed to be University)",
        role: "Assistant Professor",
        duration: "May 2024 – Apr 2026",
        location: "Mangaluru, Karnataka, India",
        image: nitteCampus,
        description:
            "Contributed to postgraduate computer applications education and emerging technology courses."
    },
    {
        name: "Mangalore Institute of Technology and Engineering",
        shortName: "MITE",
        role: "Assistant Professor",
        duration: "May 2026 – Present",
        location: "Moodbidri, Karnataka, India",
        image: miteCampus,
        description:
            "Currently teaching Artificial Intelligence and Machine Learning while pursuing research in trustworthy multimodal AI systems."
    }
];

const industryDetails = [
    {
        name: "Charles Schwab",
        role: "Technology Lead",
        duration: "2019 – 2020",
        location: "Austin, Texas, USA",
        logo: schwabLogo,
        image: schwabCampus,
        description:
            "Contributed to financial technology platforms and enterprise software modernization."
    },
    {
        name: "Microsoft Corporation",
        role: "Technology Lead",
        duration: "2020 – 2023",
        location: "Redmond, Washington, USA",
        logo: microsoftLogo,
        image: microsoftCampus,
        description:
            "Worked on enterprise software engineering initiatives and large-scale cloud-based systems."
    },
    {
        name: "Travelers Insurance",
        role: "Technology Lead",
        duration: "2023 – 2024",
        location: "Hartford, Connecticut, USA",
        logo: travellersLogo,
        image: travellersCampus,
        description:
            "Developed enterprise insurance solutions supporting large-scale business operations."
    }
];

const institutionTimeline = {
    "Adichunchanagiri University (Formerly BGS Institute of Technology)": {
        start: 0,
        width: 8
    },
    "Canara Engineering College": {
        start: 15,
        width: 20
    },
    "NMAM Institute of Technology": {
        start: 35,
        width: 15
    },
    "Nitte Institute of Professional Education": {
        start: 63,
        width: 18
    },
    "Mangalore Institute of Technology and Engineering": {
        start: 88,
        width: 12
    }
};

// Helper function to safely get timeline values
const getTimelineValue = (institutionName: string, property: string) => {
    const timeline = institutionTimeline[institutionName as keyof typeof institutionTimeline];
    return timeline?.[property as keyof typeof timeline] ?? (property === 'start' ? 0 : 100);
};

export default function StoryJourney() {
    const [selectedInstitution, setSelectedInstitution] = useState(academiaDetails[0]);
    const [selectedCompany, setSelectedCompany] = useState(industryDetails[0]);
    const [selectedQualification, setSelectedQualification] = useState(
        (chapters[0] as {
            qualifications: {
                degree: string;
                institution: string;
                affiliatedCollege: string;
                year: string;
                focus: string;
                status: string;
                location: string;
                image: string;
                description: string;
            }[];
        }).qualifications[0]
    );
    const [activeChapter, setActiveChapter] = useState(0);
    const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        
        observerRefs.current.forEach((el, index) => {
            if (el) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveChapter(index);
                        }
                    },
                    { threshold: 0.4 }
                );
                observer.observe(el);
                observers.push(observer);
            }
        });
        
        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <>
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Side Navigation */}
                    <div className="hidden xl:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
                        {chapters.map((chapter, index) => (
                            <div key={chapter.number} className="flex items-center gap-3">
                                <div className={`
                                    flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
                                    ${index < activeChapter ? "bg-green-500 text-white" : 
                                      index === activeChapter ? "bg-blue-600 text-white animate-pulse" : 
                                      "bg-gray-200 text-gray-500"}
                                `}>
                                    {index < activeChapter ? <Check size={14} /> : <Circle size={12} />}
                                </div>
                                <div>
                                    <p className={`text-base font-semibold tracking-wider ${
                                        index === activeChapter ? "text-blue-600" : "text-gray-400"
                                    }`}>
                                        {chapter.number}
                                    </p>
                                    <p className={`text-sm ${
                                        index === activeChapter ? "font-semibold text-gray-900" : "text-gray-500"
                                    }`}>
                                        {chapter.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mb-32"
                    >
                        <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-semibold">
                            Professional Journey
                        </p>
                        <h2 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
                            The Story Behind
                            <br />
                            My Career
                        </h2>
                        <p className="mt-8 text-xl text-gray-600">
                            A journey through teaching, engineering, research, and innovation.
                        </p>
                    </motion.div>

                    {/* Chapters */}
                    <div className="space-y-48">
                        {chapters.map((chapter, index) => (
                            <motion.div
                                key={chapter.number}
                                ref={(el) => {
                                    observerRefs.current[index] = el;
                                }}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className={`grid lg:grid-cols-2 gap-12 items-start ${
                                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                            >
                                {/* Chapter Number - Left Column */}
                                <div className="sticky top-32">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-[120px] lg:text-[220px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-50"
                                    >
                                        {chapter.number}
                                    </motion.div>
                                </div>

                                {/* Content - Right Column */}
                                <div>
                                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium ${chapter.color}`}>
                                        {chapter.period}
                                    </div>
                                    <h3 className="mt-6 text-4xl lg:text-5xl font-bold">
                                        {chapter.title}
                                    </h3>
                                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                                        {chapter.description}
                                    </p>

                                    {chapter.number === "01" ? (
                                        <div className="mt-8">
                                            {/* Two Column Layout for Qualifications */}
                                            <div className="grid md:grid-cols-2 gap-8">
                                                {/* Left Column - Qualification Names with Hover Effect */}
                                                <div className="space-y-2">
                                                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                                                        Qualifications
                                                    </h4>
                                                    {chapter.qualifications?.map((item) => (
                                                        <div
                                                            key={item.degree}
                                                            onMouseEnter={() => setSelectedQualification(item)}
                                                            className={`
                                                                w-full text-left px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer
                                                                ${selectedQualification.degree === item.degree
                                                                    ? "bg-emerald-50 text-emerald-700 font-semibold border-l-4 border-emerald-600"
                                                                    : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"}
                                                            `}
                                                        >
                                                            <div className="text-sm md:text-base">
                                                                {item.degree}
                                                            </div>
                                                            <div className="text-xs text-gray-400 mt-1">
                                                                {item.affiliatedCollege || item.institution.split(',')[0]}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right Column - Qualification Details Card */}
                                                <div>
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={selectedQualification.degree}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            transition={{ duration: 0.35 }}
                                                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
                                                        >
                                                            {/* Campus Image */}
                                                            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                                                {selectedQualification.image ? (
                                                                    <img
                                                                        src={selectedQualification.image}
                                                                        alt={selectedQualification.institution}
                                                                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                                                    />
                                                                ) : (
                                                                    <div className="text-gray-400 text-sm flex flex-col items-center">
                                                                        <span className="text-4xl mb-2">🏫</span>
                                                                        <span>Image Placeholder</span>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="p-5">
                                                                {/* Status Badge */}
                                                                <div className="mb-3">
                                                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                                                        selectedQualification.status === "Ongoing" 
                                                                            ? "bg-yellow-100 text-yellow-700"
                                                                            : "bg-green-100 text-green-700"
                                                                    }`}>
                                                                        {selectedQualification.status || "Completed"}
                                                                    </span>
                                                                </div>

                                                                {/* Qualification Details */}
                                                                <h4 className="text-lg font-bold leading-tight">
                                                                    {selectedQualification.degree}
                                                                </h4>
                                                                
                                                                {/* Affiliated College / Institution */}
                                                                {selectedQualification.affiliatedCollege && (
                                                                    <p className="text-gray-600 text-sm mt-1">
                                                                        {selectedQualification.affiliatedCollege}
                                                                    </p>
                                                                )}
                                                                
                                                                <p className="text-emerald-600 font-medium text-sm mt-1">
                                                                    {selectedQualification.institution}
                                                                </p>

                                                                <div className="grid grid-cols-2 gap-3 mt-4">
                                                                    <div>
                                                                        <p className="text-xs text-gray-500">Year</p>
                                                                        <p className="font-medium text-xs">{selectedQualification.year}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-500">Location</p>
                                                                        <p className="font-medium text-xs">{selectedQualification.location}</p>
                                                                    </div>
                                                                </div>

                                                                {selectedQualification.focus && (
                                                                    <div className="mt-3">
                                                                        <p className="text-xs text-gray-500">Focus Area</p>
                                                                        <p className="text-xs text-gray-700 mt-1">{selectedQualification.focus}</p>
                                                                    </div>
                                                                )}

                                                                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                                                    {selectedQualification.description}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                    ) : chapter.number === "02" ? (
                                        <div className="mt-8">
                                            {/* Two Column Layout for Institutions */}
                                            <div className="grid md:grid-cols-2 gap-8">
                                                {/* Left Column - Institution Names with Hover Effect */}
                                                <div className="space-y-2">
                                                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                                                        Institutions
                                                    </h4>
                                                    {academiaDetails.map((item) => (
                                                        <div
                                                            key={item.name}
                                                            onMouseEnter={() => setSelectedInstitution(item)}
                                                            className={`
                                                                w-full text-left px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer
                                                                ${selectedInstitution.name === item.name
                                                                    ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600"
                                                                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"}
                                                            `}
                                                        >
                                                            <div className="text-sm md:text-base">
                                                                {item.shortName}
                                                            </div>
                                                            <div className="text-xs text-gray-400 mt-1">
                                                                {item.role}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right Column - Institution Details Card */}
                                                <div>
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={selectedInstitution.name}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            transition={{ duration: 0.35 }}
                                                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
                                                        >
                                                            {/* Campus Image */}
                                                            <div className="h-48 overflow-hidden">
                                                                <img
                                                                    src={selectedInstitution.image}
                                                                    alt={selectedInstitution.name}
                                                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                                                />
                                                            </div>

                                                            <div className="p-5">
                                                                {/* Timeline Bar */}
                                                                <div className="mb-5">
                                                                    <div className="w-full h-1.5 rounded-full bg-gray-200 relative overflow-hidden">
                                                                        <div
                                                                            className="absolute top-0 h-full bg-green-600 rounded-full transition-all duration-700"
                                                                            style={{
                                                                                left: `${getTimelineValue(selectedInstitution.name, 'start')}%`,
                                                                                width: `${getTimelineValue(selectedInstitution.name, 'width')}%`
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div className="flex justify-between mt-2 text-[10px] text-gray-400">
                                                                        <span>2008</span>
                                                                        <span>2011</span>
                                                                        <span>2014</span>
                                                                        <span>2017</span>
                                                                        <span>2024</span>
                                                                        <span>2026</span>
                                                                        <span>Present</span>
                                                                    </div>
                                                                </div>

                                                                {/* Institution Details */}
                                                                <h4 className="text-lg font-bold leading-tight">
                                                                    {selectedInstitution.name.split(' (')[0]}
                                                                </h4>
                                                                <p className="text-blue-600 font-medium text-sm mt-1">
                                                                    {selectedInstitution.role}
                                                                </p>

                                                                <div className="grid grid-cols-2 gap-3 mt-4">
                                                                    <div>
                                                                        <p className="text-xs text-gray-500">Location</p>
                                                                        <p className="font-medium text-xs">{selectedInstitution.location}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-500">Duration</p>
                                                                        <p className="font-medium text-xs">{selectedInstitution.duration}</p>
                                                                    </div>
                                                                </div>

                                                                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                                                    {selectedInstitution.description}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                    ) : chapter.number === "03" ? (
                                        <div className="mt-8">
                                            {/* Two Column Layout for Companies with Hover Effect */}
                                            <div className="grid md:grid-cols-2 gap-8">
                                                {/* Left Column - Company Names */}
                                                <div className="space-y-2">
                                                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                                                        Companies
                                                    </h4>
                                                    {industryDetails.map((company) => (
                                                        <div
                                                            key={company.name}
                                                            onMouseEnter={() => setSelectedCompany(company)}
                                                            className={`
                                                                w-full text-left px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer
                                                                ${selectedCompany.name === company.name
                                                                    ? "bg-purple-50 text-purple-700 font-semibold border-l-4 border-purple-600"
                                                                    : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"}
                                                            `}
                                                        >
                                                            <div className="text-sm md:text-base">
                                                                {company.name}
                                                            </div>
                                                            <div className="text-xs text-gray-400 mt-1">
                                                                {company.role}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right Column - Company Details Card */}
                                                <div>
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={selectedCompany.name}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            transition={{ duration: 0.35 }}
                                                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
                                                        >
                                                            <div className="h-48 overflow-hidden">
                                                                <img
                                                                    src={selectedCompany.image}
                                                                    alt={selectedCompany.name}
                                                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                                />
                                                            </div>
                                                            <div className="p-5">
                                                                <div className="flex items-center gap-3 mb-4">
                                                                    <img
                                                                        src={selectedCompany.logo}
                                                                        alt={selectedCompany.name}
                                                                        className="h-8 w-auto object-contain"
                                                                    />
                                                                    <div>
                                                                        <h4 className="text-lg font-bold">
                                                                            {selectedCompany.name}
                                                                        </h4>
                                                                        <p className="text-purple-600 font-medium text-sm">
                                                                            {selectedCompany.role}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="grid grid-cols-2 gap-3 mt-4">
                                                                    <div>
                                                                        <p className="text-xs text-gray-500">Location</p>
                                                                        <p className="font-medium text-xs">{selectedCompany.location}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-500">Duration</p>
                                                                        <p className="font-medium text-xs">{selectedCompany.duration}</p>
                                                                    </div>
                                                                </div>

                                                                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                                                    {selectedCompany.description}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mt-8 flex flex-wrap gap-3">
                                            {chapter.highlights?.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}