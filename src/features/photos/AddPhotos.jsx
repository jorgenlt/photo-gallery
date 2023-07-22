import { useState } from 'react';
import uploadImage from '../../common/storage/uploadImage'

const AddPhotos = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleUploadImage = () => {
    uploadImage(image, location, category);
    setLocation('');
    setCategory('');
    setImage(null);
  }

  return (
    <div className="add-photos">
      <h2>Add photos</h2>

      <div>
        <form>
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
            type="file"
            onChange={e => setImage(e.target.files[0])}
          />
        </form>

        <button onClick={handleUploadImage}>Upload</button>
      </div>
    </div>
  )
}

export default AddPhotos;