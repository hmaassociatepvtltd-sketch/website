"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { tinaField } from "tinacms/dist/react";
import { Quote, Star, UserCircle2 } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Testimonials = (props) => {
    const rawItems = props?.items || [];
    const bgTheme = props?.bgTheme || "navy";
    
    // Theme options handler
    const getThemeStyles = () => {
        switch (bgTheme) {
            case "dark-zinc":
                return {
                    section: "bg-zinc-950 text-white border-y border-zinc-800",
                    headerBorder: "border-zinc-800",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    card: "bg-zinc-900 border-zinc-800 hover:border-primary/40 text-white",
                    messageText: "text-gray-300",
                    titleText: "text-white",
                    authorSub: "text-gray-400",
                    cardDivider: "border-zinc-800",
                };
            case "gray":
                return {
                    section: "bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white",
                    headerBorder: "border-gray-300 dark:border-zinc-800",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    card: "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:border-primary/40 text-gray-900 dark:text-white shadow-lg",
                    messageText: "text-gray-600 dark:text-gray-300",
                    titleText: "text-gray-900 dark:text-white",
                    authorSub: "text-gray-500 dark:text-gray-400",
                    cardDivider: "border-gray-100 dark:border-zinc-700",
                };
            case "light":
                return {
                    section: "bg-white dark:bg-zinc-950 text-gray-900 dark:text-white",
                    headerBorder: "border-gray-200 dark:border-zinc-800",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    card: "bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:border-primary/40 text-gray-900 dark:text-white shadow-md",
                    messageText: "text-gray-700 dark:text-gray-300",
                    titleText: "text-gray-900 dark:text-white",
                    authorSub: "text-gray-500 dark:text-gray-400",
                    cardDivider: "border-gray-200 dark:border-zinc-800",
                };
            case "navy":
            default:
                return {
                    section: "bg-[#000322] text-white",
                    headerBorder: "border-white/10",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    card: "bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/40 text-white shadow-2xl",
                    messageText: "text-gray-200",
                    titleText: "text-white",
                    authorSub: "text-gray-400",
                    cardDivider: "border-white/10",
                };
        }
    };

    const theme = getThemeStyles();

    // Fallback demonstration items if empty
    const testimonials = rawItems.length > 0 ? rawItems : [
        {
            name: "Engr. Tariq Mahmood",
            position: "Chief Project Manager",
            company: "Industrial Power Corp",
            message: "HMA Associates delivered our 1.5MW Industrial Solar System on schedule. Their MEP engineering expertise and safety standards were outstanding.",
            rating: 5,
        },
        {
            name: "Dr. Sarah Khan",
            position: "Operations Director",
            company: "Apex Healthcare",
            message: "Exceptional quality solar solution. Reduced our grid electricity costs by over 70% within the first quarter. Truly professional service.",
            rating: 5,
        },
        {
            name: "Bilal Hassan",
            position: "Facility Lead",
            company: "Logistics Hub",
            message: "Seamless execution from preliminary feasibility study to final commissioning. Highly recommend HMA for large-scale energy projects.",
            rating: 5,
        },
    ];

    return (
        <section className={`w-full relative py-20 md:py-28 overflow-hidden flex justify-center items-center transition-colors duration-500 ${theme.section}`}>
            {/* Background Ambient Glows */}
            {bgTheme === "navy" && (
                <>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
                </>
            )}

            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-14 relative z-10">
                {/* Header */}
                <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b pb-8 ${theme.headerBorder}`}>
                    <div className="space-y-3 max-w-2xl">
                        <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins border ${theme.badge}`}>
                            <Quote className="w-3.5 h-3.5" />
                            Client Testimonials & Case Studies
                        </span>
                        <h2
                            data-tina-field={tinaField(props, "title")}
                            className={`text-3xl md:text-5xl font-bold font-josefin-sans tracking-tight leading-tight ${theme.titleText}`}
                        >
                            {props.title || "Trusted by Industry Leaders"}
                        </h2>
                        <p
                            data-tina-field={tinaField(props, "description")}
                            className={`text-base md:text-lg font-poppins leading-relaxed ${theme.messageText}`}
                        >
                            {props.description ||
                                "Discover how our Solar & MEP Engineering solutions empower commercial enterprises and utility projects."}
                        </p>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={3}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        className="w-full pb-12"
                    >
                        {testimonials.map((item, index) => {
                            const rating = item.rating || 5;

                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        data-tina-field={tinaField(item, "name")}
                                        className={`h-full min-h-[340px] p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1.5 ${theme.card}`}
                                    >
                                        <div className="space-y-4">
                                            {/* Quote Icon & Rating Stars */}
                                            <div className="flex items-center justify-between">
                                                <Quote className="w-8 h-8 text-primary opacity-80 group-hover:scale-110 transition-transform duration-300" />
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${
                                                                i < rating
                                                                    ? "text-amber-400 fill-amber-400"
                                                                    : "text-gray-400 dark:text-gray-600"
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <p
                                                data-tina-field={tinaField(item, "message")}
                                                className={`text-sm md:text-base font-poppins leading-relaxed italic ${theme.messageText}`}
                                            >
                                                "{item.message}"
                                            </p>
                                        </div>

                                        {/* Customer Author Info */}
                                        <div className={`flex items-center gap-4 pt-4 border-t ${theme.cardDivider}`}>
                                            {item.avatar ? (
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/40 shrink-0">
                                                    <Image
                                                        src={item.avatar}
                                                        alt={item.name || "Customer photo"}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                                    <UserCircle2 className="w-7 h-7" />
                                                </div>
                                            )}

                                            <div className="space-y-0.5 min-w-0">
                                                <h4
                                                    data-tina-field={tinaField(item, "name")}
                                                    className={`font-bold font-josefin-sans text-lg truncate ${theme.titleText}`}
                                                >
                                                    {item.name}
                                                </h4>
                                                <p
                                                    data-tina-field={tinaField(item, "position")}
                                                    className={`text-xs font-poppins truncate ${theme.authorSub}`}
                                                >
                                                    {item.position}
                                                    {item.company && ` • ${item.company}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};