/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { BiX } from 'react-icons/bi'
import { getPostCommets } from '../../contexts/apiCalls'

const CommentBox = ({setShowComments, post, creator, comments, setComments}: any) => {

    const getComments = async()=>{
        const data = await getPostCommets(post._id)
        console.log(data);
        
        setComments(data)
    }

    React.useEffect(()=>{
        getComments();
    },[])

  return (
    <div 
        className='fixed flex items-center justify-center top-0 z-50 left-0 h-full w-full bg-black/70'>
        <div onClick={() => setShowComments(false)}
         className="absolute z-[51] h-full top-0 left-0 w-full"></div>
        <div className="flex z-[52] relative p-2 flex-col w-4/5 bg-stone-800 tablet:w-[500px]">
            <BiX onClick={()=> setShowComments(false)}
             className='text-2xl cursor-pointer hover:text-violet-700 absolute top-1 right-1' />
            <h2 className='text-center'>Showing comments of {creator.name}'s post</h2>
            
        </div>
    </div>
  )
}

export default CommentBox