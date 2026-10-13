import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { techStack } from '../data/content';

export default function TechStack() {
  const { ref, isInView } = useInView(0.1);
  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-white/[0.04]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Tech Stack</span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-2">Tools I work with daily</h3>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-4 text-center">
                {category}
              </h4>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {techStack
                  .filter(tech => tech.category === category)
                  .map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: catIndex * 0.15 + i * 0.05 }}
                      className="group px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default"
                    >
                      <span className="text-xs sm:text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050509] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050509] to-transparent z-10" />
          <div className="flex gap-6 animate-[marquee_30s_linear_infinite]">
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="text-lg sm:text-xl font-bold text-white/[0.04] whitespace-nowrap hover:text-white/10 transition-colors">
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
