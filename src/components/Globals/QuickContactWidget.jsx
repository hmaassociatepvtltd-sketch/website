"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText, X, ChevronUp, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const QuickContactWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const whatsappNumber = "923097778006";
    const defaultMsg = encodeURIComponent("Hi HMA Associates! I would like to inquire about Solar Solutions / MEP / Construction services.");

    const handleToggle = () => {
        const nextState = !isOpen;
        setIsOpen(nextState);
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("widgetToggle", { detail: { isOpen: nextState } }));
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("widgetToggle", { detail: { isOpen: false } }));
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-poppins select-none flex flex-col items-end gap-3">
            {/* Expanded Action Menu */}
            {isOpen && (
                <div className="flex flex-col gap-2.5 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* WhatsApp Direct Chat */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                        className="px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xl border border-emerald-400/30 flex items-center gap-3 backdrop-blur-xl transition-all duration-300 hover:scale-105"
                    >
                        <FaWhatsapp className="w-5 h-5 text-white" />
                        <span>Chat on WhatsApp</span>
                    </a>

                    {/* Instant Call */}
                    <a
                        href="tel:+923097778006"
                        onClick={handleClose}
                        className="px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xl border border-white/20 flex items-center gap-3 backdrop-blur-xl transition-all duration-300 hover:scale-105"
                    >
                        <Phone className="w-4 h-4 text-primary" />
                        <span>Call +92 309 7778006</span>
                    </a>

                    {/* Instant Quote Request */}
                    <Link
                        href="/quotation"
                        onClick={handleClose}
                        className="px-4 py-3 rounded-2xl bg-gradient-to-r from-primary to-sky-600 text-white text-xs font-semibold shadow-xl border border-white/20 flex items-center gap-3 backdrop-blur-xl transition-all duration-300 hover:scale-105"
                    >
                        <FileText className="w-4 h-4 text-amber-300" />
                        <span>Get Instant Quote</span>
                    </Link>
                </div>
            )}

            {/* Main Floating Trigger Button */}
            <button
                onClick={handleToggle}
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-300 active:scale-95 border ${
                    isOpen
                        ? "bg-slate-900 border-white/30 text-white rotate-90"
                        : "bg-gradient-to-br from-primary via-blue-600 to-emerald-600 border-white/30 shadow-primary/30 hover:scale-110"
                }`}
                aria-label="Toggle Quick Contact Menu"
            >
                {/* Glowing Pulse Ring */}
                {!isOpen && (
                    <span className="absolute -inset-1 rounded-2xl bg-primary/40 animate-ping pointer-events-none opacity-75" />
                )}

                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white" />
                )}
            </button>
        </div>
    );
};
