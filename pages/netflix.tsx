import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from "../components/Results";
import requests from "../utils/requests";
import Image from 'next/image'
import Banner from '../components/Banner';
import NetflixBanner from '../components/NetflixBanner';
import NetflixHeder from '../components/NetflixHeder';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import SectionCards from '../components/SectionCards';

const Netflix: NextPage = ({ results }) => {
  return (
    <div className=''>
      <Head>
        <title>Mega Ultra Studios</title>
        <meta name="description" content="Mega Ultra Studios creates short and feature length films, promotional videos, and music videos. Let's make it weird." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* <NetflixHeder /> */}
{/* 
     <NetflixBanner title='Mega Ultra Studios' description="Mega Ultra Studios creates short and feature length films, promotional videos, and music videos. Let's make it weird." imgUrl='/images/background.jpg' /> */}

     <Navbar username="poopins" />

     <Banner title='Mega Ultra Studios' description="Mega Ultra Studios creates short and feature length films, promotional videos, and music videos. Let's make it weird." imgUrl='/images/background.jpg' />

     {/* <Card title='Left for Dead' description="Tough girls with knives. Exploitation." date="2014" 
     imgUrl='/images/lfd-thumb.jpg'
     /> */}
<SectionCards title='Short Films'/>


    </div>
  )
}

export default Netflix;

//Server side render
// export async function getServerSideProps(context) {
//   const genre = context.query.genre;

//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then((res) => res.json());

//   return {
//     props: {
//       results: request.results,
//     },
//   };
// }

