import { url } from 'inspector'
import React from 'react'
import { BiEnvelopeOpen, BiGlobe } from 'react-icons/bi'
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaGithubSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  const git = 'https://github.com/NdungutseCharles103'
  const fa = ''
  const link = ''
  const ig = ''
  const email = ''

  return (
    <div className="mt-11 flex w-full items-center justify-center px-4">
      <img className="w-[50px]" src="/images/inlogo.png" alt="" />
      <span>&copy; Charles Hazard 2022</span>
      <div className="flex items-center">
        <a
          className="flex items-center px-2"
          href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          className="flex items-center px-2"
          href="https://github.com/NdungutseCharles103"
          target="_blank"
          rel="no-referrer noreferrer"
        >
          <FaGithubSquare className="text-xl" />
        </a>
        <a
          className="flex items-center px-2"
          href="https://www.facebook.com/ishimwendungutsecharles"
          target="_blank"
          rel="no-referrer noreferrer"
        >
          <FaFacebookSquare className="text-xl" />
        </a>
        <a
          className="flex items-center px-2"
          href="https://www.instagram.com/ndungutse_charles/"
          target="_blank"
          rel="no-referrer noreferrer"
        >
          <FaInstagramSquare className="text-xl" />
        </a>
        <a
          className="flex items-center px-2"
          href="mailto:ndungutsecharles103@gmail.com"
          target="_blank"
          rel="no-referrer noreferrer"
        >
          <BiEnvelopeOpen className="text-xl" />
        </a>
        <a
          className="flex items-center px-2"
          href="https://www.ndungutsecharles.me"
          target="_blank"
          rel="no-referrer noreferrer"
        >
          <BiGlobe className="text-xl" />
        </a>
      </div>
    </div>
  )
}

export default Footer
