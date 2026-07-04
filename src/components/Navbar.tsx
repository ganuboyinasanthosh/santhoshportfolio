import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Mail, Phone, Code2 } from "lucide-react";
import { CANDIDATE_PROFILE } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Coding Profiles", href: "#coding-profiles" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/90 backdrop-blur-md shadow-lg border-b border-brand-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 font-display font-semibold text-lg sm:text-xl text-white tracking-tight hover:opacity-90 transition-opacity"
            >
              <span className="p-1.5 bg-brand-accent/15 rounded-lg text-brand-accent border border-brand-accent/20">
                <Code2 className="w-5 h-5" />
              </span>
              <span>
                {CANDIDATE_PROFILE.preferredName}
                <span className="text-brand-accent">.dev</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-4 py-2 font-sans text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? "text-brand-accent"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-brand-card border border-brand-accent/15 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Quick Contact CTAs */}
            <div className="flex items-center gap-3 border-l border-[#1C2541] pl-6">
              <a
                href={`mailto:${CANDIDATE_PROFILE.email}`}
                className="p-2 text-slate-300 hover:text-brand-accent hover:bg-brand-card rounded-full transition-all border border-transparent hover:border-[#1C2541]"
                title="Email Me"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
              <a
                href={`tel:${CANDIDATE_PROFILE.phone}`}
                className="p-2 text-slate-300 hover:text-brand-teal hover:bg-brand-card rounded-full transition-all border border-transparent hover:border-[#1C2541]"
                title="Call Me"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="px-4 py-2 text-xs font-semibold bg-brand-accent text-brand-dark rounded-full hover:bg-brand-accent-hover active:scale-95 transition-all shadow-md shadow-brand-accent/10"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`mailto:${CANDIDATE_PROFILE.email}`}
              className="p-1.5 text-slate-300 hover:text-brand-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-brand-card border border-[#1C2541] transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-brand-dark border-b border-[#1C2541] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                      isActive
                        ? "bg-brand-card text-brand-accent border-l-2 border-brand-accent"
                        : "text-slate-300 hover:bg-[#1C2541]/40 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-[#1C2541] mt-4 flex items-center justify-between gap-4">
                <a
                  href={`tel:${CANDIDATE_PROFILE.phone}`}
                  className="flex items-center gap-2 text-slate-300 text-sm hover:text-brand-accent"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Santhosh</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#contact");
                  }}
                  className="px-5 py-2 text-sm font-semibold bg-brand-accent text-brand-dark rounded-full hover:bg-brand-accent-hover text-center transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
