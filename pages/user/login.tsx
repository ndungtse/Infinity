import Link from 'next/link'
import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BiLock} from 'react-icons/bi'
import { signInWithGoogle } from '../../Firebase'

const Login = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen'>
        <div className='w-1/3 text-white min-w-[280px]  max-w-[400px] flex flex-col rounded-lg bg-slate-900 p-5'>
            <img className='w-1/3 mx-auto' src="/images/log.png" alt="" />
            <h2 className='text-xl font-medium text-center'>Log Into your Account</h2>
            <div className='border-2 border-stone-400 h-[40px] mt-8  flex  p-3 rounded-md items-center w-full'>
                <label className='text-white' htmlFor='email'><AiFillMail className='text-xl' /></label>
                <input className='w-full outline-none input bg-transparent ml-2' id='email' type='email' placeholder='Email' />
            </div>
            <div className='border-2 border-stone-400 h-[40px] mt-8  flex  p-3 rounded-md items-center w-full'>
                <label className='text-white' htmlFor='password'><BiLock className='text-xl' /></label>
                <input className='w-full outline-none input bg-transparent ml-2' id='password' type='password' placeholder='Password' />
            </div>
            <input className='w-full bg-gradient-to-r from-pink-500 to-violet-800 hover:bg-pink-600 duration-500 cursor-pointer h-[40px] mt-8  text-center text-lg flex items-center justify-center bg-pink-500 p-3 rounded-md'
             type="subimt" value="Login" />

             <div className="flex flex-col items-center">
                <p className='text-xl my-2'>Or</p>
                <button onClick={signInWithGoogle}
                 className='bg-violet-700 p-1 h-[40px] w-full rounded-lg flex items-center justify-center'> <img className='max-h-full'
                 src="https://freesvg.org/img/1534129544.png" alt="" />
                    <p className='ml-2'>Continue with Google</p></button>
                    <div className="flex mt-4 items-center">
                        <p>Already have an account?</p>
                        <p className='ml-3 text-pink-600'><Link href={`/user/signup`}>Signup</Link></p>
                    </div>
             </div>
        </div>
    </div>
  )
}

export default Login