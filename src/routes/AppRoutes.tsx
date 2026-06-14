import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ResearchPage from "../pages/ResearchPage";
import PublicationsPage from "../pages/PublicationsPage";
import TeachingPage from "../pages/TeachingPage";
import ContactPage from "../pages/ContactPage";
import SkillsPage from "../pages/SkillsPage";

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/research" element={<ResearchPage />} />
                <Route path="/publications" element={<PublicationsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/teaching" element={<TeachingPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </HashRouter>
    );
}