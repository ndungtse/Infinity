import { useRouter } from 'next/router'
import React from 'react'
import { HTMLAttributes } from 'react'
import { BiX } from 'react-icons/bi'
import { useApp } from '../../contexts/AppContext'

interface Props extends HTMLAttributes<any> {
    el: any,
    props?: HTMLAttributes<any>,
    fn?: ()=>void,
    content?: string | React.ReactNode | number | HTMLElement | null,
}

const AuthElement = ({el, content, props, fn}: Props) => {
    const { user } = useApp()
    const [ strict, setStrict ] = React.useState(false)
    const router  = useRouter()
    
    const handleClick = () => {
        if(!user){ 
         setStrict(true)
         return
        }
        else 
        if(fn) {
            fn()
        }
    }
    const element = React.createElement(el, {...props, onClick: handleClick}, content)
  return (
    <>
    {element}
    {strict &&<div
        className="flex fixed bottom-0 left-0 top-0 w-full z-[50] bg-black/50 flex-col justify-center items-center h-screen">
            <div onClick={()=> setStrict(false)}  className='absolute h-full top-0 left-0 w-full z-[51]'></div>
        <div className="flex z-[52] relative p-2 flex-col w-4/5 bg-stone-800 tablet:w-[500px]">
            <BiX onClick={()=> setStrict(false)}
             className='text-2xl cursor-pointer hover:text-violet-700 absolute top-1 right-1' />
            <h1 className="text-xl text-center">You'll need to be logged in to do this</h1>
            <p onClick={()=> router.push('user/login')} 
             className="text-center mx-auto text-blue-500">Login</p>
        </div>
    </div>
    }
    </>
  )
}

export default AuthElement