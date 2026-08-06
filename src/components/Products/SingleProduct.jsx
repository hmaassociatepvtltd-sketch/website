"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Button } from "@/components/ui/Button";
import { components } from "@/components/ui/MarkdownComponents";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ChevronRight, 
    ShieldCheck, 
    Truck, 
    Wrench, 
    Award, 
    CheckCircle2, 
    Maximize2, 
    Share2, 
    Check, 
    PhoneCall, 
    FileText 
} from "lucide-react";

export const SingleProduct = ({ product }) => {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState("description");

    if (!product) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col justify-center items-center py-20">
                <h2 className="text-2xl font-bold font-josefin-sans">Product Not Found</h2>
                <Link href="/products" className="mt-4 text-primary underline font-poppins">
                    Return to All Products
                </Link>
            </div>
        );
    }

    const productName = product?.name || "Premium Engineering Equipment";
    const categoryBreadcrumb = product?._sys?.breadcrumbs?.[0] || "Equipment";

    // Robust Image Fallback Resolution
    const fallbackImage = product?.coverImage || product?.image || "/products/Inverex-Nitrox-10-KW-3Ph-On-Grid-Solar-Inverter.jpg";
    let images = [];
    if (product?.images && product.images.length > 0) {
        images = product.images.map((img) =>
            typeof img === "string"
                ? { image: img, alt: productName }
                : img?.image
                ? img
                : { image: fallbackImage, alt: productName }
        );
    } else {
        images = [{ image: fallbackImage, alt: productName }];
    }

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="w-full bg-slate-50/50 dark:bg-zinc-950 min-h-screen pt-28 pb-24">
            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 space-y-12">
                {/* Breadcrumbs Navigation */}
                <nav className="flex items-center gap-2 text-sm font-poppins text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/products" className="hover:text-primary transition-colors">
                        Products
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="capitalize text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                        {categoryBreadcrumb}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-primary font-semibold truncate max-w-[180px] sm:max-w-none">
                        {productName}
                    </span>
                </nav>

                {/* Main Product Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white dark:bg-zinc-900 p-6 md:p-10 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-xl">
                    {/* Left Column: Interactive Image Gallery Showcase */}
                    <div className="lg:col-span-7 w-full">
                        <ImagesShowcase images={images} productName={productName} />
                    </div>

                    {/* Right Column: Key Details & Quick Actions */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Title & Badge */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between gap-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-poppins bg-primary/10 text-primary border border-primary/20">
                                    Commercial Grade Solar & MEP
                                </span>
                                <button
                                    onClick={handleShare}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 hover:text-primary transition-colors relative"
                                    title="Share product link"
                                >
                                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                                </button>
                            </div>

                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-josefin-sans tracking-tight text-gray-900 dark:text-white leading-tight">
                                {productName}
                            </h1>
                        </div>

                        {/* Short Summary Description */}
                        {product.description && (
                            <div className="prose dark:prose-invert text-base font-poppins text-gray-600 dark:text-gray-300 leading-relaxed border-t border-b border-gray-100 dark:border-zinc-800/80 py-5">
                                <TinaMarkdown components={components} content={product.description} />
                            </div>
                        )}

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-3 pt-1">
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800">
                                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                                <div className="text-xs font-poppins">
                                    <p className="font-semibold text-gray-900 dark:text-white">Certified Equipment</p>
                                    <p className="text-gray-500 dark:text-gray-400">100% Tested Quality</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800">
                                <Wrench className="w-5 h-5 text-primary shrink-0" />
                                <div className="text-xs font-poppins">
                                    <p className="font-semibold text-gray-900 dark:text-white">Expert Engineering</p>
                                    <p className="text-gray-500 dark:text-gray-400">On-site Support</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3 pt-2">
                            <div className="w-full">
                                <Button link="/quotation" variant="gradient-glow" className="w-full justify-center text-center">
                                    Request Official Quote
                                </Button>
                            </div>
                            <Link
                                href="tel:+923097778006"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-900 dark:text-white font-poppins font-medium text-sm transition-all duration-200"
                            >
                                <PhoneCall className="w-4 h-4 text-primary" />
                                <span>Speak with Technical Advisor</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tabs & Detailed Specs Section */}
                {product.detailDescription && product.detailDescription.children?.length > 0 && (
                    <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-xl space-y-8">
                        {/* Tab Headers */}
                        <div className="flex items-center gap-6 border-b border-gray-200 dark:border-zinc-800">
                            <button
                                onClick={() => setActiveTab("description")}
                                className={`pb-4 text-lg font-bold font-josefin-sans transition-all relative ${
                                    activeTab === "description"
                                        ? "text-primary"
                                        : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                }`}
                            >
                                Full Specifications & Details
                                {activeTab === "description" && (
                                    <motion.div
                                        layoutId="tab-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    />
                                )}
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="prose dark:prose-invert max-w-none text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-normal break-words space-y-3">
                            <TinaMarkdown components={components} content={product.detailDescription} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ImagesShowcase = ({ images, productName }) => {
    const [showImageIndex, setShowImageIndex] = useState(0);
    const [selectedLightbox, setSelectedLightbox] = useState(null);

    if (!images || images.length === 0) {
        return (
            <div className="w-full aspect-square rounded-3xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-muted-foreground font-poppins">
                No product images available
            </div>
        );
    }

    const activeImage = images[showImageIndex];

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Main Stage Image Display */}
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 dark:bg-zinc-800 border border-gray-200/80 dark:border-zinc-700/80 group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={showImageIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            alt={activeImage.alt || productName}
                            src={activeImage.image}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-contain p-6"
                            priority
                            unoptimized={typeof activeImage.image === "string" && (activeImage.image.startsWith("http://") || activeImage.image.startsWith("https://"))}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Expand Lightbox Button */}
                <button
                    onClick={() => setSelectedLightbox(activeImage.image)}
                    className="absolute bottom-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg text-gray-700 dark:text-gray-200 hover:text-primary transition-all group-hover:scale-105"
                    title="View Fullscreen"
                >
                    <Maximize2 className="w-5 h-5" />
                </button>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
                    {images.map((img, index) => {
                        const isActive = showImageIndex === index;
                        return (
                            <button
                                key={index}
                                onClick={() => setShowImageIndex(index)}
                                className={`relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${
                                    isActive
                                        ? "border-primary shadow-md scale-105"
                                        : "border-gray-200 dark:border-zinc-800 opacity-60 hover:opacity-100"
                                }`}
                            >
                                <Image
                                    alt={img.alt || `Thumbnail ${index + 1}`}
                                    src={img.image}
                                    fill
                                    sizes="80px"
                                    className="object-cover"
                                />
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Lightbox Modal */}
            {selectedLightbox && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    onClick={() => setSelectedLightbox(null)}
                >
                    <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
                        <Image
                            src={selectedLightbox}
                            alt="Expanded product photo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
