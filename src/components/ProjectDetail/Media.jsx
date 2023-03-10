import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import fakeData from '../../utils/data1'
import cn from 'classnames'
import Title from './Title'
import {gsap} from 'gsap'


function RenderImages2({product}) {
    return fakeData.map(({url}, index)=> (

        <img className={cn({"as-primar" : product === index})}
        key={url}
        style={{backgroundImage: `url(${url})`}}
         alt=''
        
        />
    
    ));
}

export default function SingleProduct2 () {

const [product, setProduct] = useState(0);
const titleSliderRef = useRef(null);
const imageSliderRef= useRef(null);

useEffect(() => {
    function stopTrigger(){

        const timeline= gsap.timeline({
            scrollTrigger: {
                trigger: imageSliderRef.current,
                start: "top top",
                end: () => `+=${titleSliderRef.current.offsetHeight}`,
                scrub: true,
                pin: true
                    }
        })
            return timeline;

       
    }
        const master = gsap.timeline();
        master.add(stopTrigger());
    
}, [])



  return (
      <div className='body'>
    <div ref={titleSliderRef} className='single-item-container'>
        <div className='item-desc-left'>

            {fakeData.map((slide, index) => (
                <Title
                updateImage={setProduct}
                key={index}
                link={slide.link}
                title={slide.title}
                description={slide.description}
                p1={slide.p1}
                p2={slide.p2}
                p3={slide.p3}

                index={index}
                
                />
            ))}
        </div>
        <div ref={imageSliderRef} className='item-img-right sticky'>
        <RenderImages2  product={product}/>
        </div>
    </div>
    </div>
  )
};