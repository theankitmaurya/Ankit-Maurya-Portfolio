import { motion } from 'framer-motion'

const articles = [
  {
    title: 'Building Modern Web Experiences with React',
    publication: 'Frontend Development',
    year: '2026',
    link: '#',
  },
  {
    title: 'Getting Started with Ethical Hacking',
    publication: 'Cybersecurity Notes',
    year: '2026',
    link: '#',
  },
  {
    title: 'Why Problem Solving Matters in Programming',
    publication: 'DSA Journal',
    year: '2025',
    link: '#',
  },
  {
    title: 'Exploring Linux & System Fundamentals',
    publication: 'Tech Insights',
    year: '2025',
    link: '#',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Writing() {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Essays & Articles
          </span>

          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WRITING
        </motion.h2>

        {/* Articles List */}
        <div className="space-y-0">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 md:mt-2">
                    Article — {article.publication}
                  </p>
                </div>

                <span className="text-sm text-gray-600">
                  {article.year}
                </span>
              </div>
            </motion.a>
          ))}

          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
