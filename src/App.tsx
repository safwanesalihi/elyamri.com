import Navbar from './components/Navbar'
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
        <Work />
        <Services />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
