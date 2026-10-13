import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useActiveSection, useSmoothScroll } from '../hooks/useAnimations';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const activeSection = useActiveSection(navItems.map(n => n.id));
  const scrollTo = useSmoothScroll();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 z-[60] origin-left"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="backdrop-blur-xl bg-white/60 dark:bg-[#050509]/60 border-b border-gray-200/50 dark:border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <button
                onClick={() => scrollTo('home')}
                className="group flex items-center gap-1"
              >
                <span className="text-xl sm:text-2xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-fuchsia-400 group-hover:to-violet-400 transition-all duration-500">
                    AE
                  </span>
                  <span className="text-gray-300 dark:text-white/20">.</span>
                </span>
              </button>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gray-100 dark:bg-white/[0.06] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Right side */}
              <div className="flex items-center gap-2 sm:gap-3">
                <ThemeToggle />
                
                {/* Desktop CTA */}
                <div className="hidden lg:block">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="group relative px-5 py-2.5 text-sm font-medium overflow-hidden rounded-full"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300" />
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <span className="relative text-white">Let's Talk</span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <MobileMenuButton scrollTo={scrollTo} />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

function MobileMenuButton({ scrollTo }: { scrollTo: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="relative w-5 h-4">
          <span className={`absolute left-0 h-[1.5px] bg-gray-900 dark:bg-white transition-all duration-300 ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45 w-5' : 'top-0 w-5'}`} />
          <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-gray-900 dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0 w-0' : 'opacity-100 w-3'}`} />
          <span className={`absolute left-0 h-[1.5px] bg-gray-900 dark:bg-white transition-all duration-300 ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45 w-5' : 'bottom-0 w-4'}`} />
        </div>
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-full left-0 right-0 bg-white/95 dark:bg-[#050509]/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/[0.04] overflow-hidden"
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              onClick={() => { scrollTo(item.id); setIsOpen(false); }}
              className="text-left py-3 px-2 text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-between group"
            >
              <span>{item.label}</span>
              <span className="text-gray-300 dark:text-white/20 group-hover:text-gray-500 dark:group-hover:text-white/50 group-hover:translate-x-1 transition-all text-sm">→</span>
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => { scrollTo('contact'); setIsOpen(false); }}
            className="mt-3 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium text-sm"
          >
            Start a Project
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
