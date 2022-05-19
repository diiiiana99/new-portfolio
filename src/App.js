import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Media from "./components/ProjectDetail/Media"
import CustomCursor from "./CustomCursor";
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'






function App() {


  return (
    <div className=''>
      <CustomCursor/>
      <Navbar />
      <Home />
      <ImageThree/>
      <Work />
      <Media/>
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
