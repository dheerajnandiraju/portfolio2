import logo from './logo.svg';
import './App.css';
import {motion} from "framer-motion"
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import { useEffect, useState } from 'react';
import Achivements from './components/achivements';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  const [mousep, setmousep]=useState({x:0, y:0})


  useEffect(()=>{
const mouseMove=(e)=>{
setmousep(
  {
    x: e.clientX,
    y: e.clientY,
  }
)
}

    window.addEventListener("mousemove",mouseMove)

    return()=>{
window.removeEventListener("mousemove", mouseMove)
    }
  },[]);

  const variants={
    default:{
      x:mousep.x,
      y:mousep.y
    }
  }

  return (
    <div className='body'>
      <motion.div className='cursor'
      variants={variants}
      animate='default'
      transition={{
             duration: 0,
            delay: 0,
      }}
      />
<Navbar/>
<Home/>
<hr/>
<About/>
<hr/>
<Skills/>
<hr/>
<Achivements/>
<hr/>
<Projects/>
<hr/>
<Contact/>
    </div>
  );
}

export default App;