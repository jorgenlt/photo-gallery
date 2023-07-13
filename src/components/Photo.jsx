import { useState, useEffect } from 'react'
import { getRandomElement } from '../common/utils/helperFunctions'

const Photos = props => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const body = document.body;

    if(isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen])
  
  
  return(
    <>
      <li
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay={`${getRandomElement([50, 150, 250, 350])}`}
        data-aos-duration="400"
      >
        <img 
          className='img-small' 
          src={`/${props.img}`} 
          alt={props.img} 
          id={props.id} 
          onClick={() => setIsOpen(prev => !prev)}
        />
      </li>
      {
        isOpen && 
        <div 
          className='img-modal' 
          onClick={() => setIsOpen(prev => !prev)} 
        >
            <img 
              className='img-large' 
              src={`/${props.img}`} 
              alt={props.img} 
            />
        </div>
      }
    </>
  )
}

export default Photos