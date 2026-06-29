import {
    Calendar,
    FileText,
    Monitor,
    Code2,
    BookOpen
} from "lucide-react";

import Card from "../../ui/Card";
import FileCard from "../../ui/FileCard";
import StatusBadge from "../../ui/StatusBadge";

import type { JournalLecture } from "../../../data/teaching/dbms/journal";

type Props = {

    lecture: JournalLecture;

};

export default function LectureCard({

    lecture

}: Props) {

    return (

        <Card className="p-8">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

                        {lecture.unit}

                    </span>

                    <span className="flex items-center gap-2 text-sm text-slate-500">

                        <Calendar size={15} />

                        {lecture.date}

                    </span>

                </div>

                <StatusBadge status={lecture.status} />

            </div>

            <h2 className="mt-6 text-3xl font-black">

                {lecture.title}

            </h2>

            <div className="mt-8">

                <p className="text-xs uppercase tracking-widest text-slate-500">

                    Topics Covered

                </p>

                <ul className="mt-4 space-y-3">

                    {lecture.topics.map((topic) => (

                        <li key={topic}>

                            • {topic}

                        </li>

                    ))}

                </ul>

            </div>

            <div className="mt-10">

                <p className="text-xs uppercase tracking-widest text-slate-500">

                    Learning Resources

                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                    <FileCard
                        icon={<FileText className="text-blue-600" size={22} />}
                        title="Lecture Notes"
                        subtitle="PDF Notes"
                        available={lecture.resources.notes.uploaded}
                        buttonText="Open"
                    />

                    <FileCard
                        icon={<Monitor className="text-green-600" size={22} />}
                        title="Presentation"
                        subtitle="PowerPoint Slides"
                        available={lecture.resources.slides.uploaded}
                        buttonText="Open"
                    />

                    <FileCard
                        icon={<Code2 className="text-purple-600" size={22} />}
                        title="SQL Scripts"
                        subtitle="SQL Files"
                        available={lecture.resources.code.uploaded}
                        buttonText="Open"
                    />

                    <FileCard
                        icon={<BookOpen className="text-orange-600" size={22} />}
                        title="Additional Reading"
                        subtitle="Reference Material"
                        available={lecture.resources.reading.uploaded}
                        buttonText="Open"
                    />

                </div>

            </div>

        </Card>

    );

}