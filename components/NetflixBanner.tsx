import { PlayIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'

function NetflixBanner({ title, description, imgUrl }) {
  const [movie, setMovie] = useState([]);

  const handleOnPlay = () => {
    console.log("handleOnPlay");
};

  
  return (
    <header className='h-[448px] relative z-0 object-contain text-white'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(/images/background.jpg)`,
        backgroundPosition: "top left"
    }}>

        <div className='ml-[45px] pt-[140px] h-[190px] w-full'>
            <h1 className='text-4xl lg:text-6xl text-white font-extrabold pb-5'>{title}</h1>
            <div>
                <button className='btn'
                onClick={handleOnPlay}>
                  <PlayIcon className="h-5 mr-1" />
                  <span className='text-bold sm:text-md md:text-lg lg:text-xl pl-1 text-center'>Play</span>
                  </button>
                <button className='btn'>My List</button>
            </div>
            <h1 className='w-[45rem] font-semibold text-sm lg:text-md pt-4  h-10'>{description}</h1>
            </div>

            <div className='bg-gradient-to-b from-transparent to-black h-[17.4rem]'></div>

</header>
  )
}

export default NetflixBanner