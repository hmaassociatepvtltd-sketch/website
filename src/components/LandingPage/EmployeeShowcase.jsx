"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import {
    Users,
    Mail,
    Phone,
    Linkedin,
    Award,
    CheckCircle2,
    Briefcase,
    Building2,
    ShieldCheck,
    X,
    ChevronRight,
    Search,
    UserCheck,
    Wrench,
    FileBadge
} from "lucide-react";

const DEFAULT_EMPLOYEES = [
    {
        name: "Engr. Mehtab Bashir",
        designation: "Principal Solar Engineer & Operations Lead",
        department: "Solar Engineering",
        image: "/hrui_AdobeStock_276818517_RV.jpg",
        experience: "12+ Years Exp.",
        email: "mehtab.bashir@hmaassociate.com",
        phone: "+923097778006",
        linkedin: "https://linkedin.com",
        bio: "Principal Solar Engineer registered with AEDB & DHA Islamabad. Specializes in megawatt-scale industrial solar parks, NEPRA bi-directional net-metering interconnection, and DISCO grid synchronization.",
        skills: ["Megawatt Solar Park Design", "NEPRA Net-Metering", "DISCO Grid Interconnection", "PvSyst Performance Yield"]
    },
    {
        name: "Haseeb Almas",
        designation: "Managing Partner & Executive Lead",
        department: "Executive Leadership",
        image: "/11.png",
        experience: "15+ Years Exp.",
        email: "haseeb.almas@hmaassociate.com",
        phone: "+923097778006",
        linkedin: "https://linkedin.com",
        bio: "Executive lead driving corporate growth, strategic partnerships, and general construction contracting under PEC Category C1 licensing.",
        skills: ["Corporate Strategy", "PEC C1 Governance", "Heavy Civil Contracting", "EPC Procurement"]
    },
    {
        name: "Engr. Usman Tariq",
        designation: "Senior MEP Project Manager",
        department: "MEP & Construction",
        image: "/12.png",
        experience: "10+ Years Exp.",
        email: "usman.tariq@hmaassociate.com",
        phone: "+923097778006",
        linkedin: "https://linkedin.com",
        bio: "Senior MEP Project Manager supervising high-voltage electrical installations, commercial HVAC ducting systems, and industrial plumbing projects.",
        skills: ["High Voltage MEP", "HVAC Climate Engineering", "Site Safety Management", "Quantity Surveying"]
    },
    {
        name: "Faisal Mughal",
        designation: "Head of Commercial Sales & Client Affairs",
        department: "Sales & Business Development",
        image: "/13.png",
        experience: "8+ Years Exp.",
        email: "sales@hmaassociate.com",
        phone: "+923097778006",
        linkedin: "https://linkedin.com",
        bio: "Commercial lead managing industrial solar proposals, net-metering ROI feasibility models, and corporate client relations.",
        skills: ["Solar ROI Financial Feasibility", "Corporate Client Consultation", "Commercial Tendering", "CRM Operations"]
    },
    {
        name: "Engr. Hamza Ali",
        designation: "Lead Structural & Civil Engineer",
        department: "MEP & Construction",
        image: "/5.jpeg",
        experience: "9+ Years Exp.",
        email: "hamza.ali@hmaassociate.com",
        phone: "+923097778006",
        linkedin: "https://linkedin.com",
        bio: "Structural design lead specializing in industrial foundation loads, commercial high-rise engineering, and earthquake-resistant grey structures.",
        skills: ["Structural Analysis", "AutoCAD & ETABS", "Site Quality Control", "PEC Certified"]
    },
    {
        name: "Zainab Shah",
        designation: "Head of Procurement & Supply Chain",
        department: "Executive Leadership",
        image: "/f.png",
        experience: "7+ Years Exp.",
        email: "procurement@hmaassociate.com",
        phone: "+923097778006",
        linkedin: "https://linkedin.com",
        bio: "Procurement manager directing Tier-1 solar panel imports, inverter inventory management, and vendor negotiations across Pakistan.",
        skills: ["Supply Chain Operations", "Vendor Negotiation", "Tier-1 Solar Import", "Inventory Management"]
    }
];

