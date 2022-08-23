import React from 'react'
import { BiCommentDots, BiDotsVerticalRounded, BiSend, BiShare, BiSmile } from 'react-icons/bi'
import { FaThumbsUp } from 'react-icons/fa'

const Post = ({post}: any) => {
    
  return (
    <div className='w-full mt-5 py-3 rounded-lg shadow-md border-2 bg-stone-900 border-stone-700 flex-col'>
        <div className="flex w-full px-3 items-center justify-between">
            <div className="flex items-center">
                <img className='w-[40px] h-[40px] rounded-full object-cover' src="/images/infinity.jpg" alt="" />
                <div className="flex ml-2 flex-col">
                    <p>Infinity</p>
                    <p>Wed 5 Jan</p>
                </div>
            </div>
            <BiDotsVerticalRounded className='text-3xl' />
        </div>
        <img className='object-cover min-h-full min-w-full' src="/images/battlefield.jpg" alt="" />
        <div className="flex mt-2 items-center justify-between px-2">
            <div className="flex items-start">
                <div className="flex items-start">
                    <FaThumbsUp className='thumbs text-xl' />
                    <span className='ml-2'>12</span>
                </div>
                <div className="flex ml-2 items-start">
                    <BiCommentDots className='thumbs text-2xl' />
                    <span className='ml-2'>12</span>
                </div>
            </div>
            <div className="flex items-start">
                <div className="flex items-start">
                    <BiShare className='thumbs text-2xl' />
                    <span className='ml-2'>12</span>
                </div>
            </div>
        </div>
        <div className="flex items-center rounded-3xl mx-auto py-1 px-2 w-[95%] bg-stone-800">
            <BiSmile className='text-2xl' />
            <textarea className='h-[40px] outline-none bg-transparent w-full ml-2' name="" id="" maxLength={700} />
            <BiSend className='text-xl ml-1' />
        </div>
    </div>
  )
}

export default Post