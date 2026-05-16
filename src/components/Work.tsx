import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'BTech CSE Student',
    company: 'Galgotias University',
    location: 'Greater Noida, India',
    period: '2024 — Present',
    description:
      'Currently pursuing Computer Science Engineering while building strong foundations in software development, DSA, and cybersecurity. Actively exploring ethical hacking, frontend development through projects and continuous learning.',
    skills: [
      'Java',
      'DSA',
      'Problem Solving',
      'Cybersecurity',
      'Ethical Hacking',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Personal Projects',
    location: 'Remote',
    period: '2024 — Present',
    description:
      'Developing responsive and modern web applications using React and Tailwind CSS. Focused on creating clean UI designs, smooth animations, and interactive user experiences inspired by modern portfolio aesthetics.',
    skills: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'UI/UX',
      'Responsive Design',
    ],
  },
  {
    title: 'Problem Solver',
    company: 'LeetCode & Coding Platforms',
    location: 'Online',
    period: '2025 — Present',
    description:
      'Regularly solving algorithmic and data structure problems to improve logical thinking and coding efficiency. Practicing arrays, linked lists, recursion, bit manipulation, and dynamic programming in Java.',
    skills: [
      'Algorithms',
      'Data Structures',
      'Java',
      'Debugging',
    ],
  },
  {
    title: 'Cybersecurity Enthusiast',
    company: 'Self Learning',
    location: 'Remote',
    period: '2026 — Present',
    description:
      'Learning ethical hacking concepts, Linux environments, networking basics, and web security fundamentals. Exploring tools and workflows used in penetration testing and vulnerability assessment.',
    skills: [
      'Linux',
      'Networking',
      'Web Security',
      'Kali Linux',
      'System Analysis',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
