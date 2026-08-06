"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = ({ productTypes = [], serviceTypes = [] }) => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    // Coloured logo on Product Detail pages (/products/detail/*) and Quotation page (/quotation).
    const isLightHeader = pathname.startsWith("/products/detail") || pathname === "/quotation";
    const isDarkHeader = !isLightHeader;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Clients", href: "/ourclients" },
        { name: "Projects", href: "/work" },
        { name: "Certifications", href: "/certifications" },
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-40 px-4 xl:px-0 py-6 font-poppins select-none">
            <div className={`max-w-[1260px] mx-auto pb-5 border-b flex justify-between items-center ${isDarkHeader ? "border-white/15" : "border-slate-200/80"
                }`}>
                {/* Brand Logo (Dynamic: Colorful Blue on Light Pages, Pure White on Dark Pages) */}
                <Link href="/" className="group flex items-center gap-3 shrink-0">
                    <Image
                        width={240}
                        height={80}
                        alt="HMA Associates - Solar Power Solutions & Panel Installation Gujranwala Pakistan"
                        className={`w-44 sm:w-52 lg:w-60 h-auto object-contain transition-transform duration-300 group-hover:scale-105 ${isDarkHeader ? "brightness-0 invert" : ""
                            }`}
                        src="/assets/Fulllogo.png"
                        priority
                    />
                </Link>

                {/* Desktop Dynamic Navigation Links */}
                <nav className={`hidden lg:flex flex-row items-center gap-8 font-medium text-sm ${isDarkHeader ? "text-white" : "text-slate-900"
                    }`}>
                    <Link
                        className={`transition-colors duration-200 relative py-1 ${pathname === "/"
                            ? "text-primary font-semibold"
                            : isDarkHeader
                                ? "hover:text-primary text-slate-200"
                                : "hover:text-primary text-slate-800"
                            }`}
                        href="/"
                    >
                        Home
                        {pathname === "/" && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary" />
                        )}
                    </Link>

                    {/* About Dropdown Menu */}
                    <motion.div
                        onMouseEnter={() => setAboutOpen(true)}
                        onMouseLeave={() => setAboutOpen(false)}
                        className="relative group cursor-pointer"
                    >
                        <div
                            className={`flex items-center gap-1.5 py-1 transition-colors duration-200 ${pathname === "/about" || pathname === "/ourclients" || pathname === "/certifications"
                                    ? "text-primary font-semibold"
                                    : isDarkHeader
                                        ? "hover:text-primary text-slate-200"
                                        : "hover:text-primary text-slate-800"
                                }`}
                        >
                            <Link href="/about" className="hover:text-primary">About</Link>
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${aboutOpen ? "rotate-180 text-primary" : ""
                                    }`}
                            />
                        </div>
                        <AnimatePresence mode="wait">
                            {aboutOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                                >
                                    <div className="w-56 p-3 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 flex flex-col gap-1 text-white">
                                        <Link
                                            href="/about"
                                            className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-primary text-slate-200 text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                                        >
                                            <span>About Company</span>
                                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </Link>
                                        <Link
                                            href="/company-structure"
                                            className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-primary text-slate-200 text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                                        >
                                            <span>Company Structure</span>
                                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </Link>
                                        <Link
                                            href="/ourclients"
                                            className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-primary text-slate-200 text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                                        >
                                            <span>Our Clients</span>
                                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </Link>
                                        <Link
                                            href="/certifications"
                                            className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-primary text-slate-200 text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                                        >
                                            <span>Certifications</span>
                                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Services Dropdown */}
                    <motion.div
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="relative group cursor-pointer"
                    >
                        <div
                            className={`flex items-center gap-1.5 py-1 transition-colors duration-200 ${pathname?.startsWith("/services")
                                ? "text-primary font-semibold"
                                : isDarkHeader
                                    ? "hover:text-primary text-slate-200"
                                    : "hover:text-primary text-slate-800"
                                }`}
                        >
                            <span>Services</span>
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-primary" : ""
                                    }`}
                            />
                        </div>
                        <AnimatePresence mode="wait">
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                                >
                                    <div className="w-64 p-3 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 flex flex-col gap-1 text-white">
                                        {Array.from(serviceTypes || [])?.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/services/${item.replace(/\s+/g, "-")}`}
                                                className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-primary text-slate-200 text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                                            >
                                                <span>{item}</span>
                                                <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Products Dropdown */}
                    <motion.div
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                        className="relative group cursor-pointer"
                    >
                        <div
                            className={`flex items-center gap-1.5 py-1 transition-colors duration-200 ${pathname?.startsWith("/products")
                                ? "text-primary font-semibold"
                                : isDarkHeader
                                    ? "hover:text-primary text-slate-200"
                                    : "hover:text-primary text-slate-800"
                                }`}
                        >
                            <span>Products</span>
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${productsOpen ? "rotate-180 text-primary" : ""
                                    }`}
                            />
                        </div>
                        <AnimatePresence mode="wait">
                            {productsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                                >
                                    <div className="w-64 p-3 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 flex flex-col gap-1 text-white">
                                        {Array.from(productTypes || [])?.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/products/${item}`}
                                                className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-primary text-slate-200 text-sm font-medium transition-all duration-200 flex items-center justify-between group capitalize"
                                            >
                                                <span>{item}</span>
                                                <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <Link
                        className={`transition-colors duration-200 relative py-1 ${pathname === "/work"
                            ? "text-primary font-semibold"
                            : isDarkHeader
                                ? "hover:text-primary text-slate-200"
                                : "hover:text-primary text-slate-800"
                            }`}
                        href="/work"
                    >
                        Projects
                        {pathname === "/work" && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary" />
                        )}
                    </Link>
                </nav>

                {/* Right Action Controls */}
                <div className="hidden lg:flex items-center gap-4 shrink-0">
                    <a
                        href="tel:+923097778006"
                        className={`px-4 py-2.5 rounded-xl backdrop-blur-md border font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${isDarkHeader
                            ? "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                            : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 shadow-sm"
                            }`}
                    >
                        <Phone className="w-4 h-4 text-primary" />
                        <span>+92 309 7778006</span>
                    </a>

                    <Button link="/quotation" variant="gradient-glow">
                        Get Quotation
                    </Button>
                </div>

                {/* Mobile Drawer Trigger */}
                <div className="lg:hidden flex items-center gap-3">
                    <Link
                        href="/quotation"
                        className="px-4 py-2 rounded-xl bg-primary text-white font-medium text-xs shadow-lg flex items-center gap-1.5"
                    >
                        <span>Quote</span>
                    </Link>

                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild>
                            <button
                                className={`p-3 rounded-2xl border transition-all duration-300 shadow-xl focus:outline-none ${isDarkHeader
                                    ? "bg-slate-900/90 border-white/20 text-white hover:bg-slate-800"
                                    : "bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200"
                                    }`}
                                aria-label="Toggle Navigation Menu"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="flex flex-col p-0 bg-slate-950/98 backdrop-blur-2xl text-white border-l border-white/15 w-[300px] sm:w-[360px]"
                        >
                            {/* Drawer Header */}
                            <SheetTitle className="flex items-center justify-between p-6 border-b border-white/10">
                                <Image
                                    width={180}
                                    height={60}
                                    alt="HMA Associates Logo"
                                    className="w-44 h-auto object-contain brightness-0 invert"
                                    src="/assets/Fulllogo.png"
                                />
                            </SheetTitle>

                            {/* Drawer Links */}
                            <nav className="flex flex-col gap-1.5 py-6 px-4 overflow-y-auto flex-grow text-sm font-poppins">
                                {navLinks.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-200 font-medium ${pathname === link.href
                                            ? "bg-primary/20 text-primary border border-primary/30"
                                            : "text-slate-200 hover:bg-white/10 hover:text-white"
                                            }`}
                                    >
                                        <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                                        <span>{link.name}</span>
                                    </Link>
                                ))}

                                {/* Mobile Services Accordion */}
                                <div className="pt-2">
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 w-full font-medium transition-all duration-200 ${servicesOpen ? "bg-white/10 text-primary" : "text-slate-200 hover:bg-white/10"
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <ChevronRight
                                                className={`h-4 w-4 transition-transform duration-200 text-primary ${servicesOpen ? "rotate-90" : ""
                                                    }`}
                                            />
                                            Services
                                        </span>
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary" : "text-slate-400"
                                                }`}
                                        />
                                    </button>
                                    {servicesOpen && (
                                        <div className="flex flex-col my-1 ml-6 border-l border-white/15 pl-3 gap-1">
                                            {Array.from(serviceTypes || [])?.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={`/services/${item.replace(/\s+/g, "-")}`}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="px-3 py-2 text-xs text-slate-300 hover:text-primary transition-colors block"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Products Accordion */}
                                <div className="pt-1">
                                    <button
                                        onClick={() => setProductsOpen(!productsOpen)}
                                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 w-full font-medium transition-all duration-200 ${productsOpen ? "bg-white/10 text-primary" : "text-slate-200 hover:bg-white/10"
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <ChevronRight
                                                className={`h-4 w-4 transition-transform duration-200 text-primary ${productsOpen ? "rotate-90" : ""
                                                    }`}
                                            />
                                            Products
                                        </span>
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180 text-slate-400" : "text-slate-400"
                                                }`}
                                        />
                                    </button>
                                    {productsOpen && (
                                        <div className="flex flex-col my-1 ml-6 border-l border-white/15 pl-3 gap-1">
                                            {Array.from(productTypes || [])?.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={`/products/${item}`}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="px-3 py-2 text-xs text-slate-300 hover:text-primary transition-colors block capitalize"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </nav>

                            {/* Mobile Drawer Bottom Action */}
                            <div className="mt-auto p-5 border-t border-white/10 space-y-3">
                                <a
                                    href="tel:+923097778006"
                                    className="w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span>Call +92 309 7778006</span>
                                </a>
                                <Button
                                    link="/quotation"
                                    variant="gradient-glow"
                                    className="w-full justify-center"
                                >
                                    Get Quotation
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};


