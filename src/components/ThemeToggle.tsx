import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
    >
      <div className="relative w-5 h-5 sm:w-[22px] sm:h-[22px]">
        {/* Sun */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-amber-500"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </motion.div>

        {/* Moon */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-violet-400"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        initial={false}
        animate={{
          opacity: isDark ? 0.3 : 0.4,
          scale: isDark ? 1 : 1.2,
        }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 rounded-full blur-lg -z-10 ${
          isDark ? 'bg-violet-500/30' : 'bg-amber-400/40'
        }`}
      />
    </button>
  );
}
