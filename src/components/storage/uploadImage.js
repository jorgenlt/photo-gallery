import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../../../firebaseConfig';

const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const uploadImage = (image, location, category) => {
  if(image) {
    // Upload file and metadata to the object 'images/${image.name}'
    const storageRef = ref(storage, `${location}--${category}--${image.name}`);
    
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

export default uploadImage;