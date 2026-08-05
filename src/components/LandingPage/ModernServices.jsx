"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";
import { 
    ShieldCheck, 
    Users, 
    Sun, 
    Zap, 
    Building2, 
    CheckCircle2, 
    ArrowRight,
    Award,
    ChevronRight,
    Check
} from "lucide-react";

const getServiceDetails = (title = "") => {
    const lower = title.toLowerCase();
    if (lower.includes("construction")) {
        return {
            badge: "PEC C1 Licensed Constructor",
            stat: "100+ Commercial Projects",
            features: [
                "Turnkey Commercial & Residential Infrastructure",
                "Structural Design & Structural Integrity Audits",
                "Sustainable Architecture & Green Engineering",
                "Strict Adherence to Building Codes & Standards"
            ]
        };
    }
    if (lower.includes("mep")) {
        return {
            badge: "Industrial & MEP Engineering",
            stat: "99.9% Power Efficiency",
            features: [
                "HVAC Systems & Heavy Machinery Wiring",
                "High-Voltage Power Distribution Grids",
                "Fire Fighting & Safety Protection Systems",
                "Smart Facility Energy Management & Audits"
            ]
        };
    }
    if (lower.includes("solar")) {
        return {
            badge: "AEDB & PPIB Certified Installer",
            stat: "50+ Megawatts Installed",
            features: [
                "Tier-1 Bifacial Solar Panel Deployments",
                "Commercial & Industrial Net Metering Integration",
                "High-Efficiency Hybrid Energy Storage Systems",
                "24/7 Smart Remote Performance Monitoring"
            ]
        };
    }
    return {
        badge: "Certified Engineering Enterprise",
        stat: "10+ Years Excellence",
        features: [
            "End-to-End Engineering Solutions",
            "Licensed & Certified Operations",
            "Sustainable Infrastructure Design",
            "Comprehensive Warranty & Maintenance"
        ]
    };
};

