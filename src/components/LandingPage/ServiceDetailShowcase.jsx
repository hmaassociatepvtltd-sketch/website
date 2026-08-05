"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowRight, Award } from "lucide-react";

export const ServiceDetailShowcase = (props) => {
    const badgeText = props?.badgeText || "PEC C1 Licensed & AEDB Certified";
    const subHeading = props?.subHeading || "Core Engineering Capability";
    const heading = props?.heading || "Turnkey Engineering & Technical Services";
    const description =
        props?.description ||
        "HMA Associates (SMC-Private) Limited delivers end-to-end engineering, procurement, and construction solutions across Pakistan. From initial load assessment to final grid integration, our licensed team guarantees quality.";
    const mainImage = props?.mainImage || "/AdobeStock_290512663-scaled.webp";
    const secondaryImage = props?.secondaryImage || "/Gemini_Generated_Image_82zfbk82zfbk82zf.png";
    const buttonText = props?.buttonText || "Request Technical Consultation";
    const buttonLink = props?.buttonLink || "/#contact";
    const phone = props?.phone || "+923097778006";

    const defaultFeatures = [
        {
            title: "PEC C1 Licensed Construction",
            description: "Authorized for heavy civil infrastructure, structural grey frameworks, and turn-key developments.",
        },
        {
            title: "AEDB & PPIB Solar Interconnection",
            description: "Certified green energy installer handling NEPRA net-metering licensing and DISCO grid approvals.",
        },
        {
            title: "Comprehensive MEP Engineering",
            description: "High-voltage electrical wiring, HVAC climate ducting, and automated water plumbing systems.",
        },
    ];

    const features = props?.keyFeatures && props.keyFeatures.length > 0 ? props.keyFeatures : defaultFeatures;

    const defaultSpecs = [
        { label: "License Grade", value: "PEC C1 Category" },
        { label: "Solar Capacity", value: "50+ MW Delivered" },
        { label: "Warranty Support", value: "25-Year Performance" },
        { label: "Execution Standard", value: "ISO 9001 Compliant" },
    ];

    const specs = props?.specifications && props.specifications.length > 0 ? props.specifications : defaultSpecs;

    return (
        <section
            data-tina-field={tinaField(props)}
            className="w-full py-16 md:py-24 bg-white text-slate-900 font-poppins relative overflow-hidden select-none border-y border-slate-200/80"
        >
            {/* Soft Ambient Background Lighting Orbs */}
            <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Service Details & Features */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Top Badge Tag */}
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider shadow-md">
                                <Award className="w-4 h-4 text-amber-400" />
                                <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                            </div>

                            {subHeading && (
                                <p
                                    data-tina-field={tinaField(props, "subHeading")}
                                    className="text-xs font-bold text-primary uppercase tracking-widest"
                                >
                                    {subHeading}
                                </p>
                            )}

                            {heading && (
                                <h2
                                    data-tina-field={tinaField(props, "heading")}
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight text-slate-900 leading-[1.15]"
                                >
                                    {heading}
                                </h2>
                            )}
                        </div>

                        {/* Description Text */}
                        {description && (
                            <p
                                data-tina-field={tinaField(props, "description")}
                                className="text-slate-600 text-base sm:text-lg leading-relaxed"
                            >
                                {description}
                            </p>
                        )}

                        {/* Key Features List */}
                        <div data-tina-field={tinaField(props, "keyFeatures")} className="space-y-4 pt-2">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 hover:bg-slate-100/60 transition-all duration-300 flex items-start gap-4 shadow-sm"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base font-bold text-slate-900">{feature.title}</h4>
                                        {feature.description && (
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Specifications Grid */}
                        <div
                            data-tina-field={tinaField(props, "specifications")}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
                        >
                            {specs.map((spec, sIdx) => {
                                const valStr = String(spec.value || "");
                                const fontSize =
                                    valStr.length > 18
                                        ? "text-[10px] sm:text-xs font-semibold"
                                        : valStr.length > 13
                                        ? "text-xs sm:text-xs font-semibold"
                                        : "text-xs sm:text-sm font-bold";

                                return (
                                    <div
                                        key={sIdx}
                                        className="p-3 sm:p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md text-left space-y-1 flex flex-col justify-center min-h-[80px]"
                                    >
                                        <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider text-left line-clamp-1">
                                            {spec.label}
                                        </p>
                                        <p className={`text-white text-left break-words leading-tight ${fontSize}`}>
                                            {spec.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Action CTA Buttons */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                            <div data-tina-field={tinaField(props, "buttonText")}>
                                <Button link={buttonLink} variant="primary-arrow">
                                    {buttonText}
                                </Button>
                            </div>

                            {phone && (
                                <a
                                    href={`tel:${phone}`}
                                    data-tina-field={tinaField(props, "phone")}
                                    className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm"
                                >
                                    <PhoneCall className="w-4 h-4 text-primary" />
                                    <span>Call {phone}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Dual Image Showcase Frame */}
                    <div className="lg:col-span-5 relative">
                        {/* Primary Image Container */}
                        <div
                            data-tina-field={tinaField(props, "mainImage")}
                            className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group"
                        >
                            <Image
                                src={mainImage}
                                alt={heading || "Service detail image"}
                                fill
                                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />

                            {/* Corner Verified Floating Badge */}
                            <div className="absolute top-6 right-6 z-20">
                                <span className="px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-xs font-semibold text-white uppercase tracking-wider shadow-xl flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>Verified Service Standard</span>
                                </span>
                            </div>

                            {/* Floating Service Title Bar */}
                            <div className="absolute bottom-6 left-6 right-6 sm:left-44 z-20 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl space-y-1 text-left">
                                <p className="text-xs font-bold uppercase tracking-wider text-primary text-left">
                                    HMA Engineering Standards
                                </p>
                                <p className="text-xs sm:text-sm font-bold text-slate-900 text-left leading-snug">{heading}</p>
                            </div>
                        </div>

                        {/* Inset Secondary Image Card */}
                        {secondaryImage && (
                            <div
                                data-tina-field={tinaField(props, "secondaryImage")}
                                className="hidden sm:block absolute -bottom-6 -left-6 w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-30 bg-slate-900 transition-transform duration-500 hover:scale-105"
                            >
                                <Image
                                    src={secondaryImage}
                                    alt="Service detail secondary image"
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
