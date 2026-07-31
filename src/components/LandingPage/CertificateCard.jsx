"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { ShieldCheck, CheckCircle2, ExternalLink, Download, Maximize2, X, Award, FileCheck } from "lucide-react";

export const CertificateCard = (props) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const title = props?.title || "PEC C1 Category Construction License";
    const badgeText = props?.badgeText || "PEC Registered Constructor";
    const issuingAuthority = props?.issuingAuthority || "Pakistan Engineering Council (PEC)";
    const licenseNumber = props?.licenseNumber || "License #: PEC-C1-54892";
    const validity = props?.validity || "Active / Valid 2026-2027";
    const description =
        props?.description ||
        "Authorized by the Pakistan Engineering Council as a C1 Constructor for executing heavy civil engineering, industrial power plants, and public infrastructure projects with unlimited project financial capacity.";
    const certificateImage = props?.certificateImage || "/hrui_AdobeStock_276818517_RV.jpg";
    const layout = props?.layout || "left";
    const verificationLink = props?.verificationLink;
    const downloadLink = props?.downloadLink;

    const defaultHighlights = [
        { text: "ISO 9001:2015 Quality Management Systems" },
        { text: "Unlimited Project Value Execution Authorization" },
        { text: "Verified Government & Commercial Infrastructure" },
        { text: "Full Regulatory & Electrical Safety Compliance" },
    ];

    const highlights = props?.highlights && props.highlights.length > 0 ? props.highlights : defaultHighlights;

    const isImageLeft = layout === "left";

    return (
        <section
            data-tina-field={tinaField(props)}
            className="w-full py-12 sm:py-16 bg-slate-50 text-slate-900 font-poppins select-none"
        >
            <div className="max-w-[1260px] mx-auto px-5 xl:px-0">
                <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-900 via-primary to-blue-600" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Certificate Image Frame */}
                        <div
                            className={`lg:col-span-5 relative ${
                                isImageLeft ? "lg:order-1" : "lg:order-2"
                            }`}
                        >
                            <div
                                data-tina-field={tinaField(props, "certificateImage")}
                                className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/90 group cursor-pointer shadow-md flex items-center justify-center p-2"
                                onClick={() => setIsLightboxOpen(true)}
                            >
                                <Image
                                    src={certificateImage}
                                    alt={title}
                                    fill
                                    className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors z-10 flex items-center justify-center">
                                    <div className="px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Maximize2 className="w-4 h-4 text-primary" />
                                        <span>Click to Expand Scan</span>
                                    </div>
                                </div>

                                {/* Floating License Badge Tag */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white uppercase tracking-wider shadow-md flex items-center gap-1.5">
                                        <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Verified Document</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Details Content */}
                        <div
                            className={`lg:col-span-7 space-y-6 ${
                                isImageLeft ? "lg:order-2" : "lg:order-1"
                            }`}
                        >
                            {/* Header Info */}
                            <div className="space-y-3">
                                {badgeText && (
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                                        <Award className="w-3.5 h-3.5 text-amber-400" />
                                        <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                                    </div>
                                )}

                                <h3
                                    data-tina-field={tinaField(props, "title")}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold font-josefin-sans text-slate-900 leading-tight"
                                >
                                    {title}
                                </h3>

                                {/* Metadata Strip */}
                                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-600">
                                    {issuingAuthority && (
                                        <div className="flex items-center gap-1.5">
                                            <ShieldCheck className="w-4 h-4 text-primary" />
                                            <span data-tina-field={tinaField(props, "issuingAuthority")}>
                                                {issuingAuthority}
                                            </span>
                                        </div>
                                    )}

                                    {licenseNumber && (
                                        <div className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs">
                                            <span data-tina-field={tinaField(props, "licenseNumber")}>
                                                {licenseNumber}
                                            </span>
                                        </div>
                                    )}

                                    {validity && (
                                        <div className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium text-xs">
                                            <span data-tina-field={tinaField(props, "validity")}>{validity}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            {description && (
                                <p
                                    data-tina-field={tinaField(props, "description")}
                                    className="text-slate-600 text-sm sm:text-base leading-relaxed"
                                >
                                    {description}
                                </p>
                            )}

                            {/* Highlights Checklist */}
                            <div
                                data-tina-field={tinaField(props, "highlights")}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
                            >
                                {highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Links Footer */}
                            {(verificationLink || downloadLink) && (
                                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-100">
                                    {verificationLink && (
                                        <a
                                            href={verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-tina-field={tinaField(props, "verificationLink")}
                                            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-md flex items-center gap-2"
                                        >
                                            <span>Verify Online</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}

                                    {downloadLink && (
                                        <a
                                            href={downloadLink}
                                            download
                                            data-tina-field={tinaField(props, "downloadLink")}
                                            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 text-xs font-semibold transition-all flex items-center gap-2"
                                        >
                                            <Download className="w-3.5 h-3.5 text-primary" />
                                            <span>Download PDF Copy</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Image Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="relative max-w-4xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden">
                        <Image src={certificateImage} alt={title} fill className="object-contain" />
                    </div>
                </div>
            )}
        </section>
    );
};
