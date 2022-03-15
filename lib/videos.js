// import videoData from '../data/videos.json'

export const getVideos  = async () => {
    const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const response = await fetch(REQUEST_URL);
    const data = await response.json();



    return data.items.map((item) => {
        return {
            id: item.id,
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.maxres.url,
            description: item.snippet.description,
            date: item.snippet.publishedAt,
        }
    })
}