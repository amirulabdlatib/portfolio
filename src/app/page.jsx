import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <About />
                <Experience />
                <Project />
            </main>
            <Footer />
        </>
    );
}
