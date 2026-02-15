"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, MessageCircle, FolderGit2, Home, Code2 } from "lucide-react";

const navItems = [
    { name: "About", href: "#about", icon: Home },
    // { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const handleNavClick = (e, href) => {
        e.preventDefault();

        const el = document.querySelector(href);
        if (!el) return;

        const offset = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: y, behavior: "smooth" });
    };

    const whatsappLink = "https://wa.me/601164134572?text=Hi%20Amirul%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.";

    return (
        <>
            <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
                <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200/50 bg-white/70 px-2 py-2 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-black/60">
                    {/* Nav items */}
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.name}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="
                                    group flex items-center justify-center
                                    rounded-full
                                    p-2.5
                                    text-zinc-700
                                    transition
                                    hover:bg-zinc-900 hover:text-white
                                    dark:text-zinc-300
                                    dark:hover:bg-white dark:hover:text-zinc-900
                                    md:px-4 md:py-2 md:gap-2
                                "
                                aria-label={item.name}
                                title={item.name}
                            >
                                <Icon className="h-5 w-5 md:h-4 md:w-4 opacity-80 group-hover:opacity-100" />

                                {/* Text only on desktop */}
                                <span className="hidden md:inline text-sm font-medium">{item.name}</span>
                            </button>
                        );
                    })}

                    {/* Theme toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="
                            rounded-full
                            p-2.5
                            text-zinc-700
                            transition
                            hover:bg-zinc-200/60
                            dark:text-zinc-300
                            dark:hover:bg-zinc-800/60
                        "
                        aria-label="Toggle theme"
                        title="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5 md:h-4 md:w-4" /> : <Moon className="h-5 w-5 md:h-4 md:w-4" />}
                    </button>

                    {/* Contact CTA */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex items-center justify-center
                            rounded-full
                            bg-zinc-900
                            p-2.5
                            text-white
                            transition
                            hover:scale-105 hover:bg-zinc-800
                            dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100
                            md:px-5 md:py-2 md:gap-2
                        "
                        aria-label="Contact"
                        title="Contact"
                    >
                        <MessageCircle className="h-5 w-5 md:h-4 md:w-4" />
                        <span className="hidden md:inline text-sm font-semibold">Contact</span>
                    </a>
                </div>
            </nav>
        </>
    );
}
