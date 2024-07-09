import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import Features from "./components/Features"
import Chips from "./components/Chips"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model />
      <Features />
      <Chips />
      <Footer />
    </main>
  )
}

export default App
