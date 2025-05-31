import Image from "next/image"
import familia from "../../public/familia.svg"
import campeao from "../../public/campeao.svg"
import seta from "../../public/seta.svg"
import medalha from "../../public/medalha.svg"

export default function Main(){
    return(
        <main>
            <div className="h-132 w-[100%] bg-cover bg-scroll md:bg-fixed aspect-square bg-center flex items-center flex-col justify-center max-lg:h-132" style={{ backgroundImage: `url(${familia.src})` }}>
                
                <h1 className="text-3xl text-[#001838] font-black text-center tracking-wider mb-6 max-lg:text-2xl max-sm:text-lg">MUITO MAIS QUE UMA ESCOLINHA, UMA FAMÍLIA.</h1>
                <div className="bg-[#001838] w-96 mx-auto rounded-3xl p-2 py-4 text-white hover:bg-white hover:text-[#001838] transition-all duration-300 max-sm:w-64">
                    <h2 className="text-xl font-extrabold text-center max-lg:text-sm">MATRICULE-SE AGORA.</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-20 mb-20 max-lg:grid-cols-1">
                <div className="flex flex-col ml-20 max-lg:ml-0 max-lg:text-center">
                    <h1 className="text-4xl max-w-[80%] font-black tracking-wider text-[#98C5E9] max-lg:text-3xl max-lg:max-w-full">AQUI FORMAMOS <span className="text-[#001838]">CAMPEÕES</span></h1>
                    <hr className="w-[50%] border-2 border-[#98C5E9] my-8 max-lg:mx-auto"></hr>
                    <h1 className="text-2xl max-w-[75%] font-extrabold text-[#001838] max-lg:text-xl max-lg:max-w-full max-lg:mx-20 max-lg:mb-8">No LC trabalhamos para o desenvolvimento coletivo e individual do aluno,sempre buscando lapidar o seu talento.</h1>
                </div>
                <div className="pr-20 max-lg:p-0">
                    <Image src={campeao} alt="campeao" className="h-full border-[#98C5E9] border-solid border-5 rounded-4xl max-lg:mx-auto max-lg:w-[95%]"/>
                </div>
            </div>
            <div className="bg-[#98C5E9] flex flex-row justify-center items-center gap-20 py-10 max-lg:flex-col">
                <Image className="max-lg:w-[60%]" src={seta} alt="seta"/>
                <h1 className="text-4xl max-w-[30%] font-black tracking-wider text-white max-lg:text-2xl max-lg:max-w-full max-lg:text-center">O LUGAR IDEAL PARA O SEU <span className="text-[#001838]">DESENVOLVIMENTO</span></h1>
            </div>

            <div className="grid grid-cols-2 mt-20 mb-20 max-lg:grid-cols-1">
                <div className="pl-20 max-lg:p-0">
                    <Image src={campeao} alt="campeao" className="h-full border-[#98C5E9] border-solid border-5 rounded-4xl max-lg:mx-auto max-lg:w-[95%]"/>
                </div>
                <div className="flex flex-col ml-20 max-lg:ml-0 max-lg:text-center">
                    <h1 className="text-4xl max-w-[80%] font-black tracking-wider text-[#98C5E9] max-lg:text-3xl max-lg:max-w-full">AQUI FORMAMOS <span className="text-[#001838]">CAMPEÕES</span></h1>
                    <hr className="w-[50%] border-2 border-[#98C5E9] my-8 max-lg:mx-auto"></hr>
                    <h1 className="text-2xl max-w-[75%] font-extrabold text-[#001838] max-lg:text-xl max-lg:max-w-full max-lg:mx-20 max-lg:mb-8">No LC trabalhamos para o desenvolvimento coletivo e individual do aluno,sempre buscando lapidar o seu talento.</h1>
                </div>
            </div>

            <div className="bg-[#98C5E9] flex flex-row justify-center items-center gap-20 py-10 max-lg:flex-col">
                <Image className="max-lg:w-[60%]" src={medalha} alt="seta"/>
                <h1 className="text-4xl max-w-[30%] font-black tracking-wider text-white max-lg:text-2xl max-lg:max-w-full max-lg:text-center">O LUGAR IDEAL PARA O SEU <span className="text-[#001838]">DESENVOLVIMENTO</span></h1>
            </div>
        </main>
    )
}