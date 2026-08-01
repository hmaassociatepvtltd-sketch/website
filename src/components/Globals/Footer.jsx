"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { ArrowRight, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export const Footer = ({ site, productTypes = [], serviceTypes = [] }) => {
    const { data } = useTina(site);
    const siteData = data?.site || {};

    const socialLinks = [
        { icon: SiFacebook, href: siteData.facebook || "#", label: "Facebook" },
        { icon: SiLinkedin, href: siteData.linkedin || "#", label: "LinkedIn" },
        { icon: PiInstagramLogoFill, href: siteData.instagram || "#", label: "Instagram" },
        { icon: FaTwitter, href: siteData.twitter || "#", label: "Twitter" },
    ];

    return (
        <footer className="w-full relative bg-gradient-to-b from-slate-950 via-zinc-950 to-black text-slate-300 font-poppins pt-16">
            {/* Top Floating Banner (if footerText or footerImage exists) */}
            {siteData.footerText && (
                <div className="max-w-[1260px] mx-auto px-5 xl:px-0 mb-12">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-indigo-900 to-slate-900 p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 group">
                        {siteData.footerImage && (
                            <Image
                                src={siteData.footerImage}
                                alt="Footer CTA Background"
                                fill
                                className="object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />
                        )}
                        <div className="relative z-10 max-w-2xl text-center md:text-left space-y-2">
                            <span className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/80 bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block">
                                Work With Us
                            </span>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-josefin-sans text-white tracking-tight leading-tight">
                                {siteData.footerText}
                            </h3>
                        </div>
                        <div className="relative z-10 shrink-0">
                            <Link
                                href="/quotation"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-primary font-semibold text-sm hover:bg-slate-100 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <span>Get a Free Quote</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Footer Grid */}
            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 pt-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Column 1: Brand Info & Contact (span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                width={260}
                                height={90}
                                alt="HMA Associates - Solar Power Solutions & MEP Engineering Gujranwala Pakistan"
                                className="w-48 sm:w-56 lg:w-64 h-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-all duration-300"
                                src="/assets/Fulllogo.png"
                                priority={false}
                            />
                        </Link>

                        {siteData.location && (
                            <div className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>{siteData.location}</span>
                            </div>
                        )}

                        <div className="space-y-3 pt-2">
                            {siteData.email && (
                                <a
                                    href={`mailto:${siteData.email}`}
                                    className="group flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span>{siteData.email}</span>
                                </a>
                            )}

                            {siteData.phone && (
                                <a
                                    href={`tel:${siteData.phone}`}
                                    className="group flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span>{siteData.phone}</span>
                                </a>
                            )}
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-4">
                            {socialLinks.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow HMA Associates on ${item.label}`}
                                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Quick Links / Information (span 2) */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="space-y-2">
                            <h4 className="text-base font-bold font-josefin-sans tracking-wide text-white uppercase">
                                Quick Links
                            </h4>
                            <div className="w-8 h-0.5 rounded-full bg-primary" />
                        </div>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Projects", href: "/work" },
                                { label: "Certifications", href: "/certifications" },
                                { label: "Get Quotation", href: "/quotation" },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Products (span 3) */}
                    <div className="lg:col-span-3 space-y-5">
                        <div className="space-y-2">
                            <h4 className="text-base font-bold font-josefin-sans tracking-wide text-white uppercase">
                                Products
                            </h4>
                            <div className="w-8 h-0.5 rounded-full bg-primary" />
                        </div>
                        <ul className="space-y-3 text-sm">
                            {Array.from(productTypes).map((product, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`/products/${product}`}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 capitalize"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                        <span>{product}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Services (span 3) */}
                    <div className="lg:col-span-3 space-y-5">
                        <div className="space-y-2">
                            <h4 className="text-base font-bold font-josefin-sans tracking-wide text-white uppercase">
                                Services
                            </h4>
                            <div className="w-8 h-0.5 rounded-full bg-primary" />
                        </div>
                        <ul className="space-y-3 text-sm">
                            {Array.from(serviceTypes).map((service, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`/services/${service.replace(/\s+/g, '-')}`}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 capitalize"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                        <span>{service}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Divider */}
            <div className="border-t border-slate-900 bg-black/40">
                <div className="max-w-[1260px] mx-auto px-5 xl:px-0 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} {siteData.title || "HMA Associates"}. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/about" className="hover:text-slate-400 transition-colors">
                            About
                        </Link>
                        <Link href="/quotation" className="hover:text-slate-400 transition-colors">
                            Quotation
                        </Link>
                        <Link href="/work" className="hover:text-slate-400 transition-colors">
                            Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
