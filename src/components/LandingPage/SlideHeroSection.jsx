"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";

export const SlideHeroSection = (props) => {
    // Default to an empty array if slides aren't defined yet
    const slides = props.slides || [];
    // Default duration to 5000ms (5 seconds) if not provided
    const duration = props.slideDuration || 5000;

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return; // Don't loop if there's only 0 or 1 slide

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, duration);

        return () => clearInterval(timer);
    }, [slides.length, duration]);

    // Container needs a fixed minimum height so absolute children don't collapse it
    // I moved the min-h logic here to the parent
    const containerHeightClass = props?.minHeight || 'min-h-[50vh] xl:min-h-[80vh]';

    return (
        <div className={`w-full relative flex flex-col justify-center items-center overflow-hidden ${containerHeightClass}`}>
            
            {slides.map((slide, index) => {
                const isActive = index === currentSlide;

                return (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out
                            ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
                        `}
                        style={{
                            backgroundImage: `url('${slide?.backgroundImage || 'https://aptinverex.com/assets/img/update1/hero/hero_bg_8_2.png'}')`,
                        }}
                    >
                        <div className={'w-full h-full absolute top-0 left-0 bg-black opacity-25'} />

                        
                        <div className={`w-full h-full relative px-5 xl:px-0 flex flex-col justify-center items-center`}>
                            <div className={'w-full max-w-[1260px] grid grid-cols-1 xl:grid-cols-2'}>
                                
                                <div className={'flex flex-col gap-5 max-w-[700px]'}>
                                    {slide?.title && (
                                        <h1
                                            data-tina-field={tinaField(slide, 'title')}
                                            className={'text-white uppercase col-span-1 font-josefin-sans font-bold text-5xl xl:text-7xl tracking-tighter'}
                                        >
                                            {slide.title}
                                        </h1>
                                    )}
                                    
                                    {slide?.description && (
                                        <p
                                            data-tina-field={tinaField(slide, 'description')}
                                            className={'text-white col-span-1 font-poppins text-sm xl:text-lg opacity-75 tracking-normal'}
                                        >
                                            {slide.description}
                                        </p>
                                    )}

                                    {slide?.buttonText && (
                                        <div data-tina-field={tinaField(slide, 'buttonText')} className={'w-fit'}>
                                            <Button 
                                                link={slide?.buttonLink || '#'}
                                            >
                                                {slide.buttonText}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                );
            })}
            
            {slides.length > 1 && (
                <div className="absolute bottom-10 z-20 flex gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-3 w-3 rounded-full transition-all ${
                                idx === currentSlide ? "bg-white scale-125" : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};