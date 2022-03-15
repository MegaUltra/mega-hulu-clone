// import videoData from '../data/videos.json'

export const getVideos  = async (listQuery) => {
    const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
    const SHORT_PLAYLIST = process.env.SHORT_PLAYLIST_ID;
    const FEATURE_PLAYLIST = process.env.FEATURE_PLAYLIST_ID;
    const MUSIC_PLAYLIST = process.env.MUSIC_PLAYLIST_ID;
    const PROMO_PLAYLIST = process.env.PROMO_PLAYLIST_ID;
    const LIVE_PLAYLIST = process.env.LIVE_PLAYLIST_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId";
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const SHORT_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${SHORT_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const FEATURE_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${FEATURE_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const MUSIC_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MUSIC_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const PROMO_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PROMO_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const LIVE_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${LIVE_PLAYLIST}&key=${API_KEY}&maxResults=15`;

    try {
    const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${listQuery}&key=${API_KEY}&maxResults=25`
      );
    const data = await response.json();

    if (data?.error) {
        console.error('Youtube errors happening', data.error)
        return [];
    }



    return data?.items.map((item) => {
        const id = item.id?.videoId || item.id
        return {
            id,
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.maxres.url,
            description: item.snippet.description,
            date: item.snippet.publishedAt,
        }
    })
} catch (error) {
    console.error("Something went horribly wrong. Self-destruct", error);
    return [];
}
}