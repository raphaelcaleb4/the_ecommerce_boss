import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className={`bg-teb-cream`}>
            <Navbar />
            <Hero />
            <AboutSection />
            <ServicesSection />
            <CaseStudiesSection />
            <CTASection />
            <Footer />

            {/* Add more sections here */}
        </main>
    )
}