"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react";

const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Tools", href: "#tools" },
    { name: "Projects", href: "#projects" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const whatsappLink = "https://wa.me/601164134572?text=Hi%20Amirul%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.";

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 shadow-lg shadow-black/5 transition-all duration-500 dark:bg-black/50 dark:shadow-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="group relative z-10 text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105 md:text-2xl">
                            <span className="bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-white">Amirul</span>
                            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-zinc-900 to-zinc-600 transition-all duration-300 group-hover:w-full dark:from-white dark:to-zinc-400" />
                        </a>

                        <div className="hidden items-center space-x-1 md:flex lg:space-x-2">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="group relative px-3 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white lg:px-4 lg:text-base"
                                    style={{
                                        animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`,
                                    }}
                                >
                                    {item.name}
                                    <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 bg-zinc-900 transition-transform duration-300 group-hover:scale-x-100 dark:bg-white lg:inset-x-4" />
                                </a>
                            ))}

                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="ml-2 rounded-full p-2 text-zinc-700 transition-all duration-300 hover:bg-zinc-200/50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/50 dark:hover:text-white lg:ml-4"
                                aria-label="Toggle theme"
                                style={{
                                    animation: "fadeInDown 0.5s ease-out 0.5s both",
                                }}
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 flex items-center space-x-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-lg dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 lg:ml-4 lg:px-6 lg:text-base"
                                style={{
                                    animation: "fadeInDown 0.5s ease-out 0.6s both",
                                }}
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>Contact</span>
                            </a>
                        </div>

                        <div className="flex items-center space-x-2 md:hidden">
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="rounded-full p-2 text-zinc-700 transition-all duration-300 hover:bg-zinc-200/50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                            <button onClick={toggleMenu} className="rounded-lg p-2 text-zinc-700 transition-all duration-300 hover:bg-zinc-200/50 dark:text-zinc-300 dark:hover:bg-zinc-800/50" aria-label="Toggle menu">
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`overflow-hidden transition-all duration-500 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="space-y-1 border-t border-zinc-200/50 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-black/95">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-700 transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
                                style={{
                                    animation: isOpen ? `slideInRight 0.3s ease-out ${index * 0.05}s both` : "none",
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 flex items-center justify-center space-x-2 rounded-lg bg-zinc-900 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                            style={{
                                animation: isOpen ? "slideInRight 0.3s ease-out 0.25s both" : "none",
                            }}
                        >
                            <MessageCircle className="h-5 w-5" />
                            <span>Contact Me</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Spacer */}
            <div className="h-16 md:h-20" />

            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
