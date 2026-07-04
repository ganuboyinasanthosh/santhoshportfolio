import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-transparent relative border-t border-brand-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-card border border-[#1C2541] rounded-full text-brand-accent text-xs font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Recruiter FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Quick screening insights to address relocation, capability, and career goals immediately.
          </p>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-brand-card/25 border border-[#1C2541] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-brand-accent font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-brand-accent/25"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">{item.question}</span>
                  <div className="p-1 bg-[#1C2541] rounded-lg shrink-0 border border-[#1C2541]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-accent" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 border-t border-[#1C2541]/40 text-xs sm:text-sm text-slate-300 leading-relaxed bg-brand-dark/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
