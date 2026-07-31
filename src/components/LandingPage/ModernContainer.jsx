"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "@/components/ui/MarkdownComponents";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const ModernContainer = (props) => {
    const layout = props?.layoutType || "split-right";
    const bgTheme = props?.bgTheme || "light";
    const features = props?.features || [];
    const stats = props?.stats || [];

    const getBgStyles = () => {
        switch (bgTheme) {
            case "gray":
                return "bg-gray-50 dark:bg-zinc-950/60 text-foreground";
            case "navy":
                return "bg-secondary-background text-white";
            case "dark":
                return "bg-zinc-950 text-white border-y border-zinc-800";
            case "light":
            default:
                return "bg-white dark:bg-zinc-900 text-foreground";
        }
    };

    return (
        <section className={`w-full py-16 md:py-24 flex justify-center items-center overflow-hidden ${getBgStyles()}`}>
            <div className="max-w-[1260px] w-full px-5 xl:px-0">
                {layout === "centered" && (
                    <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                        {props.badgeText && (
                            <span
                                data-tina-field={tinaField(props, "badgeText")}
                                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold font-poppins bg-primary/10 text-primary border border-primary/20"
                            >
                                {props.badgeText}
                            </span>
                        )}

                        {props.heading && (
                            <h2
                                data-tina-field={tinaField(props, "heading")}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold font-josefin-sans tracking-tight leading-tight"
                            >
                                {props.heading}
                            </h2>
                        )}

                        {props.markdownContent && (
                            <div data-tina-field={tinaField(props, "markdownContent")} className="prose dark:prose-invert max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed whitespace-normal break-words space-y-3 max-h-[360px] sm:max-h-[420px] overflow-y-auto pr-3.5 scrollbar-thin [scrollbar-width:thin] [scrollbar-color:rgba(35,72,208,0.5)_transparent]">
                                <TinaMarkdown components={components} content={props.markdownContent} />
                            </div>
                        )}

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                            {props.buttonText && (
                                <div data-tina-field={tinaField(props, "buttonText")}>
                                    <Button link={props.buttonLink || "#"} variant={props.buttonStyle || "primary-arrow"}>
                                        {props.buttonText}
                                    </Button>
                                </div>
                            )}

                            {props.secondaryButtonText && (
                                <Link
                                    href={props.secondaryButtonLink || "#"}
                                    data-tina-field={tinaField(props, "secondaryButtonText")}
                                    className="px-6 py-3.5 rounded-xl border border-border hover:bg-accent text-foreground font-poppins font-medium text-sm transition-all duration-200"
                                >
                                    {props.secondaryButtonText}
                                </Link>
                            )}
                        </div>

                        {props.image && (
                            <div data-tina-field={tinaField(props, "image")} className="relative w-full h-[320px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mt-8 border border-border/50">
                                <Image
                                    src={props.image}
                                    alt={props.heading || "Container media"}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                    </div>
                )}

                {(layout === "split-left" || layout === "split-right") && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div
                            className={`relative ${
                                layout === "split-left" ? "lg:order-1" : "lg:order-2"
                            }`}
                        >
                            {props.image ? (
                                <div data-tina-field={tinaField(props, "image")} className="relative w-full h-[360px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-border/40 group">
                                    <Image
                                        src={props.image}
                                        alt={props.heading || "Container section media"}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    
                                    {props.secondaryImage && (
                                        <div className="absolute -bottom-6 -right-6 w-48 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 hidden sm:block">
                                            <Image
                                                src={props.secondaryImage}
                                                alt="Overlay media"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="w-full h-[360px] bg-muted/60 rounded-3xl border border-dashed border-border flex items-center justify-center text-muted-foreground font-poppins">
                                    Upload Image in Tina CMS
                                </div>
                            )}
                        </div>

                        <div className={`space-y-6 ${layout === "split-left" ? "lg:order-2" : "lg:order-1"}`}>
                            {props.badgeText && (
                                <span
                                    data-tina-field={tinaField(props, "badgeText")}
                                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins bg-primary/10 text-primary border border-primary/20"
                                >
                                    {props.badgeText}
                                </span>
                            )}

                            {props.heading && (
                                <h2
                                    data-tina-field={tinaField(props, "heading")}
                                    className="text-3xl md:text-5xl font-bold font-josefin-sans tracking-tight leading-tight"
                                >
                                    {props.heading}
                                </h2>
                            )}

                            {props.markdownContent && (
                                <div data-tina-field={tinaField(props, "markdownContent")} className="prose dark:prose-invert max-w-full text-base md:text-lg text-muted-foreground leading-relaxed whitespace-normal break-words space-y-3 max-h-[360px] sm:max-h-[420px] overflow-y-auto pr-3.5 scrollbar-thin [scrollbar-width:thin] [scrollbar-color:rgba(35,72,208,0.5)_transparent]">
                                    <TinaMarkdown components={components} content={props.markdownContent} />
                                </div>
                            )}

                            {features.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    {features.map((feat, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-semibold font-poppins">{feat.title}</h4>
                                                {feat.description && (
                                                    <p className="text-xs text-muted-foreground mt-0.5">{feat.description}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {stats.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
                                    {stats.map((st, idx) => (
                                        <div key={idx} className="space-y-1">
                                            <p className="text-2xl md:text-3xl font-bold font-josefin-sans text-primary">{st.value}</p>
                                            <p className="text-xs font-poppins text-muted-foreground">{st.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                {props.buttonText && (
                                    <div data-tina-field={tinaField(props, "buttonText")}>
                                        <Button link={props.buttonLink || "#"} variant={props.buttonStyle || "primary-arrow"}>
                                            {props.buttonText}
                                        </Button>
                                    </div>
                                )}

                                {props.secondaryButtonText && (
                                    <Link
                                        href={props.secondaryButtonLink || "#"}
                                        data-tina-field={tinaField(props, "secondaryButtonText")}
                                        className="px-6 py-3 rounded-xl border border-border hover:bg-accent text-foreground font-poppins font-medium text-sm transition-all duration-200"
                                    >
                                        {props.secondaryButtonText}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {layout === "bento" && (
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            {props.badgeText && (
                                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins bg-primary/10 text-primary border border-primary/20">
                                    {props.badgeText}
                                </span>
                            )}
                            {props.heading && (
                                <h2 className="text-3xl md:text-5xl font-bold font-josefin-sans tracking-tight">
                                    {props.heading}
                                </h2>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {props.image && (
                                <div className="md:col-span-2 relative h-[360px] rounded-3xl overflow-hidden border border-border shadow-lg group">
                                    <Image src={props.image} alt="Bento main" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                                        <h3 className="text-2xl font-bold font-josefin-sans">{props.heading}</h3>
                                        <p className="text-sm opacity-80 mt-1 max-w-md font-poppins">Comprehensive content & engineering showcase.</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col gap-6">
                                {features.slice(0, 2).map((feat, idx) => (
                                    <div key={idx} className="p-6 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-between space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-xl font-bold font-josefin-sans">{feat.title}</h4>
                                            <ArrowUpRight className="w-5 h-5 text-primary" />
                                        </div>
                                        {feat.description && (
                                            <p className="text-sm text-muted-foreground font-poppins">{feat.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
