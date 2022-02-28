import Image from "next/image"
import HeaderItem from './HeaderItem'
import { CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon } from '@heroicons/react/outline'
import Link from "next/link"


function Header () {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="mx-10">
                <Link href="/"><a>
            <Image
            className="object-contain" 
            src='/images/logo-wide-white.png' 
            width={200} 
            height={55} 
            />
            </a></Link>
            </div>
            <div className="flex flex-grow justify-evenly max-w-2xl mt-6">
                <Link href="/">
                    <a>
                <HeaderItem title='Home' Icon={HomeIcon} />
                </a>
                </Link>
                <HeaderItem title='Search' Icon={SearchIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
                <HeaderItem title='Collections' Icon={CollectionIcon} />
                
            </div>
            
        </header>
    )
}

export default Header