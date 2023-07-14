import Photo from './Photo'
import { useSelector } from 'react-redux'
import { selectAllPhotos } from './photosSlice';

const Photos = () => {
  const photos = useSelector(selectAllPhotos)

  const photoElements = photos.map((photo, i) => {
    return (
      <Photo 
        key={photo.id} 
        img={photo.src}
        category={photo.category}
        year={photo.year}
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