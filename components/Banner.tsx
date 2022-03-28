import { PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";

function Banner( { title, description, imgUrl, videoId } ) {
    const router = useRouter()

    const handleOnPlay = () => {
        console.log("handleOnPlay");
        router.push(`video/${videoId}`)
    };

  return (
    <div className="w-full h-screen relative">
     {/* <div className="w-full h-[90vh] md:h-[80vh] relative"> */}
        <div className="absolute w-full h-full z-10">
        <div className="px-16  h-full flex flex-col justify-start mt-64 md:mt-32 ">
            {/* <div className="flex flex-col justify-start px-16 h-full mt-24 md:mt-32 md:w-2/3"> */}
                <div className="flex">
                    <p className="text-4xl md:text-6xl text-red-400 font-extrabold">M</p>
                    <p className="text-sm text-gray-200 self-center">S E R I E S</p>
                    </div>
                    <div className="mt-4 lg:mt-12">
                    <h1 className="mt-3 text-xl md:text-4xl lg:text-6xl text-white font-extrabold w-full">{title}</h1>
        
        <div className="flex flex-row w-full">
        <button 
        className="flex justify-center items-center px-3 py-1 my-8 rounded-lg bg-yellow-100 w-auto text-blue-900 transition-all duration-500 hover:bg-purple-400 hover:text-white"
        onClick={handleOnPlay}>
            <PlayIcon className="h-4 md:h-5 mr-3" />
            <span className='text-bold text-md md:text-lg lg:text-xl text-center mr-2'>Play</span>
            </button>
            </div>
            <h2 className='mt-1 text-md md:text-2xl lg:text-4xl text-white stroke-slate-200 md:w-3/4'>{description}</h2>
            </div>
                </div>
            </div>
            <div
        className="absolute w-full h-full bottom-0 bg-left-top bg-cover bg-gradient-to-t from-black to-transparent"
        style={{
            backgroundImage: `url(${imgUrl}`,
          }}
      >
          </div>
    </div>
  )
}

export default Banner