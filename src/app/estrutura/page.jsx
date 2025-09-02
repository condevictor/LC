'use client'
import Header from "../header.jsx";
import Footer from "../footer.jsx";
import Link from "next/link";
import { Building, MapPin, Wifi, Car, Users, Zap, Shield, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Estrutura() {
  const facilidades = [
    {
      icon: <Building className="w-8 h-8" />,
      titulo: "Campo Oficial",
      descricao: "Campo de futebol society com grama sintética de alta qualidade"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titulo: "Segurança 24h",
      descricao: "Monitoramento completo com câmeras e segurança presencial"
    },
    {
      icon: <Car className="w-8 h-8" />,
      titulo: "Estacionamento",
      descricao: "Área de estacionamento gratuita e coberta para os pais"
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Vestiários",
      descricao: "Vestiários masculino e feminino com chuveiros e armários"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      titulo: "Wi-Fi Grátis",
      descricao: "Internet gratuita para toda a família durante os treinos"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      titulo: "Iluminação LED",
      descricao: "Sistema de iluminação moderno para treinos noturnos"
    }
  ];

  const numeros = [
    { numero: "2000m²", label: "Área Total" },
    { numero: "150+", label: "Alunos Ativos" },
    { numero: "8", label: "Professores" },
    { numero: "15", label: "Anos de Experiência" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#98C5E9] rounded-full mb-6">
            <Building className="w-8 h-8 text-[#001838]" />
          </div>
          <h1 className="text-5xl font-black text-[#001838] mb-4">
            NOSSA ESTRUTURA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma infraestrutura completa e moderna para o desenvolvimento do futebol
          </p>
        </div>

        {/* Números */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {numeros.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <h3 className="text-3xl font-black text-[#001838] mb-2">{item.numero}</h3>
                <p className="text-gray-600 font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facilidades */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#001838] mb-12">
            Nossas Facilidades
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilidades.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <div className="bg-gradient-to-r from-[#98C5E9] to-[#7FB3D3] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#001838] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001838] mb-3">{item.titulo}</h3>
                <p className="text-gray-600">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galeria de Fotos Simulada */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#001838] mb-12">
            Conheça Nosso Espaço
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative h-64 bg-gradient-to-br from-[#98C5E9] to-[#7FB3D3] rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="font-semibold">Foto {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Localização */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#98C5E9] rounded-full mb-4">
              <MapPin className="w-8 h-8 text-[#001838]" />
            </div>
            <h2 className="text-3xl font-bold text-[#001838] mb-4">Localização</h2>
            <p className="text-gray-600 mb-6">
              Estamos localizados em uma área de fácil acesso, com transporte público próximo
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#001838] mb-4">LC Soccer School</h3>
            <p className="text-gray-700 mb-2">Rua do Futebol, 123 - Centro</p>
            <p className="text-gray-700 mb-6">São Paulo - SP, 01234-567</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-[#001838] hover:bg-[#002a5c] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                COMO CHEGAR
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-[#001838] text-[#001838] hover:bg-[#001838] hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                VER NO MAPS
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
