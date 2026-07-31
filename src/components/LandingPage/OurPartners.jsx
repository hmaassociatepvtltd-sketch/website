"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import { Award, ChevronLeft, ChevronRight, ShieldCheck, Zap } from "lucide-react";

export const OurPartners = ({ partnersData = [], ...props }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (!partnersData || partnersData.length === 0) return null;

    return (
        <section className="w-full relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden font-poppins select-none">
            {/* Top & Bottom Seamless Edge Blending Gradients */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-950/90 to-transparent z-10" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent z-10" />

            {/* Ambient Soft Blur Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 space-y-8 relative z-10">
                {/* Header Row with Title & Carousel Arrow Navigation */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg">
                            <Award className="w-4 h-4 text-primary" />
                            <span>Tier-1 Authorized Global Partners</span>
                        </div>

                        {props.title && (
                            <h2
                                data-tina-field={tinaField(props, "title")}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight text-white leading-tight"
                            >
                                {props.title}
                            </h2>
                        )}

                        {props.description && (
                            <p
                                data-tina-field={tinaField(props, "description")}
                                className="text-slate-400 text-sm sm:text-base leading-relaxed"
                            >
                                {props.description}
                            </p>
                        )}
                    </div>

                    {/* Navigation Buttons for Manual Scroll Control */}
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            ref={prevRef}
                            className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/15 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center transition-all duration-300 hover:border-primary/50 active:scale-95 shadow-lg"
                            aria-label="Previous Partners"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            ref={nextRef}
                            className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/15 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center transition-all duration-300 hover:border-primary/50 active:scale-95 shadow-lg"
                            aria-label="Next Partners"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Continuous Infinite Scrolling Carousel Container */}
                <div className="relative w-full py-6 sm:py-8">
                    {/* Left & Right Smooth Edge Fade Overlays */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20" />

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        className="w-full !py-6 !px-2 overflow-visible"
                        slidesPerView={2}
                        spaceBetween={20}
                        speed={3500}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 20 },
                            640: { slidesPerView: 4, spaceBetween: 24 },
                            768: { slidesPerView: 4, spaceBetween: 24 },
                            1024: { slidesPerView: 5, spaceBetween: 28 },
                            1280: { slidesPerView: 5, spaceBetween: 28 },
                        }}
                    >
                        {partnersData.map((item, index) => (
                            <SwiperSlide key={index} className="!h-auto flex items-center justify-center">
                                {/* Semi-Square Squircle Glass Badge Shape Container */}
                                <div className="w-full h-36 sm:h-40 px-6 py-5 rounded-2xl sm:rounded-3xl bg-white hover:bg-slate-50 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center cursor-pointer transition-all duration-300 group hover:scale-[1.03] hover:-translate-y-0.5">
                                    <Image
                                        width={240}
                                        height={100}
                                        className="max-w-[170px] max-h-20 sm:max-h-24 w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        src={item.image}
                                        alt={item.name || `Partner logo ${index + 1}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Highlights Bottom Guarantee Bar */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs sm:text-sm font-medium text-slate-400 border-t border-white/10">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Direct Factory Import & Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span>25-Year Certified Panel Guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    );
};