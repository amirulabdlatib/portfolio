"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { techCategories } from "@/data/techCategories";

export default function TechStack() {
    return (
        <section className="relative bg-zinc-50 py-20 overflow-hidden dark:bg-zinc-900">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-zinc-200/30 blur-3xl dark:bg-zinc-800/30" />
                <div className="absolute right-0 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-zinc-300/20 blur-3xl delay-1000 dark:bg-zinc-700/30" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-zinc-900 sm:text-5xl dark:text-white">Tech Stack</h2>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">Technologies I use to build modern web applications</p>
                </div>

                <div className="mx-auto max-w-6xl space-y-12">
                    {techCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="group">
                            <h3 className="mb-6 text-center text-xl font-semibold text-zinc-800 dark:text-zinc-200">{category.category}</h3>

                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={20}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{
                                    delay: 2500 + categoryIndex * 500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                        spaceBetween: 25,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        spaceBetween: 30,
                                    },
                                    1280: {
                                        slidesPerView: 7,
                                        spaceBetween: 35,
                                    },
                                }}
                                className="tech-swiper"
                            >
                                {category.techs.map((tech, techIndex) => (
                                    <SwiperSlide key={techIndex}>
                                        <div className="group/card relative flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
                                            <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-zinc-100 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover/card:opacity-100 dark:from-zinc-800" />
                                            <div className="relative h-12 w-12 transition-transform duration-300 group-hover/card:scale-110">
                                                <Image src={tech.logo} alt={tech.name} width={48} height={48} className="h-full w-full object-contain" loading="lazy" />
                                            </div>
                                            <span className="text-center text-xs font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .tech-swiper {
                    padding-bottom: 50px !important;
                }

                .tech-swiper .swiper-pagination {
                    bottom: 10px !important;
                }

                .tech-swiper .swiper-pagination-bullet {
                    background: rgb(161 161 170);
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .tech-swiper .swiper-pagination-bullet-active {
                    background: rgb(24 24 27);
                    opacity: 1;
                    transform: scale(1.2);
                }

                .dark .tech-swiper .swiper-pagination-bullet {
                    background: rgb(161 161 170);
                }

                .dark .tech-swiper .swiper-pagination-bullet-active {
                    background: rgb(250 250 250);
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </section>
    );
}
