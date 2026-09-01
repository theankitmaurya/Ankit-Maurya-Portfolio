import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { projectsData, Project } from '@/data/projects'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas', label: 'Full Stack / SaaS' },
] as const

type FilterId = typeof filterTabs[number]['id']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter)

  // Close modal on Escape key
  useEffect(() => {
    if (!selectedProject) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Portfolio Showcase
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <motion.h2
            {...fadeInUp}
            className="font-display text-[10vw] lg:text-section leading-none tracking-tight text-white"
          >
            FEATURED<br />PROJECTS
          </motion.h2>

          <motion.div {...fadeInUp} className="flex items-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group uppercase tracking-widest"
            >
              Explore All Projects ({projectsData.length})
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div {...fadeInUp} className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-gray-800 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              aria-pressed={activeFilter === tab.id}
              className={`px-4 py-2 text-xs md:text-sm tracking-wider uppercase transition-all duration-300 rounded-full border ${
                activeFilter === tab.id
                  ? 'bg-white text-black border-white font-medium'
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-gray-900/30 border border-gray-800/80 hover:border-gray-600 p-6 lg:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                      <Icon className="text-lg" />
                      <span className="text-xs uppercase tracking-widest text-gray-500">
                        {project.categoryLabel}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-light text-white group-hover:text-gray-200 mb-2 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4 font-mono">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] text-gray-400 border border-gray-800 rounded-full bg-black/40"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[11px] text-gray-600">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/60 text-xs text-gray-400 group-hover:text-white transition-colors">
                    <span className="uppercase tracking-wider text-[11px]">View Details</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Modal for Project Detail */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0c0c0c] border border-gray-800 p-6 md:p-10 max-w-2xl w-full relative shadow-2xl my-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 transition-colors"
                  aria-label="Close modal"
                >
                  <FiX size={20} />
                </button>

                {/* Modal Header */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">
                    {selectedProject.categoryLabel} • {selectedProject.year}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 font-mono">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Detailed Description */}
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                    Key Features & Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-gray-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-300 border border-gray-800 bg-gray-900/60 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Footer */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-800">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs uppercase tracking-wider font-medium hover:bg-gray-200 transition-colors"
                    >
                      <FiGithub size={14} /> Source Code
                    </a>
                  )}
                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 text-white text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
