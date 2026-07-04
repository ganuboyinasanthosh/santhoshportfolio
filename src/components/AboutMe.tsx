import { motion } from "motion/react";
import { User, Target, Compass, BookOpen, Languages, Sparkles } from "lucide-react";
import { CANDIDATE_PROFILE } from "../data";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-transparent relative">
      {/* Decorative tech corners/graphics */}
      <div className="absolute left-8 bottom-12 w-32 h-32 border-b border-l border-brand-accent/10 rounded-bl-3xl pointer-events-none hidden lg:block" />
      <div className="absolute right-8 top-12 w-32 h-32 border-t border-r border-brand-teal/10 rounded-tr-3xl pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-card border border-[#1C2541] rounded-full text-brand-accent text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Candidate Dossier</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Santhosh
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Professional trajectory, technical principles, and core focus indicators.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block - Personal Statement & Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-brand-card/30 border border-[#1C2541] rounded-3xl"
          >
            <div>
              <div className="flex items-center gap-2 text-brand-accent mb-4">
                <Compass className="w-5 h-5" />
                <h3 className="font-display font-bold text-xl text-white">Professional Mission</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {CANDIDATE_PROFILE.summary}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Equipped with the foundational tenets of Object-Oriented Programming (OOPs), Data Structures and Algorithms (DSA), and Software Development Life Cycle (SDLC) processes. I prioritize code efficiency, strict type-safety, and systematic documentation.
              </p>
            </div>

            {/* Sub-Metrics Inside Statement */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#1C2541]/60">
              <div>
                <p className="text-xs text-brand-muted font-mono uppercase tracking-wide">Work Ethic</p>
                <p className="text-sm font-semibold text-white mt-1">Analytical & Consistent</p>
              </div>
              <div>
                <p className="text-xs text-brand-muted font-mono uppercase tracking-wide">Primary Target Focus</p>
                <p className="text-sm font-semibold text-white mt-1">{CANDIDATE_PROFILE.careerGoals.focus}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Career Goals, Languages & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Career Goals */}
            <div className="p-6 bg-[#1C2541]/40 border border-[#1C2541] rounded-3xl">
              <div className="flex items-center gap-2 text-brand-teal mb-3">
                <Target className="w-5 h-5" />
                <h3 className="font-display font-bold text-lg text-white">Target Career Path</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-brand-muted font-mono uppercase tracking-wide">Roles Aimed</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {CANDIDATE_PROFILE.careerGoals.targetRoles.map((role) => (
                      <span key={role} className="text-xs px-2.5 py-1 bg-brand-dark border border-[#1C2541] rounded-full text-slate-300 font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-mono uppercase tracking-wide">Aspiration Summary</p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {CANDIDATE_PROFILE.careerGoals.shortTerm}
                  </p>
                </div>
              </div>
            </div>

            {/* Languages & Hobbies */}
            <div className="p-6 bg-[#1C2541]/40 border border-[#1C2541] rounded-3xl flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-indigo-400 mb-4">
                  <Languages className="w-5 h-5" />
                  <h3 className="font-display font-bold text-lg text-white">Linguistic Proficiency</h3>
                </div>
                <div className="space-y-3 mb-6">
                  {CANDIDATE_PROFILE.languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="text-slate-400 font-mono text-xs">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C2541]/60">
                <div className="flex items-center gap-2 text-brand-accent mb-3">
                  <BookOpen className="w-4.5 h-4.5" />
                  <h4 className="font-display font-bold text-sm text-white">Hobbies & Interests</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {CANDIDATE_PROFILE.hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                        hobby.includes("Virat Kohli")
                          ? "bg-red-500/10 border-red-500/20 text-red-300 flex items-center gap-1"
                          : "bg-brand-dark/50 border-[#1C2541] text-slate-300"
                      }`}
                    >
                      {hobby.includes("Virat Kohli") && <Sparkles className="w-3 h-3 text-red-400" />}
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
