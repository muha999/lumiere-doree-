import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Catalogue from '../components/Catalogue.jsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalogue />
      </main>
    </>
  )
}
