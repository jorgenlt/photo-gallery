import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import SignIn from './auth/SignIn';
import AddPhotos from '../features/photos/AddPhotos';

const UserOptions = () => {
  const { userSignedIn } = useSelector(state => state.photos);

  const [signInOpen, setSignInOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);

  const auth = getAuth();

  const userSignOut = () => {
    setSignInOpen(false);
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully.');
      })
      .catch(error => {
        console.log(error);
      })
  }

  const userSignIn = () => {
    setSignInOpen(prev => !prev);
  }

  return (
    <div className="user-options">
      <ul>
        {
          userSignedIn ? (
            <li onClick={userSignOut}>sign out</li>
          ) : (
            <li onClick={userSignIn}>sign in</li>
          )
        }
        {
          userSignedIn &&
          <li onClick={() => setUploadOpen(prev => !prev)}>upload photo</li>
        }
      </ul>
      
      {!userSignedIn && signInOpen && <SignIn close={() => setSignInOpen(prev => !prev)} />}
      
      {uploadOpen && <AddPhotos close={() => setUploadOpen(prev => !prev)} />}
    </div>
  )
}

export default UserOptions