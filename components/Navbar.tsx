import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"

function Navbar({ username }) {
    const router = useRouter()

    const [showDropdown, setShowDropdown] = useState(false)

    const handleOnClickHome = (e) => {
        e.preventDefault()
        router.push('/')
    }

    const handleOnClickHMyList = (e) => {
        e.preventDefault()
        router.push('/browse/my-list')
    }

    const handleShowDropdown = (e) => {
        e.preventDefault()
        setShowDropdown(!showDropdown)
    }


  return (
    <div className="fixed text-white top-0 bg-gradient-to-b from-black to-transparent w-full z-50 body-font">
        {/**Logo Wrapper */}
        <div className="flex flex-wrap flex-col px-4 md:px-16 py-5 md:flex-row items-center title-font">
                <Link href="/">
                    <a className="flex font-semibold items-center mb-4 px-2 md:mb-0">
            <Image
            className="object-contain" 
            src='/images/logo-wide-white.png' 
            alt="Mega Ultra logo"
            width={200} 
            height={55} 
            />
            </a></Link>
        
       {/** NavItems */}
       <ul className="flex flex-grow justify-evenly max-w-2xl mt-6 cursor-pointer">
       
        {/* <ul className="hidden lg:flex flex-row space-x-3 w-1/2 ml-12 text-sm cursor-pointer"> */}
            <li className="font-bold mr-3 lg:mr-5" 
            onClick={handleOnClickHome}>Home</li>
            <li
            onClick={handleOnClickHMyList}>My List</li>
        </ul>

        <nav className="md:ml-auto flex flex-wrap space-x-6 items-center text-base justify-center font-semibold">
        {/* <nav className="md:ml-auto hidden lg:flex flex-wrap space-x-6 items-center text-base justify-center font-semibold"> */}
            <div>
                <button className="flex items-center overflow-hidden text-white"
                onClick={handleShowDropdown}>
                    
                    <p className="text-sm md:text-lg">{username}</p>
                    {/** icons */}
                    <ChevronDownIcon className="mx-1 h-4"/>
                </button>
{/** Dropdown */}
{showDropdown && (<div className="text-sm md:text-md absolute ml-auto mt-2 p-2 bg-black text-white rounded border border-blue-600 shadow-lg">
                    <div>
                        <Link href='/login'>
                       <a className="transition-all duration-200 rounded cursor-pointer hover:underline ">Sign Out</a>
                       </Link>
                       {/** Line Wrapper */}
                       <div className="py-1"></div> 
                </div>
            </div>
            )}
            </div>
        </nav>
        </div>
    </div>
    
  )
}

export default Navbar