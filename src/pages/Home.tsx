import LogoMarquee, { CLIENTS } from '../components/LogoMarquee'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Experience from '../sections/Experience'
import About from '../sections/About'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Work />
      <Services />
      <Experience />
      <About />
      <LogoMarquee label="Clients" logos={CLIENTS} duration={45} logoHeight={84} />
      <Contact />
    </>
  )
}
