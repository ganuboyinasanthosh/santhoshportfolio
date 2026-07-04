import { motion } from "motion/react";
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { CERTIFICATIONS_DATA } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-transparent relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-card border border-brand-border rounded-full text-brand-accent text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Professional certifications from tier-1 organizations verifying modern tech readiness and proactive continuous education.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between p-6 bg-brand-card/45 backdrop-blur-xs border border-brand-border/60 rounded-2xl hover:border-brand-accent/50 hover:shadow-[0_0_24px_rgba(20,184,166,0.06)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle tech card corner light */}
              <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] rounded-full bg-brand-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border font-bold uppercase tracking-wide font-mono ${cert.badgeColor}`}>
                    {cert.organization}
                  </span>
                  <div className="p-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-brand-accent group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-accent transition-colors">
                  {cert.name}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mt-2 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Issued: {cert.issueDate}</span>
                  {cert.validUntil && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span>Expires: {cert.validUntil}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Details (ID, Link) */}
              <div className="pt-4 border-t border-[#1C2541]/70 flex flex-col gap-2.5 bg-brand-dark/20 -mx-6 -mb-6 p-6 rounded-b-2xl">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-brand-muted font-mono font-semibold uppercase tracking-wider">Credential ID</span>
                  <span className="text-slate-200 font-mono font-medium truncate max-w-[180px]" title={cert.credentialId}>
                    {cert.credentialId}
                  </span>
                </div>

                {cert.verificationLink ? (
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark text-xs font-bold rounded-lg transition-all"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#1C2541] text-brand-muted text-xs font-mono rounded-lg border border-[#1C2541]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Verified Academic Honor</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick GenAI Callout */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-4 p-6 bg-gradient-to-r from-brand-accent/5 to-brand-teal/5 border border-brand-accent/15 rounded-3xl max-w-3xl mx-auto">
          <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent shrink-0">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm sm:text-base">Focusing on Next-Gen Autonomous AI Integrations</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              My GenAI and Agentforce credentials prove that I don't just write boilerplate code. I am trained in orchestrating cloud LLMs, deploying specialized prompts, and establishing agentic automations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
