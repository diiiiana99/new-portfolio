import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'
import Tilt from "react-tilt";

// https://miro.medium.com/max/1400/1*Fg8N9Q-HSxWrhgHulj_b-g.jpeg

const ImageTwo = () => (
    <Parallax className='image' blur={1} bgImage='https://cdn3d.iconscout.com/3d/premium/thumb/woman-doing-online-shopping-3971985-3287020.png' strength={300} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">EXPLORE WHO I AM</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo