import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'


const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage='https://syscdn.systranbox.com/how-to-install-kdevelop-on-linux-mint-.jpg' strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">Here is what i can do</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo