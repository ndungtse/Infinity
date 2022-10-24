import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BiLock, BiTag, BiUserCircle } from 'react-icons/bi'
import { api } from '../../contexts/apiCallMethods'
import { setCookie } from '../../contexts/utilities'
import { auth, signInWithGoogle } from '../../Firebase'
import LoadingButton from '@mui/lab/LoadingButton';
import { getRedirectResult, User, UserCredential } from 'firebase/auth'
import user from '../api/user'

const Signup = () => {
    const [data, setData] = React.useState<any>({
        email: '', name: '', password: '', })
        const router = useRouter()
    const [status, setStatus] = React.useState('') 
    const [disabled, setDisabled] = React.useState(false)
    const [user, setUser] = useState<User | null>(null)
        
    const register = async (e: any) => {
        e.preventDefault()
        setDisabled(true)
        const res = await api.post('/api/user/newUser', data)
        console.log(res)
        if (res.statusText === 'Created') {
            const res1 = await api.post('/api/user/login', {email: data.email});
            if (res1.data.message === 'Login success') {
            setCookie('token', res1.data.token, 999);
            window.location.href = '/'
            }else {
                setStatus(res1.data.message);
                setDisabled(false)
            }
        }else{
            setStatus(res.data.message);
        }
        setDisabled(false)
    }

    const continueWithGoogle = async () => {
        setDisabled(true)
        try {
            const googledata = {name: user?.displayName, email: user?.email, picture: user?.photoURL };
            const res = await api.post('/api/user/newUser/google', googledata)
            console.log(res)
            if (res.statusText === 'Created') {
                const res1 = await api.post('/api/user/login/google', {email: user?.email});
                if (res1.data.message === 'Login success') {
                setCookie('token', res1.data.token, 999);
                window.location.href = '/'
                }else {
                    setStatus(res1.data.message);
                    setDisabled(false)
                }
            }
            else{
                setStatus(res.data.message);
            }
        } catch (error: any) {
            if(error.response.data?.message === "Email already exists") {
                const res1 = await api.post('/api/user/login/google', {email: user?.email});
                console.log(res1);
                if (res1.data.message === 'Login success') {
                setCookie('token', res1.data.token, 999);
                window.location.href = '/'
                }else {
                    setStatus(res1.data.message);
                    setDisabled(false)
                }
            }
            setStatus('Something went wrong')
        }
        setDisabled(false)
    }

    useEffect(() => {
      getRedirectResult(auth)
        .then((result: UserCredential | null) => {
          if (result) {
            setUser(result.user)
          } else {
            setUser(null)
          }
        })
        .catch((error: any) => {
          setUser(null)
          console.log(error)
        })
    }, [])

    useEffect(() => {
      if (user) {
        continueWithGoogle()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

  return (
    <div className='w-full flex flex-col items-center justify-center h-screen'>
        <div
         className='w-1/3 text-white min-w-[280px] five:min-w-[400px]  max-w-[400px] flex flex-col rounded-lg bg-stone-900 p-5'>
            <form
            onSubmit={register}>
            <img className='w-1/3 mx-auto' src="/images/log.png" alt="" />            
            <h2 className='text-xl font-medium text-center'>Join the Gaming Community from around the globe</h2>
            <div className='border-2 border-stone-400 h-[40px] mt-4  flex  p-3 rounded-md flex-row-reverse items-center w-full'>
                <input
                    onChange={(e: any) => setData({ ...data, email: e.target.value })}
                 className='w-full outline-none text-lg bg-transparent input ml-2' id='email' type='email' placeholder='Email' />
                <label
                 className='text-white' htmlFor='email'><AiFillMail className='text-xl' /></label>
            </div>
            <div className='border-2 holder border-stone-400 h-[40px] mt-4  flex flex-row-reverse  p-3 rounded-md items-center w-full'>
                <input
                onChange={(e: any) => setData({ ...data, name: e.target.value })}
                 className='w-full input outline-none text-lg bg-transparent ml-2' id='name' type='text' placeholder='Names' />
                <label
                 className='text-white' htmlFor='name'><BiUserCircle className='text-2xl' /></label>
            </div>
            <div className='border-2 border-stone-400 h-[40px] mt-4  flex  p-3 rounded-md flex-row-reverse items-center w-full'>
                <input 
                onChange={(e: any) => setData({ ...data, password: e.target.value })}
                 className='w-full outline-none text-lg bg-transparent input ml-2' id='password' type='password' placeholder='Password' />
                <label 
                 className='text-white' htmlFor='password'><BiLock className='text-2xl' /></label>
            </div>
            <p className='text-center text-yellow-600'>{status}</p>
            {!disabled && <button className='w-full cursor-pointer h-[40px] mt-4  text-center text-lg flex items-center duration-500
             bg-gradient-to-r from-pink-500 to-violet-700 justify-center rounded-md'
             type="submit" disabled={disabled} >Sign Up </button>}
             </form>

             <div className="flex flex-col items-center">
                {disabled?(
                    <LoadingButton sx={{backgroundColor: '#75067f', width: '100%', marginTop: 5, paddingY: 1}} loading variant="outlined">
                    Submit
                  </LoadingButton>
                ):(<>
                <p className='text-xl my-2'>Or</p>
                <button onClick={signInWithGoogle}
                 className='bg-violet-700 p-1 h-[40px] w-full rounded-lg flex items-center justify-center'> <img className='max-h-full'
                 src="https://freesvg.org/img/1534129544.png" alt="" />
                    <p className='ml-2'>Continue with Google</p></button>
                </>)}
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