import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AppProvider from '../contexts/AppContext'
import PostProvider from '../contexts/PostContext'
import { UserProvider } from '../contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, SetIsLoading] = useState(true)

  const delay = async () => {
    await axios.get(
      'https://api.rawg.io/api/games?key=a5c36a8abe0c4ddb9489dc567b3cf68d'
    )
    SetIsLoading(false)
  }

  useEffect(() => {
    delay()
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href="/images/inlogo.png" />
        <title>Infinity</title>
      </Head>
      <AppProvider>
        <PostProvider>
          <UserProvider>
            <Component
              {...pageProps}
              isLoading={isLoading}
              setIsLoading={SetIsLoading}
            />
          </UserProvider>
        </PostProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
