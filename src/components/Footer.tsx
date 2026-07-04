import { Code2, Github, Linkedin, ExternalLink, Mail } from "lucide-react";
import { CANDIDATE_PROFILE } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#060B1A] text-slate-400 py-12 border-t border-[#1C2541]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Bio Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-display font-semibold text-lg">
              <span className="p-1.5 bg-brand-accent/15 rounded-lg text-brand-accent border border-brand-accent/20">
                <Code2 className="w-5 h-5" />
              </span>
              <span>
                {CANDIDATE_PROFILE.preferredName}
                <span className="text-brand-accent">.dev</span>
              </span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-sm">
              CSE (Artificial Intelligence) undergraduate at Sri Vasavi Engineering College (JNTUK). Certified in Generative AI (Oracle) and Salesforce Agentforce.
            </p>
          </div>

          {/* Social Links Panel */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CANDIDATE_PROFILE.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-card/45 hover:bg-brand-card border border-[#1C2541] rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-brand-accent/20 transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
            
            <a
              href={CANDIDATE_PROFILE.gitHub}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-card/45 hover:bg-brand-card border border-[#1C2541] rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-brand-accent/20 transition-all"
            >
              <Github className="w-4 h-4 text-slate-100" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>

            <a
              href={CANDIDATE_PROFILE.leetCode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-card/45 hover:bg-brand-card border border-[#1C2541] rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-brand-accent/20 transition-all"
            >
              <Code2 className="w-4 h-4 text-orange-400" />
              <span>LeetCode</span>
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>

            <a
              href={CANDIDATE_PROFILE.codeChef}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-card/45 hover:bg-brand-card border border-[#1C2541] rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-brand-accent/20 transition-all"
            >
              <Code2 className="w-4 h-4 text-yellow-500" />
              <span>CodeChef</span>
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-[#1C2541]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-slate-500">
            &copy; {currentYear} Ganuboyina Santhosh. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500 flex items-center gap-1">
            <span>Built in React & Tailwind CSS</span>
            <span>•</span>
            <span className="text-slate-400 font-mono">CSE(AI) specialisation</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
