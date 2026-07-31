"use client";

import React, { useState } from "react";
import { tinaField } from "tinacms/dist/react";
import { Button } from "@/components/ui/Button";
import { 
    Zap, 
    Calculator, 
    Sun, 
    DollarSign, 
    TrendingUp, 
    CheckCircle2, 
    Fan, 
    Tv, 
    Lightbulb, 
    Refrigerator, 
    Flame,
    ArrowRight
} from "lucide-react";

const CalculationMode = {
    ByBill: "BY_BILL",
    ByAppliances: "BY_APPLIANCES",
};

export const ModernCalculator = (props) => {
    const [mode, setMode] = useState(CalculationMode.ByBill);
    const [monthlyBill, setMonthlyBill] = useState(55000);
    const [appliances, setAppliances] = useState({
        ac: 2,
        fans: 6,
        fridge: 1,
        tv: 2,
        lights: 10,
    });

    const bgTheme = props?.bgTheme || "navy";
    const pkrRatePerKw = props?.pkrPerKwRate || 165000;
    const tariffRate = props?.tariffRatePerUnit || 55;

    // Calculation Logic
    const calculateResults = () => {
        let recommendedKw = 0;

        if (mode === CalculationMode.ByBill) {
            recommendedKw = monthlyBill / 6500;
        } else {
            const acLoad = appliances.ac * 1.8;
            const fanLoad = appliances.fans * 0.12;
            const fridgeLoad = appliances.fridge * 0.35;
            const tvLoad = appliances.tv * 0.15;
            const lightLoad = appliances.lights * 0.02;

            recommendedKw = (acLoad + fanLoad + fridgeLoad + tvLoad + lightLoad) * 1.25;
        }

        recommendedKw = Math.ceil(recommendedKw * 2) / 2;
        if (recommendedKw < 1 && recommendedKw > 0) recommendedKw = 1;

        const dailyUnits = Math.round(recommendedKw * 4);
        const monthlyUnits = dailyUnits * 30;
        const monthlySavings = Math.round(monthlyUnits * tariffRate);
        const yearlySavings = monthlySavings * 12;
        const estimatedInvestment = Math.round(recommendedKw * pkrRatePerKw);
        const paybackYears = estimatedInvestment > 0 && monthlySavings > 0 ? (estimatedInvestment / (monthlySavings * 12)).toFixed(1) : "3.5";

        return {
            recommendedKw,
            dailyUnits,
            monthlySavings,
            yearlySavings,
            estimatedInvestment,
            paybackYears,
        };
    };

    const results = calculateResults();

    const handleApplianceChange = (key, delta) => {
        setAppliances((prev) => ({
            ...prev,
            [key]: Math.max(0, prev[key] + delta),
        }));
    };

    const getThemeStyles = () => {
        switch (bgTheme) {
            case "dark-zinc":
                return {
                    section: "bg-zinc-950 text-white border-y border-zinc-800",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    card: "bg-zinc-900 border-zinc-800 text-white shadow-xl",
                    resultCard: "bg-gradient-to-br from-primary/20 via-zinc-900 to-zinc-950 border-primary/40",
                    titleText: "text-white",
                    subText: "text-gray-400",
                };
            case "gray":
                return {
                    section: "bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    card: "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white shadow-lg",
                    resultCard: "bg-gradient-to-br from-primary/10 via-white to-gray-50 dark:from-primary/20 dark:via-zinc-900 dark:to-zinc-950 border-primary/40",
                    titleText: "text-gray-900 dark:text-white",
                    subText: "text-gray-600 dark:text-gray-400",
                };
            case "light":
                return {
                    section: "bg-white dark:bg-zinc-950 text-gray-900 dark:text-white",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    card: "bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white shadow-md",
                    resultCard: "bg-gradient-to-br from-primary/10 via-gray-50 to-white dark:from-primary/20 dark:via-zinc-900 dark:to-zinc-950 border-primary/30",
                    titleText: "text-gray-900 dark:text-white",
                    subText: "text-gray-600 dark:text-gray-400",
                };
            case "navy":
            default:
                return {
                    section: "bg-[#000322] text-white",
                    badge: "bg-primary/20 text-primary border-primary/30",
                    card: "bg-white/5 backdrop-blur-xl border-white/10 text-white shadow-2xl",
                    resultCard: "bg-gradient-to-br from-primary/20 via-secondary-background/90 to-secondary-background border-primary/50",
                    titleText: "text-white",
                    subText: "text-gray-300",
                };
        }
    };

    const theme = getThemeStyles();

    return (
        <section className={`w-full relative py-20 md:py-28 overflow-hidden flex justify-center items-center transition-colors duration-500 ${theme.section}`}>
            {/* Background Ambient Glows */}
            {bgTheme === "navy" && (
                <>
                    <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
                </>
            )}

            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-12 relative z-10">
                {/* Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins border ${theme.badge}`}>
                        <Calculator className="w-3.5 h-3.5" />
                        {props.badgeText || "Smart Solar System Sizing Calculator"}
                    </span>
                    <h2
                        data-tina-field={tinaField(props, "heading")}
                        className={`text-3xl md:text-5xl font-bold font-josefin-sans tracking-tight leading-tight ${theme.titleText}`}
                    >
                        {props.heading || "Calculate Your Solar ROI & Savings"}
                    </h2>
                    <p
                        data-tina-field={tinaField(props, "subHeading")}
                        className={`text-base md:text-lg font-poppins leading-relaxed ${theme.subText}`}
                    >
                        {props.subHeading ||
                            "Estimate your recommended solar capacity, monthly bill reduction, and payback timeline instantly."}
                    </p>
                </div>

                {/* Main Interactive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Calculation Mode Inputs */}
                    <div className={`lg:col-span-7 p-6 md:p-8 rounded-3xl border space-y-8 ${theme.card}`}>
                        {/* Mode Switcher Tabs */}
                        <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-black/20 border border-white/10">
                            <button
                                onClick={() => setMode(CalculationMode.ByBill)}
                                className={`py-3 px-4 rounded-xl text-sm font-semibold font-poppins transition-all duration-300 flex items-center justify-center gap-2 ${
                                    mode === CalculationMode.ByBill
                                        ? "bg-primary text-white shadow-lg"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                <DollarSign className="w-4 h-4" />
                                <span>By Monthly Bill</span>
                            </button>
                            <button
                                onClick={() => setMode(CalculationMode.ByAppliances)}
                                className={`py-3 px-4 rounded-xl text-sm font-semibold font-poppins transition-all duration-300 flex items-center justify-center gap-2 ${
                                    mode === CalculationMode.ByAppliances
                                        ? "bg-primary text-white shadow-lg"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                <Zap className="w-4 h-4" />
                                <span>By Heavy Appliances</span>
                            </button>
                        </div>

                        {/* Input Mode 1: By Monthly Bill */}
                        {mode === CalculationMode.ByBill && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-semibold font-poppins uppercase tracking-wider text-gray-300">
                                        Average Monthly Electricity Bill (PKR)
                                    </label>
                                    <span className="text-2xl font-bold font-josefin-sans text-primary">
                                        Rs. {monthlyBill.toLocaleString()}
                                    </span>
                                </div>

                                <input
                                    type="range"
                                    min="15000"
                                    max="300000"
                                    step="5000"
                                    value={monthlyBill}
                                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                                    className="w-full h-3 bg-gray-700/60 rounded-lg appearance-none cursor-pointer accent-primary"
                                />

                                <div className="flex justify-between text-xs text-gray-400 font-poppins">
                                    <span>Rs. 15,000</span>
                                    <span>Rs. 150,000</span>
                                    <span>Rs. 300,000+</span>
                                </div>
                            </div>
                        )}

                        {/* Input Mode 2: By Appliances Counter */}
                        {mode === CalculationMode.ByAppliances && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { key: "ac", label: "Inverter ACs (1.5 Ton)", icon: Flame },
                                    { key: "fans", label: "Fans (Ceiling / Standing)", icon: Fan },
                                    { key: "fridge", label: "Refrigerators / Deep Freezers", icon: Refrigerator },
                                    { key: "tv", label: "LED Televisions", icon: Tv },
                                    { key: "lights", label: "Lights & Bulbs", icon: Lightbulb },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    const count = appliances[item.key];

                                    return (
                                        <div
                                            key={item.key}
                                            className="p-4 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-between gap-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-semibold font-poppins">{item.label}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleApplianceChange(item.key, -1)}
                                                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="w-6 text-center font-bold font-josefin-sans text-lg">{count}</span>
                                                <button
                                                    onClick={() => handleApplianceChange(item.key, 1)}
                                                    className="w-8 h-8 rounded-lg bg-primary hover:bg-primary/80 text-white font-bold flex items-center justify-center transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* CTA Link */}
                        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-gray-400 font-poppins">
                                Need custom net-metering feasibility for your industrial site?
                            </p>
                            <Button link="/#contact" variant="primary-arrow">
                                Request Engineering Site Visit
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Calculated Results & ROI Card */}
                    <div className={`lg:col-span-5 p-8 rounded-3xl border space-y-8 shadow-2xl ${theme.resultCard}`}>
                        <div className="space-y-1">
                            <span className="text-xs uppercase font-poppins font-semibold tracking-wider text-primary">
                                Estimated Solar Solution
                            </span>
                            <h3 className="text-4xl font-bold font-josefin-sans tracking-tight">
                                {results.recommendedKw} <span className="text-2xl font-normal text-primary">kW System</span>
                            </h3>
                        </div>

                        {/* Key Metrics Breakdown */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1">
                                <p className="text-xs text-gray-400 font-poppins">Monthly Savings</p>
                                <p className="text-xl font-bold font-josefin-sans text-emerald-400">
                                    Rs. {results.monthlySavings.toLocaleString()}
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1">
                                <p className="text-xs text-gray-400 font-poppins">Yearly Savings</p>
                                <p className="text-xl font-bold font-josefin-sans text-emerald-400">
                                    Rs. {results.yearlySavings.toLocaleString()}
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1">
                                <p className="text-xs text-gray-400 font-poppins">Est. Daily Production</p>
                                <p className="text-xl font-bold font-josefin-sans text-white">
                                    ~{results.dailyUnits} Units/Day
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1">
                                <p className="text-xs text-gray-400 font-poppins">Estimated ROI Payback</p>
                                <p className="text-xl font-bold font-josefin-sans text-amber-400">
                                    ~{results.paybackYears} Years
                                </p>
                            </div>
                        </div>

                        {/* Total Estimated System Investment */}
                        <div className="p-5 rounded-2xl bg-primary/20 border border-primary/40 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold font-poppins text-gray-200">
                                    Estimated Turnkey Investment
                                </span>
                                <Sun className="w-4 h-4 text-primary animate-spin-slow" />
                            </div>
                            <p className="text-3xl font-bold font-josefin-sans text-white">
                                Rs. {results.estimatedInvestment.toLocaleString()}
                            </p>
                            <p className="text-[11px] font-poppins text-gray-300">
                                Includes Tier-1 Solar Panels, Hybrid Inverter, Mounting Racks, & Net Metering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
