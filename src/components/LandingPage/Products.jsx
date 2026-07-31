"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { tinaField } from "tinacms/dist/react";
import { 
    ChevronLeft, 
    ChevronRight, 
    ArrowRight, 
    Package, 
    ShieldCheck 
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Products = ({ productsData = [], ...props }) => {
    const [products] = useState(productsData);
    const router = useRouter();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const bgTheme = props?.bgTheme || "light";

    const getThemeStyles = () => {
        switch (bgTheme) {
            case "navy":
                return {
                    section: "bg-[#000322] text-white",
                    subText: "text-gray-300",
                    card: "bg-white/5 border-white/10 hover:border-primary/50 text-white shadow-2xl",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    titleText: "text-white",
                    btnNav: "bg-white/10 border-white/20 text-white hover:bg-primary hover:border-primary",
                };
            case "dark-zinc":
                return {
                    section: "bg-zinc-950 text-white border-y border-zinc-800",
                    subText: "text-gray-400",
                    card: "bg-zinc-900 border-zinc-800 hover:border-primary/50 text-white shadow-xl",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    titleText: "text-white",
                    btnNav: "bg-zinc-800 border-zinc-700 text-white hover:bg-primary hover:border-primary",
                };
            case "gray":
                return {
                    section: "bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white",
                    subText: "text-gray-600 dark:text-gray-400",
                    card: "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:border-primary/50 text-gray-900 dark:text-white shadow-md",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    titleText: "text-gray-900 dark:text-white",
                    btnNav: "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-white hover:bg-primary hover:text-white hover:border-primary",
                };
            case "light":
            default:
                return {
                    section: "bg-white dark:bg-zinc-950 text-gray-900 dark:text-white",
                    subText: "text-gray-600 dark:text-gray-400",
                    card: "bg-gray-50/80 dark:bg-zinc-900/80 border-gray-200/80 dark:border-zinc-800 hover:border-primary/50 text-gray-900 dark:text-white shadow-sm hover:shadow-xl",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    titleText: "text-gray-900 dark:text-white",
                    btnNav: "bg-gray-100 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-white hover:bg-primary hover:text-white hover:border-primary",
                };
        }
    };

    const theme = getThemeStyles();

    return (
        <section className={`w-full py-16 md:py-24 flex justify-center items-center overflow-hidden transition-colors duration-500 ${theme.section}`}>
            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-200/40 dark:border-zinc-800 pb-8">
                    <div className="space-y-3 max-w-2xl">
                        <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins border ${theme.badge}`}>
                            <Package className="w-3.5 h-3.5" />
                            Commercial & Industrial Lineup
                        </span>
                        <h2
                            data-tina-field={tinaField(props, "title")}
                            className={`text-3xl md:text-5xl font-bold font-josefin-sans tracking-tight leading-tight ${theme.titleText}`}
                        >
                            {props.title || "Featured Products"}
                        </h2>
                        <p
                            data-tina-field={tinaField(props, "description")}
                            className={`text-base md:text-lg font-poppins leading-relaxed ${theme.subText}`}
                        >
                            {props.description ||
                                "Explore high-efficiency solar inverters, PV modules, and commercial MEP electrical equipment."}
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            ref={prevRef}
                            className={`p-3.5 rounded-2xl border transition-all duration-300 shadow-sm ${theme.btnNav}`}
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            ref={nextRef}
                            className={`p-3.5 rounded-2xl border transition-all duration-300 shadow-sm ${theme.btnNav}`}
                            aria-label="Next Slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Swiper Products Carousel */}
                <div className="w-full py-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={4}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        loop={true}
                        className="w-full !py-6 !px-2 overflow-visible"
                    >
                        {products?.map((product, index) => {
                            const category = product?._sys?.breadcrumbs?.[0] || "Equipment";

                            return (
                                <SwiperSlide key={index} className="h-full">
                                    <div
                                        onClick={() => {
                                            router.push(`/products/detail/${product._sys.basename}`);
                                        }}
                                        className={`group relative h-full rounded-3xl p-5 border cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-2 flex flex-col justify-between space-y-5 ${theme.card}`}
                                    >
                                        <div className="space-y-4">
                                            {/* Product Cover Image Container */}
                                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white dark:bg-zinc-800/80 p-4 border border-gray-100 dark:border-zinc-700/60 flex items-center justify-center">
                                                <Image
                                                    src={product.coverImage || "/assets/1.png"}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                                    className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110"
                                                />
                                                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold font-poppins bg-gray-900/80 text-white backdrop-blur-md capitalize">
                                                    {category}
                                                </span>
                                            </div>

                                            {/* Product Title */}
                                            <div className="space-y-1">
                                                <h3 className="text-xl font-bold font-josefin-sans tracking-tight line-clamp-1 group-hover:text-primary transition-colors duration-300">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs font-poppins text-muted-foreground line-clamp-2 leading-relaxed">
                                                    Commercial Grade Industrial Equipment
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Link Footer */}
                                        <div className="pt-3 border-t border-gray-200/40 dark:border-zinc-800 flex items-center justify-between">
                                            <span className="text-xs font-semibold font-poppins text-primary group-hover:underline inline-flex items-center gap-1">
                                                View Product Specs
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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