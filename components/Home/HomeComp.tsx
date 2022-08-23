/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePosts } from '../../contexts/PostContext'
import Footer from '../Footer'
import CardLoader from '../Loaders/CardLoader'
import PostForm from '../profile/PostForm'
import Suggested from '../profile/Suggested'
import AuthElement from '../utils/AuthElement'
import Feed from './Feed'
import GameCard from './GameCard'
import Post from './Post'
import Stores from './Store'

interface Props {
  gameData: any,
  loading: boolean
}

const HomeComp: React.FC <Props> = ({gameData, loading}) => {
  const newest: object[] = gameData.results.slice(0, 4)
  const featured: object[]= gameData.results.slice(10, 18)
  const [showPostForm, setPostForm] = React.useState(false)
  const { posts, getPosts } = usePosts()

  useEffect(() => {
     if(posts.length === 0) getPosts()
  }, [])

  const introImg = ['https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg',
                  'images/battlefield.jpg']

  return (
    <div className='w-full text-white flex h-full xtab:px-6 pt-6 bg-stone-900'>
        {showPostForm? <PostForm setPostForm={setPostForm} />:null}
        <div className="flex flex-col relative w-full h-[88vh] overflow-auto">
            <div className="flex relative w-full h-[30vh] rounded-xl">
                <img
                 className='object-cover rounded-xl min-h-full min-w-full '
                 src={introImg[Math.floor(Math.random()*introImg.length)]} alt="" />
                 <div className="absolute top-9 left-5">
                    <p>GET ALL GAMES HERE</p>
                    <h1 className="text-2xl mt-3">Games are games, Games are infinity. Just Play</h1>
                    <button className='px-3 py-2 mt-5 bg-violet-600 rounded-lg'>Start Now</button>
                 </div>
            </div>
            <h2 className="ml-2 text-xl font-bold mt-3">Recommended</h2>
            {loading? <CardLoader />:(
              <>
            <div className="grid gap-4 five:w-full mx-auto w-[270px] px-2 xtab:grid-cols-2 tablet:grid-cols-3
              five:grid-cols-2 grid-cols-[50%] ltop:grid-cols-3  desktop:grid-cols-4 mt-4">
              {newest.map((game, index)=>(
              <GameCard item={game} key={index} />
              ))}
            </div>
            
            <div className="flex mt-5 w-full justify-center">
              <Link href="/store">
              <button className='bg-violet-700 px-3 py-2 rounded-md'>See More</button>
              </Link>
            </div>
            <h2 className="ml-2 text-xl text-center font-bold mt-3">News Feed</h2>
            <div className="flex mt-6 sticky top-0 h-[83vh] w-full">
              <div className="flex w-full overflow-auto tablet:w-full items-center flex-col">
                <div className="flex items-center">
                  <h2 className='my-2 text-xl'>Posts</h2>
                  {/* <button onClick={()=>setPostForm(true)} 
                   className='py-1 ml-2 px-3 bg-violet-800'>Create a Post</button> */}
                   <AuthElement props={{ className: 'py-1 ml-2 px-3 bg-violet-800'}}
                    el={'button'} content="Create a Post" fn={()=>setPostForm(true)} />
                 </div>
                <div className="w-4/5 h-full max-w-[500px]">
                  {posts.map((post, index)=>(
                    <Post post={post} key={index} />
                  ))}
                </div>
              </div>
              <div className="tablet:flex sticky top-0 w-[30%] min-w-[300px] items-center flex-col hidden">
                <h2 className='my-2 text-xl'>Suggested Gamers</h2>
                <div className="flex w-full flex-col">
                  <Suggested />
                </div>
              </div>
            </div>
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
            </>
            )}
            {/* <Stores /> */}
            <Footer />
        </div>
        {/* <Feed /> */}
    </div>
  )
}


export default HomeComp

