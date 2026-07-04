import { motion } from "motion/react";
import { Terminal, Code2, Github, ExternalLink, Activity, Trophy } from "lucide-react";
import { CODING_PROFILES_DATA } from "../data";

const getPlatformIcon = (name: string) => {
  switch (name) {
    case "LeetCode":
      return <Code2 className="w-6 h-6 text-orange-400" />;
    case "CodeChef":
      return <Terminal className="w-6 h-6 text-yellow-500" />;
    case "GitHub":
      return <Github className="w-6 h-6 text-slate-100" />;
    default:
      return <Code2 className="w-6 h-6 text-brand-accent" />;
  }
};

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 bg-transparent relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-card border border-brand-border rounded-full text-brand-accent text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Problem Solving Indices</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Coding Profiles & Continuous Practice
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Where I actively train. Direct links to verify problem-solving metrics, logic consistency, and git version history.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CODING_PROFILES_DATA.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="group relative p-6 bg-brand-card/45 backdrop-blur-xs border border-brand-border/60 rounded-2xl flex flex-col justify-between hover:border-brand-accent/50 hover:shadow-[0_0_24px_rgba(20,184,166,0.06)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle tech card corner light */}
              <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] rounded-full bg-brand-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-brand-border/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-dark rounded-xl border border-brand-border group-hover:bg-brand-card transition-colors">
                      {getPlatformIcon(profile.platform)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-md text-white">
                        {profile.platform}
                      </h3>
                      <p className="text-xs text-brand-muted font-mono mt-0.5">
                        @{profile.username}
                      </p>
                    </div>
                  </div>
                  <Activity className="w-4.5 h-4.5 text-brand-teal/50 group-hover:text-brand-teal group-hover:animate-pulse transition-colors" />
                </div>

                {/* Metric Display */}
                <div className="mb-4 bg-brand-dark/40 border border-[#1C2541]/60 p-3 rounded-xl">
                  <span className="block text-[10px] text-brand-muted uppercase tracking-wider font-semibold font-mono">
                    {profile.metricLabel}
                  </span>
                  <span className="text-md font-bold text-brand-teal font-mono mt-0.5 inline-block">
                    {profile.metricValue}
                  </span>
                </div>

                {/* Highlight text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {profile.highlightText}
                </p>
              </div>

              {/* Action Trigger */}
              <a
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-dark border border-[#1C2541] hover:bg-[#1C2541] hover:border-brand-accent/30 text-white text-xs font-semibold rounded-xl transition-all group-hover:shadow-md active:scale-95"
              >
                <span>Inspect Handle</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Practice Philosophy */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-xs text-brand-muted italic leading-relaxed">
            * Note: Handles are actively managed. Exercises are conducted regularly to master advanced recursion, dynamic programming, sorting structures, and graph searches.
          </p>
        </div>

      </div>
    </section>
  );
}