export const EmployeeShowcase = (props) => {
    const [selectedDepartment, setSelectedDepartment] = useState("ALL");
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const badgeText = props?.badgeText || "Licensed Professional Team";
    const heading = props?.heading || "Meet Our Engineering & Leadership Team";
    const description =
        props?.description ||
        "HMA Associates (SMC-Private) Limited brings together PEC C1 certified engineers, AEDB registered solar specialists, and experienced MEP project managers dedicated to excellence.";

    const rawEmployees = props?.employees && Array.isArray(props.employees) && props.employees.length > 0
        ? props.employees
        : DEFAULT_EMPLOYEES;

    // Filter logic
    const filteredEmployees = rawEmployees.filter((emp) => {
        const matchesDept = selectedDepartment === "ALL" || emp.department === selectedDepartment;
        const matchesSearch =
            !searchQuery.trim() ||
            (emp.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
            (emp.designation || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
            (emp.department || "").toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDept && matchesSearch;
    });

    const departments = [
        { label: "All Team", value: "ALL" },
        { label: "Executive Leadership", value: "Executive Leadership" },
        { label: "Solar Engineering", value: "Solar Engineering" },
        { label: "MEP & Construction", value: "MEP & Construction" },
        { label: "Sales & BD", value: "Sales & Business Development" },
    ];

    return (
        <section
            data-tina-field={tinaField(props)}
            className="w-full py-16 md:py-24 bg-slate-950 text-white font-poppins relative overflow-hidden select-none"
        >
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 relative z-10 space-y-12">
                {/* Header Title Section */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    {badgeText && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg backdrop-blur-md">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                        </div>
                    )}

                    <h2
                        data-tina-field={tinaField(props, "heading")}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight text-white leading-tight"
                    >
                        {heading}
                    </h2>

                    {description && (
                        <p
                            data-tina-field={tinaField(props, "description")}
                            className="text-slate-400 text-sm sm:text-base leading-relaxed"
                        >
                            {description}
                        </p>
                    )}
                </div>

                {/* Filter Bar & Search Box */}
                <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Department Tabs */}
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        {departments.map((dept) => (
                            <button
                                key={dept.value}
                                onClick={() => setSelectedDepartment(dept.value)}
                                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                                    selectedDepartment === dept.value
                                        ? "bg-primary text-white font-semibold shadow-lg shadow-primary/30"
                                        : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60"
                                }`}
                            >
                                {dept.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Input Box */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search employee or role..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-500 text-xs focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                {/* Employee Cards Grid - Centered Flex-Wrap for Perfect Symmetry */}
                <div className="flex flex-wrap justify-center gap-6" data-tina-field={tinaField(props, "employees")}>
                    {filteredEmployees.map((emp, index) => (
                        <div
                            key={index}
                            data-tina-field={tinaField(emp)}
                            className="group rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 p-5 space-y-5 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
                        >
                            {/* Top Frame: Photo + Experience Badge */}
                            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                                {emp.image ? (
                                    <Image
                                        src={emp.image}
                                        alt={emp.name || "Employee Profile"}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        data-tina-field={tinaField(emp, "image")}
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-600 space-y-2">
                                        <Users className="w-12 h-12 text-slate-700" />
                                        <span className="text-xs">Profile Photo</span>
                                    </div>
                                )}

                                {/* Floating Experience Pill */}
                                {emp.experience && (
                                    <div className="absolute top-3 left-3 z-10">
                                        <span
                                            data-tina-field={tinaField(emp, "experience")}
                                            className="px-2.5 py-1 rounded-full bg-slate-950/90 border border-white/10 text-[10px] font-mono text-emerald-400 uppercase font-semibold backdrop-blur-md shadow-md"
                                        >
                                            {emp.experience}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Info Body */}
                            <div className="space-y-3 flex-grow">
                                <div className="space-y-1">
                                    <span
                                        data-tina-field={tinaField(emp, "department")}
                                        className="text-[10px] font-mono text-primary uppercase font-bold tracking-wider block"
                                    >
                                        {emp.department || "General Staff"}
                                    </span>
                                    <h3
                                        data-tina-field={tinaField(emp, "name")}
                                        className="text-lg font-bold font-josefin-sans text-white group-hover:text-primary transition-colors leading-tight"
                                    >
                                        {emp.name}
                                    </h3>
                                    <p
                                        data-tina-field={tinaField(emp, "designation")}
                                        className="text-xs text-slate-400 font-medium leading-snug"
                                    >
                                        {emp.designation}
                                    </p>
                                </div>

                                {/* Skill Tags */}
                                {emp.skills && Array.isArray(emp.skills) && emp.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-1" data-tina-field={tinaField(emp, "skills")}>
                                        {emp.skills.slice(0, 2).map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {emp.skills.length > 2 && (
                                            <span className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] text-slate-500 font-medium">
                                                +{emp.skills.length - 2} more
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Contact Action Footer */}
                            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                                <button
                                    onClick={() => setSelectedEmployee(emp)}
                                    className="text-xs font-semibold text-primary hover:text-sky-300 transition-colors flex items-center gap-1"
                                >
                                    <span>Inspect Profile</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </button>

                                <div className="flex items-center gap-2">
                                    {emp.email && (
                                        <a
                                            href={`mailto:${emp.email}`}
                                            title="Send Email"
                                            data-tina-field={tinaField(emp, "email")}
                                            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                                        >
                                            <Mail className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {emp.phone && (
                                        <a
                                            href={`tel:${emp.phone}`}
                                            title="Call Direct"
                                            data-tina-field={tinaField(emp, "phone")}
                                            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                                        >
                                            <Phone className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Employee Profile Detail Modal */}
            {selectedEmployee && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 space-y-6 text-white shadow-2xl">
                        <button
                            onClick={() => setSelectedEmployee(null)}
                            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Top Header */}
                        <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                                {selectedEmployee.image ? (
                                    <Image src={selectedEmployee.image} alt={selectedEmployee.name} fill className="object-cover" />
                                ) : (
                                    <Users className="w-8 h-8 text-slate-600 m-auto" />
                                )}
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-primary uppercase font-bold">{selectedEmployee.department}</span>
                                <h3 className="text-xl font-bold font-josefin-sans">{selectedEmployee.name}</h3>
                                <p className="text-xs text-slate-400 font-medium">{selectedEmployee.designation}</p>
                            </div>
                        </div>

                        {/* Bio Overview */}
                        {selectedEmployee.bio && (
                            <div className="space-y-2">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Professional Overview</h4>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                                    {selectedEmployee.bio}
                                </p>
                            </div>
                        )}

                        {/* Full Skill List */}
                        {selectedEmployee.skills && Array.isArray(selectedEmployee.skills) && selectedEmployee.skills.length > 0 && (
                            <div className="space-y-2">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Expertise & Certifications</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedEmployee.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-medium flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                            <span>{skill}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contact Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                            {selectedEmployee.email && (
                                <a
                                    href={`mailto:${selectedEmployee.email}`}
                                    className="px-4 py-2.5 rounded-xl bg-primary hover:bg-sky-500 text-white text-xs font-semibold transition-colors flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Send Direct Email</span>
                                </a>
                            )}
                            {selectedEmployee.phone && (
                                <a
                                    href={`tel:${selectedEmployee.phone}`}
                                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-2 border border-slate-700"
                                >
                                    <Phone className="w-4 h-4 text-emerald-400" />
                                    <span>Call {selectedEmployee.phone}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
