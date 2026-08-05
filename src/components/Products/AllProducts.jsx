"use client";

import { useState } from "react";
import { AnimatedHeroSection } from "@/components/LandingPage/AnimatedHeroSection";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Search, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTina, tinaField } from "tinacms/dist/react";

export const AllProducts = ({ groupedProducts = [], title, pageResponse }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const heroTitle = title || "Equipment & Products Catalog";

    // Live Tina editing hook if pageResponse is available
    const tinaData = useTina(pageResponse || { data: null, query: "", variables: {} });
    const animatedHeroBlock = tinaData?.data?.page?.blocks?.find(
        (b) => b?.__typename === "PageBlocksAnimatedHeroSection"
    );

    const defaultHeroSlides = [
        {
            slideHeading: `${heroTitle}`,
            subHeading: "HMA ASSOCIATES (SMC-PRIVATE) LIMITED",
            description: "Explore our certified selection of tier-1 solar PV modules, hybrid & on-grid inverters, LiFePO4 battery storage, and XLPO electrical cabling.",
            backgroundImage: "/11.png",
            buttonText: "Browse Equipment Catalog",
            buttonLink: "#catalog",
            animationType: "fade-zoom"
        }
    ];

    // Filter products based on search query
    const filteredGroupedProducts = groupedProducts.map((group) => {
        if (!searchQuery.trim()) return group;
        const matchingItems = group.items.filter((item) => {
            const nameLower = (item.name || "").toLowerCase();
            const descLower = typeof item.description === "string" ? item.description.toLowerCase() : "";
            const queryLower = searchQuery.toLowerCase();
            return nameLower.includes(queryLower) || descLower.includes(queryLower);
        });
        return { ...group, items: matchingItems };
    }).filter((group) => group.items.length > 0);

    return (
        <div className="w-full bg-slate-50 text-slate-900 font-poppins select-none min-h-screen">
            {/* Animated Hero Section (Tina Editable) */}
            {animatedHeroBlock ? (
                <AnimatedHeroSection {...animatedHeroBlock} />
            ) : (
                <AnimatedHeroSection sectionHeading="Verified Equipment Catalog" slides={defaultHeroSlides} />
            )}

            <div id="catalog" className="w-full relative py-16 md:py-24 overflow-hidden">
                {/* Ambient Soft Lighting Glows */}
                <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-[1260px] mx-auto px-5 xl:px-0 space-y-12 relative z-10">
                    {/* Live Search & Filter Bar (White Glass with Subtle Navy Accents) */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-white/80 border border-slate-200/80 backdrop-blur-xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-1">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span>Certified Solar & MEP Equipment</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-josefin-sans text-slate-900">
                                Solis, GoodWe, Soluna & Tier-1 Panels
                            </h2>
                        </div>

                        {/* Search Input Box */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search inverter, panel, cable..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-100/80 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                            />
                        </div>
                    </div>

                    {/* Product Categories Section */}
                    {filteredGroupedProducts.length > 0 ? (
                        filteredGroupedProducts.map((group, index) => (
                            <Category key={index} group={group} index={index} />
                        ))
                    ) : (
                        <div className="py-20 text-center space-y-4 rounded-3xl bg-white border border-slate-200 shadow-sm">
                            <p className="text-xl font-bold text-slate-700">No equipment matches your search query</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
                            >
                                Clear Search Filter
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Category = ({ group, index }) => {
    const itemCount = group.items?.length || 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="space-y-8"
        >
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/90 pb-5">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-4xl font-bold font-josefin-sans tracking-tight text-slate-900 capitalize">
                        {group.name}
                    </h2>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold font-poppins bg-slate-900 text-white shadow-sm">
                        {itemCount} {itemCount === 1 ? "Model" : "Models"}
                    </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs uppercase font-semibold font-poppins text-slate-500 tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Manufacturer Warranty</span>
                </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items?.map((product, pIndex) => (
                    <Product key={pIndex} product={product} />
                ))}
            </div>
        </motion.div>
    );
};

const Product = ({ product }) => {
    const getShortDescription = (desc) => {
        if (!desc) return "";
        if (typeof desc === "string") {
            return desc.length > 130 ? desc.substring(0, 130) + "..." : desc;
        }
        if (desc.children && Array.isArray(desc.children)) {
            const rawText = desc.children
                .map((child) => child.children?.map((c) => c.text).join("") || "")
                .join(" ");
            return rawText.length > 130 ? rawText.substring(0, 130) + "..." : rawText;
        }
        return "";
    };

    const shortDesc = getShortDescription(product.description);
    const productSlug = product._sys?.basename || "detail";

    return (
        <Link
            href={`/products/detail/${productSlug}`}
            className="group relative rounded-3xl bg-white hover:bg-white border border-slate-200/80 hover:border-primary/40 overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
        >
            {/* Product Photo Container */}
            <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-100">
                {product.coverImage || product.image ? (
                    <Image
                        src={product.coverImage || product.image}
                        alt={product.name || "Product photo"}
                        fill
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                        Equipment Image
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />

                {/* Subtle Navy Badge Tag */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white uppercase tracking-wider shadow-lg flex items-center gap-1">
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>Tier-1 Grade</span>
                    </span>
                </div>
            </div>

            {/* Product Details Content */}
            <div className="p-6 sm:p-8 space-y-4 relative z-20 flex-grow flex flex-col justify-between bg-white">
                <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-josefin-sans text-slate-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {product.name}
                    </h3>
                    {shortDesc && (
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {shortDesc}
                        </p>
                    )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>View Specifications</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary group-hover:text-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    );
};