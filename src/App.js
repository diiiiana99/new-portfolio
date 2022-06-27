import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Media from "./components/ProjectDetail/Media"
import CustomCursor from "./CustomCursor";







function App() {


  return (
    <div className=''>
      <Navbar />
      <CustomCursor/>
      <Home />
      <CustomCursor/>
      <Work />
      <CustomCursor/>
      <Media/>
      <CustomCursor/>
      <About />
      <CustomCursor/>
      <Skills />
      <CustomCursor/>
      <Contact />
    </div>
  );
}

export default App;
