import React from 'react'
import {FaFacebook, FaFacebookF, FaFacebookSquare, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-between px-4'>
        <img className='w-[100px]' src="/images/inlogo.png" alt="" />
        <span>&copy; Charles Hazard 2022</span>
        <div className="flex items-center">
            <a href="" ref="noreferrer" className="" target="_blank">
                <FaGithub />
            </a>
            <a href="" ref="noreferrer" className="text-2xl" target="_blank">
                <FaLinkedinIn />
            </a>
            <a href="" ref="noreferrer" className="text-2xl" target="_blank">
                <FaInstagram />
            </a>
            <a href="" ref="noreferrer" className="text-2xl" target="_blank">
                <FaFacebook />
            </a>
        </div>
    </div>
  )
}

export default Footer