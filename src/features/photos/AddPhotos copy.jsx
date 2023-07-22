import { useState } from 'react'
import axios from 'axios';

const AddPhotos = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const cloudName = 'dpqspser3';
  // const apiKey = import.meta.env.VITE_API_KEY; 
  // const apiSecret = import.meta.env.VITE_API_SECRET;

  const uploadImage = () => {
    const uploadOptions = { tags: ['photo-gallery', location, category] };
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'uhel5qqu');

    axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData,
      { params: uploadOptions }
      )
      .then(response => {
        console.log(`${response.status}, ${response.statusText}`);
        console.log(response);
        alert('Image was successfully uploaded.')
      })
      .catch(error => {
        console.error(error);
      })
    
    setImage('');
    setLocation('');
    setCategory('');
  }  

  return (
    <div className="add-photos">
      <h2>Add photos</h2>
      <div>
        <form>
          <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
          <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
          <input type="file" onChange={e => setImage(e.target.files[0])}/>
        </form>
        <button type='submit' onClick={uploadImage}>Upload</button>
      </div>
    </div>
  )
}


export default AddPhotos