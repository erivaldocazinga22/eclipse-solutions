import { ContactUs } from "../components/About/ContactUs";
import HistorySection from "../components/About/HistorySection";

export default function About() {
    return (
        <div>
            <h1 className="my-10 text-center text-4xl">
                Sobre Nós <span className="bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 text-transparent bg-clip-text"> (Eclipse Solutions)</span>
			</h1>
            <HistorySection />
            <ContactUs />
        </div>
    )
}
