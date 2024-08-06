import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Layout() {
    return (
        <div>
            <div className="fixed top-0 -z-10 h-full w-full">
				<div className="absolute top-0 z-[-2] min-h-screen h-full w-screen bg-neutral-50 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(190,242,100,0.08),rgba(255,255,255,0))]"></div>
			</div>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}


/* <div className="fixed top-0 -z-10 h-full w-full">
				<div className="absolute top-0 z-[-2] min-h-screen h-full w-screen bg-neutral-50 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(190,242,100,0.08),rgba(255,255,255,0))]"></div>
			</div> 
            
            <div className="flex-col mx-auto px-8">
                <Outlet />
                <Footer />
            </div>
            */