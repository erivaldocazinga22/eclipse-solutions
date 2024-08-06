import { IconCircleCheck } from "@tabler/icons-react";
import { servicesOptions } from "@/core/static";

export const ServicesSection = () => {
    return (
        <div className="mt-20">
            <h2 id="services" className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Seviços
            </h2>
            <div className="flex flex-wrap">
                {servicesOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-3xl mb-8">
                                {option.title}
                                {option.title === "Desenvolvimento Web" && (
                                    <span className="bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 text-transparent bg-clip-text">
                                        {" "}(Mais Popular)
                                    </span>
                                )}
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <IconCircleCheck />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:text-neutral-900 hover:bg-lime-500 border border-lime-500 rounded-lg transition duration-200">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
