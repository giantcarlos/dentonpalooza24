import './App.css'
import NavBar from './Components/NavBar';

function App() {

  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <div className="image-grid">
          <a href='http://recycledbooks.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/6F5XWoE.png"} alt='logo of Recycled Books' /></a>
          <a href='https://www.morefuncomicsandgames.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/k8Vheyt.png"} alt='logo of More Fun Comics and Games' /></a>
          <a href='https://orbitpressusa.com/' target="_blank"><img src={"https://i.imgur.com/FzRrdWC.png"} alt='logo of Orbit' /></a>
          <a href='https://www.littleguys.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/24seD6Q.png"} alt='logo of Little Guys Movers' /></a>
          <a href='https://www.barnhartsbarbershop.com/' className='image-gray' target="_blank"><img src={"https://i.imgur.com/nJXwjip.png"} alt='logo of Barnharts Barbershop' /></a>
          <a href='https://www.tenonecheese.com/' className='image-reverse-gray-bright' target="_blank"><img src={"https://static.wixstatic.com/media/8b7170_ee1b95bd9d0047f09d70ec2a56418d82~mv2_d_1962_2025_s_2.png/v1/crop/x_311,y_347,w_1341,h_1328/fill/w_382,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10-1_NW_2.png"} alt='logo of Ten One Cheese' /></a>
          <a href='https://oakstreetdrafthouse.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/L1Jf7L6.png"} alt='logo of Oak Street Drafthouse' /></a>
          <a href='https://www.eastsidedtx.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/CWrmgQg.jpg"} alt='logo of Eastside' /></a>
          <a href='https://www.missangelinesdenton.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/GBB5S1l.png"} alt='logo of Miss Angelines' /></a>
          <a href='https://rubberglovesdenton.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/6ZhmD7H.png"} alt='logo of Rubber Gloves' /></a>
          <a href='https://danssilverleaf.com/' target="_blank"><img src={"https://i.imgur.com/jHoY46F.png"} alt='logo of Dans Silverleaf' /></a>
          <div className="message">A big thanks to our sponsors!</div>
      </div>
        <img src={'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F14e20fb0-b515-4cb2-99a7-1c1b3d9bab1a_5521x3681.jpeg'} className="bg-image" alt="background"/>
      </div>
    </>
  )
}

export default App
