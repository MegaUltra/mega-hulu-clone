import { useRouter } from "next/router"
import ReactModal from 'react-modal'
import { YoutubeVideoPlayer } from '../../components/youtubePlayer'


const Video = () => {
    const router = useRouter()

    console.log({ router })
    return <div>
        It's all video in here.
        {router.query.videoId}
        <ReactModal
        isOpen={true}
        contentLabel="Watch the demo"
        onRequestClose={() => router.back()}
        className="bg-black w-full md:w-[80vw] lg:w-[75vw] min-h-screen mx-auto md:mt-[2rem] md:rounded-xl shadow overflow-hidden"
        overlayClassName="inset-0 absolute p-4 md:p-12 top-0 flex flex-col space-y-2"
        >
            <div>Modal Body</div>
            <YoutubeVideoPlayer id={router.query.videoId}
     playing={false} />
        </ReactModal>
    </div>
}

export default Video