import { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import { useState } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Nav from '../components/Nav'
import { YoutubeVideoPlayer } from '../components/youtubePlayer'

const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
}


const YouTube: NextPage = ({ results }) => {
const [currentVideo, setCurrentVideo] = useState(results[0])
const [playing, setPlaying] = useState(false)

console.log(results)

  return (
    <div className=''>
      <Head>
        <title>Short Films</title>
        <meta name="description" content="Short films by Mega Ultra Studios" />
      </Head>

     <Header />

     <Nav />

<div className='w-full mx-auto my-4'>
  <h1 className='my-8 text-center'>Test</h1>
  <Loading></Loading>
  <div className='max-w-3xl mx-auto p-4 rounded-2xl shadow-2xl my-8'>
     <YoutubeVideoPlayer id={currentVideo.snippet.resourceId.videoId}
     playing={playing} />
     </div>
</div>
<div className="px-8 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
{results &&
            results.map((video) => {
              return (
                <div key={video.id} className="p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50"
                onClick={() => {setCurrentVideo(video); setPlaying(true); scrollTop();}}
                >
                  
                  <Image
                    src={video.snippet.thumbnails.maxres?.url ||  "https://via.placeholder.com/300"}
                    layout="responsive"
                    height={1080}
                width={1920}
                    alt={video.snippet.title}
                  />
                  <div className="p-2">
                  <h2 className='text-2xl text-white font-semibold transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {video.snippet.title}
                  </h2>
                  <p>{new Date(video.snippet.publishedAt).toLocaleDateString('en-US', { year: 'numeric' })}</p>
                  <p className="truncate text-ellipsis max-w-md mt-2">{video.snippet.description}</p>
                  </div>
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
