import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            About Me
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <img
              src="/self.jpg"
              alt="My College Photo"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              GALGOTIAS UNIVERSITY - GREATER NOIDA, U.P.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science student at Galgotias University, currently
              tackling DSA, React, and Next.js all at once. Learning them
              side-by-side has been a game-changer, helping me truly connect the
              dots between underlying logic and front-end architecture.
            </p>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "3rd YEAR BTECH CSE STUDENT AT <br />
            <span className="text-white underline underline-offset-8">
              GALGOTIAS UNIVERSITY
            </span>
            <br />
            BUILDING SKILLS IN SOFTWARE DEVELOPMENT & ETHICAL HACKING."
          </h2>

          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            CGPA 8.19
            <br />
            5TH SEMESTER
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I focus on software development, problem solving, and cybersecurity. 
              I spend most of my time building projects, practicing DSA, and exploring 
              ethical hacking and gaming technology while constantly learning from the 
              developer community and improving my technical skills every day.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="/sample.jpg"
              alt="Magnum Photos Office"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              GREATER NOIDA - UP
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
