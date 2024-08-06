import { FAQ } from "../components/Home/FAQ";
import { HeroSection } from "../components/Home/HeroSection";
import { ServicesSection } from "../components/Home/ServicesSection";
import { WorkflowSection } from "../components/Home/WorkflowSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <WorkflowSection />
            <ServicesSection />
            <FAQ />
        </div>
    )
}
