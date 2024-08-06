import { Link } from "react-router-dom";
import logo from "/logo-short.png";

type LogoProps = {
    to: string
}

export const Logo = ({ to }: LogoProps) => {
    return (
        <Link to={to}>
            <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                <span className="text-xl tracking-tight">Eclipse Solutions</span>
            </div>
        </Link>
    )
}
