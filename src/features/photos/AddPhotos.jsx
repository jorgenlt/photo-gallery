import { useState } from 'react'
// import { Cloudinary } from "@cloudinary/url-gen";
import axios from 'axios';

const AddPhotos = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const cloudName = 'dpqspser3'
  // const cld = new Cloudinary({cloud: {cloudName: cloudName}}); // is this unneccessary?

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'uhel5qqu');

    axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
      .then(response => {
        console.log(`${response.status}, ${response.statusText}`);
        alert('Image was successfully uploaded.')
      })
      .catch(error => {
        console.log(error);
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