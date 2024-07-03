import './App.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Sponsors from './Components/Sponsors';
import Images from './Components/Images';
import Lineup from './Components/Lineup';
import Shop from './Components/Shop';

function App() {

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
      </div>
    </BrowserRouter>
  )
}

export default App
