'use client'
import Header from "../header.jsx";
import Footer from "../footer.jsx";
import Link from "next/link";
import { Trophy, Medal, Star, Award, Users, Calendar, ArrowRight } from "lucide-react";

export default function Titulos() {
  const titulos = [
    {
      ano: "2024",
      competicao: "Campeonato Regional Sub-15",
      posicao: "1º Lugar",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      ano: "2024",
      competicao: "Copa Cidade de São Paulo Sub-13",
      posicao: "2º Lugar",
      icon: <Medal className="w-8 h-8" />,
      color: "from-gray-300 to-gray-500"
    },
    {
      ano: "2023",
      competicao: "Liga Metropolitana Sub-17",
      posicao: "1º Lugar",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      ano: "2023",
      competicao: "Torneio de Verão",
      posicao: "3º Lugar",
      icon: <Award className="w-8 h-8" />,
      color: "from-amber-600 to-amber-800"
    },
    {
      ano: "2022",
      competicao: "Campeonato Estadual Sub-11",
      posicao: "1º Lugar",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      ano: "2022",
      competicao: "Copa Brasil Sub-15",
      posicao: "Semifinalista",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600"
    }
  ];

  const destaques = [
    {
      numero: "25+",
      label: "Títulos Conquistados",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      numero: "150+",
      label: "Jogadores Formados",
      icon: <Users className="w-8 h-8" />
    },
    {
      numero: "15",
      label: "Anos de História",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      numero: "8",
      label: "Categorias Competitivas",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const jogadoresDestaque = [
    {
      nome: "João Silva",
      categoria: "Sub-17",
      conquista: "Artilheiro do Campeonato Regional 2024",
      gols: "23 gols"
    },
    {
      nome: "Pedro Santos",
      categoria: "Sub-15",
      conquista: "Melhor Jogador da Liga Metropolitana",
      gols: "18 gols"
    },
    {
      nome: "Lucas Oliveira",
      categoria: "Sub-13",
      conquista: "Revelação do Ano 2024",
      gols: "15 gols"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#98C5E9] rounded-full mb-6">
            <Trophy className="w-8 h-8 text-[#001838]" />
          </div>
          <h1 className="text-5xl font-black text-[#001838] mb-4">
            NOSSOS TÍTULOS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma história de conquistas, dedicação e formação de campeões
          </p>
        </div>

        {/* Destaques Numéricos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {destaques.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
              <div className="bg-gradient-to-r from-[#98C5E9] to-[#7FB3D3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#001838] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-[#001838] mb-2">{item.numero}</h3>
              <p className="text-gray-600 font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Títulos Principais */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#001838] mb-12">
            Principais Conquistas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {titulos.map((titulo, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
                <div className={`bg-gradient-to-r ${titulo.color} p-6 text-center`}>
                  <div className="text-white mb-3">
                    {titulo.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{titulo.ano}</h3>
                  <div className="bg-white/20 rounded-full px-4 py-1 inline-block">
                    <span className="text-white font-bold text-sm">{titulo.posicao}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#001838] text-lg leading-tight">
                    {titulo.competicao}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jogadores Destaque */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#001838] mb-12">
            Jogadores em Destaque
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {jogadoresDestaque.map((jogador, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-[#98C5E9] to-[#7FB3D3] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#001838]" />
                </div>
                <h3 className="text-xl font-bold text-[#001838] mb-2">{jogador.nome}</h3>
                <p className="text-[#98C5E9] font-semibold mb-3">{jogador.categoria}</p>
                <p className="text-gray-600 mb-2">{jogador.conquista}</p>
                <div className="bg-[#001838] text-white rounded-full px-4 py-2 inline-block">
                  <span className="font-bold text-sm">{jogador.gols}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#001838] to-[#002a5c] rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <Trophy className="w-16 h-16 text-[#98C5E9] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Seja Parte da Nossa História
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se à família LC Soccer e faça parte da próxima geração de campeões. 
            Venha escrever sua história de sucesso conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-[#98C5E9] hover:bg-[#7FB3D3] text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              FAZER MATRÍCULA
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/estrutura" className="border-2 border-[#98C5E9] text-[#98C5E9] hover:bg-[#98C5E9] hover:text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300">
              CONHECER A ESCOLA
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
