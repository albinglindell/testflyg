import { useState } from 'react'
import boxBottom from "./assets/box.png"
import boxBackground from "./assets/backgroundBox.png"
import boxTop from "./assets/boxtop.png"
import adrian from "./assets/flygplan.png"
import earth from "./assets/earth.png"
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const openGift = ()=>{
    setOpen(!open)
  }
  return (
    <div className="App">
      <div className="container">
      <div className={!open ? "gift" : "gift open"}>
       <img className={!open ? "adrian" : "adrian open"} src={adrian} alt="adrian och jag" />
        <img className='earth' src={earth} alt="jorden" />
      </div>
      <div className={!open ? "box" : "box open"}>
        <img className={!open ?"boxTop":"boxTop open"} src={boxTop} alt="boxtop" />
        <img className='boxBackground' src={boxBackground} alt="boxBackground" />
        <img className='boxBottom' src={boxBottom} alt="box" />
    </div>
      </div>
     {!open && <button onClick={openGift}>Öppna present!</button>}
     <h3 className={!open ? "" : "open"}>Grattis på 30 årsdagen! <br/>Jag bjuder på flyg och hotell <br/> för vi ska till Prag!</h3>
    </div>
  )
}

export default App
