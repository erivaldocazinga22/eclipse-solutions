import { WHATS_JOURNELY } from "@/core/static/whats_journey";
import { IconCircleCheck } from "@tabler/icons-react";

export const WorkflowSection = () => {
    return (
        <div className="">
            <div>
                <h2 id="workflow" className="mt-20 mb-10 text-center text-4xl">
                    Como será sua jornada
                </h2>
                <p className="tracking-wide w-full md:w-1/2 text-center mx-auto text-neutral-500">Acompanhamos cada passo do seu marketing e jornada do cliente, alinhando equipes e otimizando operações para aumentar a eficiência do seu time de vendas.</p>
            </div>
            <div className="flex flex-wrap justify-center">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 w-full ">
                    {WHATS_JOURNELY.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 mx-6 h-10 bg-neutral-900 w-10 p-2 justify-center items-center rounded-full">
                                <IconCircleCheck />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
