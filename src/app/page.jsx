import Navbar from "@/components/Navbar";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <About />
                <TechStack />
                <Project />
            </main>
            <Footer />
        </>
    );
}
