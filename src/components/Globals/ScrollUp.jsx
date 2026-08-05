"use client"

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollUp = () => {
    const [visible, setVisible] = useState(false);
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        const handleWidgetToggle = (e) => {
            setIsWidgetOpen(!!e?.detail?.isOpen);
        };

        window.addEventListener("scroll", toggleVisibility);
        window.addEventListener("widgetToggle", handleWidgetToggle);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("widgetToggle", handleWidgetToggle);
        };
    }, []);

    if (!visible || isWidgetOpen) return null;

    return (
        <div className="fixed bottom-24 right-6 z-40 animate-in fade-in zoom-in duration-300">
            <button
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-12 h-12 rounded-2xl bg-slate-900/90 hover:bg-slate-800 backdrop-blur-xl border border-white/20 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
                <ChevronUp className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    );
};

