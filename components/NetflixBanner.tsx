import React, { useState } from 'react'

function NetflixBanner() {
  const [movie, setMovie] = useState([]);

  
  return (
    <header className='h-[448px] relative z-0 object-contain text-white'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(/images/background.jpg)`,
        backgroundPosition: "top left"
    }}>

        <div className='ml-[30px] pt-[140px] h-[190px] w-full'>
            <h1 className='text-5xl font-bold pb-5'>Movie Title</h1>
            <div>
                <button className='btn'>Play</button>
                <button className='btn'>My List</button>
            </div>
            <h1 className='w-[45rem] font-semibold text-sm pt-4 max-h-[360px] h-10'>Movie description</h1>
            </div>

            <div className='bg-gradient-to-b from-transparent to-black h-[17.4rem]'></div>

</header>
  )
}

export default NetflixBanner