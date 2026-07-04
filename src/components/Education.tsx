import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react";
import { EDUCATION_DATA } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-transparent relative border-t border-brand-border/40">
      {/* Background Graphic Crosshairs */}
      <div className="absolute top-1/2 left-4 w-6 h-6 border border-slate-700/20 rounded-full flex items-center justify-center pointer-events-none hidden xl:flex">
        <div className="w-1.5 h-1.5 bg-brand-accent/20 rounded-full" />
      </div>
      <div className="absolute top-1/2 right-4 w-6 h-6 border border-slate-700/20 rounded-full flex items-center justify-center pointer-events-none hidden xl:flex">
        <div className="w-1.5 h-1.5 bg-brand-teal/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-card border border-[#1C2541] rounded-full text-brand-accent text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Registry</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Detailed view of my ongoing formal undergraduate program in Computer Science & engineering.
          </p>
        </div>

        {/* Education Timeline/Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-6 sm:p-8 bg-[#1C2541]/30 border border-[#1C2541] rounded-3xl overflow-hidden group hover:border-brand-accent/20 transition-all duration-300"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/3 blur-2xl rounded-full group-hover:bg-brand-accent/5 transition-all" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Degree Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/15 border border-brand-accent/20 text-brand-accent rounded-2xl shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-semibold font-mono mb-2">
                      {edu.id === "edu-1" ? "Active Undergraduate" : edu.id === "edu-2" ? "Senior Secondary" : "Secondary Education"}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    {edu.branch && (
                      <p className="text-brand-accent font-semibold text-sm sm:text-base mt-1">
                        {edu.branch}
                      </p>
                    )}
                    
                    <div className="space-y-1 mt-4 text-slate-300 text-xs sm:text-sm">
                      <p className="font-medium text-white">{edu.college}</p>
                      {edu.university && <p className="text-slate-400 text-xs">{edu.university}</p>}
                      {edu.location && <p className="text-brand-muted text-xs font-mono">{edu.location}</p>}
                    </div>
                  </div>
                </div>

                {/* Timeline & Grade */}
                <div className="md:text-right flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-[#1C2541]">
                  {edu.endYear ? (
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm font-mono font-medium">
                      <Calendar className="w-4 h-4 text-brand-teal" />
                      <span>
                        {edu.startYear ? `${edu.startYear} — ${edu.endYear}` : `Completed in ${edu.endYear}`}
                        {edu.id === "edu-1" && " (Expected)"}
                      </span>
                    </div>
                  ) : null}

                  <div className="mt-0 md:mt-4 p-3 bg-brand-dark border border-[#1C2541] rounded-2xl text-center md:text-right">
                    <span className="block text-[10px] text-brand-muted uppercase tracking-wider font-semibold font-mono">
                      {edu.cgpa ? "Current Score" : "Final Score"}
                    </span>
                    {edu.cgpa ? (
                      <>
                        <span className="text-xl sm:text-2xl font-black text-brand-teal font-mono">{edu.cgpa}</span>
                        <span className="text-xs text-slate-400 font-mono"> / 10 CGPA</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl sm:text-2xl font-black text-brand-teal font-mono">{edu.marks}</span>
                        <span className="text-xs text-slate-400 font-mono"> Marks</span>
                      </>
                    )}
                  </div>
                </div>

              </div>

              {/* Honors / Accomplishments */}
              {edu.honors && (
                <div className="mt-8 pt-6 border-t border-[#1C2541]/60 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-brand-dark/20 -mx-6 sm:-mx-8 px-6 sm:px-8 py-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-bold rounded-lg uppercase tracking-wide shrink-0">
                    <Award className="w-3.5 h-3.5" />
                    <span>Academic Honors</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 font-medium">
                    <Star className="w-3.5 h-3.5 text-brand-accent fill-brand-accent/20 shrink-0" />
                    <span>{edu.honors}</span>
                  </p>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
