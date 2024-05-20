import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio'
import Tech from './components/Tech'
import Zinger from './components/Zinger'

function App() {


  return (
    <div className="wrapper content">
      <Header />
      <Menu />
      <Zinger />
      <Portfolio />
      <Tech />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
