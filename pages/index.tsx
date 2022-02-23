import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Mega Ultra Studios</title>
        <meta name="description" content="Mega Ultra Studios creates short and feature length films, promotional videos, and music videos. Let's make it weird." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1>Hiyee</h1>

     {/* Nav */}
     <Header />

    </div>
  )
}

export default Home
