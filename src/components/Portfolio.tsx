import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import { projects } from '../data/content';

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Portfolio() {
  const { ref, isInView } = useInView(0.05);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-10 lg:mb-16"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400 font-medium">Selected Work</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Projects I'm<br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">proud of.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/40 max-w-sm">
              A curated selection of recent work spanning e-commerce, brand sites, and web applications.
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 lg:mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/[0.08] border border-gray-200 dark:border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: typeof import('../data/content').projects[0]; index: number; isInView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Project Visual */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: project.pattern, backgroundSize: '20px 20px' }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Mockup window */}
        <div className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8 rounded-md sm:rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          {/* Window chrome */}
          <div className="h-5 sm:h-6 md:h-8 bg-black/30 flex items-center px-2 sm:px-3 gap-1 sm:gap-1.5">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
          </div>
          {/* Content lines */}
          <div className="p-2 sm:p-3 md:p-4 space-y-1.5 sm:space-y-2">
            <div className="h-1.5 sm:h-2 w-3/4 bg-white/10 rounded" />
            <div className="h-1.5 sm:h-2 w-1/2 bg-white/10 rounded" />
            <div className="h-6 sm:h-8 md:h-12 w-full bg-white/5 rounded mt-2 sm:mt-3" />
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
              <div className="h-5 sm:h-6 md:h-8 bg-white/5 rounded" />
              <div className="h-5 sm:h-6 md:h-8 bg-white/5 rounded" />
              <div className="h-5 sm:h-6 md:h-8 bg-white/5 rounded" />
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
          <motion.div
            initial={false}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold"
          >
            View Case Study →
          </motion.div>
        </div>

        {/* Year badge */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/30 backdrop-blur-sm text-[9px] sm:text-[10px] md:text-xs text-white/80 font-medium">
          {project.year}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.04] border-t-0 rounded-b-xl sm:rounded-b-2xl">
        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-1.5 sm:mb-2 lg:mb-3">
          <div className="min-w-0 flex-1">
            <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider text-violet-500 dark:text-violet-400 font-medium">{project.category}</span>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mt-0.5 sm:mt-1 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors truncate">
              {project.title}
            </h3>
          </div>
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-300 dark:text-white/20 group-hover:text-gray-500 dark:group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-white/40 leading-relaxed mb-2 sm:mb-3 lg:mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] md:text-xs bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-white/50 border border-gray-200 dark:border-white/[0.06]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
