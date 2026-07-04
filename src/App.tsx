import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackgroundGraphics from "./components/BackgroundGraphics";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "education",
        "certifications",
        "coding-profiles",
        "faq",
        "contact"
      ];
      
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once initially to set correct active state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col justify-between selection:bg-brand-accent selection:text-brand-dark relative">
      {/* Immersive Background Graphic elements */}
      <BackgroundGraphics />

      {/* Dynamic Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Structured Portfolio Layout */}
      <main className="flex-grow relative z-10">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Education />
        <Certifications />
        <CodingProfiles />
        <FAQSection />
        <ContactForm />
      </main>

      {/* Branding Footer */}
      <Footer />
    </div>
  );
}
