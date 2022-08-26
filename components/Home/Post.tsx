/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { BiCommentDots, BiDotsVerticalRounded, BiSend, BiShare, BiSmile } from 'react-icons/bi'
import { FaThumbsUp } from 'react-icons/fa'
import Moment from 'react-moment'
import { getApi } from '../../contexts/apiCallMethods'
import { likePost } from '../../contexts/apiCalls'
import { useApp } from '../../contexts/AppContext'
import CommentBox from './commentBox'

const Post = ({post}: any) => {
    const [creator, setCreator] = React.useState<any>(null)
    const { user, authHeaders } = useApp()
    const [postData, setPostData] = React.useState<any>({likes: {state: false, count:post.likes.length}, comments: post.comments.length})
    const [liked, setLiked] = React.useState<boolean>(false)
    const [showComments, setShowComments] = React.useState<boolean>(false)
    const [comments, setComments] = React.useState<any>(post.comments)

    const getCreator = async()=>{
        const data = await getApi(`api/user/${post.creatorId}`, {
            headers: authHeaders
        })
        setCreator(data.data)
    }

    const handleLike = async()=> {
        const {likes: { state, count }} = postData
        setLiked(!liked)
        try {
           const res = await likePost(post._id, user._id)
           console.log(res);
           if(res.success) setPostData({...postData, likes:{ state: !state, count: state? count - 1 : count + 1 }})
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
        {showComments && <CommentBox setShowComments={setShowComments} post={post} creator={creator} comments={comments} setComments={setComments} />}
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
        <div className="flex mt-2 items-center justify-between px-3">
            <div className="flex items-start">
                <div className="flex items-start">
                    <FaThumbsUp onClick={handleLike} className={`thumbs cursor-pointer ${liked && 'text-violet-600'} text-xl`} />
                    <span className='ml-2'>{postData.likes.count}</span>
                </div>
                <div className="flex ml-2 items-start">
                    <BiCommentDots onClick={()=> setShowComments(true)}
                     className='thumbs text-2xl cursor-pointer ' />
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
        <div className="flex items-center rounded-3xl mt-2 mx-auto py-1 px-2 w-[95%] bg-stone-800">
            <BiSmile className='text-2xl' />
            <textarea className='h-[40px] outline-none bg-transparent w-full ml-2' name="" id="" maxLength={700} />
            <BiSend className='text-xl ml-1' />
        </div>
    </div>
  )
}

export default Post