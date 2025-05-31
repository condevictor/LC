import menu from "../../public/menu.svg"
import escudo from "../../public/escudo.svg"
import Image from "next/image";

export default function Header() {
    return(
        <header className="bg-[#98C5E9] h-24 grid grid-cols-3 px-20 items-center border-b-4 border-solid border-[#001838] max-lg:px-10">
            <div className="flex flex-row items-center justify-self-start ">
                <Image className="w-8 h-min max-lg:w-7" src={menu} alt="menu"/>
                <h2 className="font-black ml-4 max-lg:hidden text-[#001838]">MENU</h2>
            </div>
            <div className="justify-self-center">
                <Image className="w-22" src={escudo} alt="menu"/>
            </div>
            <div className="font-black flex flex-row justify-self-end text-[#001838] max-lg:hidden">
                <h2 className="hover:text-white transition-all duration-300">HORÁRIOS</h2>
                <div className="border-l-2 border-solid mx-2"></div>
                <h2 className="hover:text-white transition-all duration-300">ESTRUTURA</h2>
                <div className="border-l-2 border-solid mx-2"></div>
                <h2 className="hover:text-white transition-all duration-300">TÍTULOS</h2>
            </div>
        </header>
        
    );
}