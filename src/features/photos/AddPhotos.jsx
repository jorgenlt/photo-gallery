import { useState } from 'react';
import uploadImage from '../../common/storage/uploadImage'
import { useSelector } from 'react-redux'

const AddPhotos = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const { darkMode } = useSelector(state => state.photos);

  const handleUploadImage = () => {
    uploadImage(image, location, category);
    setLocation('');
    setCategory('');
    setImage(null);
  }

  return (
    <div className='add-photos'>
      <div>
        <form className={darkMode ? 'dark-mode' : 'light-mode'}>
          <input 
            type="text" 
            placeholder="Location"
            value={location} 
            onChange={e => setLocation(e.target.value)} 
          />
          
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}  
          />
          
          <input 
            style={{border: 'none'}}
            type="file"
            onChange={e => setImage(e.target.files[0])}
            className={`square_btn ${darkMode ? 'dark-mode' : 'light-mode'}`}
          />
          <div>
            <button className='square_btn' onClick={handleUploadImage}>Upload</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPhotos;