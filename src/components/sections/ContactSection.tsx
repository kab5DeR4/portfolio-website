"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Copy, Check, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { contactInfo, personalInfo } from "@/data/portfolioData";

// contact section styled with jose ocando clean aesthetic
export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: contactInfo.inquiryTypes[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.inquiryType}] Inbound inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full mb-12">
      
      {/* signature divider */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Contact
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Start a Conversation
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* left column: info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#121512] leading-[1.1] mb-6">
              {contactInfo.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#4f564d] font-light leading-relaxed mb-8">
              {contactInfo.subheading}
            </p>

            {/* email copy box */}
            <div className="p-4 rounded-xl bg-[#ffffff] border border-[#e4e4dd] mb-6 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7c8279] block mb-1">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-[#121512] hover:text-[#4f564d] transition-colors truncate"
                >
                  {contactInfo.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#f0efe8] hover:bg-[#e6e5de] text-xs font-mono text-[#121512] flex items-center gap-1.5 transition-all flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-700" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={13} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#7c8279] font-mono mb-8">
              <div className="flex items-center gap-2">
                <Clock size={13} />
                <span>{contactInfo.responseTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* social channels */}
          <div className="pt-6 border-t border-[#e4e4dd]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7c8279] block mb-3">
              Social Channels
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="Twitter"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* right column: interactive form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 editorial-card p-6 sm:p-9"
        >
          {submitted ? (
            <div className="min-h-[340px] flex flex-col items-center justify-center text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-[#eef5f0] border border-[#c3dfcb] text-[#2d4a34] flex items-center justify-center mb-4">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#121512] mb-2">Message Prepared</h3>
              <p className="text-xs sm:text-sm text-[#4f564d] max-w-sm mb-6 leading-relaxed font-light">
                Your email client has been opened with your inquiry details. I will respond to your message within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-full bg-[#f0efe8] hover:bg-[#e6e5de] text-xs font-mono text-[#121512] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#4f564d] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] text-[#121512] placeholder-[#9b9e97] text-sm focus:outline-none focus:border-[#121512] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4f564d] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] text-[#121512] placeholder-[#9b9e97] text-sm focus:outline-none focus:border-[#121512] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#4f564d] mb-1.5">
                  Inquiry Nature
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] text-[#121512] text-sm focus:outline-none focus:border-[#121512] transition-all cursor-pointer"
                >
                  {contactInfo.inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#4f564d] mb-1.5">
                  Message / Project Specs *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your roadmap, engineering role, or technical problem..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] text-[#121512] placeholder-[#9b9e97] text-sm focus:outline-none focus:border-[#121512] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#121512] text-[#fbfaf5] font-medium text-xs hover:bg-[#252a24] transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send size={14} />
                <span>Send Inquiry Message</span>
              </button>

              <p className="text-[10px] font-mono text-[#7c8279] text-center">
                Direct communication · Prepared in your default mail handler
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
