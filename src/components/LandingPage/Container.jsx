"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "@/components/ui/MarkdownComponents";

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
                return "bg-gray-100 dark:bg-zinc-900/60 text-foreground";
            case "primary-tint":
                return "bg-primary/10 text-foreground border-y border-primary/20";
            case "light":
            default:
                return "bg-background text-foreground";
        }
    };

    const isDarkBg = bgTheme === "navy" || bgTheme === "dark-zinc";

    return (
        <section className={`relative w-full py-16 md:py-24 flex justify-center items-center overflow-hidden transition-colors duration-500 ${getBgThemeStyles()}`}>
            {/* Ambient Background Decorative Glow */}
            <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-60" />
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none opacity-60" />

            <div className="max-w-[1260px] w-full px-5 xl:px-0 relative z-10">
                <div
                    className={`grid grid-cols-1 ${hasImage ? "lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20" : "max-w-4xl mx-auto"
                        } items-center`}
                >
                    {/* Image Column - Rendered First if direction === 'right' */}
                    {hasImage && isImageOnLeft && (
                        <div className="relative w-full order-1">
                            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group bg-muted/30 transition-all duration-500 hover:shadow-primary/15 hover:border-primary/30">
                                <Image
                                    data-tina-field={tinaField(props, "image")}
                                    alt={props.heading || props.subHeading || "Container Section Media"}
                                    src={props.image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority={false}
                                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    )}

                    {/* Content Column */}
                    <div
                        className={`space-y-6 ${hasImage
                                ? isImageOnLeft
                                    ? "order-2"
                                    : "order-1"
                                : "text-center flex flex-col items-center"
                            }`}
                    >
                        {/* SubHeading / Badge */}
                        {props.subHeading && props.subHeading.trim() !== "" && (
                            <div className="w-fit">
                                <span
                                    data-tina-field={tinaField(props, "subHeading")}
                                    className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold font-poppins bg-primary/10 text-primary border border-primary/20 shadow-sm"
                                >
                                    <span>{props.subHeading}</span>
                                </span>
                            </div>
                        )}

                        {/* Main Heading */}
                        {props.heading && (
                            <h2
                                data-tina-field={tinaField(props, "heading")}
                                className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight leading-[1.15] ${isDarkBg ? "text-white" : "text-foreground"
                                    }`}
                            >
                                {props.heading}
                            </h2>
                        )}

                        {/* Text / Rich Markdown Content (Scrollable if lengthy) */}
                        {props.text && (
                            <div
                                data-tina-field={tinaField(props, "text")}
                                className={`prose ${isDarkBg ? "prose-invert text-slate-300" : "dark:prose-invert text-muted-foreground"
                                    } max-w-none text-base md:text-lg leading-relaxed whitespace-normal break-words space-y-3 max-h-[360px] sm:max-h-[420px] overflow-y-auto pr-3.5 scrollbar-thin [scrollbar-width:thin] [scrollbar-color:rgba(35,72,208,0.5)_transparent]`}
                            >
                                <TinaMarkdown components={components} content={props.text} />
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
                        <div className="relative w-full order-2">
                            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group bg-muted/30 transition-all duration-500 hover:shadow-primary/15 hover:border-primary/30">
                                <Image
                                    data-tina-field={tinaField(props, "image")}
                                    alt={props.heading || props.subHeading || "Container Section Media"}
                                    src={props.image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority={false}
                                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
