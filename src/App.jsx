import './App.css'
import NavBar from './Components/NavBar';
import Sponsors from './Components/Sponsors';
import Images from './Components/Images';
import Schedule from './Components/Schedule';

function App() {

  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <Sponsors />
        <Images />
        <Schedule />
      </div>
    </>
  )
}

export default App
