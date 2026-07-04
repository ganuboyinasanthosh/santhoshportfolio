import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import { CANDIDATE_PROFILE } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CANDIDATE_PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) {
      tempErrors.message = "Message text is required.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending message (1.2s timeout)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success indicator after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-card border border-[#1C2541] rounded-full text-brand-accent text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter Channel</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Reach out for opportunities, interview schedules, or credential queries.
          </p>
        </div>

        {/* Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Column 1: Contact Details cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="space-y-6">
              {/* Card 1: Email */}
              <div className="p-6 bg-brand-card/35 border border-[#1C2541] rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-brand-accent/15 border border-brand-accent/25 rounded-xl text-brand-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-display font-bold text-slate-100 text-sm">Direct Email</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono mt-1 break-all select-all">
                    {CANDIDATE_PROFILE.email}
                  </p>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs text-brand-accent hover:text-brand-accent-hover font-semibold transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-brand-teal" />
                        <span className="text-brand-teal">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="p-6 bg-brand-card/35 border border-[#1C2541] rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-brand-teal/15 border border-brand-teal/25 rounded-xl text-brand-teal shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-100 text-sm">Phone Line</h4>
                  <a
                    href={`tel:${CANDIDATE_PROFILE.phone}`}
                    className="block text-xs sm:text-sm text-slate-300 font-mono mt-1 hover:text-brand-teal transition-colors"
                  >
                    +91 {CANDIDATE_PROFILE.phone}
                  </a>
                  <p className="text-[10px] text-brand-muted mt-1.5 font-mono">Available for call/message screenings</p>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="p-6 bg-brand-card/35 border border-[#1C2541] rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/25 rounded-xl text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-100 text-sm">Location Base</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {CANDIDATE_PROFILE.location}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-950/30 border border-indigo-900 text-indigo-300 rounded-lg text-[10px] font-bold font-mono uppercase tracking-wide">
                    Ready to Relocate Nationwide
                  </span>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-5 bg-gradient-to-br from-brand-card/85 to-[#1C2541]/40 border border-brand-accent/15 rounded-3xl text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-teal font-semibold font-mono uppercase tracking-widest animate-pulse">
                🟢 Immediate Placement
              </span>
              <p className="text-xs text-slate-300 mt-1.5 leading-normal">
                Open to full-time roles, software engineering internships, or contract code placements immediately.
              </p>
            </div>

          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-brand-card/25 border border-[#1C2541] rounded-3xl relative">
            
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-brand-dark/95 z-20 flex flex-col items-center justify-center p-6 text-center rounded-3xl"
                >
                  <div className="p-3.5 bg-brand-teal/15 border border-brand-teal/20 text-brand-teal rounded-full mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Transmission Successful</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you for reaching out! Santhosh will analyze your message and respond directly via email or phone within 12-24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-6 py-2 bg-brand-card hover:bg-[#1C2541] border border-[#1C2541] text-slate-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-display font-bold text-lg text-white mb-2">Send Secure Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div>
                  <label htmlFor="name-input" className="block text-xs font-semibold text-slate-300 font-mono mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-2.5 bg-brand-dark/60 border ${
                      errors.name ? "border-red-500" : "border-[#1C2541]"
                    } focus:border-brand-accent rounded-xl text-white text-sm outline-none transition-colors placeholder:text-slate-500`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email-input" className="block text-xs font-semibold text-slate-300 font-mono mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className={`w-full px-4 py-2.5 bg-brand-dark/60 border ${
                      errors.email ? "border-red-500" : "border-[#1C2541]"
                    } focus:border-brand-accent rounded-xl text-white text-sm outline-none transition-colors placeholder:text-slate-500`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject-input" className="block text-xs font-semibold text-slate-300 font-mono mb-1.5">
                  Subject *
                </label>
                <input
                  id="subject-input"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Interview Screening Schedule / Role Opportunity"
                  className={`w-full px-4 py-2.5 bg-brand-dark/60 border ${
                    errors.subject ? "border-red-500" : "border-[#1C2541]"
                  } focus:border-brand-accent rounded-xl text-white text-sm outline-none transition-colors placeholder:text-slate-500`}
                />
                {errors.subject && (
                  <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message-input" className="block text-xs font-semibold text-slate-300 font-mono mb-1.5">
                  Message Body *
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail the opportunity, required stack, job description, and salary scale context..."
                  className={`w-full px-4 py-3 bg-brand-dark/60 border ${
                    errors.message ? "border-red-500" : "border-[#1C2541]"
                  } focus:border-brand-accent rounded-xl text-white text-sm outline-none transition-colors placeholder:text-slate-500 resize-none`}
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Action Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer text-sm shadow-md shadow-brand-accent/5 active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-brand-dark" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Transmitting Code Signal...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
