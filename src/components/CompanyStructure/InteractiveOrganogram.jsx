"use client";

import React, { useState } from "react";
import {
    Building2,
    Briefcase,
    Wrench,
    Scale,
    Users,
    UserCheck,
    CheckCircle2,
    ShieldCheck,
    Layers,
    ChevronDown,
    X,
    ArrowUpRight
} from "lucide-react";

export const InteractiveOrganogram = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <div className="w-full space-y-8 font-poppins select-none">
            {/* Professional Section Indicator */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-primary border border-slate-700">
                        <Layers className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold font-josefin-sans text-white">Corporate Governance & Management Hierarchy</h3>
                        <p className="text-xs text-slate-400">Click any position node to inspect operational scope & responsibilities.</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Official Organogram</span>
                </div>
            </div>

            {/* Main Corporate Flowchart Tree Container */}
            <div className="w-full overflow-x-auto pb-10 pt-4 scrollbar-thin scrollbar-thumb-slate-800">
                <div className="min-w-[1050px] flex flex-col items-center relative px-4">
                    
                    {/* LEVEL 1: DIRECTOR (DEAD CENTER) + HR & LEGAL SECRETARY (LEFT STAFF) */}
                    <div className="relative flex flex-col items-center w-full">
                        {/* Executive Top Row */}
                        <div className="relative flex items-center justify-center">
                            
                            {/* HR & Legal Secretary (Executive Staff - Left) */}
                            <div className="absolute right-[calc(100%+1.5rem)] sm:right-[calc(100%+2.5rem)] flex items-center gap-3 top-1/2 -translate-y-1/2 whitespace-nowrap z-20">
                                <div
                                    onClick={() =>
                                        setSelectedRole({
                                            title: "HR & Legal Secretary",
                                            department: "Executive Staff & Advisory",
                                            scope: "Corporate legal compliance, PEC/AEDB regulatory filings, labor contracts, human resources management, and administrative secretarial affairs.",
                                            responsibilities: [
                                                "Corporate legal affairs & regulatory compliance",
                                                "HR policy enforcement & employee management",
                                                "PEC, AEDB & Chamber license maintenance",
                                                "Executive secretarial documentation & records"
                                            ]
                                        })
                                    }
                                    className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-xs font-medium flex items-center gap-3 shadow-lg hover:border-slate-500 cursor-pointer transition-all hover:-translate-y-0.5 group"
                                >
                                    <div className="p-1.5 rounded-lg bg-slate-800 text-purple-400 border border-purple-500/30">
                                        <Scale className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">Staff Advisory</span>
                                        <span className="font-semibold text-sm text-white group-hover:text-primary transition-colors">HR & Legal Secretary</span>
                                    </div>
                                </div>

                                {/* Connecting Horizontal Blueprint Line */}
                                <div className="w-6 sm:w-10 h-[1px] bg-slate-600 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-500" />
                                </div>
                            </div>

                            {/* DIRECTOR (PERFECTLY DEAD-CENTERED) */}
                            <div
                                onClick={() =>
                                    setSelectedRole({
                                        title: "Director",
                                        department: "Executive Leadership",
                                        scope: "Overall strategic management, company expansion, capital investments, corporate governance, and executive oversight for HMA Associates (SMC-Private) Limited across Pakistan.",
                                        responsibilities: [
                                            "Executive decision-making & board governance",
                                            "Strategic investments & business expansion",
                                            "High-level government & partner negotiations",
                                            "Overall performance & financial oversight"
                                        ]
                                    })
                                }
                                className="group cursor-pointer p-6 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl hover:border-primary/80 transition-all duration-300 min-w-[280px] sm:min-w-[340px] text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-primary to-sky-400" />
                                
                                <div className="flex flex-col items-center space-y-2">
                                    <span className="px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono font-bold uppercase tracking-wider">
                                        Executive Board
                                    </span>
                                    <h2 className="text-xl sm:text-2xl font-bold font-josefin-sans text-white group-hover:text-primary transition-colors">
                                        DIRECTOR
                                    </h2>
                                    <p className="text-xs text-slate-400 font-medium">HMA Associates (SMC-Private) Limited</p>
                                </div>
                            </div>
                        </div>

                        {/* Main Vertical Blueprint Line dropping straight down */}
                        <div className="w-[1px] h-12 bg-slate-600 relative">
                            {/* Horizontal Split Line to Division Managers */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[680px] h-[1px] bg-slate-600" />
                        </div>
                    </div>

                    {/* LEVEL 2: DIVISION MANAGERS (BUSINESS DEVELOPMENT & BUSINESS OPERATIONS) */}
                    <div className="grid grid-cols-2 gap-12 w-full max-w-4xl relative pt-0">
                        
                        {/* DIVISION A: BUSINESS DEVELOPMENT MANAGER */}
                        <div className="flex flex-col items-center relative space-y-6">
                            <div className="w-[1px] h-6 bg-slate-600" />

                            <CorporateNode
                                title="Business Development Manager"
                                department="Commercial & Client Relations Division"
                                icon={<Briefcase className="w-4 h-4 text-amber-400" />}
                                accentColor="border-amber-500/40"
                                onClick={() =>
                                    setSelectedRole({
                                        title: "Business Development Manager",
                                        department: "Business Development Division",
                                        scope: "Leading commercial sales strategy, client acquisition, corporate partnerships, marketing operations, and customer relationship management.",
                                        responsibilities: [
                                            "Commercial sales strategy & revenue growth",
                                            "Industrial & commercial lead generation",
                                            "Overseeing Sales & Customer Relationship teams",
                                            "Brand positioning & marketing supervision"
                                        ]
                                    })
                                }
                            />

                            {/* Connector down to Sales Manager & CRM Manager */}
                            <div className="w-full relative flex flex-col items-center">
                                <div className="w-[1px] h-6 bg-slate-600" />
                                <div className="w-[280px] h-[1px] bg-slate-600" />
                            </div>

                            {/* LEVEL 3 (UNDER BDM): SALES MANAGER & CRM MANAGER */}
                            <div className="grid grid-cols-2 gap-4 w-full">
                                
                                {/* A1: SALES MANAGER */}
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-[1px] h-4 bg-slate-600" />
                                    <SubCorporateNode
                                        title="Sales Manager"
                                        icon={<Users className="w-3.5 h-3.5 text-amber-400" />}
                                        onClick={() =>
                                            setSelectedRole({
                                                title: "Sales Manager",
                                                department: "Sales Department",
                                                scope: "Direct management of sales pipelines, client proposals, product quotations, and field sales executives.",
                                                responsibilities: [
                                                    "Managing sales pipeline & quota targets",
                                                    "Directing Sales Executives & Marketing team",
                                                    "Solar & MEP quotation review"
                                                ]
                                            })
                                        }
                                    />
                                    <div className="w-[1px] h-3 bg-slate-700" />
                                    {/* A1 Staff */}
                                    <div className="space-y-1.5 w-full">
                                        <LeafCorporateNode title="Sales Executive" />
                                        <LeafCorporateNode title="Communication & Marketing Executive" />
                                    </div>
                                </div>

                                {/* A2: CUSTOMER RELATIONSHIP MANAGER */}
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-[1px] h-4 bg-slate-600" />
                                    <SubCorporateNode
                                        title="Customer Relationship Manager"
                                        icon={<UserCheck className="w-3.5 h-3.5 text-emerald-400" />}
                                        onClick={() =>
                                            setSelectedRole({
                                                title: "Customer Relationship Manager",
                                                department: "CRM Department",
                                                scope: "Post-installation client support, net-metering status updates, maintenance dispatch, and customer satisfaction.",
                                                responsibilities: [
                                                    "Client onboarding & relationship management",
                                                    "Managing CROs & After-Sales technicians",
                                                    "Warranty & service maintenance routing"
                                                ]
                                            })
                                        }
                                    />
                                    <div className="w-[1px] h-3 bg-slate-700" />
                                    {/* A2 Staff */}
                                    <div className="space-y-1.5 w-full">
                                        <LeafCorporateNode title="Customer Relationship Officers" />
                                        <LeafCorporateNode title="After Sales Technicians" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DIVISION B: BUSINESS OPERATIONS MANAGER */}
                        <div className="flex flex-col items-center relative space-y-6">
                            <div className="w-[1px] h-6 bg-slate-600" />

                            <CorporateNode
                                title="Business Operations Manager"
                                department="Project Execution & Admin Division"
                                icon={<Wrench className="w-4 h-4 text-emerald-400" />}
                                accentColor="border-emerald-500/40"
                                onClick={() =>
                                    setSelectedRole({
                                        title: "Business Operations Manager",
                                        department: "Business Operations Division",
                                        scope: "Supervising turnkey project delivery, engineering design, site construction, supply chain procurement, and administrative logistics.",
                                        responsibilities: [
                                            "Overall project execution & engineering oversight",
                                            "Supply chain, procurement & equipment inventory",
                                            "Directing Project Manager & Admin Manager",
                                            "Quality assurance & site safety compliance"
                                        ]
                                    })
                                }
                            />

                            {/* Connector down to Project Manager & Admin Manager */}
                            <div className="w-full relative flex flex-col items-center">
                                <div className="w-[1px] h-6 bg-slate-600" />
                                <div className="w-[320px] h-[1px] bg-slate-600" />
                            </div>

                            {/* LEVEL 3 (UNDER BOM): PROJECT MANAGER & ADMIN MANAGER */}
                            <div className="grid grid-cols-2 gap-4 w-full">
                                
                                {/* B1: PROJECT MANAGER */}
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-[1px] h-4 bg-slate-600" />
                                    <SubCorporateNode
                                        title="Project Manager"
                                        icon={<Building2 className="w-3.5 h-3.5 text-sky-400" />}
                                        onClick={() =>
                                            setSelectedRole({
                                                title: "Project Manager",
                                                department: "Project Management Department",
                                                scope: "On-site solar power plant installation, MEP execution, site safety management, and engineering supervision.",
                                                responsibilities: [
                                                    "Site execution schedules & project milestones",
                                                    "Managing Solar Project Engineers & Supervisors",
                                                    "Quality control & DISCO grid testing"
                                                ]
                                            })
                                        }
                                    />

                                    {/* B1 Branches */}
                                    <div className="w-full space-y-3 pt-1">
                                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-1.5">
                                            <p className="text-xs font-semibold text-slate-200">Solar Project Engineer</p>
                                            <div className="pl-2 border-l border-slate-700 text-[11px] text-slate-400 space-y-0.5">
                                                <p>• Site Engineer / Site Supervisor</p>
                                                <p className="pl-2 text-slate-500">• Technical / Non-Tech. Staff</p>
                                            </div>
                                        </div>

                                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-1.5">
                                            <p className="text-xs font-semibold text-slate-200">Quantity Surveyor / Site Engineer</p>
                                            <div className="pl-2 border-l border-slate-700 text-[11px] text-slate-400 space-y-0.5">
                                                <p>• Site Supervisor</p>
                                                <p className="pl-2 text-slate-500">• Technicians / Operators / Labour</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* B2: ADMIN MANAGER */}
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-[1px] h-4 bg-slate-600" />
                                    <SubCorporateNode
                                        title="Admin Manager"
                                        icon={<ShieldCheck className="w-3.5 h-3.5 text-primary" />}
                                        onClick={() =>
                                            setSelectedRole({
                                                title: "Admin Manager",
                                                department: "Administration Department",
                                                scope: "Procurement of Tier-1 solar panels & inverters, office logistics, inventory management, and office staff supervision.",
                                                responsibilities: [
                                                    "Managing Procurement Head & Admin Officers",
                                                    "Tier-1 equipment sourcing & inventory",
                                                    "Office administration & staff logistics"
                                                ]
                                            })
                                        }
                                    />

                                    {/* B2 Branches */}
                                    <div className="w-full space-y-3 pt-1">
                                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-1.5">
                                            <p className="text-xs font-semibold text-slate-200">Procurement Head</p>
                                            <div className="pl-2 border-l border-slate-700 text-[11px] text-slate-400">
                                                <p>• Procurement Staff</p>
                                            </div>
                                        </div>

                                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-1.5">
                                            <p className="text-xs font-semibold text-slate-200">Admin Officer</p>
                                            <div className="pl-2 border-l border-slate-700 text-[11px] text-slate-400">
                                                <p>• Office Staff</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Executive Detail Modal */}
            {selectedRole && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 space-y-5 text-white shadow-2xl">
                        <button
                            onClick={() => setSelectedRole(null)}
                            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="space-y-1.5 border-b border-slate-800 pb-4">
                            <span className="text-[11px] font-mono text-primary uppercase font-bold">
                                {selectedRole.department}
                            </span>
                            <h2 className="text-2xl font-bold font-josefin-sans">{selectedRole.title}</h2>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Operational Scope</h4>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                                {selectedRole.scope}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Responsibilities</h4>
                            <ul className="space-y-2">
                                {selectedRole.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Professional Minimalist Node Components
const CorporateNode = ({ title, department, icon, accentColor, onClick }) => (
    <div
        onClick={onClick}
        className={`group cursor-pointer p-4 rounded-xl bg-slate-900 border ${accentColor || "border-slate-700"} shadow-lg hover:border-primary transition-all duration-200 text-left min-w-[240px] sm:min-w-[270px] space-y-1`}
    >
        <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{department}</span>
            <div className="p-1 rounded bg-slate-800 text-slate-300">{icon}</div>
        </div>
        <h3 className="text-sm font-bold font-josefin-sans text-white group-hover:text-primary transition-colors">
            {title}
        </h3>
    </div>
);

const SubCorporateNode = ({ title, icon, onClick }) => (
    <div
        onClick={onClick}
        className="cursor-pointer p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-md hover:border-slate-600 transition-all flex items-center justify-between gap-2 text-xs font-semibold text-slate-200 w-full"
    >
        <div className="flex items-center gap-2">
            {icon}
            <span className="font-josefin-sans">{title}</span>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
    </div>
);

const LeafCorporateNode = ({ title }) => (
    <div className="px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-[11px] font-medium truncate text-center">
        {title}
    </div>
);
