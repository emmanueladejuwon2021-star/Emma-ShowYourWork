import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/[0.04] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-50 dark:from-violet-600/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-3 sm:mb-4">
              <span className="bg-gradient-to-br from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                AE
              </span>
              <span className="text-gray-300 dark:text-white/20">.</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-white/40 leading-relaxed max-w-xs">
              Web developer crafting digital experiences with care, precision, and a touch of magic.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/40 font-medium mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Work', 'Services', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-xs sm:text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/40 font-medium mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Design', 'Development', 'E-Commerce', 'Brand Sites', 'Consulting'].map(item => (
                <li key={item}>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/40 font-medium mb-3 sm:mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors">Dribbble</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-gray-200 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-white/30 text-center sm:text-left">
            © {currentYear} {personalInfo.name}. Crafted with intention.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-white/30 hover:text-gray-700 dark:hover:text-white/60 transition-colors"
          >
            <span>Back to top</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Large decorative text */}
      <div className="relative overflow-hidden py-4 sm:py-6">
        <motion.div
          initial={{ x: '10%' }}
          animate={{ x: '-10%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap text-[8vw] sm:text-[6vw] font-bold text-gray-100 dark:text-white/[0.015] leading-none"
        >
          ADEJUWON EMMANUEL • WEB DEVELOPER • CRAFTING DIGITAL EXPERIENCES • ADEJUWON EMMANUEL • WEB DEVELOPER •
        </motion.div>
      </div>
    </footer>
  );
}
