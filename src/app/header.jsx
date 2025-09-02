'use client'

gitimport menu from "../../public/menu.svg"
import escudo from "../../public/escudo.svg"
import fechar from "../../public/close.svg"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import { X } from "lucide-react"

export default function Header() {
    const[modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    const menuItems = [
        { name: "INÍCIO", href: "/" },
        { name: "HORÁRIOS", href: "/horarios" },
        { name: "ESTRUTURA", href: "/estrutura" },
        { name: "TÍTULOS", href: "/titulos" },
    ]

    return(
        <>
            <header className="bg-[#98C5E9] h-24 grid grid-cols-3 px-20 items-center border-b-4 border-solid border-[#001838] max-lg:px-10">
                <div onClick={toggleModal} className="flex flex-row items-center justify-self-start cursor-pointer hover:opacity-80 transition-opacity">
                    <Image className="w-8 h-min max-lg:w-7" src={menu} alt="menu" width={32} height={32}/>
                    <h2 className="font-black ml-4 max-lg:hidden text-[#001838]">MENU</h2>
                </div>
                <div className="justify-self-center">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Image className="w-22" src={escudo} alt="escudo" width={64} height={64}/>
                    </Link>
                </div>
                <nav className="font-black flex flex-row justify-self-end text-[#001838] max-lg:hidden">
                    <Link href="/horarios" className="hover:text-white transition-all duration-300 hover:scale-105">
                        HORÁRIOS
                    </Link>
                    <div className="border-l-2 border-solid mx-2"></div>
                    <Link href="/estrutura" className="hover:text-white transition-all duration-300 hover:scale-105">
                        ESTRUTURA
                    </Link>
                    <div className="border-l-2 border-solid mx-2"></div>
                    <Link href="/titulos" className="hover:text-white transition-all duration-300 hover:scale-105">
                        TÍTULOS
                    </Link>
                </nav>
            </header>
            
            {/* Modal Menu */}
            {modal && (
                <div className="bg-black/50 fixed inset-0 flex items-start z-50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md h-full shadow-2xl transform transition-transform duration-300">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex justify-between items-center">
                                <Image src={escudo} alt="LC Soccer" width={48} height={48}/>
                                <button onClick={toggleModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>
                        </div>
                        <nav className="p-6">
                            <ul className="space-y-4">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={item.href}
                                            onClick={toggleModal}
                                            className="block py-4 px-4 text-lg font-bold text-[#001838] hover:bg-[#98C5E9] hover:text-white rounded-lg transition-all duration-300"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <button className="w-full bg-[#98C5E9] hover:bg-[#7FB3D3] text-[#001838] font-bold py-3 px-6 rounded-full transition-all duration-300">
                                    MATRICULE-SE AGORA
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}