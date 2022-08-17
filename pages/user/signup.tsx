import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BiLock, BiTag, BiUserCircle } from 'react-icons/bi'
import { setCookie } from '../../contexts/utilities'
import { signInWithGoogle } from '../../Firebase'
// import auth from 'firebase/auth'

const Signup = () => {
    const [data, setData] = React.useState<any>({
        email: '', name: '', password: '', })
        const router = useRouter()
    const [status, setStatus] = React.useState('') 
    const [disabled, setDisabled] = React.useState(false)
        
    const register = async (e: any) => {
        e.preventDefault()
        setDisabled(true)
        const res = await axios.post('http://localhost:5000/api/user/newUser', data)
        console.log(res)
        if (res.data.statusText === 'Created') {
            router.push('/login')
        }else{
            setStatus(res.data.message);
        }
        setDisabled(false)
    }

    const continueWithGoogle = async () => {
        setDisabled(true)
        try {
            const user: any = await signInWithGoogle()
            const googledata = {name: user.user.displayName, email: user.user.email, profilePicture: user.user.photoURL };
            const res = await axios.post('http://localhost:5000/api/user/newUser/google', googledata)
            console.log(res)
            if (res.statusText === 'Created') {
                setCookie('token', user.user.accessToken, 999)   
                localStorage.setItem('user', JSON.stringify(googledata));
                window.location.replace('http://localhost:6060')
            }else{
                setStatus(res.data.message);
            }
        } catch (error) {
            console.log(error)
        }
        setDisabled(false)
    }
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen'>
        <div
         className='w-1/3 text-white min-w-[280px]  max-w-[400px] flex flex-col rounded-lg bg-slate-900 p-5'>
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
            <p className='text-center text-pink-600'>{status}</p>
            <button className='w-full cursor-pointer h-[40px] mt-4  text-center text-lg flex items-center duration-500
             bg-gradient-to-r from-pink-500 to-violet-700 justify-center rounded-md'
             type="submit" disabled={disabled} >Sign Up </button>
             </form>

             <div className="flex flex-col items-center">
                <p className='text-xl my-2'>Or</p>
                <button onClick={continueWithGoogle}
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