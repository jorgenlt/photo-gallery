import { v4 as uuidv4 } from 'uuid';
import Photo from './Photo'
import { photos } from './photosList'

const Photos = () => {
  const photoElements = photos.map((photo, i) => {
    return (
      <Photo 
        key={uuidv4()} 
        img={photo} 
        i={i}
      />
    )
  })

  return(
    <>
      <ul className="photos">
        {photoElements}
        <li></li>
      </ul>
    </>
  )
}

export default Photos