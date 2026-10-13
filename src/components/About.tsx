import { motion } from 'framer-motion';
import { useInView, useCountUp } from '../hooks/useAnimations';
import { aboutContent } from '../data/content';

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400 font-medium">About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            The person behind<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">the pixels.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - Story */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {aboutContent.story.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`text-sm sm:text-base lg:text-lg leading-relaxed ${i === 0 ? 'text-gray-700 dark:text-white/80' : 'text-gray-600 dark:text-white/50'}`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right - Values & Stats */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/40 font-medium mb-5">Core Values</h3>
              {aboutContent.values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="group flex items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-violet-500 dark:text-violet-400 text-lg mt-0.5 group-hover:scale-110 transition-transform">{value.icon}</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-0.5">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-white/40">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {aboutContent.stats.map((stat, i) => (
                <StatCard key={i} value={stat.value} label={stat.label} isActive={isInView} delay={i * 0.1} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, isActive, delay }: { value: string; label: string; isActive: boolean; delay: number }) {
  const isNumeric = /^\d+/.test(value);
  const numericValue = isNumeric ? parseInt(value) : 0;
  const count = useCountUp(numericValue, 2000, 0, isActive && isNumeric);
  const suffix = value.replace(/^\d+/, '');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] hover:border-gray-300 dark:hover:border-white/10 transition-colors"
    >
      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-white/40 mt-1 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
