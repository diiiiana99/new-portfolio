import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'


const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage='https://images.unsplash.com/photo-1622937309508-db3273465d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">EXPLORE WHO I AM</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo