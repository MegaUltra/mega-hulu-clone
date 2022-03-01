import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { YoutubeVideoPlayer } from '../components/youtubePlayer'


const YouTube: NextPage = ({ results }) => {
const [currentVideo, setCurrentVideo] = useState(results[0])
const [playing, setPlaying] = useState(false)

  return (
    <div className=''>
      <Head>
        <title>Mega Ultra Studios</title>
        <meta name="description" content="Mega Ultra Studios creates short and feature length films, promotional videos, and music videos. Let's make it weird." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />

     <Nav />

     <YoutubeVideoPlayer id={currentVideo.snippet.resourceId.videoId}
     playing={playing} />

    </div>
  )
  }

export default YouTube;

//Server side render
export async function getStaticProps() {
    const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const response = await fetch(REQUEST_URL);
    const results = await response.json();
  
    return {
      props: { results: results.items },
      revalidate: 10,
    };
  }
