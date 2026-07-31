"use client";

import React from "react";
import { tinaField } from "tinacms/dist/react";
import { MapPin, Phone, Globe, Clock, Mail, Navigation, ExternalLink, ShieldCheck } from "lucide-react";

export const LocationBlock = (props) => {
    const heading = props?.heading || "Visit Our Corporate Headquarters";
    const subHeading = props?.subHeading || "HEAD OFFICE & REGIONAL ENGINEERING HUB";
    const companyName = props?.companyName || "HMA Associates (SMC-Private) Limited";
    const address =
        props?.address ||
        "1st Floor, Chenab Cantt Gate, near Eagle Estate & Builders, Sethi Colony, Gujranwala, 50250, Pakistan";
    const phone = props?.phone || "+92 55 3828498";
    const mobilePhone = props?.mobilePhone || "+92 309 7778006";
    const email = props?.email || "info@hmago.com";
    const website = props?.website || "http://www.hmago.com/";
    const operatingHours = props?.operatingHours || "Monday - Saturday: 9:00 AM - 6:00 PM (Sunday Closed)";
    const mapEmbedUrl =
        props?.mapEmbedUrl ||
        "https://maps.google.com/maps?q=HMA%20Associates%20(SMC-Private)%20Limited,%20Gujranwala&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <section
            data-tina-field={tinaField(props)}
            className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-poppins relative overflow-hidden select-none border-y border-white/10"
        >
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 relative z-10 space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-primary uppercase tracking-widest backdrop-blur-md shadow-lg">
                        <Navigation className="w-3.5 h-3.5 text-amber-400" />
                        <span data-tina-field={tinaField(props, "subHeading")}>{subHeading}</span>
                    </div>

                    <h2
                        data-tina-field={tinaField(props, "heading")}
                        className="text-3xl sm:text-5xl font-bold font-josefin-sans tracking-tight text-white leading-tight"
                    >
                        {heading}
                    </h2>
                </div>

                {/* 2-Column Responsive Layout: Text Details Left, Map Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column: Business Contact Card & Semantic Details */}
                    <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-8">
                        <div className="space-y-6">
                            {/* Company Name & Badge */}
                            <div className="space-y-2 border-b border-white/10 pb-6">
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>PEC C1 & AEDB Certified Head Office</span>
                                </span>
                                <h3
                                    data-tina-field={tinaField(props, "companyName")}
                                    className="text-xl sm:text-2xl font-bold font-josefin-sans text-white tracking-wide"
                                >
                                    {companyName}
                                </h3>
                            </div>

                            {/* Semantic <address> Node */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-1 shadow-md">
                                    <MapPin className="w-5 h-5 text-amber-400" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Physical Address
                                    </span>
                                    <address
                                        data-tina-field={tinaField(props, "address")}
                                        className="not-italic text-sm sm:text-base text-slate-200 leading-relaxed font-normal"
                                    >
                                        {address}
                                    </address>
                                </div>
                            </div>

                            {/* Phone Numbers */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-1 shadow-md">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Telephone & Direct Support
                                    </span>
                                    <div className="flex flex-col gap-1 text-sm font-medium">
                                        {phone && (
                                            <a
                                                href={`tel:${phone.replace(/\s+/g, "")}`}
                                                data-tina-field={tinaField(props, "phone")}
                                                className="text-white hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                            >
                                                <span className="underline decoration-white/30 group-hover:decoration-primary">{phone}</span>
                                                <span className="text-xs text-slate-400 font-normal">(Landline)</span>
                                            </a>
                                        )}
                                        {mobilePhone && (
                                            <a
                                                href={`tel:${mobilePhone.replace(/\s+/g, "")}`}
                                                data-tina-field={tinaField(props, "mobilePhone")}
                                                className="text-slate-200 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                            >
                                                <span className="underline decoration-slate-500 group-hover:decoration-primary">{mobilePhone}</span>
                                                <span className="text-xs text-emerald-400 font-normal">(Mobile / Direct)</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Official Website & Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-1 shadow-md">
                                    <Globe className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Website & Email
                                    </span>
                                    <div className="flex flex-col gap-1 text-sm font-medium">
                                        <a
                                            href={website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-tina-field={tinaField(props, "website")}
                                            className="text-white hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
                                        >
                                            <span className="underline underline-offset-4 decoration-primary/50 group-hover:decoration-primary">{website}</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                                        </a>
                                        {email && (
                                            <a
                                                href={`mailto:${email}`}
                                                data-tina-field={tinaField(props, "email")}
                                                className="text-slate-300 hover:text-white transition-colors duration-200 text-xs"
                                            >
                                                {email}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-4 pt-2 border-t border-white/10">
                                <div className="w-11 h-11 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-1 shadow-md">
                                    <Clock className="w-5 h-5 text-amber-400" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Operating Hours
                                    </span>
                                    <p
                                        data-tina-field={tinaField(props, "operatingHours")}
                                        className="text-sm font-medium text-slate-200"
                                    >
                                        {operatingHours}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Directions CTA Link */}
                        <div className="pt-4">
                            <a
                                href="https://maps.google.com/?q=HMA+Associates+Gujranwala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary via-indigo-600 to-purple-600 text-white font-semibold text-sm hover:opacity-95 shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>Get Driving Directions to Gujranwala Office</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Embedded Google Map Frame */}
                    <div
                        data-tina-field={tinaField(props, "mapEmbedUrl")}
                        className="lg:col-span-7 relative min-h-[400px] sm:min-h-[480px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ minHeight: "400px", border: 0, borderRadius: "1.5rem" }}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            title="HMA Associates (SMC-Private) Limited Gujranwala Location Map"
                            src={mapEmbedUrl}
                            loading="lazy"
                            allowFullScreen
                            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                        />

                        {/* Floating Location Tag Overlay */}
                        <div className="absolute top-6 left-6 z-20 pointer-events-none">
                            <span className="px-4 py-2 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white uppercase tracking-wider shadow-2xl flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Official Office Location</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
