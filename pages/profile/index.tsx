/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import LinearIndeterminate from '../../components/Loaders/LinearLoad'
import { useApp } from '../../contexts/AppContext'
import { useRouter } from 'next/router'
import LinearLoader from '../../components/Loaders/LinearProgress'
import ProComp from '../../components/profile/ProComp'
import { getCustom } from '../../contexts/apiCallMethods'
import Post from '../../components/Home/Post'
import PostForm from '../../components/profile/PostForm'
import AuthElement from '../../components/utils/AuthElement'

const Profile = () => {
    const { user, authHeaders, } = useApp()
    const [isLinear, setLinear] = useState<boolean>(false)
    const [isLoading, SetIsLoading] = useState(true)
    const [userPosts, setUserPosts] = useState([])
    const [showPostForm, setShowPostForm] = useState(false)

    const getUserPosts = async()=>{
        const data = await getCustom(`api/user/posts/${user._id}`, {
            headers: authHeaders
        });
        console.log(data);
      if(!data.error) setUserPosts(data.data);
    }

    const router = useRouter()
    
    useEffect(() => {
        if(user===null){
            router.push('/user/login')
        }else{
            SetIsLoading(false)
        }
        getUserPosts()
    }, [user])

  return (
    <>{!isLoading && (
    <div className="flex text-white w-full flex-col h-screen bg-stone-800">
      {isLinear&&<LinearLoader />}
      <Navbar />
      <div className="flex h-full w-full">
        {showPostForm && <PostForm setPostForm={setShowPostForm} />}
        <SideBar active='profile'  setLinear={setLinear}  />
        <div className="flex h-[92vh] overflow-auto items-center flex-col w-full bg-stone-900 text-white pt-6 xtab:p-6"> 
          <div className='xtab:w-9/12 w-[98%] overflow-auto flex flex-col'>
            <ProComp posts={userPosts} />
            <div className="flex flex-col mt-3 w-full rounded-lg bg-stone-800 p-2">
              <div className="flex w-full items-center justify-center">
                <p className=' cursor-pointer border-b-2 border-violet-800'>Posts</p>
                <p className=' cursor-pointer ml-3'>Friends</p>
                <p className=' cursor-pointer ml-3'>Games</p>
              </div>
              <div className="max-w-[600px] flex-col items-center flex mx-auto">
              <AuthElement props={{ className: 'py-1 mt-3 ml-2 px-3 bg-violet-800'}}
                 el={'button'} content="Create a Post" fn={()=>setShowPostForm(true)} />
                {userPosts.map((post: any) => (
                <div key={post._id} className="1" >
                  <Post post={post}/>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)}
    </>
  )
}

export default Profile