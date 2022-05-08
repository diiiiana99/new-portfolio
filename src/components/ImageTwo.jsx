import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'


const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage='https://images.unsplash.com/photo-1629382900018-a3c7c3974f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80' strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">MY SKILLS</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo