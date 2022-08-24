/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { BiCommentDots, BiDotsVerticalRounded, BiSend, BiShare, BiSmile } from 'react-icons/bi'
import { FaThumbsUp } from 'react-icons/fa'
import Moment from 'react-moment'
import { getApi } from '../../contexts/apiCallMethods'
import { likePost } from '../../contexts/apiCalls'
import { useApp } from '../../contexts/AppContext'

const Post = ({post}: any) => {
    const [creator, setCreator] = React.useState<any>(null)
    const { user, authHeaders } = useApp()
    const [postData, setPostData] = React.useState<any>({likes: post.likes.length, comments: post.likes.length})

    const getCreator = async()=>{
        const data = await getApi(`api/user/${post.creatorId}`, {
            headers: authHeaders
        })
        setCreator(data)
    }

    const handleLike = async()=> {
        try {
           const res = await likePost(post._id, user._id)
           if(res.success) setPostData({...postData, likes: postData.likes + 1})
        } catch (error) {
            console.log(error);
            
        }
    }

    React.useEffect(()=>{
        getCreator();
        console.log(creator);

    },[])

  return (
    <div className='w-full mt-5 py-3 rounded-lg shadow-md border-2 bg-stone-900 border-stone-700 flex-col'>
        <div className="flex w-full px-3 items-center justify-between">
            <div className="flex items-center">
                <img className='w-[40px] h-[40px] rounded-full object-cover' src={creator?.picture} alt="" />
                <div className="flex text-sm ml-2 flex-col">
                    <p>{creator?.name}</p>
                    <Moment fromNow>{post.createdAt}</Moment>
                </div>
            </div>
            <BiDotsVerticalRounded className='text-3xl' />
        </div>
        <p className='px-2'> {post.text} </p>
        <img className='object-cover min-h-full min-w-full' src={post.pictures[0]} alt="" />
        <div className="flex mt-2 items-center justify-between px-2">
            <div className="flex items-start">
                <div className="flex items-start">
                    <FaThumbsUp onClick={handleLike} className='thumbs cursor-pointer text-xl' />
                    <span className='ml-2'>{postData?.likes}</span>
                </div>
                <div className="flex ml-2 items-start">
                    <BiCommentDots className='thumbs text-2xl' />
                    <span className='ml-2'>{postData?.comments}</span>
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