import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {
  BrowserRouter as Router,
  Switch,
 
  Route,
 
} from "react-router-dom";
// import Hero from "./components/SkinCare/Home";

import Media from "./components/ProjectDetail/Media"
import Media2 from "./components/ProjectDetail2/Media2"
import Media3 from "./components/ProjectDetail3/Media3"


import CustomCursor from "./CustomCursor";
import LandingPage from "./components/LandingPage";
import LandingPage2 from "./components/LandingPage2";







function App() {


  return (
       <Router>
    <Switch>
      <Route exact path='/'>
    <div className=''>

      <CustomCursor/>
      <Navbar />
      <Home />
      <CustomCursor/>
      <Work />
      <CustomCursor/>

      <Media/>
      <About />
      <CustomCursor/>

      <Skills />
      <CustomCursor/>

      <Contact />
      <CustomCursor/>
      
  
    </div>
    </Route>
    <Route exact path='/getFit'>
    <CustomCursor/>

      <LandingPage/>
      <Media3/>
    </Route>
    <Route exact path='/fenty'>
    <CustomCursor/>

      <LandingPage2/>
      <CustomCursor/>

      <Media2/>

    </Route>
    </Switch>
    </Router>
  );
}

export default App;
