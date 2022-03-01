import { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import { useState } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { YoutubeVideoPlayer } from '../components/youtubePlayer'

const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
}


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
<div className='w-full mx-auto my-4'>
  <h1 className='my-8 text-center'>Test</h1>
  <div className='max-w-3xl mx-auto p-4 rounded-2xl shadow-2xl my-8'>
     <YoutubeVideoPlayer id={currentVideo.snippet.resourceId.videoId}
     playing={playing} />
     </div>
</div>
<div className="px-8 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
{results &&
            results.map((video) => {
              return (
                <div key={video.id} className="mx-4">
                  
                  <Image
                    src={video.snippet.thumbnails.maxres?.url ||  "https://via.placeholder.com/300"}
                    layout="intrinsic"
                    width={1280}
                    height={720}
                    alt={video.snippet.title}
                  />
                  <h5 className='font-sm text-left mb-2'>
                    {video.snippet.title}
                  </h5>
                  <button className='px-4 py-1 text-center mx-auto my-4 bg-red-500 rounded-full' onClick={() => {setCurrentVideo(video); setPlaying(true); scrollTop();}}>Watch Now</button>
                </div>
              );
            })}
</div>
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
