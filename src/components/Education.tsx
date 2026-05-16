import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Background
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* University */}
        <div className="space-y-16 lg:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/college.jpg"
                alt="University Campus"
                className="w-full h-auto"
              />

              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                GREATER NOIDA / INDIA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  BTech in Computer Science Engineering
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Currently pursuing Computer Science Engineering while building a
                  strong foundation in software development, data structures,
                  algorithms, and cybersecurity. My journey focuses on combining
                  technical problem solving with creativity through development
                  projects and modern technologies.
                </p>

                <p className="text-sm text-gray-500">
                  2024 — Present · CGPA 7.8
                </p>
              </div>
            </motion.div>
          </div>

          {/* Cybersecurity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Ethical Hacking & Cybersecurity
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Alongside academics, I actively explore ethical hacking,
                  networking, Linux systems, and web security fundamentals.
                  I enjoy understanding how systems work internally and learning
                  practical cybersecurity concepts through hands-on practice.
                </p>

                <p className="text-sm text-gray-500">
                  Self Learning · 2025 — Present
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="/cyber.jpg"
                alt="Cybersecurity"
                className="w-full h-auto"
              />

              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                CYBERSECURITY / LINUX / NETWORKING
              </p>
            </motion.div>
          </div>

          {/* Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/programming.jpg"
                alt="Programming Setup"
                className="w-full h-auto"
              />

              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                SOFTWARE DEVELOPMENT / FRONTEND
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Development & Problem Solving
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  I regularly work on frontend projects, Java programming,
                  and DSA practice to strengthen my development skills.
                  Exploring React, Tailwind CSS, and modern UI design helps me
                  merge logic with creativity while building real-world projects.
                </p>

                <p className="text-sm text-gray-500">
                  React · Java · DSA · Projects
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
