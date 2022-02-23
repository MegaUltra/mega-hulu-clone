import Image from "next/image"


function Header () {
    return (
        <header className="">
            <Image
            className="object-contain" 
            src='/images/logo-wide-white.png' 
            width={200} 
            height={55} 
            />
        </header>
    )
}

export default Header