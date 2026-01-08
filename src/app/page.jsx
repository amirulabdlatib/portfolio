import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
                <Hero />
                <Experience />
                <Project />
            </main>
            <Footer />
        </>
    );
}
