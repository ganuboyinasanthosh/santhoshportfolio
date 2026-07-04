import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles, Award, GraduationCap, MapPin, Mail, Linkedin, Github } from "lucide-react";
import { CANDIDATE_PROFILE } from "../data";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    CANDIDATE_PROFILE.title,
    "Java & Backend Developer",
    "CSE (AI) Specialization Student"
  ];

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_TIME = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && typedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      {/* Background Decorative Mesh Gradients & Engineering Graphics */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Soft Ambient Radial Orbs */}
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/6 left-1/5 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-brand-accent/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/5 right-1/5 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-brand-teal/5 blur-[120px]"
        />
        
        {/* Elegant Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] [background-size:40px_40px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a608_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        
        {/* Abstract Floating Binary / Code Strings */}
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 lg:left-24 font-mono text-[10px] sm:text-xs text-brand-accent/20 tracking-widest hidden md:block"
        >
          public class Santhosh &#123;
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-12 lg:left-32 font-mono text-[10px] sm:text-xs text-brand-teal/15 tracking-wider hidden md:block"
        >
          import java.util.*;
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-12 lg:right-28 font-mono text-[10px] sm:text-xs text-brand-accent/20 tracking-widest hidden md:block"
        >
          public static void main(String[] args)
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-8 lg:right-24 font-mono text-[10px] sm:text-xs text-brand-teal/20 tracking-wider hidden md:block"
        >
          const candidate = new AI_Specialist();
        </motion.div>

        {/* Huge Aesthetic Side Bracket graphics */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-[12vw] font-light text-slate-900 select-none opacity-30 leading-none hidden xl:block pointer-events-none">
          &#123;
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 font-mono text-[12vw] font-light text-slate-900 select-none opacity-30 leading-none hidden xl:block pointer-events-none">
          &#125;
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Certification Badge Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C2541]/80 border border-brand-accent/25 text-brand-accent text-xs font-semibold tracking-wide mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-accent" />
          <span>Oracle & Salesforce AI Certified Professional</span>
        </motion.div>

        {/* Hero Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4"
        >
          Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-teal">{CANDIDATE_PROFILE.fullName}</span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <p className="font-mono text-lg sm:text-xl md:text-2xl text-slate-300">
            &lt; <span className="text-white font-semibold">{typedText}</span>
            <span className="animate-pulse font-light text-brand-accent">|</span> &gt;
          </p>
        </motion.div>

        {/* Concise Recruiter Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10"
        >
          An aspiring Java & Backend Developer with a solid computer science base (<strong>8.15 CGPA</strong>) in CSE (Artificial Intelligence). Rapid learner certified in cloud Generative AI architectures, eager to deliver production-grade robust code.
        </motion.p>

        {/* CTA Button Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleScrollToSection("#contact")}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold rounded-xl shadow-lg shadow-brand-accent/15 transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
          >
            <span>Initiate Interview</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScrollToSection("#certifications")}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-card hover:bg-brand-card/80 border border-[#1C2541] hover:border-brand-accent/40 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Award className="w-4 h-4 text-brand-accent" />
            <span>Verify Certifications</span>
          </button>
        </motion.div>

        {/* Quick Micro-Highlight Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {/* Item 1 */}
          <div className="flex items-start gap-3.5 p-4 bg-brand-card/40 border border-[#1C2541] rounded-2xl text-left">
            <div className="p-2.5 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold font-mono">CSE Academics</p>
              <h3 className="text-lg font-bold text-white mt-0.5">8.15 Current CGPA</h3>
              <p className="text-xs text-slate-400 mt-0.5">Sri Vasavi College (JNTUK)</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3.5 p-4 bg-brand-card/40 border border-[#1C2541] rounded-2xl text-left">
            <div className="p-2.5 bg-brand-teal/10 border border-brand-teal/20 rounded-xl text-brand-teal">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold font-mono">Expert Certifications</p>
              <h3 className="text-lg font-bold text-white mt-0.5">Oracle & Salesforce</h3>
              <p className="text-xs text-slate-400 mt-0.5">GenAI & Agentforce Specialist</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3.5 p-4 bg-brand-card/40 border border-[#1C2541] rounded-2xl text-left">
            <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold font-mono">Mobility Status</p>
              <h3 className="text-lg font-bold text-white mt-0.5">Ready to Relocate</h3>
              <p className="text-xs text-slate-400 mt-0.5">Bangalore, Hyd, Pune, etc.</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Social Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center items-center gap-5 mt-10"
        >
          <a
            href={CANDIDATE_PROFILE.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-brand-accent transition-colors p-2 bg-brand-card/20 border border-[#1C2541] rounded-lg hover:border-brand-accent/30"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={CANDIDATE_PROFILE.gitHub}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-brand-accent transition-colors p-2 bg-brand-card/20 border border-[#1C2541] rounded-lg hover:border-brand-accent/30"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${CANDIDATE_PROFILE.email}`}
            className="text-slate-400 hover:text-brand-accent transition-colors p-2 bg-brand-card/20 border border-[#1C2541] rounded-lg hover:border-brand-accent/30"
            title="Email Address"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
