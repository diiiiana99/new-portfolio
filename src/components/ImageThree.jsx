import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'


const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage='https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg' strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <Fade bottom>
            <span className="img-txt">Here is what i can do</span>

            </Fade>
        
        </div>
     
    </Parallax>
);

export default ImageTwo