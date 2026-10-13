import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { testimonials } from '../data/content';

export default function Testimonials() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="testimonials" ref={ref} className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
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
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400 font-medium">Testimonials</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Kind words from<br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">great people.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/40 max-w-sm">
              Feedback from clients who trusted me with their vision.
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.01] hover:bg-gray-50 dark:hover:bg-white/[0.03] hover:border-gray-300 dark:hover:border-white/10 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 sm:top-6 sm:right-6 text-4xl sm:text-5xl text-gray-100 dark:text-white/[0.04] font-serif leading-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4 sm:mb-5">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-white/60 leading-relaxed mb-5 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-500/20 dark:to-fuchsia-500/20 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700 dark:text-white/80">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-white/40">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
