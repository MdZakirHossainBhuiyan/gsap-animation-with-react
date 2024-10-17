import './App.css';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';

// GSAP plugin
import { SlowMo } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FlipPlugin from './Components/FlipPlugin';

function App() {
  const headerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(SlowMo, TextPlugin, ScrollToPlugin);

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 2, ease: SlowMo.easeOut }
    )

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 2, ease: TextPlugin.easeOut },
    )

  },[])

  const scrollToSection = (section) => {
    gsap.to(window, {duration: 2, scrollTo: section, ease: "power2"})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 ref={headerRef}>Wellcome to GSAP world</h1>
        <h1 ref={textRef}>Md Zakir Hossain Bhuiyan</h1>
        <div className='flex items-center gap-3 mt-5'>
          <button onClick={() => scrollToSection("#section1")} className=''>Home</button>
          <button onClick={() => scrollToSection("#section2")}>About</button>
          <button onClick={() => scrollToSection("#section3")}>Footer</button>
        </div>
      </header>

      <div id='section1' style={{height: "100vh", backgroundColor: "lightblue"}}>
        {/* {/ <h2>Home</h2> /} */}
        <FlipPlugin />
      </div>

      <div id='section2' style={{height: "100vh", backgroundColor: "lightgreen"}}>
        <h2>About</h2>
      </div>

      <div id='section3' style={{height: "100vh", backgroundColor: "yellow"}}>
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;