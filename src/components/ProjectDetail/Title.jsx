import React, {useRef, useEffect} from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './Portfolio.scss'
import {Fade} from 'react-reveal'

export default function Product3 ({ title, description, index, updateImage, link }) {

    const ref=useRef(null);
    const onScreen = useOnScreen(ref);

    useEffect (() => {
        if(onScreen) {
            updateImage(index);
        }

    }, [onScreen, index])

  return (
      <>
    <div ref={ref} className='product-slide'>
        <Fade left>
      <h3 className='makeup-title2'>
        {title}
      </h3>
      <p className='make-up-desc2'>
        {description}
      </p>
      </Fade>
    </div>
     </>
  )
}