import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import magic from '../lib/magic-client'

const Login: NextPage = ({  }) => {
    const handleLoginWithEmail = async (e) => {
        console.log("Hi Button")
        e.preventDefault()
        

        if (email) {
            if (email ==="dwmyke@gmail.com") {
                // route to dashboard
            // 
            try {
                setIsLoading(true)
                const didToken = await magic.auth.loginWithMagicLink({ email, });
                console.log({ didToken });
                if (didToken) {
                    setIsLoading(false)
                    Router.push("/")
                }
              } catch (error) {
                // Handle errors if required!
                console.error('Abort! Abort!', error);
                setIsLoading(false)
              }
            } else {
                setUserMsg("I'm so confused")
                setIsLoading(false)
            }

        } else {
// show user message
setUserMsg("Enter a valid email address")
setIsLoading(false)
        }
    }


    const [email, setEmail] = useState('')

    const [userMsg, setUserMsg] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const handleOnChangeEmail = (e) => {
        setUserMsg("")
        console.log("event", e)
        const email = e.target.value
        setEmail(email)
    }

    const imgUrl='/images/background-4.jpg'


  return (
      <>


    <div className='flex flex-col items-center justify-start min-h-screen bg-black bg-gradient-to-r from-black/60 to-black/60'
    style={{
        backgroundImage: `url(${imgUrl}`,
      }}
    >
        <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to Mega Ultra Studios" />
        </Head>
        
        <header className='flex justify-between w-full py-8'>
            <div className='flex flex-row px-16 items-center'>
                
        <Link href="/">
                    <a className="flex font-semibold items-center mb-4 px-4 md:mb-0">
            <Image
            className="object-contain" 
            src='/images/logo-wide-white.png' 
            alt="Mega Ultra logo"
            width={200} 
            height={55} 
            />
            </a>
            </Link>
            </div>
        </header>

        <main className='flex relative w-full h-screen justify-center z-10'>
            <div className='flex flex-col pt-8 pb-24 px-12 bg-black/60 rounded-xl min-w-[240px] h-1/3 md:h-2/5 mt-0 md:mt-16'>
        
            <h1 className='text-white font-bold text-3xl mb-8'>Sign in</h1>

            <input className='p-8 text-black w-full h-12 text-xl min-w-[240px]' type="text" placeholder='Email address' 
            onChange={handleOnChangeEmail}
            />

            <p className='text-white my-2'>{userMsg}</p>

            <button className='bg-purple-600 px-12 py-2 text-lg text-white w-full rounded-lg mt-6 border-yellow-700 border hover:border-yellow-300' onClick={handleLoginWithEmail}>
                {isLoading ? "Loading..." : "Sign In"}
            </button>
            </div>
            
        </main>
        
    </div>
    </>
  )
}

export default Login