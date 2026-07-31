"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShieldCheck, Award } from "lucide-react";

export const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fast progress increment simulation
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 25) + 10;
            });
        }, 120);

        const handleLoad = () => {
            setProgress(100);
            setTimeout(() => setIsLoading(false), 300);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearInterval(interval);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-slate-950 text-white font-poppins select-none flex flex-col items-center justify-center p-6 overflow-hidden"
                >
                    {/* Ambient Glow Lighting Orbs */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

                    <div className="relative z-10 max-w-md w-full text-center space-y-8 flex flex-col items-center">
                        {/* HMA Brand Logo with Scale Pulse */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            <Image
                                width={260}
                                height={90}
                                alt="HMA Associates Logo"
                                className="w-52 sm:w-64 h-auto object-contain brightness-0 invert drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                                src="/assets/Fulllogo.png"
                                priority
                            />
                        </motion.div>

                        {/* Short Company Tagline & Detail */}
                        <motion.div
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-2 text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-primary uppercase tracking-widest shadow-md">
                                <Award className="w-3.5 h-3.5 text-amber-400" />
                                <span>PEC C1 Licensed & AEDB Certified</span>
                            </div>
                            <h2 className="text-sm sm:text-base font-bold font-josefin-sans text-slate-200 tracking-wide uppercase">
                                Engineering Excellence & Solar Solutions
                            </h2>
                            <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                                Construction • Renewable Energy • MEP Engineering
                            </p>
                        </motion.div>

                        {/* Glowing Progress Bar */}
                        <div className="w-full max-w-xs space-y-2.5 pt-2">
                            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative border border-white/10">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary via-indigo-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${Math.min(progress, 100)}%` }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>

                            <div className="flex items-center justify-between text-[11px] font-mono font-medium text-slate-400 px-1">
                                <span className="flex items-center gap-1">
                                    <Zap className="w-3 h-3 text-amber-400 animate-pulse" />
                                    <span>Loading System...</span>
                                </span>
                                <span className="text-white font-bold">{Math.min(progress, 100)}%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
