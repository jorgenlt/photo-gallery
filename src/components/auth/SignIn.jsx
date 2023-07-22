import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { HiXMark } from "react-icons/hi2";


const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  const signIn = (e, email, password) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in 
        const user = userCredential.user;
        console.log(`Signed in as ${user.email}`);
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      })
  }
  

  return (
    <div className='sign-in'>
      <div className='sign-in--close' onClick={() => props.close()} >
        <HiXMark/>
      </div>
      <form onSubmit={signIn} >
        <TextField
          type="email" 
          size='small'
          label="E-mail" 
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          type="password" 
          size='small'
          label="Password" 
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <Button variant="contained" size='small' onClick={e => signIn(e, email, password)}>Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
