'use client'
import Image from "next/image"
import familia from "../../public/familia.svg"
import medalha from "../../public/medalha.svg"
import campeao from "../../public/campeao.svg"
import { ArrowRight, Star, Trophy, Users, Target, Heart } from "lucide-react"
import { useState } from "react"

export default function Main(){
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    
    const testimonials = [
        {
            name: "Maria Silva",
            role: "Mãe do João, 12 anos",
            text: "Meu filho está na LC há 3 anos. Além do futebol, ele aprendeu disciplina, trabalho em equipe e fez grandes amigos."
        },
        {
            name: "Carlos Santos",
            role: "Pai da Ana, 10 anos",
            text: "A Ana melhorou muito tecnicamente e ganhou muita confiança. Os professores são excelentes e muito atenciosos."
        },
        {
            name: "Pedro Oliveira",
            role: "Ex-aluno, hoje profissional",
            text: "A LC foi fundamental na minha formação. Hoje sou jogador profissional e devo muito ao que aprendi aqui."
        }
    ]

    const diferenciais = [
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Metodologia Comprovada",
            description: "15 anos formando campeões com metodologia exclusiva e professores especializados"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Ambiente Familiar",
            description: "Mais que uma escola, somos uma família que acolhe e desenvolve cada criança"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Desenvolvimento Integral",
            description: "Focamos no desenvolvimento técnico, físico, mental e social de cada aluno"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Valores e Princípios",
            description: "Ensinamos respeito, disciplina, trabalho em equipe e fair play"
        }
    ]

    return(
        <main className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen grid grid-cols-1 grid-rows-1 items-center">
                <Image src={familia} alt="familia" className="col-start-1 row-start-1 w-full h-full object-cover"/>
                
                {/* Subtle gradient overlay to preserve image visibility */}
                <div className="col-start-1 row-start-1 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>

                <div className="col-start-1 row-start-1 flex flex-col gap-8 px-4 md:px-12 max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <div className="bg-black/40 backdrop-blur-2 rounded-2xl p-8 md:p-10 border border-white/20">
                            <h1 className="text-2xl md:text-6xl text-white font-black mb-6 leading-tight drop-shadow-2xl">
                                MUITO MAIS QUE UMA <span className="text-[#98C5E9] drop-shadow-lg">ESCOLINHA</span>, UMA <span className="text-[#98C5E9] drop-shadow-lg">FAMÍLIA</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-semibold drop-shadow-lg">
                                Formamos campeões dentro e fora de campo há mais de 15 anos. 
                                Venha fazer parte da nossa história de sucesso!
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <button className="bg-[#98C5E9] hover:bg-[#7FB3D3] text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                                MATRICULE-SE AGORA
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300">
                                AGENDAR VISITA
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#001838] py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <h3 className="text-4xl md:text-5xl font-black text-[#98C5E9] mb-2 group-hover:scale-110 transition-transform duration-300">150+</h3>
                            <p className="text-white font-semibold">Alunos Ativos</p>
                        </div>
                        <div className="group">
                            <h3 className="text-4xl md:text-5xl font-black text-[#98C5E9] mb-2 group-hover:scale-110 transition-transform duration-300">25+</h3>
                            <p className="text-white font-semibold">Títulos Conquistados</p>
                        </div>
                        <div className="group">
                            <h3 className="text-4xl md:text-5xl font-black text-[#98C5E9] mb-2 group-hover:scale-110 transition-transform duration-300">15</h3>
                            <p className="text-white font-semibold">Anos de Experiência</p>
                        </div>
                        <div className="group">
                            <h3 className="text-4xl md:text-5xl font-black text-[#98C5E9] mb-2 group-hover:scale-110 transition-transform duration-300">8</h3>
                            <p className="text-white font-semibold">Categorias</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-[#001838] mb-6">
                            Por que escolher a <span className="text-[#98C5E9]">LC Soccer</span>?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nossos diferenciais fazem toda a diferença na formação dos nossos atletas
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {diferenciais.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                                <div className="bg-gradient-to-r from-[#98C5E9] to-[#7FB3D3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#001838] group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#001838] mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section with Images */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    {/* First Row - Text Left, Image Right */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-[#001838] leading-tight mb-4">
                                    AQUI FORMAMOS <span className="text-[#98C5E9]">CAMPEÕES</span>
                                </h2>
                                <div className="w-24 h-1 bg-[#98C5E9]"></div>
                            </div>
                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                No LC trabalhamos para o desenvolvimento coletivo e individual do aluno, 
                                sempre buscando lapidar o seu talento e formar não apenas grandes jogadores, 
                                mas também grandes pessoas.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                                    <div className="w-3 h-3 bg-[#98C5E9] rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-[#001838] mb-1">Desenvolvimento técnico e tático personalizado</h4>
                                        <p className="text-gray-600 text-sm">Metodologia exclusiva adaptada para cada faixa etária</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300">
                                    <div className="w-3 h-3 bg-[#98C5E9] rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-[#001838] mb-1">Formação de valores e disciplina</h4>
                                        <p className="text-gray-600 text-sm">Respeito, trabalho em equipe e fair play</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors duration-300">
                                    <div className="w-3 h-3 bg-[#98C5E9] rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-[#001838] mb-1">Preparação para competições regionais</h4>
                                        <p className="text-gray-600 text-sm">Participação em campeonatos e torneios oficiais</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#98C5E9] to-[#7FB3D3] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
                            <div className="relative bg-white rounded-2xl p-6 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                                <Image 
                                    src={campeao} 
                                    alt="Formação de campeões"
                                    className="w-full rounded-xl"
                                />
                                <div className="absolute top-4 left-4 bg-[#98C5E9] text-[#001838] px-3 py-1 rounded-full text-sm font-bold">
                                    Campeões 2024
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - Image Left, Text Right */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#001838] to-[#002a5c] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-20"></div>
                            <div className="relative bg-white rounded-2xl p-6 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                                <Image 
                                    src={medalha} 
                                    alt="Qualidade e excelência"
                                    className="w-full rounded-xl"
                                />
                                <div className="absolute top-4 right-4 bg-[#001838] text-white px-3 py-1 rounded-full text-sm font-bold">
                                    Excelência
                                </div>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-[#001838] leading-tight mb-4">
                                    <span className="text-[#98C5E9]">LC</span> É QUALIDADE E EXCELÊNCIA
                                </h2>
                                <div className="w-24 h-1 bg-[#98C5E9]"></div>
                            </div>
                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Com mais de 25 títulos conquistados e centenas de atletas formados, 
                                somos referência em ensino de futebol na região. Nossa metodologia 
                                é reconhecida pelos resultados excepcionais.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-6 bg-gradient-to-br from-[#98C5E9] to-[#7FB3D3] rounded-xl text-[#001838] hover:scale-105 transition-transform duration-300">
                                    <Trophy className="w-8 h-8 mx-auto mb-2" />
                                    <h3 className="text-3xl font-black mb-1">25+</h3>
                                    <p className="text-sm font-bold">Títulos Conquistados</p>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-[#001838] to-[#002a5c] rounded-xl text-white hover:scale-105 transition-transform duration-300">
                                    <Users className="w-8 h-8 mx-auto mb-2" />
                                    <h3 className="text-3xl font-black mb-1">300+</h3>
                                    <p className="text-sm font-bold">Atletas Formados</p>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl text-[#001838] hover:scale-105 transition-transform duration-300">
                                    <Star className="w-8 h-8 mx-auto mb-2" />
                                    <h3 className="text-3xl font-black mb-1">15</h3>
                                    <p className="text-sm font-bold">Anos de Experiência</p>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-green-400 to-green-600 rounded-xl text-white hover:scale-105 transition-transform duration-300">
                                    <Target className="w-8 h-8 mx-auto mb-2" />
                                    <h3 className="text-3xl font-black mb-1">100%</h3>
                                    <p className="text-sm font-bold">Dedicação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-[#001838] mb-6">
                            O que dizem sobre nós
                        </h2>
                        <p className="text-xl text-gray-600">
                            Depoimentos de quem faz parte da nossa família
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-[#98C5E9] to-[#7FB3D3] rounded-2xl p-8 md:p-12 text-center">
                            <Star className="w-12 h-12 text-[#001838] mx-auto mb-6" />
                            <blockquote className="text-xl md:text-2xl text-[#001838] font-semibold mb-6 leading-relaxed">
                                "{testimonials[activeTestimonial].text}"
                            </blockquote>
                            <div className="text-[#001838]">
                                <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                                <p className="opacity-80">{testimonials[activeTestimonial].role}</p>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-8 gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === activeTestimonial ? 'bg-[#98C5E9]' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#001838] to-[#002a5c]">
                <div className="container mx-auto px-4 text-center">
                    <Trophy className="w-16 h-16 text-[#98C5E9] mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Pronto para começar?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Agende uma aula experimental gratuita e venha conhecer nossa metodologia. 
                        Seu filho merece o melhor!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#98C5E9] hover:bg-[#7FB3D3] text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                            AULA GRÁTIS
                        </button>
                        <button className="border-2 border-[#98C5E9] text-[#98C5E9] hover:bg-[#98C5E9] hover:text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300">
                            FALAR NO WHATSAPP
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}