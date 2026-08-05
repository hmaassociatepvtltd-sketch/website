"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InteractiveOrganogram } from "@/components/CompanyStructure/InteractiveOrganogram";
import { EmployeeShowcase } from "@/components/LandingPage/EmployeeShowcase";
import { useTina } from "tinacms/dist/react";

export function CompanyStructureClient({ tinaData }) {
    const { data } = useTina(tinaData || { data: { page: { blocks: [] } } });
    const employeeBlock = data?.page?.blocks?.find(
        (b) => b?.__typename === "PageBlocksEmployeeShowcase"
    );

    return (
        <main className="w-full bg-slate-950 text-white min-h-screen pt-28 pb-24 font-poppins select-none relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 relative z-10 space-y-12">
                {/* Back to Home Breadcrumb */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Homepage</span>
                </Link>

                {/* Page Title & Narrative Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xl backdrop-blur-md">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>HMA Associates (SMC-Private) Limited</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight text-white leading-tight">
                        Corporate Structure & Organogram
                    </h1>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        A custom interactive hierarchy designed for precision engineering, transparent governance, dedicated client management, and turnkey project delivery across Pakistan.
                    </p>
                </div>

                {/* Code-Rendered Interactive Flowchart Component */}
                <InteractiveOrganogram />

                {/* Employee Roster Showcase Block */}
                <EmployeeShowcase {...employeeBlock} />

                {/* Bottom CTA Banner */}
                <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-primary/20 to-slate-900 border border-primary/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            Verified Governance
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-josefin-sans text-white">
                            Partner With Pakistan&apos;s Trusted Engineering Team
                        </h3>
                        <p className="text-slate-300 text-sm max-w-xl">
                            From executive planning to on-site solar installation, our specialized teams are ready to deliver your next project.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        <Button link="/quotation" variant="gradient-glow">
                            Request Quotation
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
