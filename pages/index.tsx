import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'
import Image from 'next/image'

export default function Home({ results }) {
  return (
    <div className=''>
      <Head>
        <title>Mega Ultra Studios</title>
        <meta name="description" content="Mega Ultra Studios creates short and feature length films, promotional videos, and music videos. Let's make it weird." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />

     <Nav />

     <Results results={results}/>

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(
    res => res.json()
  );

  return {
    props: {

    }
  }
}
