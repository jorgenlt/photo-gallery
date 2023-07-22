import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../../../firebaseConfig';

const AddPhotos = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Storage and get a reference to the service
  const storage = getStorage(app);

  const uploadImage = () => {
    if(image) {
      // Upload file and metadata to the object 'images/${image.name}'
      const storageRef = ref(storage, image.name);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on('state_changed', 
        (snapshot) => {
          // Get task progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          // Handle errors
          console.log(error);
        }, 
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
      );
    }
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

        <button onClick={uploadImage}>Upload</button>
      </div>
    </div>
  )
}

export default AddPhotos;