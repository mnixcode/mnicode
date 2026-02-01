import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <CtaSection />
            <Contact />
            <Footer />
        </main>
    );
}
