import Image from "next/image"


function Card({title, description, date, imgUrl}) {
  const defaultImgUrl = '/images/splash-1080p.jpg'

  return (
    <div 
    className="flex flex-none h-auto rounded-md py-6 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
      <div className="w-32 p-2 md:w-48 md:h-72 lg:w-full lg:h-full object-contain ">
        <Image
                layout="responsive"
                src={
                    `${imgUrl}`
                }
                height={1080}
                width={1920}

            />
            
            <div className="mt-4">
            <h2 className="text-2xl text-white font-semibold transition-all duration-100 ease-in-out group-hover:font-bold">{title}</h2>
            <p>{date}</p>
              <p className="text-ellipsis max-w-md mt-2">{description}</p>
              
            </div>
            </div>
    </div>
  )
}

export default Card