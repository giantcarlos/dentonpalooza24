import './App.css'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Sponsors from './Components/Sponsors';
import Images from './Components/Images';
import Lineup from './Components/Lineup';
import Shop from './Components/Shop';
import Press from './Components/Press';
import Footer from './Components/Footer';
import Lenis from 'lenis'


function App() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
    requestAnimationFrame(raf)
  }

    requestAnimationFrame(raf)
  }, [])

  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <Sponsors />
        <Images />
        <Lineup />
        <Shop />
        <Press />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
