"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import {
    Sun,
    Building2,
    Zap,
    Wrench,
    Factory,
    Search,
    MapPin,
    Building,
    CheckCircle2,
    X,
    ExternalLink,
    Filter,
    Award,
    ShieldCheck,
    ArrowRight,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// Default client showcase dataset if no TinaCMS data provided
const DEFAULT_CLIENTS = [
    {
        name: "Canadian Solar Energy",
        logo: "/Canadian-Solar-Logo-Vector.png",
        serviceCategory: "Solar Solutions",
        location: "Lahore, Pakistan",
        industryTag: "Industrial",
        projectScope: "Turnkey 1.5 MW Industrial Rooftop Solar System installation with AEDB Net-Metering and high-voltage grid sync.",
        capacity: "1.5 MW Solar System",
        featured: true
    },
    {
        name: "GoodWe Power Solutions",
        logo: "/GOODWELOGO.png",
        serviceCategory: "Solar Solutions",
        location: "Gujranwala, Pakistan",
        industryTag: "Commercial",
        projectScope: "Installation of commercial string inverters and automated monitoring infrastructure for 850 kW solar plant.",
        capacity: "850 kW Grid Inverter Setup",
        featured: true
    },
    {
        name: "Schneider Electric Corp",
        logo: "/Schneider_Electric-Logo.wine.png",
        serviceCategory: "MEP Engineering",
        location: "Islamabad, Pakistan",
        industryTag: "Commercial",
        projectScope: "Complete high-voltage switchgear, electrical distribution panels, and building management system (BMS) integration.",
        capacity: "HV/LV Panel & Substation",
        featured: true
    },
    {
        name: "Chint Electrical Systems",
        logo: "/chint-logo-png_seeklogo-185166.png",
        serviceCategory: "MEP Engineering",
        location: "Sialkot, Pakistan",
        industryTag: "Industrial",
        projectScope: "Industrial power wiring, circuit protection breaker installation, and motor control centers (MCC) for manufacturing facility.",
        capacity: "Full Plant MEP Infrastructure",
        featured: true
    },
    {
        name: "JA Solar Enterprise",
        logo: "/JA_Solar_Logo.svg.png",
        serviceCategory: "Solar Solutions",
        location: "Faisalabad, Pakistan",
        industryTag: "Industrial",
        projectScope: "Supply and engineering layout of N-Type TOPCon ultra-high efficiency solar module arrays for textile industrial plant.",
        capacity: "2.2 MW Solar Array",
        featured: true
    },
    {
        name: "Astronergy Technology",
        logo: "/Astronergy-company-logo-image.jpg",
        serviceCategory: "Solar Solutions",
        location: "Multan, Pakistan",
        industryTag: "Commercial",
        projectScope: "Commercial hybrid solar energy storage solution featuring lithium battery backup for uninterruptible operations.",
        capacity: "500 kW Hybrid System",
        featured: false
    },
    {
        name: "Fast Cables & Engineering",
        logo: "/Fast.png",
        serviceCategory: "MEP Engineering",
        location: "Gujranwala, Pakistan",
        industryTag: "Industrial",
        projectScope: "Underground armored cabling, transformer installation, and high-load electrical infrastructure for steel mill expansion.",
        capacity: "11 kV Substation & Wiring",
        featured: false
    },
    {
        name: "Saluna Industrial Complex",
        logo: "/Saluna.png",
        serviceCategory: "Construction",
        location: "Rawalpindi, Pakistan",
        industryTag: "Commercial",
        projectScope: "Turnkey structural civil construction, foundation engineering, steel framework, and MEP execution for commercial complex.",
        capacity: "120,000 Sq.Ft Construction",
        featured: false
    },
    {
        name: "Cantt Commercial Center",
        logo: "/1.png",
        serviceCategory: "Construction",
        location: "Gujranwala Cantt, Pakistan",
        industryTag: "Commercial",
        projectScope: "Architectural planning, steel structure erection, facade development, and interior MEP fitting for multi-storey plaza.",
        capacity: "Multi-Storey Plaza",
        featured: true
    },
    {
        name: "Wapda Town Residential Estate",
        logo: "/2.png",
        serviceCategory: "Solar Solutions",
        location: "Wapda Town, Gujranwala",
        industryTag: "Residential",
        projectScope: "Community net-metering solar deployment featuring high-efficiency hybrid inverters and surge protection.",
        capacity: "350 kW Residential Grid",
        featured: false
    },
    {
        name: "DC Colony Educational Complex",
        logo: "/3.png",
        serviceCategory: "Solar Solutions",
        location: "DC Colony, Pakistan",
        industryTag: "Institutional",
        projectScope: "Institution-wide green energy conversion project powering administrative buildings, labs, and sports complex.",
        capacity: "450 kW Institutional Solar",
        featured: false
    },
    {
        name: "Ghakhar Industrial Plant",
        logo: "/4.png",
        serviceCategory: "Operations & Maintenance",
        location: "Ghakhar Mandi, Pakistan",
        industryTag: "Industrial",
        projectScope: "Comprehensive annual O&M contract including automated robotic panel cleaning, thermal imaging, and inverter servicing.",
        capacity: "Full O&M Service Contract",
        featured: false
    }
];

