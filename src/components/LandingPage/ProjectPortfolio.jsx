"use client";

import React, { useState } from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "@/components/ui/MarkdownComponents";
import { MapPin, Building2, Maximize2, X as CloseIcon } from "lucide-react";

export const ProjectPortfolio = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const clientName = props?.client_name || "Enterprise Solar Installation";
    const location = props?.location || "Industrial Zone, NY";
    const keyMetrics = props?.key_metrics || [];
    const gallery = props?.gallery || [];
    const details = props?.details;
    const bgTheme = props?.bgTheme || "dark-slate";

    const getThemeStyles = () => {
        switch (bgTheme) {
            case "navy":
                return {
                    section: "bg-secondary-background text-white",
                    headerBorder: "border-white/10",
                    badge: "bg-white/10 text-white border-white/20",
                    locationBadge: "bg-white/5 text-gray-300 border-white/10",
                    metricCard: "bg-white/5 border-white/10 hover:border-primary/50 text-white",
                    metricLabel: "text-gray-400",
                    detailsBg: "bg-white/5 border-white/10 text-gray-200",
                    titleText: "text-white",
                };
            case "light":
                return {
                    section: "bg-white dark:bg-zinc-950 text-gray-900 dark:text-white",
                    headerBorder: "border-gray-200 dark:border-zinc-800",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    locationBadge: "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-zinc-700",
                    metricCard: "bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:border-primary/50 text-gray-900 dark:text-white",
                    metricLabel: "text-gray-500 dark:text-gray-400",
                    detailsBg: "bg-gray-50 dark:bg-zinc-900/60 border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300",
                    titleText: "text-gray-900 dark:text-white",
                };
            case "gray":
                return {
                    section: "bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white",
                    headerBorder: "border-gray-300 dark:border-zinc-800",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    locationBadge: "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-zinc-700",
                    metricCard: "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 hover:border-primary/50 text-gray-900 dark:text-white",
                    metricLabel: "text-gray-500 dark:text-gray-400",
                    detailsBg: "bg-white dark:bg-zinc-800/80 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300",
                    titleText: "text-gray-900 dark:text-white",
                };
            case "dark-slate":
            default:
                return {
                    section: "bg-slate-900 text-slate-100",
                    headerBorder: "border-slate-800",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    locationBadge: "bg-slate-800/60 text-slate-400 border-slate-700/60",
                    metricCard: "bg-slate-800/80 border-slate-700/80 hover:border-primary/50 text-white",
                    metricLabel: "text-slate-400",
                    detailsBg: "bg-slate-800/40 border-slate-800 text-slate-300",
                    titleText: "text-white",
                };
        }
    };

    const theme = getThemeStyles();

    return (
        <section className={`w-full py-16 md:py-24 flex justify-center items-center overflow-hidden transition-colors duration-500 ${theme.section}`}>
            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-12">
                {/* Header: Client & Location */}
                <div className={`border-b pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 ${theme.headerBorder}`}>
                    <div className="space-y-3 max-w-3xl">
                        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins border ${theme.badge}`}>
                            <Building2 className="w-4 h-4" />
                            <span>Featured MEP & Solar Project</span>
                        </div>
                        <h2
                            data-tina-field={tinaField(props, "client_name")}
                            className={`text-3xl sm:text-5xl font-bold font-josefin-sans tracking-tight capitalize leading-tight ${theme.titleText}`}
                        >
                            {clientName}
                        </h2>
                    </div>

                    {location && (
                        <div
                            data-tina-field={tinaField(props, "location")}
                            className={`flex items-center gap-2 font-poppins text-base md:text-lg px-5 py-2.5 rounded-2xl border shrink-0 ${theme.locationBadge}`}
                        >
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>{location}</span>
                        </div>
                    )}
                </div>

                {/* Key Metrics Grid */}
                {keyMetrics.length > 0 && (
                    <div
                        data-tina-field={tinaField(props, "key_metrics")}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {keyMetrics.map((metric, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl border shadow-lg transition-all duration-300 flex flex-col justify-between space-y-2 group hover:-translate-y-1 ${theme.metricCard}`}
                            >
                                <span className={`text-xs uppercase font-poppins font-semibold tracking-wider ${theme.metricLabel}`}>
                                    {metric.label}
                                </span>
                                <span className="text-2xl md:text-3xl font-bold font-josefin-sans text-primary group-hover:text-primary/90 transition-colors duration-200">
                                    {metric.value}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Main Content Layout: Details + Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left/Main Column: Rich Text Details */}
                    {details && (
                        <div
                            data-tina-field={tinaField(props, "details")}
                            className={`lg:col-span-7 p-8 md:p-10 rounded-3xl border space-y-4 ${theme.detailsBg}`}
                        >
                            <h3 className={`text-xl font-bold font-josefin-sans border-b pb-3 ${theme.headerBorder} ${theme.titleText}`}>
                                Project Overview & Engineering Specs
                            </h3>
                            <div className="prose dark:prose-invert max-w-none text-base md:text-lg leading-relaxed whitespace-normal break-words space-y-3">
                                <TinaMarkdown components={components} content={details} />
                            </div>
                        </div>
                    )}

                    {/* Right Column / Full Grid: Gallery */}
                    <div
                        data-tina-field={tinaField(props, "gallery")}
                        className={`${details ? "lg:col-span-5" : "lg:col-span-12"} space-y-4`}
                    >
                        <h3 className={`text-xl font-bold font-josefin-sans border-b pb-3 ${theme.headerBorder} ${theme.titleText}`}>
                            Project Media Gallery
                        </h3>
                        {gallery.length > 0 ? (
                            <div
                                className={`grid gap-4 ${
                                    details
                                        ? "grid-cols-1 sm:grid-cols-2"
                                        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                }`}
                            >
                                {gallery.map((item, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedImage(item.image)}
                                        className="group relative h-60 rounded-2xl overflow-hidden cursor-pointer border border-slate-700/40 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={`${clientName} photo ${idx + 1}`}
                                            fill
                                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="p-3 rounded-full bg-slate-800/80 border border-slate-600 text-white">
                                                <Maximize2 className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 rounded-2xl bg-slate-800/20 border border-dashed border-slate-700 text-center text-slate-400 font-poppins">
                                No gallery images uploaded
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Image Modal Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <CloseIcon size={24} />
                    </button>
                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Project photo detail"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
