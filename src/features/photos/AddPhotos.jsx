import { useState } from 'react'

const AddPhotos = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const uploadPhoto = () => {
    console.log(location);
    console.log(category);
    setLocation('');
    setCategory('');
    // todo upload photo
  }

  return (
    <div className="add-photos">
      <h2>Add photos</h2>
      <div>
        <form>
          <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
          <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
          <input type="file" />
        </form>
        <button type='submit' onClick={uploadPhoto}>Add photo</button>
      </div>
    </div>
  )
}

export default AddPhotos