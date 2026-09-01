import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Contact
          </span>

          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Informal Text */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            ALWAYS OPEN<br />
            TO TECH TALKS,<br />
            PROJECTS & IDEAS
          </h3>

          <p className="text-sm text-gray-500 tracking-widest uppercase">
            LET'S BUILD SOMETHING CREATIVE TOGETHER
          </p>
        </motion.div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Or reach me directly
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:ankitmaurya20223@gmail.com"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              ankitmaurya20223@gmail.com
            </a>

            <a
              href="https://instagram.com/theankitmaurya_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/theankitkushwaha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Ankit Maurya. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Noida / Uttar Pradesh / India
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
