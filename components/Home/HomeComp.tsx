/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePosts } from '../../contexts/PostContext'
import { useUsers } from '../../contexts/UserContext'
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
  gameData: any
  loading: boolean
}

const HomeComp: React.FC<Props> = ({ gameData, loading }) => {
  const newest: object[] = gameData.results.slice(0, 4)
  const featured: object[] = gameData.results.slice(10, 18)
  const [showPostForm, setPostForm] = React.useState(false)
  const { posts, getPosts } = usePosts()
  const { suggestedUsers, setSuggestedUsers } = useUsers()

  useEffect(() => {
    const getSuggestedUsers = async () => {
      const { data } = await axios.get('/api/user')
      setSuggestedUsers(data.data)
    }
    getSuggestedUsers()
  }, [])

  useEffect(() => {
    if (posts.length === 0) getPosts()
  }, [])

  const introImg = [
    'https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg',
    'images/battlefield.jpg',
  ]

  return (
    <div className="flex h-full w-full bg-stone-900 pt-6 text-white xtab:px-6">
      {showPostForm ? <PostForm setPostForm={setPostForm} /> : null}
      <div className="relative flex h-[88vh] w-full flex-col overflow-auto">
        <div className="relative flex h-[30vh] w-full rounded-xl">
          <img
            className="min-h-full min-w-full rounded-xl object-cover "
            src={introImg[Math.floor(Math.random() * introImg.length)]}
            alt=""
          />
          <div className="absolute top-9 left-5">
            <p>GET ALL GAMES HERE</p>
            <h1 className="mt-3 text-2xl">
              Games are games, Games are infinity. Just Play
            </h1>
            <button className="mt-5 rounded-lg bg-violet-600 px-3 py-2">
              Start Now
            </button>
          </div>
        </div>
        <h2 className="ml-2 mt-3 text-xl font-bold">Recommended</h2>
        {loading ? (
          <CardLoader />
        ) : (
          <>
            <div
              className="mx-auto mt-4 grid w-[270px] grid-cols-[50%] gap-4 px-2 five:w-full
              five:grid-cols-2 tablet:grid-cols-3 xtab:grid-cols-2  ltop:grid-cols-3 desktop:grid-cols-4"
            >
              {newest.map((game, index) => (
                <GameCard item={game} key={index} />
              ))}
            </div>

            <div className="mt-5 flex w-full justify-center">
              <Link href="/store">
                <button className="rounded-md bg-violet-700 px-3 py-2">
                  See More
                </button>
              </Link>
            </div>
            <h2 className="ml-2 mt-3 text-center text-xl font-bold">
              News Feed
            </h2>
            <div className="sticky top-0 mt-6 flex h-[83vh] w-full">
              <div className="flex w-full flex-col items-center overflow-auto tablet:w-full">
                <div className="flex items-center">
                  <h2 className="my-2 text-xl">Posts</h2>
                  {/* <button onClick={()=>setPostForm(true)} 
                   className='py-1 ml-2 px-3 bg-violet-800'>Create a Post</button> */}
                  <AuthElement
                    props={{ className: 'py-1 ml-2 px-3 bg-violet-800' }}
                    el={'button'}
                    content="Create a Post"
                    fn={() => setPostForm(true)}
                  />
                </div>
                <div className="h-full w-full max-w-[500px]">
                  {posts.map((post: any) => (
                    <Post post={post} key={post._id} />
                  ))}
                </div>
              </div>
              <div className="sticky top-0 hidden w-[40%] min-w-[300px] flex-col items-center tablet:flex">
                <h2 className="my-2 text-xl">Suggested Gamers</h2>
                <div className="flex w-full flex-col">
                  {suggestedUsers?.map((user: any) => (
                      <Suggested key={user._id} user={user} />
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
      {/* <Feed /> */}
    </div>
  )
}

export default HomeComp
