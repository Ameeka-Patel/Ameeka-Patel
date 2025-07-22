import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { LeafBackground } from "../components/LeafBackground.jsx";
import { LeafToggle } from "../components/LeafToggle.jsx";

export const Home = () => {
    return (
    <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme Toggle
        <ThemeToggle />*/}
        <LeafToggle />
        
        
        
        {/*Background Effects*/}
        <LeafBackground />
        

        {/*Nav Bar*/}
        <Navbar />  

        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/*Footer*/}
        <Footer />
    </div>
    );
};