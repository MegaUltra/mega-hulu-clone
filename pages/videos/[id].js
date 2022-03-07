

const Video = ({video}) => {
  return (
    <div>[id]</div>
  )
}

export default Video

export async function getStaticPaths() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=15`;
  // Call an external API endpoint to get videos
  const res = await fetch(REQUEST_URL)
  const videos = await res.json()

  // Get the paths we want to pre-render based on videos
  const paths = videos.map((video) => ({
    params: { id: video.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // Return a list of possible value for id
    const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=15`;
    const response = await fetch(REQUEST_URL);
    const results = await response.json();
  
    return {
      props: { results: results.items },
      revalidate: 10,
    };
  }

  export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const movie = res.data;
  
    return {
      props: { movie }
    }
  }

  export async function getStaticPaths() {
    const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const movies = res.data.results;
  
    const ids = movies.map(movie => movie.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));
  
    return {
      paths,
      fallback: false
    }
  }