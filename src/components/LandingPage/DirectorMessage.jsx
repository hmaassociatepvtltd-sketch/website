"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { 
    Quote, 
    ShieldCheck, 
    Sun, 
    Cpu, 
    Building2, 
    CheckCircle2, 
    ArrowRight, 
    Award
} from "lucide-react";

export const DirectorMessage = (props) => {
    // Editable props with sensible defaults
    const directorName = props?.directorName || "Haseeb Almas";
    const directorTitle = props?.directorTitle || "Director, HMA Associates (SMC-Pvt) Ltd";
    const badgeText = props?.badgeText || "Director's Message";
    const message = props?.message || "We are committed to providing top-quality services by offering best-in-class equipment with no hidden costs while ensuring your total satisfaction across all Solar Power, MEP Engineering, and Turnkey Construction services.";
    const secondaryMessage = props?.secondaryMessage || "We look forward to helping you achieve energy independence and lowering operational costs with the added benefit of making a lasting positive environmental impact.";
    const image = props?.image || props?.directorImage;
    const buttonText = props?.buttonText || "Get Pricing";
    const buttonLink = props?.buttonLink || "/quotation";

    // Handle tags (can be array or comma-separated string)
    const rawTags = props?.tags;
    const tagsList = useMemo(() => {
        if (Array.isArray(rawTags)) return rawTags;
        if (typeof rawTags === "string" && rawTags.trim()) {
            return rawTags.split(",").map((t) => t.trim());
        }
        return ["Solar Solutions", "MEP Engineering", "Turnkey Construction", "Zero Hidden Costs"];
    }, [rawTags]);

    const getTagIcon = (tagStr) => {
        const lower = tagStr.toLowerCase();
        if (lower.includes("solar")) return <Sun className="w-3.5 h-3.5 text-amber-500" />;
        if (lower.includes("mep") || lower.includes("engineer")) return <Cpu className="w-3.5 h-3.5 text-blue-500" />;
        if (lower.includes("construct") || lower.includes("civil")) return <Building2 className="w-3.5 h-3.5 text-sky-500" />;
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />;
    };

    const ptClass = props.paddingTop || "pt-10 sm:pt-14";
    const pbClass = props.paddingBottom || "pb-10 sm:pb-14";
    const pxClass = props.paddingX || "";
    const mtClass = props.marginTop || "";
    const mbClass = props.marginBottom || "";

    return (
        <section className={`w-full ${ptClass} ${pbClass} ${pxClass} ${mtClass} ${mbClass} border-y border-border/40 bg-slate-50/70 dark:bg-zinc-950/80 font-poppins relative overflow-hidden select-none`}>
            {/* Ambient Accent Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[130px] pointer-events-none opacity-70" />

            {/* Background Quote Watermark */}
            <div className="absolute top-3 right-8 text-primary/10 dark:text-primary/15 pointer-events-none">
                <Quote size={110} strokeWidth={1} />
            </div>

            <div className="max-w-[1260px] w-full mx-auto px-5 xl:px-0 relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                    
                    {/* Left Director Info Block */}
                    <div className="flex items-center gap-4 shrink-0 border-b lg:border-b-0 lg:border-r border-border/60 pb-4 lg:pb-0 lg:pr-10 w-full lg:w-auto">
                        {/* Director Photo or Emblem Badge */}
                        <div className="relative shrink-0">
                            {image ? (
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg" data-tina-field={tinaField(props, "image")}>
                                    <Image
                                        src={image}
                                        alt={directorName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-0.5 flex flex-col items-center justify-center text-white shadow-lg">
                                    <div className="w-full h-full rounded-[0.9rem] bg-slate-900/90 flex flex-col items-center justify-center p-2 text-center">
                                        <Award className="w-5 h-5 text-amber-400 mb-0.5" />
                                        <span className="text-sm font-bold font-josefin-sans tracking-tight text-white">HMA</span>
                                    </div>
                                </div>
                            )}

                            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full shadow-md border-2 border-white dark:border-zinc-900">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                        </div>

                        {/* Name & Title */}
                        <div className="space-y-0.5">
                            <span 
                                data-tina-field={tinaField(props, "badgeText")}
                                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-poppins uppercase tracking-wider bg-primary/10 text-primary border border-primary/20"
                            >
                                <ShieldCheck className="w-3 h-3" />
                                <span>{badgeText}</span>
                            </span>

                            <h3 
                                data-tina-field={tinaField(props, "directorName")}
                                className="text-lg sm:text-xl font-bold font-josefin-sans text-foreground tracking-tight"
                            >
                                {directorName}
                            </h3>

                            <p 
                                data-tina-field={tinaField(props, "directorTitle")}
                                className="text-xs font-semibold font-poppins text-primary"
                            >
                                {directorTitle}
                            </p>
                        </div>
                    </div>

                    {/* Right Quote Content Block */}
                    <div className="flex-1 space-y-4">
                        <div className="text-sm sm:text-base font-poppins text-muted-foreground leading-relaxed">
                            <p data-tina-field={tinaField(props, "message")}>
                                <span className="text-xl font-serif text-primary leading-none pr-1">“</span>
                                {message}
                            </p>
                            {secondaryMessage && (
                                <p data-tina-field={tinaField(props, "secondaryMessage")} className="mt-2 text-xs sm:text-sm">
                                    {secondaryMessage}
                                </p>
                            )}
                        </div>

                        {/* Tags Badges & Action Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/50">
                            <div className="flex flex-wrap items-center gap-2" data-tina-field={tinaField(props, "tags")}>
                                {tagsList.map((tag, idx) => (
                                    <span 
                                        key={idx}
                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white dark:bg-zinc-900 text-[11px] font-semibold font-poppins text-foreground border border-slate-200/80 dark:border-zinc-800 shadow-sm"
                                    >
                                        {getTagIcon(tag)}
                                        <span>{tag}</span>
                                    </span>
                                ))}
                            </div>

                            {buttonText && (
                                <Link
                                    data-tina-field={tinaField(props, "buttonText")}
                                    href={buttonLink}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-blue-600 text-white font-poppins font-semibold text-xs transition-all duration-300 shadow-md shadow-primary/20 active:scale-95 shrink-0"
                                >
                                    <span>{buttonText}</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
