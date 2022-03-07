import { PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";


function Banner( { title, subTitle, imgUrl } ) {

    const handleOnPlay = () => {
        console.log("handleOnPlay");
    };

  return (
    <div className="w-full h-[80vh] relative">
        <div className="absolute w-full h-full z-10">
            <div className="flex flex-col justify-start px-16 h-full mt-24 md:w-1/3">
                <div className="flex">
                    <p className="text-6xl text-red-400 font-extrabold">M</p>
                    <p className="text-sm text-gray-200 self-center">S E R I E S</p>
                    </div>
                    <h1 className="mt-3 sm:text-xl md:text-4xl lg:text-6xl text-white font-extrabold stroke-black">{title}</h1>
        <h2 className='mt-1 sm:text-lg md:text-2xl lg:text-4xl text-white stroke-slate-200'>{subTitle}</h2>
        <div className="flex flex-row w-full">
        <button 
        className="flex justify-center items-center px-5 py-1 my-5 rounded-lg bg-white w-auto text-blue-900"
        onClick={handleOnPlay}>
            <PlayIcon className="h-5" />
            <span className='text-bold sm:text-md md:text-lg lg:text-xl pl-1 text-center'>Play</span>
            </button>
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