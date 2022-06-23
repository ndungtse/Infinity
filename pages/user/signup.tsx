import Link from 'next/link'
import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BiLock, BiTag, BiUserCircle } from 'react-icons/bi'
import { signInWithGoogle } from '../../Firebase'

const Signup = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen'>
        <div className='w-1/3 text-white min-w-[280px]  max-w-[400px] flex flex-col rounded-lg bg-slate-900 p-5'>
            <img className='w-1/3 mx-auto' src="/images/log.png" alt="" />            
            <h2 className='text-xl font-medium text-center'>Join the Gaming Community from around the globe</h2>
            <div className='border-2 border-stone-400 h-[40px] mt-4  flex  p-3 rounded-md items-center w-full'>
                <label className='text-white' htmlFor='email'><AiFillMail className='text-xl' /></label>
                <input className='w-full outline-none input text-lg bg-transparent ml-2' id='email' type='email' placeholder='Email' />
            </div>
            <div className='border-2 border-stone-400 h-[40px] mt-4  flex  p-3 rounded-md items-center w-full'>
                <label className='text-white' htmlFor='name'><BiUserCircle className='text-2xl' /></label>
                <input className='w-full outline-none input text-lg bg-transparent ml-2' id='name' type='text' placeholder='Names' />
            </div>
            {/* <div className='border-2 border-stone-400 h-[40px] mt-4  flex  p-3 rounded-md items-center w-full'>
                <label className='text-white' htmlFor='username'><BiUserCircle className='text-2xl' /></label>
                <input className='w-full outline-none input text-lg bg-transparent ml-2' id='username' type='text' placeholder='username' />
            </div> */}
            <div className='border-2 border-stone-400 h-[40px] mt-4  flex  p-3 rounded-md items-center w-full'>
                <label className='text-white' htmlFor='password'><BiLock className='text-2xl' /></label>
                <input className='w-full outline-none input text-lg bg-transparent ml-2' id='password' type='password' placeholder='Password' />
            </div>
            <input className='w-full cursor-pointer h-[40px] mt-4  text-center text-lg flex items-center duration-500
             bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-pink-800 justify-center bg-pink-500 p-3 rounded-md'
             type="subimt" value="Sign Up" />

             <div className="flex flex-col items-center">
                <p className='text-xl my-2'>Or</p>
                <button onClick={signInWithGoogle}
                 className='bg-violet-700 p-1 h-[40px] w-full rounded-lg flex items-center justify-center'> <img className='max-h-full'
                 src="https://freesvg.org/img/1534129544.png" alt="" />
                    <p className='ml-2'>Continue with Google</p></button>
                    <div className="flex mt-4 items-center">
                        <p>Already have an account?</p>
                        <p className='ml-3 text-pink-600'><Link href={`/user/login`}>Login</Link></p>
                    </div>
             </div>
        </div>
    </div>
  )
}

export default Signup