import { useState } from "react";
import { navItems } from "@/core/static";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-900/90">
             <div className="container px-4 md:px-10 mx-auto relative text-sm">
                <div className="flex items-center justify-between">
                    <Logo to="/" />
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index)=> (
                            <li key={index}>
                                {item.href.includes("#") 
                                    ? <a href={item.href}>{item.label}</a> 
                                    : <Link to={item.href}>{item.label}</Link>
                                }
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button type="button" onClick={toggleMobileDrawer}>
                            {mobileDrawerOpen ? <IconX /> : <IconMenu2 />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed top-16 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index)=> (
                                <li key={index} className="py-4 text-center">
                                    {item.href.includes("#") 
                                        ? <a href={item.href}>{item.label}</a> 
                                        : <Link to={item.href}>{item.label}</Link>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
             </div>
        </nav>
    )
}
