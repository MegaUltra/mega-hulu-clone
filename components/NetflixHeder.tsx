import Image from 'next/image'
import { useEffect, useState } from 'react'

function NetflixHeder() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    })


  return (
    <div className={`fixed top-0 h-12 w-full items-center transition-all duration-500 ease-in $(show && 'bg-black')`}>
        <div className='flex justify-between'>
            <div className='fixed top-3 pl-[20px] py-4 object-contain'>
                <Image 
        src='/images/logo-wide-white.png'
        alt='logo'
        width={200} 
            height={55} 
        />
        </div>
        <div className='fixed top-4 right-[-2px] pr-4 h-8 object-contain'>
            <Image
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-menu-multimedia-kiranshastry-lineal-kiranshastry.png"
            alt='menu'
        width={64} 
            height={64} 
            />
            
        </div>
        
        </div>
    </div>
  )
}

export default NetflixHeder