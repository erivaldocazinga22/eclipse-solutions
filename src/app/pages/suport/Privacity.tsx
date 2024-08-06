import { ShoreBalance } from "@/app/components/Suport/ShoreBalance";
import { usePrivacyPolicy } from "@/core/static/suport";

export default function Privacity() {
    return (
        <div>
            <ShoreBalance />
            <h1 className="mt-8 mb-14 text-center text-5xl tracking-wide">
                Política de Privacidade
			</h1>
            <div className="w-full sm:w-1/2 lg:w-2/3 mx-auto space-y-10">
                {usePrivacyPolicy.map((privacity, index) => (
                    <div key={index} className="space-y-4">
                        <span className="inline-block w-16 h-3 rounded-lg bg-lime-500"></span>
                        <h3 className="text-2xl font-medium tracking-wide">{privacity.title}</h3>
                        <p className="font-light tracking-wide text-neutral-300">{privacity.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
