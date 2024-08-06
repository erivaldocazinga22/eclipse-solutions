import { FrequentlyAskedQuestions } from "@/core/static/FAQ"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export const FAQ = () => {
    return (
        <div className="mb-20">
            <h2 className="my-10 text-center text-4xl">
                Perguntas Frequentes <span className="bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 text-transparent bg-clip-text"> (FAQ)</span>
			</h2>
            <Accordion type="single" collapsible className="w-full md:w-2/3 mx-auto">
                {FrequentlyAskedQuestions.map(FAQ => (
                    <AccordionItem key={FAQ.id} value={FAQ.id} className="border-zinc-900">
                        <AccordionTrigger className="text-white text-left text-base tracking-wide font-light">{FAQ.question}</AccordionTrigger>
                        <AccordionContent className="text-zinc-400 text-left text-base">{FAQ.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
