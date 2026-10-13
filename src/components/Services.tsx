import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { services } from '../data/content';

export default function Services() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="services" ref={ref} className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

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
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-400 font-medium">Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What I can do<br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">for you.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/40 max-w-sm">
              End-to-end web solutions tailored to your goals. From concept to launch and beyond.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500"
            >
              {/* Number */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 text-4xl sm:text-5xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-violet-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-white/40 leading-relaxed mb-5 sm:mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map(feature => (
                    <span key={feature} className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs bg-white/[0.04] text-white/50 border border-white/[0.06] group-hover:border-white/10 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
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
          <p className="text-sm sm:text-base text-white/40 mb-4">Need something specific?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all text-sm sm:text-base text-white/80 hover:text-white font-medium"
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