export const ModernServices = ({ servicesData = [], ...props }) => {
    const rawItems = props.items && props.items.length > 0 ? props.items : servicesData;
    
    const items = rawItems.length > 0 ? rawItems : [
        {
            title: "Solar Power Solutions",
            description: "Tier-1 AEDB/PPIB certified solar power engineering, hybrid & on-grid installations, and commercial energy storage solutions tailored to drastically reduce power bills.",
            linkText: "Explore Solar Solutions",
            link: "/services/Solar-Solutions",
            image: "/Clean_the_Dirt_202603311401.png",
            iconName: "sun",
            featured: true,
        },
        {
            title: "Construction Services",
            description: "PEC C1 licensed turnkey construction services delivering robust infrastructure, commercial developments, and modern sustainable architecture across Pakistan.",
            linkText: "Explore Construction",
            link: "/services/Construction-Services",
            image: "/11-Tips-for-Effective-Construction-Site-Management-Procore-Blog-Hero--768x384.png",
            iconName: "shield",
            featured: false,
        },
        {
            title: "MEP Services",
            description: "Safe, efficient, and optimized electrical distribution, HVAC, and mechanical engineering for industrial and commercial facilities.",
            linkText: "Explore MEP",
            link: "/services/MEP-Services",
            image: "/photo-1621905251189-08b45d6a269e.avif",
            iconName: "users",
            featured: false,
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const activeService = items[activeTab] || items[0];
    const activeDetails = getServiceDetails(activeService?.title);

    return (
        <section className="relative w-full py-20 md:py-28 bg-slate-50/80 dark:bg-zinc-950 text-foreground overflow-hidden border-y border-border/40 select-none">
            {/* Ambient Background Lighting Orbs */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-80 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-sky-400/15 rounded-full blur-[130px] pointer-events-none opacity-60" />
            
            {/* Subtle Grid Accent Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="max-w-[1260px] w-full mx-auto px-5 xl:px-0 relative z-10 space-y-12 md:space-y-16">
                {/* Centerpiece Header */}
                <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/25 shadow-sm backdrop-blur-md">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>Core Engineering Capabilities</span>
                    </span>

                    <h2
                        data-tina-field={tinaField(props, "heading")}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold font-josefin-sans tracking-tight leading-[1.1]"
                    >
                        <span>Our Core </span>
                        <span className="bg-gradient-to-r from-blue-700 via-primary to-sky-500 bg-clip-text text-transparent">
                            Engineering Services
                        </span>
                    </h2>

                    {props.subHeading && (
                        <div
                            data-tina-field={tinaField(props, "subHeading")}
                            className="text-base sm:text-lg font-poppins text-muted-foreground leading-relaxed max-w-2xl"
                        >
                            {typeof props.subHeading === "string" ? (
                                props.subHeading
                            ) : (
                                <TinaMarkdown content={props.subHeading} />
                            )}
                        </div>
                    )}
                </div>

                {/* Interactive Split Showcase Banner Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Interactive Service Selector Tabs */}
                    <div className="lg:col-span-5 space-y-3">
                        <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground px-2">Select Service to Explore</p>
                        
                        <div className="space-y-3">
                            {items.map((item, idx) => {
                                const isActive = idx === activeTab;
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === "Enter" && setActiveTab(idx)}
                                        className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                                            isActive
                                                ? "bg-white dark:bg-zinc-900 border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                                                : "bg-white/60 dark:bg-zinc-900/60 border-border/60 hover:bg-white dark:hover:bg-zinc-900 hover:border-primary/40"
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Icon Circle */}
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                isActive
                                                    ? "bg-primary text-white shadow-md shadow-primary/30"
                                                    : "bg-primary/10 text-primary group-hover:bg-primary/20"
                                            }`}>
                                                {idx === 0 && <Sun className="w-6 h-6" />}
                                                {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                                                {idx === 2 && <Users className="w-6 h-6" />}
                                            </div>

                                            <div>
                                                <h3 className={`text-lg font-bold font-josefin-sans transition-colors ${
                                                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                                                }`}>
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs font-poppins text-muted-foreground line-clamp-1 mt-0.5">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                                            isActive ? "text-primary translate-x-1" : "text-muted-foreground/60 group-hover:text-primary"
                                        }`} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Featured Hero Card Showcase */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white dark:bg-zinc-900 rounded-[2.2rem] overflow-hidden border border-border/80 shadow-2xl flex flex-col justify-between"
                            >
                                {/* Top Image Container */}
                                {activeService?.image && (
                                    <div className="relative w-full h-[300px] sm:h-[360px] overflow-hidden bg-slate-950">
                                        <Image
                                            src={activeService.image}
                                            alt={activeService.title || "Service showcase"}
                                            fill
                                            priority
                                            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                        {/* Top Left Credential Badge */}
                                        <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-white/20 text-foreground text-xs font-bold font-poppins flex items-center gap-2 shadow-lg">
                                            <Award className="w-4 h-4 text-primary" />
                                            <span>{activeDetails.badge}</span>
                                        </div>

                                        {/* Top Right Stat Chip */}
                                        <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-primary/90 text-white text-xs font-semibold font-poppins shadow-lg">
                                            <span>{activeDetails.stat}</span>
                                        </div>

                                        {/* Bottom Left Title Overlay */}
                                        <div className="absolute bottom-5 left-6 right-6 z-20 text-white">
                                            <h3 className="text-2xl sm:text-3xl font-bold font-josefin-sans drop-shadow-md">
                                                {activeService.title}
                                            </h3>
                                        </div>
                                    </div>
                                )}

                                {/* Content Details Panel */}
                                <div className="p-6 sm:p-8 space-y-6">
                                    <p className="text-sm sm:text-base font-poppins text-muted-foreground leading-relaxed">
                                        {activeService?.description}
                                    </p>

                                    {/* Features Checklist */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                        {activeDetails.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2.5">
                                                <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                                                    <Check className="w-3.5 h-3.5" />
                                                </div>
                                                <span className="text-xs sm:text-sm font-medium font-poppins text-foreground">
                                                    {feat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Footer Action Button */}
                                    <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                                        <Link
                                            href={activeService.link || `/services/${activeService.title?.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-poppins font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/25 active:scale-95"
                                        >
                                            <span>{activeService.linkText || "Explore Service"}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>

                                        <span className="text-xs font-poppins text-muted-foreground">
                                            Need a custom proposal? <Link href="/#contact" className="text-primary underline font-medium">Get in Touch</Link>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Callout Button */}
                {props.buttonText && (
                    <div className="flex justify-center pt-4" data-tina-field={tinaField(props, "buttonText")}>
                        <Button link={props.buttonLink || "/#contact"} variant={props.buttonStyle || "primary-arrow"}>
                            {props.buttonText}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};


