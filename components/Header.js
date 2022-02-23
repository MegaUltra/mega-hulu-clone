import Image from "next/image"


function Header () {
    return (
        <header className="">
            <Image src='/images/logo-wide.png' width={200} height={55} />
        </header>
    )
}

export default Header