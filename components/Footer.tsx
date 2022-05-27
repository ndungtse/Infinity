import { url } from 'inspector'
import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {


      const  git = 'https://github.com/NdungutseCharles103'
      const  fa = ''
      const  link = ''
      const  ig = ''
      const  email = ''
   

  return (
    <div className='w-full mt-11 flex items-center justify-center px-4'>
        <img className='w-[50px]' src="/images/inlogo.png" alt="" />
        <span>&copy; Charles Hazard 2022</span>
        {/* <div className="flex items-center">
            <a href={git} ref="noreferrer" className="" target="_blank">
                <FaGithub />
            </a>
            <a href={git} ref="noreferrer" className="text-2xl" target="_blank">
                <FaLinkedinIn />
            </a>
            <a href={git} ref="noreferrer" className="text-2xl" target="_blank">
                <FaInstagram />
            </a>
            <a href={git} ref="noreferrer" className="text-2xl" target="_blank">
                <FaFacebook />
            </a>
        </div> */}
    </div>
  )
}

export default Footer