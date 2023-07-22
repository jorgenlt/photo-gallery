import { useState } from 'react';
import uploadImage from '../../common/storage/uploadImage'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { HiXMark } from "react-icons/hi2";



const AddPhotos = props => {
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
    <div className='add-photos'>
      <div className='add-photos--close' onClick={() => props.close()} >
        <HiXMark/>
      </div>
      <div>
        <form>
          <TextField 
            type='text'
            size='small'
            label='Location'
            variant='outlined'
            value={location}
            onChange={e => setLocation(e.target.value)} 
          />
          <TextField 
            type='text'
            size='small'
            label='Category'
            variant='outlined'
            value={category}
            onChange={e => setCategory(e.target.value)}  
          />
          <input 
            style={{border: 'none'}}
            type="file"
            onChange={e => setImage(e.target.files[0])}
          />
          <div>
            <Button 
              variant='contained'
              size='small'
              onClick={handleUploadImage}
            >
              Upload
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPhotos;