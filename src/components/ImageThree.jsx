import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'
import pic from '../assets/pr.png'


const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={pic} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">Here is what i can do</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo