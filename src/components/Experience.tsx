import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { experience } from '../data/content';

export default function Experience() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 lg:py-36 overflow-hidden border-y border-gray-200 dark:border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-600/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400 font-medium">Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            My professional<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">path so far.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-violet-500/50 via-fuchsia-500/30 to-transparent" />

          {/* Items */}
          <div className="space-y-8 sm:space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[11px] sm:left-[19px] top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white dark:bg-[#050509] border-2 border-violet-500" />

                {/* Content */}
                <div className="group">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-violet-500 dark:text-violet-400/80 font-medium">{item.year}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">{item.role}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-white/50 mt-0.5">{item.company}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-white/30 mt-2 sm:mt-3 leading-relaxed max-w-xl">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
