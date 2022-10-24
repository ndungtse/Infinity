import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BiLock} from 'react-icons/bi'
import { api } from '../../contexts/apiCallMethods'
import { setCookie } from '../../contexts/utilities'
import { auth, signInWithGoogle } from '../../Firebase'
import LoadingButton from '@mui/lab/LoadingButton';
import { getRedirectResult, User, UserCredential } from 'firebase/auth'

const Login = () => {
    const [data, setData] = React.useState<any>({
        email: '', password: '', })
        const router = useRouter()
    const [status, setStatus] = React.useState('') 
    const [disabled, setDisabled] = React.useState(false);
    const [ user, setUser ] = useState<User | null>(null)

    const continueWithGoogle = async () => {
        setDisabled(true)
        try {
            const res = await api.post('/api/user/login/google', {email: user?.email});
            console.log(res)
            if (res.data.message === 'Login success') {
                setCookie('token', res.data.token, 999);
                window.location.href = '/'
            }else {
                setStatus(res.data.message);
                setDisabled(false)
            }
        } catch (error: any) {
            console.log("go", error.response.data)
            if(error.response.data.message === 'User not found') {
                const res = await api.post('/api/user/newUser/google', {email: user?.email, name: user?.displayName, picture: user?.photoURL, googleId: user?.uid});
                if (res.data.message === 'User created') {
                    const res1 = await api.post('/api/user/login/google', {email: user?.email});
                    if (res1.data.message === 'Login success') {
                        setCookie('token', res1.data.token, 999);
                        window.location.href = '/'
                        }else {
                            setStatus(res1.data.message);
                            setDisabled(false)
                        }
                }
            }else{
                setStatus("Something went wrong")
                setDisabled(false)
            }
            setDisabled(false)
        }
        
    }

    const signin = async (e: any) => {
        e.preventDefault()
        setDisabled(true)
        try {
            const res = await api.post('/api/user/login', data)
            console.log(res)
            if (res.data.message === 'Login success') {
                setCookie('token', res.data.token, 999) ;
                console.log(res.data.token);
                window.location.href = '/'
            }else{
                setStatus(res.data.message);
                setDisabled(false)
            }
        } catch (error) {
            setDisabled(false)
            setStatus("Something went wrong")
        }
        
    }

    useEffect(()=> {
        getRedirectResult(auth).then((result: UserCredential | null)=>{
            if(result){
                setUser(result.user);
            } else{
                setUser(null)
            }
        }).catch((error: any)=>{
            setUser(null)
            console.log(error);
        })
    },[])

    useEffect(()=> {
        if(user){
            continueWithGoogle()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])

  return (
    <div className='w-full flex flex-col items-center justify-center h-screen'>
        <div className='w-1/3 text-white min-w-[280px] five:min-w-[400px]  max-w-[400px] flex flex-col rounded-lg bg-stone-900 p-5'>
            <form onSubmit={signin}>
            <img className='w-1/3 mx-auto' src="/images/log.png" alt="" />
            <h2 className='text-xl font-medium text-center'>Log Into your Account</h2>
            <p className="text-center mt-2 text-yellow-500">{status}</p>
            <div className='border-2 border-stone-400 h-[40px] flex-row-reverse mt-5  flex  p-3 rounded-md items-center w-full'>
                <input onChange={(e) => setData({...data, email: e.target.value})}
                className='w-full input text-lg outline-none input bg-transparent ml-2' id='email' type='email' placeholder='Email' />
                <label className='text-white' htmlFor='email'><AiFillMail className='text-xl' /></label>
            </div>
            <div className='border-2 border-stone-400 h-[40px] flex-row-reverse mt-8  flex  p-3 rounded-md items-center w-full'>
                <input onChange={(e) => setData({...data, password: e.target.value})}
                 className='w-full input text-lg outline-none input bg-transparent ml-2' id='password' type='password' placeholder='Password' />
                <label className='text-white' htmlFor='password'><BiLock className='text-xl' /></label>
            </div>
            {!disabled &&<input className='w-full bg-gradient-to-r from-pink-500 to-violet-800 hover:bg-pink-600 duration-500 cursor-pointer h-[40px] mt-8  text-center text-lg flex items-center justify-center bg-pink-500  rounded-md'
             type="submit" onClick={signin} value="Login" disabled={disabled} />}
            </form>
             <div className="flex flex-col items-center">
                {disabled?(
                    <LoadingButton sx={{backgroundColor: '#75067f', width: '100%', marginTop: 5, paddingY: 1}} loading variant="outlined">
                    Submit
                  </LoadingButton>
                ):(<>
                <p className='text-xl my-2'>Or</p>
                <button onClick={signInWithGoogle} disabled={disabled}
                 className='bg-violet-700 p-1 h-[40px] w-full rounded-lg flex items-center justify-center'> <img className='max-h-full'
                 src="https://freesvg.org/img/1534129544.png" alt="" />
                    <p className='ml-2'>Continue with Google</p></button>
                    </> )}
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