// Service category definitions with icons & colors
const SERVICE_CATEGORIES = [
    { label: "All Services", value: "ALL", icon: ShieldCheck, color: "from-primary to-sky-500" },
    { label: "Solar Energy", value: "Solar Solutions", icon: Sun, color: "from-amber-500 to-orange-500" },
    { label: "MEP Engineering", value: "MEP Engineering", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { label: "Construction & Building", value: "Construction", icon: Building2, color: "from-emerald-500 to-teal-500" },
    { label: "Operations & Maintenance", value: "Operations & Maintenance", icon: Wrench, color: "from-purple-500 to-indigo-500" },
    { label: "Industrial Energy", value: "Industrial Energy", icon: Factory, color: "from-rose-500 to-red-500" },
];

export const ClientShowcase = (props) => {
    const rawClients = props?.clients && Array.isArray(props.clients) && props.clients.length > 0
        ? props.clients
        : DEFAULT_CLIENTS;

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedService, setSelectedService] = useState("ALL");
    const [selectedIndustry, setSelectedIndustry] = useState("ALL");
    const [activeModalClient, setActiveModalClient] = useState(null);

    // Filter logic
    const filteredClients = useMemo(() => {
        return rawClients.filter((client) => {
            const matchesService =
                selectedService === "ALL" ||
                client.serviceCategory?.toLowerCase().includes(selectedService.toLowerCase());

            const matchesIndustry =
                selectedIndustry === "ALL" ||
                client.industryTag?.toLowerCase() === selectedIndustry.toLowerCase();

            const query = searchQuery.trim().toLowerCase();
            const matchesQuery =
                !query ||
                client.name?.toLowerCase().includes(query) ||
                client.location?.toLowerCase().includes(query) ||
                client.serviceCategory?.toLowerCase().includes(query) ||
                client.projectScope?.toLowerCase().includes(query) ||
                client.capacity?.toLowerCase().includes(query);

            return matchesService && matchesIndustry && matchesQuery;
        });
    }, [rawClients, selectedService, selectedIndustry, searchQuery]);

    // Statistics counts
    const totalClientsCount = rawClients.length;
    const solarClientsCount = rawClients.filter((c) => c.serviceCategory?.toLowerCase().includes("solar")).length;
    const mepClientsCount = rawClients.filter((c) => c.serviceCategory?.toLowerCase().includes("mep")).length;
    const constructionClientsCount = rawClients.filter((c) => c.serviceCategory?.toLowerCase().includes("construction")).length;

    const ptClass = props.paddingTop || "pt-24 lg:pt-32";
    const pbClass = props.paddingBottom || "pb-20 lg:pb-28";

    return (
        <section className={`w-full relative ${ptClass} ${pbClass} bg-slate-950 text-white overflow-hidden font-poppins select-none`}>
            {/* Background Ambient Glows & Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 relative z-10 space-y-12">
                {/* Header Title Section */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xl backdrop-blur-md">
                        <Award className="w-4 h-4 text-primary" />
                        <span data-tina-field={tinaField(props, "badgeText")}>
                            {props?.badgeText || "Corporate Client Roster"}
                        </span>
                    </div>

                    <h1
                        data-tina-field={tinaField(props, "heading")}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight text-white leading-tight"
                    >
                        {props?.heading || "Enterprise Clients We Have Served"}
                    </h1>

                    <p
                        data-tina-field={tinaField(props, "description")}
                        className="text-slate-400 text-sm sm:text-base leading-relaxed font-poppins"
                    >
                        {props?.description ||
                            "Discover commercial, industrial, institutional, and residential clients across Pakistan who trust HMA Associates for premier Solar Solutions, MEP Engineering, and Construction."}
                    </p>
                </div>

                {/* Statistics Counter Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" data-tina-field={tinaField(props, "stats")}>
                    {props?.stats && Array.isArray(props.stats) && props.stats.length > 0 ? (
                        props.stats.map((stat, sIdx) => (
                            <StatCard
                                key={sIdx}
                                icon={getStatIcon(sIdx)}
                                value={stat.value}
                                label={stat.label}
                                badge={stat.badge}
                                stat={stat}
                            />
                        ))
                    ) : (
                        <>
                            <StatCard
                                icon={<Users className="w-6 h-6 text-primary" />}
                                value={`${totalClientsCount}+`}
                                label="Enterprise Clients"
                                badge="Satisfied Roster"
                            />
                            <StatCard
                                icon={<Sun className="w-6 h-6 text-amber-400" />}
                                value={`${solarClientsCount}+`}
                                label="Solar Energy Clients"
                                badge="MW Installed"
                            />
                            <StatCard
                                icon={<Zap className="w-6 h-6 text-sky-400" />}
                                value={`${mepClientsCount}+`}
                                label="MEP Projects"
                                badge="HV/LV & Wiring"
                            />
                            <StatCard
                                icon={<Building2 className="w-6 h-6 text-emerald-400" />}
                                value={`${constructionClientsCount}+`}
                                label="Construction Works"
                                badge="Civil Engineering"
                            />
                        </>
                    )}
                </div>



                {/* Service Filter Tabs & Search Bar */}
                <div className="space-y-6 pt-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 backdrop-blur-2xl p-4 sm:p-6 rounded-3xl border border-white/10 shadow-2xl">
                        {/* Search Input Box */}
                        <div className="relative w-full md:w-80 shrink-0">
                            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search client name, city, or service..."
                                className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Industry Sector Filter Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 stylish-scrollbar">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                                <Filter className="w-3.5 h-3.5" /> Industry:
                            </span>
                            {["ALL", "Commercial", "Industrial", "Institutional", "Residential"].map((ind) => (
                                <button
                                    key={ind}
                                    onClick={() => setSelectedIndustry(ind)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                                        selectedIndustry === ind
                                            ? "bg-primary text-white shadow-lg shadow-primary/30"
                                            : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
                                    }`}
                                >
                                    {ind === "ALL" ? "All Sectors" : ind}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Service Category Tabs */}
                    <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 stylish-scrollbar">
                        {SERVICE_CATEGORIES.map((cat) => {
                            const IconComponent = cat.icon;
                            const isActive = selectedService === cat.value;
                            return (
                                <button
                                    key={cat.value}
                                    onClick={() => setSelectedService(cat.value)}
                                    className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 border ${
                                        isActive
                                            ? "bg-gradient-to-r from-primary to-sky-600 border-primary text-white shadow-xl shadow-primary/25 scale-[1.02]"
                                            : "bg-slate-900/80 hover:bg-slate-800 border-white/10 text-slate-300 hover:text-white"
                                    }`}
                                >
                                    <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`} />
                                    <span>{cat.label}</span>
                                    {cat.value !== "ALL" && (
                                        <span className="ml-1 px-2 py-0.5 rounded-full bg-white/15 text-[10px]">
                                            {rawClients.filter((c) => c.serviceCategory?.toLowerCase().includes(cat.value.toLowerCase())).length}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Clients Grid Showcase */}
                {filteredClients.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredClients.map((client, idx) => (
                            <ClientCard
                                key={idx}
                                client={client}
                                onInspect={() => setActiveModalClient(client)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/10 space-y-4">
                        <Building className="w-12 h-12 text-slate-500 mx-auto" />
                        <h3 className="text-xl font-bold text-white">No Clients Found</h3>
                        <p className="text-slate-400 text-sm max-w-md mx-auto">
                            No corporate client matching &quot;{searchQuery}&quot; was found under the selected filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedService("ALL");
                                setSelectedIndustry("ALL");
                            }}
                            className="px-5 py-2.5 rounded-2xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors shadow-lg"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}

                {/* Call-to-Action Bottom Banner */}
                <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-primary/20 to-slate-900 border border-primary/30 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>PEC C1 & AEDB Certified Execution</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold font-josefin-sans text-white">
                            Ready to Power Your Enterprise with Clean Energy?
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Join over 150+ commercial industries, institutions, and estates across Pakistan. Get a free site audit and solar ROI estimate today.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10">
                        <Button link="/quotation" variant="gradient-glow">
                            <span>Get Free Quotation</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button link="tel:+923097778006" variant="outline-pill">
                            <span>Call Sales Team</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Detailed Inspection Modal */}
            {activeModalClient && (
                <ClientDetailModal
                    client={activeModalClient}
                    onClose={() => setActiveModalClient(null)}
                />
            )}
        </section>
    );
};

const getStatIcon = (index) => {
    switch (index % 4) {
        case 0:
            return <Users className="w-6 h-6 text-primary" />;
        case 1:
            return <Sun className="w-6 h-6 text-amber-400" />;
        case 2:
            return <Zap className="w-6 h-6 text-sky-400" />;
        case 3:
        default:
            return <Building2 className="w-6 h-6 text-emerald-400" />;
    }
};

// Stat Card Primitive
const StatCard = ({ icon, value, label, badge, stat }) => (
    <div
        data-tina-field={stat ? tinaField(stat) : undefined}
        className="p-5 sm:p-6 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-xl space-y-3 relative overflow-hidden group hover:border-primary/40 transition-all duration-300"
    >
        <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">{icon}</div>
            {badge && (
                <span
                    data-tina-field={stat ? tinaField(stat, "badge") : undefined}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-slate-300"
                >
                    {badge}
                </span>
            )}
        </div>
        <div>
            <div
                data-tina-field={stat ? tinaField(stat, "value") : undefined}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold font-josefin-sans text-white group-hover:text-primary transition-colors"
            >
                {value}
            </div>
            <div
                data-tina-field={stat ? tinaField(stat, "label") : undefined}
                className="text-xs sm:text-sm text-slate-400 font-medium"
            >
                {label}
            </div>
        </div>
    </div>
);

// Client Card Primitive
const ClientCard = ({ client, onInspect }) => {
    const getBadgeStyle = (category = "") => {
        const cat = category.toLowerCase();
        if (cat.includes("solar")) return "bg-amber-500/15 border-amber-500/30 text-amber-400";
        if (cat.includes("mep")) return "bg-sky-500/15 border-sky-500/30 text-sky-400";
        if (cat.includes("construction")) return "bg-emerald-500/15 border-emerald-500/30 text-emerald-400";
        if (cat.includes("maintenance")) return "bg-purple-500/15 border-purple-500/30 text-purple-400";
        return "bg-primary/15 border-primary/30 text-primary";
    };

    return (
        <div
            onClick={onInspect}
            className="group cursor-pointer rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/10 hover:border-primary/50 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
        >
            {/* Top Logo Container */}
            <div className="relative w-full h-44 bg-white/95 p-6 flex items-center justify-center overflow-hidden border-b border-white/10 group-hover:bg-white transition-colors">
                {/* Logo Image */}
                <Image
                    src={client.logo || "/assets/Fulllogo.png"}
                    alt={client.name}
                    width={220}
                    height={90}
                    className="max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Top Floating Industry Tag */}
                {client.industryTag && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1 shadow-md">
                        <Building className="w-3 h-3 text-primary" />
                        <span>{client.industryTag}</span>
                    </div>
                )}
            </div>

            {/* Bottom Content Body */}
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                    {/* Service Category Badge */}
                    <div className="flex items-center justify-between gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeStyle(client.serviceCategory)}`}>
                            <ShieldCheck className="w-3 h-3" />
                            <span>{client.serviceCategory || "Solar & Engineering"}</span>
                        </span>

                        {client.featured && (
                            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                                <Award className="w-3 h-3" /> Featured
                            </span>
                        )}
                    </div>

                    {/* Client Name */}
                    <h3 className="text-xl font-bold font-josefin-sans text-white group-hover:text-primary transition-colors line-clamp-1">
                        {client.name}
                    </h3>

                    {/* Location */}
                    {client.location && (
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            <span className="truncate">{client.location}</span>
                        </div>
                    )}

                    {/* Project Scope Description */}
                    {client.projectScope && (
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2 pt-1 font-poppins">
                            {client.projectScope}
                        </p>
                    )}
                </div>

                {/* Footer Capacity Metric & Action Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    {client.capacity ? (
                        <div className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{client.capacity}</span>
                        </div>
                    ) : (
                        <span className="text-slate-500">Verified Client</span>
                    )}

                    <div className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Inspect</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Client Detailed View Modal Primitive
const ClientDetailModal = ({ client, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl bg-slate-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden space-y-6 p-6 sm:p-8 font-poppins text-white">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Logo Frame */}
                <div className="w-full h-36 rounded-2xl bg-white p-6 flex items-center justify-center shadow-inner border border-slate-200">
                    <Image
                        src={client.logo || "/assets/Fulllogo.png"}
                        alt={client.name}
                        width={260}
                        height={100}
                        className="max-h-24 w-auto object-contain"
                    />
                </div>

                {/* Client Details */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold">
                            {client.serviceCategory || "Engineering Service"}
                        </span>
                        {client.industryTag && (
                            <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium">
                                Sector: {client.industryTag}
                            </span>
                        )}
                    </div>

                    <h2 className="text-2xl font-bold font-josefin-sans text-white">{client.name}</h2>

                    {client.location && (
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                            <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                            <span>{client.location}</span>
                        </div>
                    )}

                    {client.capacity && (
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>Project Metric: {client.capacity}</span>
                        </div>
                    )}

                    {client.projectScope && (
                        <div className="space-y-1.5 pt-2">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Project Scope & Scope of Execution</h4>
                            <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10">
                                {client.projectScope}
                            </p>
                        </div>
                    )}
                </div>

                {/* Action CTA inside Modal */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <Button link="/quotation" variant="gradient-glow" className="w-full justify-center">
                        Request Similar Solution
                    </Button>
                </div>
            </div>
        </div>
    );
};
