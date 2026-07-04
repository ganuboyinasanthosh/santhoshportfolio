import { motion } from "motion/react";
import { Code, Cpu, Database, Layers, Settings, Users, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

// Icon mapping helper
const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "Code":
      return <Code className="w-5 h-5 text-brand-accent" />;
    case "Cpu":
      return <Cpu className="w-5 h-5 text-brand-teal" />;
    case "Database":
      return <Database className="w-5 h-5 text-indigo-400" />;
    case "Layers":
      return <Layers className="w-5 h-5 text-purple-400" />;
    case "Settings":
      return <Settings className="w-5 h-5 text-emerald-400" />;
    case "Users":
      return <Users className="w-5 h-5 text-pink-400" />;
    default:
      return <Code className="w-5 h-5 text-brand-accent" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent relative border-t border-brand-border/40">
      {/* Decorative mechanical axis indicators */}
      <div className="absolute right-12 top-24 w-12 h-12 border-t border-r border-slate-700/25 pointer-events-none hidden lg:block" />
      <div className="absolute left-12 bottom-24 w-12 h-12 border-b border-l border-slate-700/25 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-card border border-brand-border rounded-full text-brand-accent text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Capability Index</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical & Soft Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Structured skill sets highlighting core backend engineering capabilities, developer workflows, and interpersonal strengths.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 bg-brand-card/45 backdrop-blur-xs border border-brand-border/60 rounded-2xl hover:border-brand-accent/50 hover:shadow-[0_0_24px_rgba(20,184,166,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle tech card corner light */}
              <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] rounded-full bg-brand-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#1C2541]/50">
                  <div className="p-2 bg-[#1C2541] rounded-xl border border-[#1C2541] shadow-inner">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="font-display font-bold text-md text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group flex items-center gap-1.5 px-3 py-1.5 bg-brand-dark/45 hover:bg-brand-dark border border-[#1C2541] hover:border-brand-accent/20 rounded-xl transition-all duration-250 cursor-default"
                    >
                      <Check className="w-3 h-3 text-brand-teal opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs sm:text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Highlights Summary for Recruiters */}
        <div className="mt-12 p-5 bg-[#1C2541]/20 border border-[#1C2541]/60 rounded-2xl text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            💡 <strong>Recruiter Takeaway:</strong> Santhosh has a structured understanding of <strong>Java</strong> alongside relational databases (MySQL). He is highly disciplined in engineering methodologies like <strong>SDLC, OOPs, version control</strong>, and continuous problem-solving practice on GeeksforGeeks, CodeChef, and LeetCode.
          </p>
        </div>

      </div>
    </section>
  );
}
