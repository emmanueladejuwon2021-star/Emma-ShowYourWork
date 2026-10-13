import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 800);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050509]"
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="relative"
            >
              <span className="text-5xl sm:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-br from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                  AE
                </span>
                <span className="text-white/20">.</span>
              </span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], repeat: Infinity }}
                className="h-full w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-white/30 font-light"
            >
              Crafting experiences
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
