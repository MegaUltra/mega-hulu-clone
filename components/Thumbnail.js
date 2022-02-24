import Image from "next/image";


function Thumbnail({ result }) {
  return (
    <Image
    layout="responsive"
    src={
      `${BASE_URL)${result.backdrop_path ||}}`
    } 
    
    />
  )
}

export default Thumbnail