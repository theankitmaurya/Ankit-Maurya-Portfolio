import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiSearch, FiGithub, FiExternalLink, FiX, FiFilter } from 'react-icons/fi'
import { GrainOverlay } from '@/components/GrainOverlay'
import { projectsData, Project } from '@/data/projects'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Lock body scroll & listen for Escape key when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null)
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [selectedProject])

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <GrainOverlay />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-gray-800/60 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group uppercase tracking-widest"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
            Ankit Maurya — Projects Showcase
          </span>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Page Hero */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase block mb-3">
            Selected Works & Applications
          </span>
          <h1 className="font-display text-[12vw] md:text-section leading-none tracking-tight text-white mb-6">
            ALL PROJECTS
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
            A comprehensive archive of software projects, security tools, algorithm visualizers, and web applications built during my Computer Science journey.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 p-6 bg-gray-900/20 border border-gray-800/80"
        >
          <div>
            <span className="text-2xl md:text-3xl font-light text-white font-mono block">
              {projectsData.length}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Total Projects</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-light text-white font-mono block">
              {projectsData.filter(p => p.featured).length}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Featured Builds</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-light text-white font-mono block">
              {new Set(projectsData.map(p => p.category)).size}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Domains</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-light text-white font-mono block">
              100%
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Open Source</span>
          </div>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'saas', label: 'Full Stack / SaaS' },
              {id: 'python', label: 'Python'},
              {id: 'ai', label: 'AI'},
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 rounded-full border ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black border-white font-medium'
                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search by title or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900/40 border border-gray-800 text-white placeholder-gray-500 text-xs pl-10 pr-4 py-2.5 rounded-full focus:outline-none focus:border-gray-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <FiX size={14} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="mb-8 text-xs text-gray-500 tracking-wider uppercase font-mono">
          Showing {filteredProjects.length} of {projectsData.length} Projects
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-gray-900/20 border border-gray-800 hover:border-gray-600 p-6 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Metadata */}
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

                    {/* Title */}
                    <h2 className="text-2xl font-light text-white group-hover:text-gray-200 mb-2 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-gray-400 mb-4 font-mono">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] text-gray-400 border border-gray-800/80 rounded-full bg-black/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800/60 text-xs text-gray-400 group-hover:text-white transition-colors">
                      <span className="uppercase tracking-wider text-[11px]">View Full Details</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-800 my-8">
            <FiFilter className="mx-auto text-gray-600 mb-4" size={32} />
            <p className="text-gray-400 text-lg mb-2">No projects found matching your search</p>
            <p className="text-gray-600 text-xs uppercase tracking-wider mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="px-6 py-2.5 bg-white text-black text-xs uppercase tracking-wider font-medium hover:bg-gray-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Modal for Detailed Project View */}
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
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 transition-colors"
                  aria-label="Close modal"
                >
                  <FiX size={20} />
                </button>

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

                <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                  {selectedProject.longDescription}
                </p>

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
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/80 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Ankit Maurya. All rights reserved.</span>
          <Link to="/" className="hover:text-white transition-colors">
            Return to Portfolio Home →
          </Link>
        </div>
      </footer>
    </div>
  )
}
