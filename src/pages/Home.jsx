import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection.jsx";
import { OnlineProjectsSection } from "../components/OnlineProjectsSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { LeafBackground } from "../components/LeafBackground.jsx";
import { LeafToggle } from "../components/LeafToggle.jsx";
import { OfflineProjectsSection } from "../components/OfflineProjectsSection.jsx";

export const Home = () => {
    return (
    <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme Toggle*/}
        <LeafToggle />
        
        
        
        {/*Background Effects*/}
        <LeafBackground />
        

        {/*Nav Bar*/}
        <Navbar />  

        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <OnlineProjectsSection />
            <OfflineProjectsSection />
            <ContactSection />
        </main>

        {/*Footer*/}
        <Footer />
    </div>
    );
};