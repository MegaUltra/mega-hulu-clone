import Card from "./Card"


function SectionCards({ title, videos = [] }) {
  return (
    <section className="relative flex flex-col space-y-2 my-10 px-8  mx-auto">
     {/* <section className="bg-black p-5 pt-10"> */}
        <h2 className="text-white text-4xl md:text-4xl font-semibold md:mb-5">{title}</h2>
        {/* <div className="px-8 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"> */}
        {/* <div className="flex space-x-5 px-16 mt-10 overflow-x-scroll overflow-y-hidden scrollbar-hide"> */}
        {/* <div className="flex flex-wrap space-x-5 py-5 px-10 pb-6 overflow-x-scroll overflow-y-hidden scrollbar-hide"> */}
        <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
            
        {videos.map((video, idx) =>{
                return <Card id={idx} imgUrl={video.imgUrl} title={video.title} description={video.description} date={video.date}/>
        })}
        </div>
        </section>
        
  )
}

export default SectionCards