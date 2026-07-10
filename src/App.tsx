import Navbar from './components/Navbar'
import LogoMarquee, { CLIENTS } from './components/LogoMarquee'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Work from './sections/Work'
import Experience from './sections/Experience'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Work />
        <Services />
        <Experience />
        <About />
        <LogoMarquee label="Clients" logos={CLIENTS} duration={45} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
