import Hero from '../../components/sections/Hero'
import About from '../../components/sections/About'
import Projects from '../../components/sections/Projects'
import Skills from '../../components/sections/Skills'
import Contact from '../../components/sections/Contact'
import Navigation from '../../components/ui/Navigation'

export default function Home() {
  return (
    <main className="bg-background text-primary">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}