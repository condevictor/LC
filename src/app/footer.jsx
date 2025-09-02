import escudoAlternativo from "../../public/escudo_alternativo.svg"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-[#001838] py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Logo Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="block">
                            <Image className="w-32 mx-auto md:mx-0" src={escudoAlternativo} alt="LC Soccer" width={128} height={128}/>
                        </Link>
                    </div>
                    
                    {/* Links Section */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Navegação</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-gray-300 hover:text-[#98C5E9] transition-colors">Início</Link></li>
                                <li><Link href="/horarios" className="text-gray-300 hover:text-[#98C5E9] transition-colors">Horários</Link></li>
                                <li><Link href="/estrutura" className="text-gray-300 hover:text-[#98C5E9] transition-colors">Estrutura</Link></li>
                                <li><Link href="/titulos" className="text-gray-300 hover:text-[#98C5E9] transition-colors">Títulos</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>📞 (11) 9999-9999</li>
                                <li>📧 contato@lcsoccer.com</li>
                                <li>📍 São Paulo - SP</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* CTA Section */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-bold text-lg mb-4">Matricule-se</h3>
                        <Link href="/" className="bg-[#98C5E9] hover:bg-[#7FB3D3] text-[#001838] font-bold py-3 px-6 rounded-full transition-all duration-300 inline-block text-center">
                            Começar Agora
                        </Link>
                    </div>
                </div>
                
                <hr className="border-gray-700 mb-6"/>
                
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 LC Soccer School - Todos os direitos reservados. | Desenvolvido por Victor Conde
                    </p>
                </div>
            </div>
        </footer>
    )
}