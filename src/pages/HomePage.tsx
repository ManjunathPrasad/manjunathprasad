import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import CurrentHome from "../components/home/CurrentHome";
import CurrentFocus from "../components/home/CurrentFocus";
import ResearchAgenda from "../components/home/ResearchAgenda";
import ResearchEvolution from "../components/home/ResearchEvolution";
import ResearchHighlights from "../components/home/ResearchHighlights";
import ResearchPrograms from "../components/home/ResearchPrograms";
import TeachingPreview from "../components/home/TeachingPreview";
import ProfessionalSnapshot from "../components/home/ProfessionalSnapshot";

export default function HomePage() {
    return (
        <Layout>
            <Hero />
            
            <ProfessionalSnapshot />

            <CurrentHome />

            <CurrentFocus />

            <ResearchEvolution />

            <ResearchHighlights />

            <ResearchAgenda />

            <ResearchPrograms />

            <TeachingPreview />
        </Layout>
    );
}