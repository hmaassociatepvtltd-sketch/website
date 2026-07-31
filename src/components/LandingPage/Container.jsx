"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "@/components/ui/MarkdownComponents";
import { ShieldCheck, Award, CheckCircle2, Zap, Building2, Sun } from "lucide-react";

const getHighlightIcon = (iconName) => {
    switch (iconName?.toLowerCase()) {
        case "sun":
        case "solar":
            return <Sun className="w-4 h-4" />;
        case "building":
        case "mep":
            return <Building2 className="w-4 h-4" />;
        case "zap":
        case "power":
            return <Zap className="w-4 h-4" />;
        case "award":
        case "star":
            return <Award className="w-4 h-4" />;
        case "check":
        case "shield":
        default:
            return <ShieldCheck className="w-4 h-4" />;
    }
};

const defaultHighlights = [
    { text: "PEC C1 Licensed Constructor", icon: "shield" },
    { text: "AEDB & PPIB Certified Installer", icon: "sun" },
    { text: "Turnkey MEP & Engineering Services", icon: "building" },
    { text: "Commercial & Residential Power Solutions", icon: "zap" }
];

export const Container = (props) => {
    const isImageOnLeft = props.direction === "right";
    const hasImage = Boolean(props.image);
    const bgTheme = props?.bgTheme || "light";

    const getBgThemeStyles = () => {
        switch (bgTheme) {
            case "navy":
                return "bg-secondary-background text-white";
            case "dark-zinc":
                return "bg-zinc-950 text-white border-y border-zinc-800";
            case "gray":
                return "bg-slate-50/80 dark:bg-zinc-900/60 text-foreground";
            case "primary-tint":
                return "bg-primary/5 text-foreground border-y border-primary/15";
            case "light":
            default:
                return "bg-background text-foreground";
        }
    };

    const isDarkBg = bgTheme === "navy" || bgTheme === "dark-zinc";

    const highlightsToRender = useMemo(() => {
        const custom = props.highlights || props.items;
        if (Array.isArray(custom) && custom.length > 0) {
            return custom.map(item => {
                if (typeof item === "string") return { text: item, icon: "shield" };
                return { text: item.text || item.title || item.name || "", icon: item.icon || item.iconName || "shield" };
            });
        }
        return defaultHighlights;
    }, [props.highlights, props.items]);

    const ptClass = props.paddingTop || "pt-16 md:pt-24";
    const pbClass = props.paddingBottom || "pb-16 md:pb-24";
    const pxClass = props.paddingX || "";
    const mtClass = props.marginTop || "";
    const mbClass = props.marginBottom || "";

    return (
        <section className={`relative w-full ${ptClass} ${pbClass} ${pxClass} ${mtClass} ${mbClass} flex justify-center items-center overflow-hidden transition-colors duration-500 ${getBgThemeStyles()}`}>
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-70" />
            <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none opacity-60" />

            <div className="max-w-[1260px] w-full px-5 xl:px-0 relative z-10">
                <div
                    className={`grid grid-cols-1 ${hasImage ? "lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20" : "max-w-4xl mx-auto"
                        } items-center`}
                >
                    {/* Image Column - Rendered First if direction === 'right' */}
                    {hasImage && isImageOnLeft && (
                        <div className="relative w-full lg:col-span-6 order-1">
                            <ImageFrame props={props} />
                        </div>
                    )}

                    {/* Content Column */}
                    <div
                        className={`space-y-6 ${hasImage ? "lg:col-span-6" : "lg:col-span-12"} ${hasImage
                                ? isImageOnLeft
                                    ? "order-2"
                                    : "order-1"
                                : "text-center flex flex-col items-center max-w-3xl mx-auto"
                            }`}
                    >
                        {/* SubHeading / Badge */}
                        {props.subHeading && props.subHeading.trim() !== "" && (
                            <div className="w-fit">
                                <span
                                    data-tina-field={tinaField(props, "subHeading")}
                                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold font-poppins bg-primary/10 text-primary border border-primary/25 shadow-sm backdrop-blur-md"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    <span>{props.subHeading}</span>
                                </span>
                            </div>
                        )}

                        {/* Main Heading */}
                        {props.heading && (
                            <h2
                                data-tina-field={tinaField(props, "heading")}
                                className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight leading-[1.18] ${isDarkBg ? "text-white" : "text-foreground"
                                    }`}
                            >
                                {props.heading}
                            </h2>
                        )}

                        {/* Text / Rich Markdown Content */}
                        {props.text && (
                            <div
                                data-tina-field={tinaField(props, "text")}
                                className={`prose ${isDarkBg ? "prose-invert text-slate-300" : "dark:prose-invert text-muted-foreground"
                                    } max-w-none text-base md:text-lg leading-relaxed font-poppins space-y-4`}
                            >
                                <TinaMarkdown components={components} content={props.text} />
                            </div>
                        )}

                        {/* Feature Highlights Grid */}
                        {hasImage && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2" data-tina-field={tinaField(props, "highlights")}>
                                {highlightsToRender.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${
                                            isDarkBg
                                                ? "bg-white/5 border-white/10 text-slate-200"
                                                : "bg-slate-50/80 dark:bg-zinc-800/60 border-slate-200/80 dark:border-zinc-700/60 text-foreground"
                                        } text-xs sm:text-sm font-medium transition-all duration-300 hover:border-primary/40`}
                                    >
                                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                                            {getHighlightIcon(item.icon)}
                                        </div>
                                        <span className="truncate">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CTA Button */}
                        {props.buttonText && (
                            <div
                                data-tina-field={tinaField(props, "buttonText")}
                                className="pt-2 w-fit"
                            >
                                <Button link={props.buttonLink || "#"} variant={props.buttonStyle || "primary-arrow"}>
                                    {props.buttonText}
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Image Column - Rendered Second if direction !== 'right' */}
                    {hasImage && !isImageOnLeft && (
                        <div className="relative w-full lg:col-span-6 order-2">
                            <ImageFrame props={props} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const ImageFrame = ({ props }) => {
    const topBadgeText = props?.imageTopBadge ?? "Verified Enterprise";
    const cardTagline = props?.imageCardTagline ?? "Engineering Excellence";
    const cardTitle = props?.imageCardTitle ?? "PEC C1 & AEDB Certified";
    const showTopBadge = props?.showTopBadge !== false && Boolean(topBadgeText);
    const showBottomCard = props?.showBottomCard !== false && Boolean(cardTitle || cardTagline);

    return (
        <div className="relative w-full group">
            {/* Ambient Shadow/Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-sky-500/20 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 dark:border-zinc-800 bg-muted/40 transition-all duration-500 hover:shadow-primary/20">
                <Image
                    data-tina-field={tinaField(props, "image")}
                    alt={props.heading || props.subHeading || "Container Section Media"}
                    src={props.image}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={false}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                {/* Top-Right Glass Badge */}
                {showTopBadge && (
                    <div 
                        data-tina-field={tinaField(props, "imageTopBadge")}
                        className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold font-poppins flex items-center gap-2 shadow-lg"
                    >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{topBadgeText}</span>
                    </div>
                )}

                {/* Floating Bottom Glass Card */}
                {showBottomCard && (
                    <div className="absolute bottom-5 left-5 right-5 sm:right-auto z-20 p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/40 dark:border-zinc-700/60 shadow-2xl flex items-center gap-3.5 max-w-sm transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-sky-600 text-white flex items-center justify-center shrink-0 shadow-md">
                            <Award className="w-6 h-6" />
                        </div>
                        <div>
                            {cardTagline && (
                                <p data-tina-field={tinaField(props, "imageCardTagline")} className="text-xs uppercase tracking-wider text-primary font-bold font-poppins">{cardTagline}</p>
                            )}
                            {cardTitle && (
                                <p data-tina-field={tinaField(props, "imageCardTitle")} className="text-sm font-semibold text-foreground leading-snug">{cardTitle}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
