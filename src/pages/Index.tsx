import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

