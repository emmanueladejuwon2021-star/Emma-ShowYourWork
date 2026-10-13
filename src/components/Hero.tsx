import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useAnimations';
import { personalInfo } from '../data/content';

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[#050509]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs sm:text-sm text-white/60 font-medium">{personalInfo.availability}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              >
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                  {personalInfo.firstName}
                </span>
                <span className="block text-white/80">{personalInfo.lastName}</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-white/50 max-w-xl leading-relaxed"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <button
                onClick={() => scrollTo('work')}
                className="group relative px-7 py-3.5 sm:py-4 rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2 text-white font-medium text-sm sm:text-base">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="group px-7 py-3.5 sm:py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2 text-white/80 group-hover:text-white font-medium text-sm sm:text-base">
                  Get In Touch
                </span>
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 pt-4 sm:pt-6"
            >
              <div className="flex -space-x-2">
                {['🧑‍💼', '👩‍💻', '👨‍🎨', '👩‍🔬'].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-sm">
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs sm:text-sm text-white/70 font-medium">Trusted by 30+ clients</p>
                <p className="text-[10px] sm:text-xs text-white/40">across 5+ countries</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Orbiting rings */}
              <div className="absolute inset-0 rounded-full border border-white/[0.04] animate-[spin_30s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-violet-500" />
              </div>
              <div className="absolute inset-8 rounded-full border border-white/[0.04] animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-fuchsia-500" />
              </div>
              <div className="absolute inset-16 rounded-full border border-white/[0.04] animate-[spin_15s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>

              {/* Center element */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">✦</div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Craft</p>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -right-4 px-4 py-3 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10"
              >
                <p className="text-xs text-white/60">React</p>
                <p className="text-sm font-semibold text-white">Expert</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-12 -left-4 px-4 py-3 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10"
              >
                <p className="text-xs text-white/60">Projects</p>
                <p className="text-sm font-semibold text-white">50+ Done</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
