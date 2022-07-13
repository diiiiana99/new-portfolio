import React, {useRef, useEffect} from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './Portfolio.scss'

export default function Product3 ({ title, description, index, updateImage, p1,p2,p3 }) {

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
      <h3 className='makeup-title2'>
        {title}
      </h3>
      <p className='make-up-desc2'>
        {description}
      </p>
      <p className='make-up-desc2'>
        {p1}
      </p>
      <p className='make-up-desc2'>
        {p2}
      </p>
      <p className='make-up-desc2'>
        {p3}
      </p>
    </div>
     </>
  )
}