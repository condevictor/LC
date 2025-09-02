'use client'
import Header from "../header.jsx";
import Footer from "../footer.jsx";
import Link from "next/link";
import { Clock, Users, Calendar, ArrowRight } from "lucide-react";

export default function Horarios() {
  const horarios = [
    {
      categoria: "Sub-7 e Sub-9",
      idade: "5 a 9 anos",
      dias: "Segunda, Quarta e Sexta",
      horario: "16:00 às 17:00",
      professor: "Prof. Carlos",
      icon: <Users className="w-6 h-6" />
    },
    {
      categoria: "Sub-11 e Sub-13",
      idade: "10 a 13 anos",
      dias: "Terça, Quinta e Sábado",
      horario: "17:00 às 18:30",
      professor: "Prof. Ricardo",
      icon: <Users className="w-6 h-6" />
    },
    {
      categoria: "Sub-15 e Sub-17",
      idade: "14 a 17 anos",
      dias: "Segunda a Sexta",
      horario: "18:30 às 20:00",
      professor: "Prof. Anderson",
      icon: <Users className="w-6 h-6" />
    },
    {
      categoria: "Adulto",
      idade: "18+ anos",
      dias: "Terça e Quinta",
      horario: "20:00 às 21:30",
      professor: "Prof. Miguel",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#98C5E9] rounded-full mb-6">
            <Clock className="w-8 h-8 text-[#001838]" />
          </div>
          <h1 className="text-5xl font-black text-[#001838] mb-4">
            HORÁRIOS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre o horário perfeito para você ou seu filho começar a jornada no futebol
          </p>
        </div>

        {/* Horários Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {horarios.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="bg-gradient-to-r from-[#98C5E9] to-[#7FB3D3] p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#001838]">{item.categoria}</h3>
                    <p className="text-[#001838]/80 font-semibold">{item.idade}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#98C5E9]" />
                  <span className="font-semibold text-gray-700">{item.dias}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#98C5E9]" />
                  <span className="font-semibold text-gray-700">{item.horario}</span>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">Instrutor:</p>
                  <p className="font-bold text-[#001838]">{item.professor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-[#001838] rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para começar?
            </h2>
            <p className="text-gray-300 mb-8">
              Entre em contato conosco para agendar uma aula experimental gratuita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-[#98C5E9] hover:bg-[#7FB3D3] text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                AGENDAR AULA GRÁTIS
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#001838] font-bold py-4 px-8 rounded-full transition-all duration-300">
                FALAR NO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
