import escudoAlternativo from "../../public/escudo_alternativo.svg"
import Image from "next/image"

export default function Footer(){
    return(
        <footer className="h-full w-full flex max-lg:flex-col items-center max-lg:justify-center px-10 py-4  bg-[#001838]">
            <Image className="w-40 mr-10 max-lg:mx-auto max-lg:w-32" src={escudoAlternativo} alt="escudo lc"/>
            <hr className="hidden max-lg:block h-8 w-[80%] border-gray-800 my-8"></hr>
            <h1 className="mx-auto text-white text-center font-bold">© 2025 Victor Conde - Todos os direitos reservados.</h1>
            <Image className="w-48 ml-10 max-lg:mx-auto max-lg:hidden invisible" src={escudoAlternativo} alt="escudo lc"/>
        </footer>
    )
}