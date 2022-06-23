import React from 'react'
import { signInWithGoogle } from '../Firebase'

const Test = () => {
  return (
    <div>
        <button onClick={signInWithGoogle}>sign In With google</button>
    </div>
  )
}

export default Test