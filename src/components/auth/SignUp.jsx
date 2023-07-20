import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  const signUp = (e, email, password) => {
    e.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential);
        console.log(userCredential.user);

        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        // ..
      });
  }

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={signUp} >
        <input 
          type="email" 
          name="" 
          id=""
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          name="" 
          id="" 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={e => signUp(e, email, password)}
        >
          Create Account
        </button>
      </form>

    </div>
  )
}

export default SignUp
