import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { magic } from "../lib/magic-client"

function Navbar({ }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [username, setUsername] = useState("");
    const router = useRouter()


        useEffect(() => {
            const fetchUsername = async () => {
            try {
                const { email } = await magic.user.getMetadata();
                if (email) {
                setUsername(email);
                }
              } catch(error) {
                // Handle errors if required!
                console.error("Your email does not email", error)
              }
}
fetchUsername
        }, [])
        

    // useEffect(() => {
    //     ;(async () => {
    //         try {
    //             const { email } = await magic.user.getMetadata();
    //             if (email) {
    //             setUsername(email);
    //             }
    //           } catch(error) {
    //             // Handle errors if required!
    //             console.error("Your email does not email", error)
    //           }
    //     })()
    //     // Assumes a user is already logged in

    // }, []);

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

    const handleSignout = async (e) => {
        e.preventDefault()

        try {
            await magic.user.logout()
            console.log(await magic.user.isLoggedIn())
            router.push('/login')
        } catch (error) {
            console.error("Errors in logging out. It's crazy", error)
            router.push('/login')
        }
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

                       <a
                       onClick={handleSignout} 
                       className="transition-all duration-200 rounded cursor-pointer hover:underline ">Sign Out</a>

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