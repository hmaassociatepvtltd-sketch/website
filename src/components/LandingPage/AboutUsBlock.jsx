"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { 
    ShieldCheck, 
    Sun, 
    Cpu, 
    Building2, 
    CheckCircle2, 
    ArrowRight, 
    Award,
    Sparkles,
    Target,
    Zap,
    Users
} from "lucide-react";

export const AboutUsBlock = (props) => {
    // Editable props with rich defaults for HMA Associates
    const badgeText = props?.badgeText || "About HMA Associates";
    const heading = props?.heading || "Empowering Pakistan's Infrastructure & Renewable Future";
    const description = props?.description || "HMA Associates (SMC-Private) Limited is a premier engineering, construction, and renewable energy enterprise in Pakistan. PEC-licensed C1 constructor and AEDB certified solar provider, we combine technical mastery with top-tier equipment to build reliable infrastructure, power industrial facilities, and drive energy independence.";
    
    const image = props?.image || "/hrui_AdobeStock_276818517_RV.jpg";
    const buttonText = props?.buttonText || "Learn More About Us";
    const buttonLink = props?.buttonLink || "/about";

    // Spacing classes
    const ptClass = props.paddingTop || "pt-16 md:pt-24";
    const pbClass = props.paddingBottom || "pb-16 md:pb-24";
    const pxClass = props.paddingX || "px-5 xl:px-0";
    const mtClass = props.marginTop || "";
    const mbClass = props.marginBottom || "";

    const defaultStats = [
        { value: "PEC C1", label: "Licensed Constructor", icon: ShieldCheck },
        { value: "AEDB & PPIB", label: "Certified Installer", icon: Sun },
        { value: "100%", label: "Zero Hidden Costs", icon: CheckCircle2 },
        { value: "Turnkey", label: "MEP & Construction", icon: Building2 },
    ];

    const defaultPillars = [
        {
            title: "Solar Power Solutions",
            desc: "Utility-scale & commercial net-metered solar plants with Tier-1 panels and hybrid inverters.",
            icon: Sun,
        },
        {
            title: "MEP Engineering",
            desc: "Industrial electrical systems, HVAC design, high-voltage substations, and mechanical piping.",
            icon: Cpu,
        },
        {
            title: "Civil Construction",
            desc: "Turnkey structural engineering, commercial plazas, industrial warehouses, and infrastructure.",
            icon: Building2,
        },
    ];

    return (
        <section className={`w-full ${ptClass} ${pbClass} ${mtClass} ${mbClass} relative overflow-hidden bg-gradient-to-b from-slate-50/90 via-background to-slate-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 select-none`}>
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none opacity-60" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none opacity-50" />

            <div className={`max-w-[1260px] w-full mx-auto ${pxClass} relative z-10`}>
                
                {/* Header Badge & Title */}
                <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
                    <span 
                        data-tina-field={tinaField(props, "badgeText")}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-poppins uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 shadow-sm backdrop-blur-md"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{badgeText}</span>
                    </span>

                    <h2 
                        data-tina-field={tinaField(props, "heading")}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans text-foreground tracking-tight leading-tight"
                    >
                        {heading}
                    </h2>

                    <p 
                        data-tina-field={tinaField(props, "description")}
                        className="text-base sm:text-lg font-poppins text-muted-foreground leading-relaxed"
                    >
                        {description}
                    </p>
                </div>

                {/* Main Content Grid: Left Image Frame with Badges | Right Story & Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left Column: Visual Showcase Frame */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-sky-500/20 to-blue-600/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="relative w-full h-[380px] sm:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/40 dark:border-zinc-800 bg-zinc-900">
                            {image && (
                                <Image
                                    data-tina-field={tinaField(props, "image")}
                                    src={image}
                                    alt="HMA Associates About Us"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Top Badge Overlay */}
                            <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold font-poppins flex items-center gap-2 shadow-lg">
                                <Award className="w-4 h-4 text-amber-400" />
                                <span>HMA Associates (SMC-Pvt) Ltd</span>
                            </div>

                            {/* Bottom Glass Card Overlay */}
                            <div className="absolute bottom-5 left-5 right-5 z-20 p-5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/40 dark:border-zinc-700/60 shadow-2xl flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary font-poppins">Engineering Excellence</span>
                                    <h4 className="text-sm sm:text-base font-bold font-josefin-sans text-foreground leading-snug">PEC C1 & AEDB Tier-1 Certified</h4>
                                </div>
                                <div className="p-2.5 rounded-xl bg-primary text-white shrink-0 shadow-md">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Corporate Pillars & Values */}
                    <div className="lg:col-span-7 space-y-6">
                        
                        <div className="space-y-3">
                            <h3 className="text-xl sm:text-2xl font-bold font-josefin-sans text-foreground">
                                Our Core Specializations & Services
                            </h3>
                            <p className="text-sm font-poppins text-muted-foreground leading-relaxed">
                                We pride ourselves on delivering end-to-end engineering, procurement, and construction (EPC) solutions with total transparency and zero hidden costs.
                            </p>
                        </div>

                        {/* Specializations Stack */}
                        <div className="space-y-3">
                            {defaultPillars.map((pillar, idx) => {
                                const IconComp = pillar.icon;
                                return (
                                    <div 
                                        key={idx}
                                        className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                                    >
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm sm:text-base font-bold font-josefin-sans text-foreground">
                                                {pillar.title}
                                            </h4>
                                            <p className="text-xs sm:text-sm font-poppins text-muted-foreground leading-relaxed">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom CTA Button */}
                        {buttonText && (
                            <div className="pt-2">
                                <Link
                                    data-tina-field={tinaField(props, "buttonText")}
                                    href={buttonLink}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-poppins font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/25 active:scale-95"
                                >
                                    <span>{buttonText}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        )}

                    </div>

                </div>

                {/* Key Corporate Metrics Grid Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-border/60">
                    {defaultStats.map((stat, idx) => {
                        const IconComp = stat.icon;
                        return (
                            <div 
                                key={idx}
                                className="p-4 rounded-2xl bg-white/60 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 text-center flex flex-col items-center space-y-1 shadow-sm"
                            >
                                <IconComp className="w-5 h-5 text-primary mb-1" />
                                <span className="text-xl sm:text-2xl font-bold font-josefin-sans text-foreground tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="text-xs font-medium font-poppins text-muted-foreground">
                                    {stat.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
