"use client";

import React, { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { 
    ChevronLeft, 
    ChevronRight, 
    ArrowUpRight, 
    Package, 
    Cpu,
    Battery,
    Sun,
    Layers
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// Safe text renderer for string or TinaCMS rich text objects
const renderContent = (content, fallback = "") => {
    if (!content) return fallback;
    if (typeof content === "string") return content;
    if (typeof content === "object" && (content.children || content.type)) {
        return <TinaMarkdown content={content} />;
    }
    return fallback;
};

export const Products = ({ productsData = [], ...props }) => {
    const [products] = useState(productsData);
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    const router = useRouter();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Extract categories & counts dynamically
    const categories = useMemo(() => {
        const counts = {};
        products?.forEach((p) => {
            const cat = (p?._sys?.breadcrumbs?.[0] || "Equipment").toLowerCase();
            counts[cat] = (counts[cat] || 0) + 1;
        });

        const list = [{ name: "all", count: products?.length || 0 }];
        Object.keys(counts).forEach((cat) => {
            list.push({ name: cat, count: counts[cat] });
        });
        return list;
    }, [products]);

    // Filter products based on selected category tab
    const filteredProducts = useMemo(() => {
        if (selectedCategory === "all") return products;
        return products.filter(
            (p) => p?._sys?.breadcrumbs?.[0]?.toLowerCase() === selectedCategory
        );
    }, [products, selectedCategory]);

    const getCategoryIcon = (catName) => {
        switch (catName.toLowerCase()) {
            case "inverters":
                return <Cpu className="w-4 h-4" />;
            case "batteries":
                return <Battery className="w-4 h-4" />;
            case "panels":
            case "solar":
                return <Sun className="w-4 h-4" />;
            default:
                return <Layers className="w-4 h-4" />;
        }
    };

    return (
        <section className="relative w-full py-20 md:py-28 bg-slate-50/90 dark:bg-zinc-950 text-foreground overflow-hidden border-y border-border/40 select-none">
            {/* Ambient Background Glow Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-80 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-sky-400/15 rounded-full blur-[130px] pointer-events-none opacity-60" />

            <div className="max-w-[1260px] w-full mx-auto px-5 xl:px-0 relative z-10 space-y-12 md:space-y-16">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/25 shadow-sm backdrop-blur-md">
                        <Package className="w-4 h-4 text-primary" />
                        <span>Commercial & Industrial Lineup</span>
                    </span>

                    <h2
                        data-tina-field={tinaField(props, "title")}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold font-josefin-sans tracking-tight leading-[1.1]"
                    >
                        {props.title && typeof props.title === "string" ? (
                            props.title
                        ) : (
                            <>
                                <span>Featured </span>
                                <span className="bg-gradient-to-r from-blue-700 via-primary to-sky-500 bg-clip-text text-transparent">
                                    Equipment Showroom
                                </span>
                            </>
                        )}
                    </h2>

                    <div
                        data-tina-field={tinaField(props, "description")}
                        className="text-base sm:text-lg font-poppins text-muted-foreground leading-relaxed max-w-2xl"
                    >
                        {renderContent(
                            props.description,
                            "Explore high-efficiency solar inverters, PV modules, and commercial MEP electrical equipment."
                        )}
                    </div>
                </div>

                {/* CATEGORY TABS & CAROUSEL CONTROLS */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/50 pb-6">
                    {/* Category Filter Pills with Item Count Badges */}
                    <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0">
                        {categories.map((cat, idx) => {
                            const isActive = selectedCategory === cat.name;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold font-poppins capitalize transition-all duration-300 cursor-pointer flex items-center gap-2 shrink-0 ${
                                        isActive
                                            ? "bg-primary text-white shadow-md shadow-primary/25"
                                            : "bg-white dark:bg-zinc-900 text-muted-foreground border border-slate-200/80 dark:border-zinc-800 hover:text-foreground hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    }`}
                                >
                                    {getCategoryIcon(cat.name)}
                                    <span>{cat.name}</span>
                                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                                        isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-zinc-800 text-muted-foreground"
                                    }`}>
                                        {cat.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Slider Navigation Buttons */}
                    <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
                        <button
                            ref={prevRef}
                            className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm cursor-pointer"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            ref={nextRef}
                            className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm cursor-pointer"
                            aria-label="Next Slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* SWIPER INTERACTIVE PRODUCT GRID */}
                <div className="w-full">
                    <Swiper
                        key={selectedCategory}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={4}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
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
                        loop={filteredProducts.length >= 4}
                        className="w-full !py-4 overflow-visible"
                    >
                        {filteredProducts?.map((product, index) => {
                            const category = product?._sys?.breadcrumbs?.[0] || "Equipment";

                            return (
                                <SwiperSlide key={index} className="!h-auto flex flex-col">
                                    <div
                                        onClick={() => router.push(`/products/detail/${product._sys.basename}`)}
                                        className="group relative w-full h-full rounded-[2rem] p-5 border cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-2 flex flex-col justify-between space-y-4 bg-white dark:bg-zinc-900/90 border-slate-200/80 dark:border-zinc-800 hover:border-primary/50 shadow-lg hover:shadow-xl"
                                    >
                                        <div className="space-y-4 flex-1 flex flex-col justify-between">
                                            {/* Product Cover Image Pedestal Frame */}
                                            <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-slate-50 dark:bg-zinc-800/90 p-4 border border-slate-100 dark:border-zinc-700/60 flex items-center justify-center shadow-inner shrink-0">
                                                <Image
                                                    src={product.coverImage || product.image || "/assets/1.png"}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                                    className="object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-110"
                                                />

                                                {/* Floating Category Badge */}
                                                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold font-poppins bg-slate-900/90 text-white backdrop-blur-md capitalize tracking-wide shadow-md flex items-center gap-1">
                                                    {getCategoryIcon(category)}
                                                    <span>{category}</span>
                                                </span>
                                            </div>

                                            {/* Product Title Block with Fixed Minimum Height for Equal Line Alignment */}
                                            <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                                                <h4 className="text-lg font-bold font-josefin-sans tracking-tight line-clamp-2 leading-snug min-h-[3.25rem] flex items-center group-hover:text-primary transition-colors duration-300">
                                                    {product.name}
                                                </h4>
                                                <p className="text-xs font-poppins text-muted-foreground line-clamp-1">
                                                    Tier-1 Certified Industrial Unit
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Link Footer */}
                                        <div className="pt-3 border-t border-border/50 flex items-center justify-between shrink-0">
                                            <span className="text-xs font-semibold font-poppins text-primary group-hover:underline flex items-center gap-1">
                                                View Product Details
                                            </span>
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                                                <ArrowUpRight className="w-4 h-4" />
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