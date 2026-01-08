"use client";

import { projects } from "@/data/projects";
import { useState } from "react";

export default function Project() {
    const [activeTab, setActiveTab] = useState("professional");

    const tabs = [
        { id: "professional", label: "Professional" },
        { id: "freelance", label: "Freelance" },
        { id: "hobby", label: "Hobby" },
    ];

    return (
        <section id="projects" className="relative bg-zinc-50 py-20 dark:bg-zinc-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-zinc-900 sm:text-5xl dark:text-white">Projects</h2>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">A showcase of my work across different domains</p>
                </div>

                <div className="mx-auto mb-12 max-w-4xl">
                    <div className="flex flex-wrap justify-start gap-2 rounded-2xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:text-base ${
                                    activeTab === tab.id ? "bg-zinc-900 text-white shadow-lg dark:bg-white dark:text-zinc-900" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects[activeTab].map((project, index) => (
                            <div key={index} className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                                <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
                                <div>
                                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span key={techIndex} className="rounded-lg bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
