"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export const ProjectCardsGrid = (props) => {
    const heading = props?.heading;
    const subHeading = props?.subHeading;
    const rawProjects = props?.projects || [];
    const bgTheme = props?.bgTheme || "light";

    // Fallback demonstration items matching workspace theme if empty
    const projects = rawProjects.length > 0 ? rawProjects : [
        {
            title: "1.5 MW Commercial Solar Installation",
            category: "Solar",
            short_description: "Turnkey rooftop grid-tied solar system with net-metering integration for industrial facility.",
            image: "/assets/1.png",
            project_link: "/work",
        },
        {
            title: "HVAC & Electrical Ducting Infrastructure",
            category: "MEP",
            short_description: "Complete mechanical, electrical, and plumbing engineering layout for commercial office complex.",
            image: "/assets/2.png",
            project_link: "/work",
        },
        {
            title: "Industrial Substation & Power Management",
            category: "Electrical",
            short_description: "High-voltage distribution panel commissioning and smart power monitoring system installation.",
            image: "/assets/3.png",
            project_link: "/work",
        },
    ];

    const getThemeStyles = () => {
        switch (bgTheme) {
            case "navy":
                return {
                    section: "bg-[#000322] text-white",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    titleText: "text-white",
                    subText: "text-gray-300",
                    card: "bg-white/5 border-white/10 hover:border-primary/50 text-white shadow-2xl",
                    categoryTag: "bg-primary/20 text-emerald-400 border-primary/30",
                    cardText: "text-gray-300",
                };
            case "dark-zinc":
                return {
                    section: "bg-zinc-950 text-white border-y border-zinc-800",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    titleText: "text-white",
                    subText: "text-gray-400",
                    card: "bg-zinc-900 border-zinc-800 hover:border-primary/50 text-white shadow-xl",
                    categoryTag: "bg-zinc-800 text-primary border-zinc-700",
                    cardText: "text-gray-400",
                };
            case "gray":
                return {
                    section: "bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    titleText: "text-gray-900 dark:text-white",
                    subText: "text-gray-600 dark:text-gray-400",
                    card: "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:border-primary/50 text-gray-900 dark:text-white shadow-md hover:shadow-xl",
                    categoryTag: "bg-primary/10 text-primary border-primary/20",
                    cardText: "text-gray-600 dark:text-gray-400",
                };
            case "light":
            default:
                return {
                    section: "bg-white dark:bg-zinc-950 text-gray-900 dark:text-white",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    titleText: "text-gray-900 dark:text-white",
                    subText: "text-gray-600 dark:text-gray-400",
                    card: "bg-gray-50/80 dark:bg-zinc-900/80 border-gray-200/80 dark:border-zinc-800 hover:border-primary/50 text-gray-900 dark:text-white shadow-sm hover:shadow-xl",
                    categoryTag: "bg-primary/10 text-primary border-primary/20",
                    cardText: "text-gray-600 dark:text-gray-400",
                };
        }
    };

    const theme = getThemeStyles();

    return (
        <section className={`w-full py-16 md:py-24 flex justify-center items-center overflow-hidden transition-colors duration-500 ${theme.section}`}>
            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-12">
                {/* Header */}
                {(heading || subHeading) && (
                    <div className="text-center space-y-3 max-w-3xl mx-auto">
                        <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins border ${theme.badge}`}>
                            <FolderGit2 className="w-3.5 h-3.5" />
                            Engineering Showcase
                        </span>
                        {heading && (
                            <h2
                                data-tina-field={tinaField(props, "heading")}
                                className={`text-3xl md:text-5xl font-bold font-josefin-sans tracking-tight leading-tight ${theme.titleText}`}
                            >
                                {heading}
                            </h2>
                        )}
                        {subHeading && (
                            <p
                                data-tina-field={tinaField(props, "subHeading")}
                                className={`text-base md:text-lg font-poppins leading-relaxed ${theme.subText}`}
                            >
                                {subHeading}
                            </p>
                        )}
                    </div>
                )}

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const targetUrl = project.project_link || "/work";

                        return (
                            <Link
                                key={index}
                                href={targetUrl}
                                data-tina-field={tinaField(project, "title")}
                                className={`group relative rounded-3xl overflow-hidden border cursor-pointer transition-all duration-500 ease-out transform hover:-rotate-1 hover:scale-[1.025] flex flex-col justify-between ${theme.card}`}
                            >
                                {/* Top Image Container */}
                                {project.image ? (
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-zinc-800">
                                        <Image
                                            src={project.image}
                                            alt={project.title || "Project thumbnail"}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                        
                                        {/* Category Badge over image */}
                                        {project.category && (
                                            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold font-poppins uppercase tracking-wider border backdrop-blur-md ${theme.categoryTag}`}>
                                                {project.category}
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <div className="w-full aspect-[4/3] bg-muted/60 flex items-center justify-center text-muted-foreground font-poppins text-xs">
                                        No Image Provided
                                    </div>
                                )}

                                {/* Card Body */}
                                <div className="p-7 flex flex-col justify-between flex-1 space-y-6">
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold font-josefin-sans tracking-tight group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.short_description && (
                                            <p className={`text-sm font-poppins leading-relaxed ${theme.cardText}`}>
                                                {project.short_description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Action Link Footer */}
                                    <div className="pt-4 border-t border-gray-200/40 dark:border-zinc-800 flex items-center justify-between">
                                        <span className="text-xs font-semibold font-poppins text-primary group-hover:underline inline-flex items-center gap-1">
                                            View Project Case Study
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
