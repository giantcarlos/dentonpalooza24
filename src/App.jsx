import './App.css'
import NavBar from './Components/NavBar';
import Sponsors from './Components/Sponsors';
import Images from './Components/Images';

function App() {

  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <Sponsors />
        <Images />
      </div>
    </>
  )
}

export default App
