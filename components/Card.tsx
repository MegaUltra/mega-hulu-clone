import Image from "next/image"


function Card({title, description, date, imgUrl}) {
  const defaultImgUrl = '/images/splash-1080p.jpg'

  return (

    <div
    className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-yellow-400 border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
    
{/* <div
    className="p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50"> */}
      {/* <div className="relative inline-block hover:z-50"> */}
    <Image
    // className="top-0 bottom-0 left-0 right-0 rounded-md object-cover object-left-top block max-w-full h-full"
                // layout="responsive"
                src={
                  `${imgUrl}`
                }
                height={720}
                width={1280}
                objectFit="cover"
                className="rounded-lg"
            />
{/* </div> */}
            {/* <div className="flex flex-col mt-3">
            <h2 className="text-lg md:text-xl lg:text-2xl text-white font-semibold transition-all duration-100 ease-in-out group-hover:font-bold">{title}</h2>
            <p className="mt-2">Release date: {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              <p className="line-clamp-4 text-ellipsis max-w-md mt-2">{description}</p>
              
            </div> */}

    </div>


    // <div 
    // className="flex flex-col gap-1 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
    //  {/* <div 
    //  className="flex flex-none h-auto rounded-md py-6 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50"> */}
    //        <div className="w-full h-full object-contain hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100">
    //   {/* <div className="w-32 p-2 md:w-48 md:h-72 lg:w-full lg:h-full object-contain "> */}
    //     <Image
    //             layout="responsive"
    //             src={
    //                 `${imgUrl}`
    //             }
    //             height={1080}
    //             width={1920}

    //         />
            
    //         <div className="mt-4">
    //         <h2 className="text-lg md:text-xl lg:text-2xl text-white font-semibold transition-all duration-100 ease-in-out group-hover:font-bold">{title}</h2>
    //         <p>Release date: {date}</p>
    //           <p className="text-ellipsis max-w-md mt-2">{description}</p>
              
    //         </div>
    //         </div>
    // </div>
  )
}

export default Card