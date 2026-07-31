"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, MapPin, Zap, Building2, ShieldCheck, Sparkles, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const AllWorks = ({ worksData = [], ...props }) => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState("all");

    if (!worksData || worksData.length === 0) return null;

    // Filter categories dynamically
    const categories = [
        { id: "all", label: "All Engineering Projects" },
        { id: "commercial", label: "Commercial & Industrial" },
        { id: "residential", label: "Residential Systems" },
        { id: "agricultural", label: "Agricultural & Water Pumping" },
    ];

    const filteredWorks = selectedCategory === "all"
        ? worksData
        : worksData.filter((item) => {
              const nameLower = (item.name || "").toLowerCase();
              const descLower = (item.description || "").toLowerCase();
              return nameLower.includes(selectedCategory) || descLower.includes(selectedCategory);
          });

    return (
        <section className="w-full relative py-20 lg:py-32 bg-slate-950 text-white font-poppins select-none overflow-hidden">
            {/* Ambient Lighting Background Orbs */}
            <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 space-y-12 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>Executive Engineering Portfolio</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight text-white leading-tight">
                            Proven Solar & Industrial Installations
                        </h2>

                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            Explore our portfolio of high-capacity commercial, industrial, and residential solar installations engineered for max ROI and long-term sustainability.
                        </p>
                    </div>

                    {/* Stats Widget Badge */}
                    <div className="shrink-0 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold font-josefin-sans text-white">50+ MW</div>
                            <div className="text-xs text-slate-400">Total Installed Capacity</div>
                        </div>
                    </div>
                </div>

                {/* Category Filter Pills Bar */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                        <Filter className="w-4 h-4 text-primary" />
                        <span>Filter:</span>
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 shadow-md ${
                                selectedCategory === cat.id
                                    ? "bg-primary text-white border border-primary/50 shadow-primary/30 scale-105"
                                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Portfolio Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredWorks.map((project, index) => {
                            const projectSlug = project._sys?.filename || "detail";

                            return (
                                <motion.div
                                    key={project._sys?.filename || index}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    onClick={() => router.push(`/work/${projectSlug}`)}
                                    className="group relative rounded-3xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-primary/50 backdrop-blur-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
                                >
                                    {/* Cover Image Container with Dark Vignette */}
                                    <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-950">
                                        <Image
                                            src={project.mainImage || "/Gemini_Generated_Image_139hus139hus139h.png"}
                                            alt={project.name || "Engineering project cover"}
                                            fill
                                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

                                        {/* Corner Project Badge Tag */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-primary uppercase tracking-wider shadow-lg flex items-center gap-1">
                                                <Zap className="w-3 h-3 text-amber-400" />
                                                <span>Verified Site</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Details Content */}
                                    <div className="p-6 sm:p-8 space-y-4 relative z-20 flex-grow flex flex-col justify-between">
                                        <div className="space-y-2">
                                            <h3 className="text-xl sm:text-2xl font-bold font-josefin-sans text-white group-hover:text-primary transition-colors leading-tight">
                                                {project.name}
                                            </h3>
                                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Footer Action Bar */}
                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                <span>View Project Details</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};



