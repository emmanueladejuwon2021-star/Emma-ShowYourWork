import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { services } from '../data/content';

export default function Services() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="services" ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-violet-600/5 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-20"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400 font-medium">Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              What I can do<br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">for you.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/40 max-w-sm">
              End-to-end web solutions tailored to your goals. From concept to launch and beyond.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative p-5 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.01] hover:bg-gray-50 dark:hover:bg-white/[0.03] hover:border-gray-300 dark:hover:border-white/10 transition-all duration-500"
            >
              {/* Number */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 text-4xl sm:text-5xl font-bold text-gray-100 dark:text-white/[0.03] group-hover:text-gray-200 dark:group-hover:text-white/[0.06] transition-colors">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-white/40 leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.features.map(feature => (
                    <span key={feature} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-white/50 border border-gray-200 dark:border-white/[0.06] group-hover:border-gray-300 dark:group-hover:border-white/10 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-4 sm:mt-6 flex items-center gap-2 text-violet-500 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs sm:text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-white/40 mb-4">Need something specific?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all text-sm sm:text-base text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white font-medium"
          >
            Let's discuss your project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
