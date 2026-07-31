"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { Button } from "@/components/ui/Button";
import { 
    ChevronRight, 
    ShieldCheck, 
    Users, 
    Puzzle, 
    Wand2, 
    Globe, 
    Sun, 
    Zap 
} from "lucide-react";

// Helper for rendering uploaded image icon or preset SVG/lucide icon
const renderIcon = (item) => {
    if (item?.iconImage) {
        return (
            <Image 
                src={item.iconImage} 
                alt={item.title || "Service icon"} 
                width={36} 
                height={36} 
                className="w-9 h-9 object-contain"
            />
        );
    }

    switch (item?.iconName) {
        case "google":
            return (
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V13.4h6.887c-.58 3.407-3.418 5.67-6.887 5.67-4.212 0-7.654-3.443-7.654-7.656 0-4.212 3.442-7.654 7.654-7.654 1.954 0 3.738.74 5.097 1.953l2.368-2.368C17.766 1.83 15.174 1 12.24 1 6.032 1 1 6.033 1 12.24s5.032 11.24 11.24 11.24c6.489 0 11.026-4.568 11.026-11.026 0-.74-.08-1.458-.2-2.169H12.24z" />
                </svg>
            );
        case "shield":
            return <ShieldCheck className="w-7 h-7" />;
        case "users":
            return <Users className="w-7 h-7" />;
        case "puzzle":
            return <Puzzle className="w-7 h-7" />;
        case "design":
            return <Wand2 className="w-7 h-7" />;
        case "globe":
            return <Globe className="w-7 h-7" />;
        case "sun":
            return <Sun className="w-7 h-7" />;
        case "zap":
        default:
            return <Zap className="w-7 h-7" />;
    }
};

export const ModernServices = ({ servicesData = [], ...props }) => {
    const rawItems = props.items && props.items.length > 0 ? props.items : servicesData;
    
    const items = rawItems.length > 0 ? rawItems : [
        {
            title: "Google Ads",
            description: "Effortlessly streamline your energy and utility management with automated analytics tracking.",
            linkText: "Learn more",
            link: "/services",
            iconName: "google",
            featured: true,
        },
        {
            title: "Social Media",
            description: "Effortlessly streamline your energy and utility management with automated analytics tracking.",
            linkText: "Learn more",
            link: "/services",
            iconName: "shield",
            featured: false,
        },
        {
            title: "Human Resources",
            description: "Effortlessly streamline your energy and utility management with automated analytics tracking.",
            linkText: "Learn more",
            link: "/services",
            iconName: "users",
            featured: false,
        },
        {
            title: "Project Management",
            description: "Effortlessly streamline your energy and utility management with automated analytics tracking.",
            linkText: "Learn more",
            link: "/services",
            iconName: "puzzle",
            featured: false,
        },
        {
            title: "Design",
            description: "Effortlessly streamline your energy and utility management with automated analytics tracking.",
            linkText: "Learn more",
            link: "/services",
            iconName: "design",
            featured: false,
        },
        {
            title: "Search Optimization",
            description: "Effortlessly streamline your energy and utility management with automated analytics tracking.",
            linkText: "Learn more",
            link: "/services",
            iconName: "globe",
            featured: false,
        },
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-gray-50/60 dark:bg-zinc-950 flex justify-center items-center">
            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-3 max-w-[720px]">
                        <h2
                            data-tina-field={tinaField(props, "heading")}
                            className="text-4xl md:text-5xl font-bold font-josefin-sans tracking-tight text-gray-900 dark:text-white"
                        >
                            {props.heading || "Our Services"}
                        </h2>
                        <p
                            data-tina-field={tinaField(props, "subHeading")}
                            className="text-base md:text-lg font-poppins text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                            {props.subHeading ||
                                "Unleashing Comprehensive Solar & Energy Engineering Services Tailored to Elevate Your Power Efficiency."}
                        </p>
                    </div>

                    {props.buttonText && (
                        <div data-tina-field={tinaField(props, "buttonText")}>
                            <Button link={props.buttonLink || "/#contact"} variant={props.buttonStyle || "gradient-glow"}>
                                {props.buttonText}
                            </Button>
                        </div>
                    )}
                </div>

                {/* 3D Tilting Navy Blue Hover Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
                    {items.map((item, index) => {
                        const isFeatured = item.featured;

                        return (
                            <div
                                key={index}
                                data-tina-field={tinaField(item, "title")}
                                className={`group relative rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ease-out transform hover:-rotate-1 hover:scale-[1.03] flex flex-col justify-between border shadow-md hover:shadow-2xl hover:border-primary/40 ${
                                    isFeatured
                                        ? "bg-secondary-background text-white border-secondary-background shadow-2xl"
                                        : "bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border-gray-100 dark:border-zinc-800 hover:bg-secondary-background hover:text-white"
                                }`}
                            >
                                {/* Service Card Header Image */}
                                {item.image && (
                                    <div className="relative w-full h-[200px] overflow-hidden bg-gray-100 dark:bg-zinc-800">
                                        <Image
                                            src={item.image}
                                            alt={item.title || "Service cover image"}
                                            fill
                                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                    </div>
                                )}

                                <div className="p-8 flex flex-col justify-between flex-1 space-y-8">
                                    <div className="space-y-6">
                                        {/* Icon Container */}
                                        <div
                                            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                                                isFeatured
                                                    ? "bg-white/10 text-white"
                                                    : "bg-primary/10 text-primary group-hover:bg-white/10 group-hover:text-white"
                                            }`}
                                        >
                                            {renderIcon(item)}
                                        </div>

                                        {/* Title & Description */}
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold font-josefin-sans tracking-tight group-hover:text-white transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p
                                                className={`text-sm font-poppins leading-relaxed transition-colors duration-300 ${
                                                    isFeatured
                                                        ? "text-gray-300"
                                                        : "text-gray-600 dark:text-gray-400 group-hover:text-gray-200"
                                                }`}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Link */}
                                    <Link
                                        href={item.link || `/services/${item.title?.toLowerCase().replace(/\s+/g, '-')}`}
                                        className={`inline-flex items-center text-sm font-semibold font-poppins tracking-wide transition-colors duration-300 ${
                                            isFeatured
                                                ? "text-emerald-400 hover:text-emerald-300"
                                                : "text-primary dark:text-white group-hover:text-emerald-400"
                                        }`}
                                    >
                                        <span>{item.linkText || "Learn more"}</span>
                                        <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
