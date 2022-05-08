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
    <div>
      <CustomCursor/>
      <Navbar />
      <Home />
      <ImageOne/>
      <About />
      <ImageTwo/>
      <Skills />
      <ImageThree/>
      <Work />
      <Media/>
      <Contact />
    </div>
  );
}

export default App;
