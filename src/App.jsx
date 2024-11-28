import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Studies from "./sections/Studies"
// import Pricing from "./sections/Pricing"
import Projects from "./sections/Projects"
import Testimonials from "./sections/Testimonials"
// import Download from "./sections/Download"
import Tech from "./sections/Tech"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Tech />
      {/* <Studies /> */}
      {/* <Pricing /> */}
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      {/* <Download /> */}
      <Footer />
    </main>
  )
}

export default App