import { navItems, SociaisLinks, suportLinks } from "@/core/static";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-900">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4">Eclipse Solutions</h3>    
                    <p>
                        <span className="text-sm line-clamp-3 text-justify">Fundada em 2024, nossa agência nasceu com a visão de se tornar a líder em marketing digital para pequenas e médias empresas em Angola. Com uma equipe qualificada e apaixonada, estamos prontos para transformar suas ideias em realidade digital.</span>
                        <Link to="/about" className="text-sm cursor-pointer text-lime-200 hover:text-lime-400">ver mais</Link>
                    </p>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Menu</h3>
                    <ul>
                        {navItems.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-white">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Suporte</h3>
                    <ul>
                        {suportLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-white">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Redes Sociais</h3>
                    <ul>
                        {SociaisLinks.map(({ label, href, icon: IconLogo}, index) => (
                            <li key={index}>
                                <Link to={href} className="flex items-center text-neutral-300 hover:text-white">
                                    <IconLogo size={24} stroke={1.5} /> &nbsp;
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div className="mt-10 flex flex-col items-center justify-center">
                    <p>
                        <a href="mailto:contato@eclipse-solutions.com" className="text-neutral-300 hover:text-white">contato@eclipse-solutions.com</a>
                    </p>
                    <p>
                        <a href="tel:+244 912 345 678" className="text-neutral-300 hover:text-white">+244 912 345 678</a>
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <p className="text-center font-light text-neutral-400">&copy;By <a href="/" className="hover:text-lime-100 hover:underline">Eclipse Solutions</a>, 2024. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
