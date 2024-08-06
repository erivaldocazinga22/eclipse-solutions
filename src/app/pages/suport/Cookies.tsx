import { ShoreBalance } from "@/app/components/Suport/ShoreBalance";
import { useCookiesPolicy } from "@/core/static/suport";

export default function Cookies() {
    return (
        <div>
            <ShoreBalance />
            <h1 className="mt-8 mb-14 text-center text-5xl tracking-wide">
                Política de Cookies
			</h1>
            <div className="w-full sm:w-1/2 lg:w-2/3 mx-auto space-y-10">
                {useCookiesPolicy.map((cookie, index) => (
                    <div key={index} className="space-y-4">
                        <span className="inline-block w-16 h-3 rounded-lg bg-lime-500"></span>
                        <h3 className="text-2xl font-medium tracking-wide">{cookie.title}</h3>
                        <p className="font-light tracking-wide text-neutral-300">{cookie.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
