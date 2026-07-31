import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { useEffect, useState } from "react";
import { X as CloseIcon, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const images = props?.images || [];

    const openLightbox = (index) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        if (images.length === 0) return;
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        if (images.length === 0) return;
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (selectedIndex === null) return;
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowRight') nextImage();
            if (event.key === 'ArrowLeft') prevImage();
        };

        if (selectedIndex !== null) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedIndex, images.length]);

    // Varied height/span patterns for a natural collage rhythm
    const getCollageClass = (index) => {
        const pattern = index % 7;
        switch (pattern) {
            case 0:
                return "md:col-span-2 md:row-span-2 h-[420px] md:h-[540px]";
            case 1:
                return "md:col-span-1 md:row-span-1 h-[260px] md:h-[260px]";
            case 2:
                return "md:col-span-1 md:row-span-2 h-[320px] md:h-[540px]";
            case 3:
                return "md:col-span-1 md:row-span-1 h-[260px] md:h-[260px]";
            case 4:
                return "md:col-span-2 md:row-span-1 h-[280px] md:h-[265px]";
            case 5:
                return "md:col-span-1 md:row-span-1 h-[260px] md:h-[260px]";
            case 6:
                return "md:col-span-1 md:row-span-1 h-[260px] md:h-[260px]";
            default:
                return "md:col-span-1 md:row-span-1 h-[260px]";
        }
    };

    return (
        <section className="w-full py-12 md:py-20 flex justify-center items-center bg-gray-50/50 dark:bg-zinc-950/40">
            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-8">
                {props.title && (
                    <div className="text-center md:text-left space-y-2">
                        <h2
                            data-tina-field={tinaField(props, "title")}
                            className="text-3xl md:text-5xl font-bold font-josefin-sans tracking-tight text-gray-900 dark:text-gray-10"
                        >
                            {props.title}
                        </h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto md:mx-0"></div>
                    </div>
                )}

                {/* Collage Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense">
                    {images.map((item, index) => {
                        const collageSpan = getCollageClass(index);
                        return (
                            <div
                                key={index}
                                data-tina-field={tinaField(item, "image")}
                                onClick={() => openLightbox(index)}
                                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${collageSpan}`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt || item.caption || `Gallery photo ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Hover Glass Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                                    <div className="flex items-center justify-between">
                                        <p className="font-poppins text-sm font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.caption || item.alt || `Image ${index + 1}`}
                                        </p>
                                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-white/40">
                                            <Maximize2 className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox / Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 focus:outline-none"
                        aria-label="Close modal"
                    >
                        <CloseIcon size={24} />
                    </button>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 z-50 focus:outline-none"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 z-50 focus:outline-none"
                                aria-label="Next image"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    {/* Modal Content */}
                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={images[selectedIndex]?.image}
                                alt={images[selectedIndex]?.alt || "Enlarged gallery view"}
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>

                        {images[selectedIndex]?.caption && (
                            <div className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-full font-poppins text-sm md:text-base border border-white/10">
                                {images[selectedIndex].caption}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};
