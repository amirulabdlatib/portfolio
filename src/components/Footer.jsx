"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const whatsappLink = "https://wa.me/601164134572?text=Hi%20Amirul%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.";

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/amirulabdlatib",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/amirulabdlatib",
        },
        {
            name: "Email",
            icon: Mail,
            url: "mailto:amirulal73@gmail.com",
        },
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
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

    return (
        <footer className="relative bg-white py-12 dark:bg-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div>
                            <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">Amirul Abd Latib</h3>
                            <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Fullstack Developer building reliable software applications to drive business outcomes.</p>
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <MapPin className="h-4 w-4" />
                                <span>Kuala Lumpur, Malaysia</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Connect</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full border border-zinc-300 bg-zinc-100 p-3 text-zinc-700 transition-all duration-300 hover:scale-110 hover:border-zinc-400 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-white dark:hover:text-zinc-900"
                                            aria-label={social.name}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    );
                                })}
                            </div>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <div className="my-8 border-t border-zinc-200 dark:border-zinc-800"></div>

                    <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 md:flex-row dark:text-zinc-400">
                        <p>&copy; {new Date().getFullYear()} Amirul Abd Latib. All rights reserved.</p>
                        <p>Built with Next.js & Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
