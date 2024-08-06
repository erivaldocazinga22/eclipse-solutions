import { IconChevronsDown } from "@tabler/icons-react";

export const HeroSection = () => {
    const ToDown = () => window.scrollBy({ top: window.innerHeight - 80, behavior: "smooth" });

    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Transformando Ideias em
                <span className="bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 text-transparent bg-clip-text"> Realidade Digital</span>
            </h1>
            <p className="mt-10 text-sm sm:text-lg text-center text-neutral-500 max-w-4xl">
                Conectamos Criatividade e Tecnologia para Transformar Sua Visão em Experiências Memoráveis. Soluções Personalizadas em Marketing Digital, Desenvolvimento Web e Design Gráfico para Fazer sua Empresa Brilhar no Mundo Online.
            </p>
            <div className="flex my-10 justify-center">
                <a href="#" className="py-2 px-3 text-center rounded-md border hover:border-lime-500 mx-3 hover:text-neutral-900 hover:bg-lime-500 transition duration-200">
                    Conversar com o especialista
                </a>
            </div>
            <div>
                <button type="button" onClick={ToDown} className="w-12 h-12 flex items-center justify-center border rounded-full animate-bounce">
                    <IconChevronsDown size={32} stroke={1} />
                </button>
            </div>
            
        </div>
    )
}
