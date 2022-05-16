import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'
import Tilt from "react-tilt";



const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage='https://miro.medium.com/max/1400/1*Fg8N9Q-HSxWrhgHulj_b-g.jpeg' strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">EXPLORE WHO I AM</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo