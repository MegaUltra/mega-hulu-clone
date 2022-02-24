import Image from "next/image"
import HeaderItem from './HeaderItem'
import { CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon } from '@heroicons/react/outline'


function Header () {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="mx-10">
            <Image
            className="object-contain" 
            src='/images/logo-wide-white.png' 
            width={200} 
            height={55} 
            />
            </div>
            <div className="flex flex-grow justify-evenly max-w-2xl mt-6">
                <HeaderItem title='Home' Icon={HomeIcon} />
                <HeaderItem title='Search' Icon={SearchIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
                <HeaderItem title='Collections' Icon={CollectionIcon} />
                
            </div>
            
        </header>
    )
}

export default Header