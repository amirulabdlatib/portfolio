"use client";

import { experiences } from "@/data/experinces";

export default function Experience() {
    return (
        <section id="experience" className="relative bg-white py-20 dark:bg-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-zinc-900 sm:text-5xl dark:text-white">Experience</h2>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">My professional journey in software development</p>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-zinc-200 md:left-1/2 dark:bg-zinc-800"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                <div className="absolute left-8 top-0 h-4 w-4 -translate-x-[7px] rounded-full border-4 border-white bg-zinc-900 md:left-1/2 dark:border-zinc-900 dark:bg-white"></div>

                                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
                                        <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{exp.position}</h3>
                                        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{exp.company}</span>
                                            <span className="text-zinc-400">•</span>
                                            <span className="text-zinc-600 dark:text-zinc-400">{exp.period}</span>
                                            <span className="text-zinc-400">•</span>
                                            <span className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{exp.location}</span>
                                        </div>

                                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                            {exp.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                                                    <span>{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
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
