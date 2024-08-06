export const ContactUs = () => {
    return (
        <section className="w-full sm:w-1/2 lg:w-2/3 mx-auto">
            <div className="my-10">
                <h2 className="mb-5 text-center text-4xl">
                    Fale Conosco
                </h2>
                <p className="text-center text-neutral-500">Preencha os campos abaixo e veja, na prática, o que podemos fazer pelo crescimento da sua empresa e do seu time de vendas.</p>
            </div>
            <div className="flex flex-col gap-4">
                <input type="text" id="name" placeholder="Digite o seu primeiro e último nome" 
                    className="px-3 py-2 rounded-md"
                />
                <input type="email" id="email" placeholder="jonhdoe@exmplo.com" 
                    className="px-3 py-2 rounded-md"
                />
                <input type="tel" id="telemevel" placeholder="999-999-999" 
                    className="px-3 py-2 rounded-md"
                />
                <textarea name="" id="message" placeholder="Escreva uma mensagem aqui" 
                    className="px-3 py-2 rounded-md resize-none min-h-32 h-full"
                />
                <button type="submit" className="mt-5 px-3 py-2 rounded-md bg-lime-500 text-neutral-900">Enviar</button>
            </div>
        </section>
    )
}
