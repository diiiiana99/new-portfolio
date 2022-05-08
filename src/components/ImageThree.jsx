import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'


const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage='https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">Here is what i can do</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo