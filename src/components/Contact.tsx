import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import { personalInfo, socialLinks } from '../data/content';

export default function Contact() {
  const { ref, isInView } = useInView(0.05);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400 font-medium">Contact</span>
            <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-violet-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Let's create something<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">remarkable together.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-white/40 mt-3 sm:mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's talk about how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/40 font-medium">Get in touch</h3>
              {[
                { label: 'Email', value: personalInfo.email, icon: '✉' },
                { label: 'Phone', value: personalInfo.phone, icon: '☎' },
                { label: 'Location', value: personalInfo.location, icon: '◎' },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] flex items-center justify-center text-violet-500 dark:text-violet-400 group-hover:border-violet-300 dark:group-hover:border-violet-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/30">{item.label}</p>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white/80 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/40 font-medium">Follow along</h3>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all"
                  >
                    <span className="text-sm text-gray-600 dark:text-white/40 group-hover:text-gray-900 dark:group-hover:text-violet-400 transition-colors">{social.name}</span>
                    <svg className="w-3 h-3 text-gray-300 dark:text-white/20 group-hover:text-gray-500 dark:group-hover:text-white/60 group-hover:translate-x-0.5 transition-all ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-600/10 dark:to-fuchsia-600/10 border border-violet-200 dark:border-violet-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Currently Available</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-white/50">
                Open for freelance projects and collaborations. Let's build something great.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.01] space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                <FormField
                  label="Name"
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(v) => setFormState({ ...formState, name: v })}
                />
                <FormField
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(v) => setFormState({ ...formState, email: v })}
                />
              </div>
              <FormField
                label="Message"
                type="textarea"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(v) => setFormState({ ...formState, message: v })}
              />

              <button
                type="submit"
                className="group relative w-full py-3.5 sm:py-4 rounded-xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2 text-white font-medium text-sm sm:text-base">
                  {isSubmitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              <p className="text-[10px] sm:text-xs text-gray-400 dark:text-white/20 text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, type, placeholder, value, onChange }: {
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const baseClasses = "w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white dark:focus:bg-white/[0.05] transition-all";

  return (
    <div>
      <label className="block text-[10px] sm:text-xs text-gray-500 dark:text-white/40 mb-1.5 sm:mb-2 uppercase tracking-wider">{label}</label>
      {type === 'textarea' ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
        />
      )}
    </div>
  );
}
