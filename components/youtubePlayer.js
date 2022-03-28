import ReactPlayer from "react-player/youtube";


const YoutubeVideoPlayer = (props) => {
    const {id, playing} = props;

    const url = `https://www.youtube.com/watch?v=${id}`;

    return (
        <div className="relative pt-[56.25%]">
            <ReactPlayer
            url={url}
            playing={playing}
            controls={true}
            width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full"
            />
        </div>
    )
}

export {YoutubeVideoPlayer};