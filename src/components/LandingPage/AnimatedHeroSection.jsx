"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export const AnimatedHeroSection = (props) => {
    const defaultSlide = [
        {
            slideHeading: props?.sectionHeading || "ENGINEERING EXCELLENCE & SUSTAINABILITY",
            subHeading: "HMA ASSOCIATES (SMC-PRIVATE) LIMITED",
            description: "Delivering high-performance solar installations, MEP engineering, and commercial power infrastructure across Pakistan.",
            backgroundImage: "/Gemini_Generated_Image_139hus139hus139h.png",
            buttonText: "Explore Projects",
            buttonLink: "/work",
            animationType: "fade-zoom"
        }
    ];

    const slides = props?.slides && props.slides.length > 0 ? props.slides : defaultSlide;
    const duration = props?.slideDuration || 5000;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Touch Swipe Gesture State
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleNext = useCallback(() => {
        if (slides.length <= 1) return;
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const handlePrev = useCallback(() => {
        if (slides.length <= 1) return;
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    // Auto-advance Timer
    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            handleNext();
        }, duration);
        return () => clearInterval(timer);
    }, [slides.length, duration, handleNext]);

    // Mobile Swipe Handlers
    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        if (distance > 50) {
            handleNext(); // Swiped left
        } else if (distance < -50) {
            handlePrev(); // Swiped right
        }
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Helper for custom slide animation transitions
    const getAnimationStyles = (animationType, isActive) => {
        switch (animationType) {
            case "slide-left":
                return {
                    container: isActive
                        ? "opacity-100 translate-x-0 z-10 duration-700 ease-out"
                        : "opacity-0 translate-x-full z-0 pointer-events-none duration-700 ease-in",
                    content: "transition-all duration-700 delay-150 " + (isActive ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"),
                    image: isActive ? "scale-105 transition-transform duration-[6000ms] ease-out" : "scale-100",
                };
            case "slide-up":
                return {
                    container: isActive
                        ? "opacity-100 translate-y-0 z-10 duration-700 ease-out"
                        : "opacity-0 translate-y-12 z-0 pointer-events-none duration-500 ease-in",
                    content: "transition-all duration-700 delay-150 " + (isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                    image: isActive ? "scale-105 transition-transform duration-[6000ms] ease-out" : "scale-100",
                };
            case "flip":
                return {
                    container: isActive
                        ? "opacity-100 rotate-x-0 z-10 duration-700 ease-out"
                        : "opacity-0 -rotate-x-90 z-0 pointer-events-none duration-500 ease-in",
                    content: "transition-all duration-700 delay-150 " + (isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                    image: isActive ? "scale-105 transition-transform duration-[6000ms] ease-out" : "scale-100",
                };
            case "fade-zoom":
            default:
                return {
                    container: isActive
                        ? "opacity-100 z-10 duration-1000 ease-out"
                        : "opacity-0 z-0 pointer-events-none duration-1000 ease-in-out",
                    content: "transition-all duration-700 delay-200 " + (isActive ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"),
                    image: isActive ? "scale-110 transition-transform duration-[7000ms] ease-out" : "scale-100",
                };
        }
    };

    if (slides.length === 0) {
        return null;
    }

    return (
        <section
            data-tina-field={tinaField(props)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white font-poppins select-none"
        >
            {/* Optional Top Floating Badge */}
            {props.sectionHeading && (
                <div className="absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-xl">
                    <span data-tina-field={tinaField(props, "sectionHeading")}>
                        {props.sectionHeading}
                    </span>
                </div>
            )}

            {/* Ambient Lighting Orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none z-20 opacity-60" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none z-20 opacity-60" />

            {/* Slides Container */}
            <div data-tina-field={tinaField(props, "slides")} className="contents">
                {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                const anim = getAnimationStyles(slide?.animationType, isActive);

                return (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all ${anim.container}`}
                    >
                        {/* Background Video or Background Image with Dynamic Parallax Zoom Effect */}
                        {slide?.backgroundVideo || slide?.video ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={`absolute inset-0 w-full h-full object-cover ${anim.image}`}
                                src={slide.backgroundVideo || slide.video}
                            />
                        ) : (
                            <div
                                className={`absolute inset-0 bg-cover bg-center ${anim.image}`}
                                style={{
                                    backgroundImage: `url('${
                                        slide?.backgroundImage ||
                                        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                                    }')`,
                                }}
                            />
                        )}

                        {/* Multi-layered Gradients for Premium Depth & Legibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

                        {/* Slide Content Box */}
                        <div className="w-full h-full relative max-w-[1260px] mx-auto px-5 sm:px-8 xl:px-0 flex items-center pt-24 sm:pt-28 pb-20">
                            <div className={`max-w-[780px] space-y-5 sm:space-y-6 text-left ${anim.content}`}>
                                {/* Sub-heading Tag */}
                                {slide?.subHeading && (
                                    <div>
                                        <span
                                            data-tina-field={tinaField(slide, "subHeading")}
                                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-lg"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <span>{slide.subHeading}</span>
                                        </span>
                                    </div>
                                )}

                                {/* Main Slide Title */}
                                {slide?.slideHeading && (
                                    <h1
                                        data-tina-field={tinaField(slide, "slideHeading")}
                                        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-josefin-sans tracking-tight text-white leading-[1.08] uppercase drop-shadow-2xl"
                                    >
                                        {slide.slideHeading}
                                    </h1>
                                )}

                                {/* Slide Description */}
                                {slide?.description && (
                                    <p
                                        data-tina-field={tinaField(slide, "description")}
                                        className="font-poppins text-sm sm:text-lg lg:text-xl text-slate-200/90 max-w-[660px] leading-relaxed"
                                    >
                                        {slide.description}
                                    </p>
                                )}

                                {/* CTA Action Buttons */}
                                <div className="flex flex-wrap items-center gap-4 pt-3">
                                    {slide?.buttonText && (
                                        <div data-tina-field={tinaField(slide, "buttonText")}>
                                            <Button
                                                link={slide?.buttonLink || "#"}
                                                variant={slide?.buttonStyle || "primary-arrow"}
                                            >
                                                {slide.buttonText}
                                            </Button>
                                        </div>
                                    )}

                                    {slide?.secondaryButtonText && (
                                        <Link
                                            href={slide?.secondaryButtonLink || "#"}
                                            data-tina-field={tinaField(slide, "secondaryButtonText")}
                                            className="px-7 py-3.5 rounded-xl border border-white/30 hover:border-white hover:bg-white/15 text-white font-poppins font-medium text-sm sm:text-base transition-all duration-300 backdrop-blur-md shadow-lg active:scale-95 flex items-center gap-2"
                                        >
                                            <span>{slide.secondaryButtonText}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>

            {/* Side Navigation Arrows (Tablet & Desktop) */}
            {slides.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl bg-white/10 hover:bg-white/25 active:scale-90 backdrop-blur-md text-white border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl items-center justify-center cursor-pointer"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl bg-white/10 hover:bg-white/25 active:scale-90 backdrop-blur-md text-white border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl items-center justify-center cursor-pointer"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Bottom Progress Bar & Pagination Controls */}
                    <div className="absolute bottom-6 sm:bottom-10 z-30 max-w-[1260px] w-full px-5 sm:px-8 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Slide Counter Indicator */}
                        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest text-white/80">
                            <span className="text-white text-base">
                                {String(currentSlide + 1).padStart(2, "0")}
                            </span>
                            <span className="w-8 h-0.5 bg-white/30 rounded-full inline-block" />
                            <span className="text-white/50">
                                {String(slides.length).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Interactive Pagination Dots / Tabs */}
                        <div className="flex items-center gap-2.5">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`relative h-2.5 rounded-full transition-all duration-500 overflow-hidden cursor-pointer ${
                                        idx === currentSlide
                                            ? "w-10 sm:w-12 bg-primary shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                                            : "w-2.5 bg-white/40 hover:bg-white/80"
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};
