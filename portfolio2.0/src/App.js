import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';

function App() {
  return (
    <div className='body'>
<Navbar/>
<Home/>
<hr/>
<About/>
<hr/>
<Skills/>
    </div>
  );
}

export default App;