import { motion } from 'framer-motion'

const talks = [
  {
    title: 'Getting Started with Ethical Hacking',
    event: 'Cybersecurity Community',
    year: '2026',
    link: '#',
  },
  {
    title: 'Why DSA Matters for Developers',
    event: 'Coding & Problem Solving',
    year: '2026',
    link: '#',
  },
  {
    title: 'Building Modern Interfaces with React',
    event: 'Frontend Development',
    year: '2025',
    link: '#',
  },
  {
    title: 'Linux, Systems & Developer Workflow',
    event: 'Tech Learning Session',
    year: '2025',
    link: '#',
  },
  {
    title: 'Gaming Technology & Future Innovation',
    event: 'Gaming & Software Community',
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

export function Speaking() {
  return (
    <section id="speaking" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Talks & Lectures
          </span>

          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          SPEAKING
        </motion.h2>

        {/* Talks List */}
        <div className="space-y-0">
          {talks.map((talk, index) => (
            <motion.a
              key={talk.title}
              href={talk.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-800/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {talk.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 md:mt-2">
                    Session — {talk.event}
                  </p>
                </div>

                <span className="text-sm text-gray-600">
                  {talk.year}
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
