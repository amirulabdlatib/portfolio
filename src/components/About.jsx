"use client";

import { Download, Github, Linkedin } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-white dark:bg-zinc-950 md:ml-11">
            {/* Meteor Animation Container - Behind on mobile, beside on desktop */}
            <div className="absolute inset-0 -z-10 md:left-1/2 md:right-0 md:z-0">
                {/* Meteors */}
                <div className="meteor meteor-1"></div>
                <div className="meteor meteor-2"></div>
                <div className="meteor meteor-3"></div>
                <div className="meteor meteor-4"></div>
                <div className="meteor meteor-5"></div>
                <div className="meteor meteor-6"></div>

                {/* Gradient orbs for ambiance */}
                <div className="absolute right-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-zinc-300/20 blur-3xl dark:bg-zinc-700/30" />
                <div className="absolute bottom-1/3 right-1/3 h-96 w-96 animate-pulse rounded-full bg-zinc-200/30 blur-3xl delay-1000 dark:bg-zinc-800/30" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-32">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="relative z-10 space-y-6 text-center md:space-y-8 md:text-left">
                        <div className="inline-block animate-fade-in">
                            <span className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-5 py-2 text-md font-medium text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                <span>Open to new opportunities</span>
                            </span>
                        </div>

                        <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight text-zinc-900 delay-100 sm:text-5xl md:text-6xl lg:text-5xl dark:text-white font-mono">Amirul Abd Latib</h1>

                        <div className="animate-fade-in-up delay-200">
                            <div className="overflow-hidden">
                                <div className="roles-container text-xl font-semibold text-zinc-700 sm:text-2xl md:text-3xl lg:text-4xl dark:text-zinc-300">
                                    <div className="role">Web Developer</div>
                                    <div className="role">Fullstack Developer</div>
                                    <div className="role">Software Developer</div>
                                    <div className="role">PHP Laravel Developer</div>
                                    <div className="role">Web Developer</div>
                                </div>
                            </div>
                        </div>

                        <p className="animate-fade-in-up mx-auto max-w-lg text-base leading-relaxed text-zinc-600 delay-300 sm:text-lg md:mx-0 dark:text-zinc-400">
                            Building reliable software applications to drive measurable business outcomes and accelerate growth.
                        </p>

                        <div className="flex animate-fade-in-up flex-col justify-center gap-3 delay-400 sm:flex-row md:justify-start md:gap-4">
                            <a
                                href="/resume.pdf"
                                download="Amirul_Abd_Latib_Resume.pdf"
                                className="group flex items-center justify-center space-x-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
                                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1 sm:h-5 sm:w-5" />
                                <span>Resume</span>
                            </a>

                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const projectsSection = document.querySelector("#projects");
                                    if (projectsSection) {
                                        const offset = 80;
                                        const elementPosition = projectsSection.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth",
                                        });
                                    }
                                }}
                                className="flex items-center justify-center space-x-2 rounded-full border-2 border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-zinc-400 hover:bg-white hover:shadow-xl sm:px-8 sm:py-4 sm:text-base dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white dark:hover:border-zinc-600 dark:hover:bg-zinc-900">
                                <span>View Projects</span>
                            </a>
                        </div>
                        <div className="flex animate-fade-in-up items-center justify-center gap-3 delay-500 md:justify-start md:gap-4">
                            <a
                                href="https://github.com/amirulabdlatib"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-full border border-zinc-300 bg-white/80 p-2.5 text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#181717] hover:bg-[#181717] hover:text-white sm:p-3 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-[#181717]"
                                aria-label="GitHub">
                                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/amirulabdlatib"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-full border border-zinc-300 bg-white/80 p-2.5 text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:p-3 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-[#0A66C2] dark:hover:bg-[#0A66C2]"
                                aria-label="LinkedIn">
                                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>

                            <a
                                href="https://www.kaggle.com/amirulabdlatib"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-full border border-zinc-300 bg-white/80 p-2.5 text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#20BEFF] hover:bg-[#20BEFF] hover:text-white sm:p-3 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-[#20BEFF] dark:hover:bg-[#20BEFF] dark:hover:text-white"
                                aria-label="Kaggle">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes meteor-fall {
                    0% {
                        opacity: 0;
                        top: -10%;
                        transform: translateX(0) rotate(-45deg);
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: 110%;
                        transform: translateX(-300px) rotate(-45deg);
                    }
                }

                @keyframes role-rotate {
                    0%,
                    20% {
                        transform: translateY(0);
                    }
                    25%,
                    45% {
                        transform: translateY(-100%);
                    }
                    50%,
                    70% {
                        transform: translateY(-200%);
                    }
                    75%,
                    95% {
                        transform: translateY(-300%);
                    }
                    100% {
                        transform: translateY(-400%);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out both;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out both;
                }

                .delay-100 {
                    animation-delay: 0.1s;
                }

                .delay-200 {
                    animation-delay: 0.2s;
                }

                .delay-300 {
                    animation-delay: 0.3s;
                }

                .delay-400 {
                    animation-delay: 0.4s;
                }

                .delay-500 {
                    animation-delay: 0.5s;
                }

                .delay-1000 {
                    animation-delay: 1s;
                }

                .meteor {
                    position: absolute;
                    width: 2px;
                    height: 100px;
                    background: linear-gradient(to bottom, rgba(39, 39, 42, 0) 0%, rgba(39, 39, 42, 0.8) 50%, rgba(39, 39, 42, 0) 100%);
                    animation: meteor-fall linear infinite;
                    opacity: 0;
                }

                :global(.dark) .meteor {
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
                }

                .meteor::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 2px;
                    height: 100px;
                    background: linear-gradient(to bottom, rgba(39, 39, 42, 0) 0%, rgba(39, 39, 42, 0.4) 50%, rgba(39, 39, 42, 0) 100%);
                    transform: translateX(-50%);
                    filter: blur(1px);
                }

                :global(.dark) .meteor::before {
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
                }

                .meteor-1 {
                    right: 20%;
                    animation-duration: 3s;
                    animation-delay: 0s;
                }

                .meteor-2 {
                    right: 40%;
                    animation-duration: 4s;
                    animation-delay: 1s;
                }

                .meteor-3 {
                    right: 60%;
                    animation-duration: 3.5s;
                    animation-delay: 2s;
                }

                .meteor-4 {
                    right: 10%;
                    animation-duration: 4.5s;
                    animation-delay: 0.5s;
                }

                .meteor-5 {
                    right: 50%;
                    animation-duration: 3.8s;
                    animation-delay: 1.5s;
                }

                .meteor-6 {
                    right: 30%;
                    animation-duration: 4.2s;
                    animation-delay: 2.5s;
                }

                .roles-container {
                    height: 1.5em;
                    line-height: 1.5em;
                    position: relative;
                }

                .roles-container > div {
                    animation: role-rotate 10s ease-in-out infinite;
                }

                .role {
                    height: 1.5em;
                    line-height: 1.5em;
                }

                @media (max-width: 1023px) {
                    .meteor {
                        opacity: 0.3;
                    }
                }
            `}</style>
        </section>
    );
}
