import Image from "next/image";
import {tinaField} from "tinacms/dist/react";
import {useEffect, useState} from "react";
import { X as CloseIcon } from 'lucide-react';


export const Gallery = (props) => {



    return (
        <div className={'w-full h-full flex justify-center items-center'}>
            <div className="max-w-[1260px] space-y-5 w-full px-5 xl:px-0">
                <h1 data-tina-field={tinaField(props, "title")} className={'text-4xl font-bold font-josefin-sans tracking-tighter'}>{props.title}</h1>
               <div className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'}>
                   {props?.images?.map((image, index) => {
                       return (
                           <ImageItem image={image} key={index} />
                       )
                   })}
               </div>
            </div>
        </div>
    )
}


const ImageItem = ({ image }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Effect for handling the Escape key to close the modal
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Optional: Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = ''; // Restore scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Thumbnail View */}
            <div onClick={() => setIsOpen(true)} className={'cursor-pointer'}>
                <Image
                    width={500}
                    height={500}
                    src={image.image}
                    alt={image.alt || 'Gallery image thumbnail'} // Use alt from image object
                    className="w-full h-[400px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Fullscreen Modal View */}
            {isOpen && (
                <div
                    className={'fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4'}
                    onClick={() => setIsOpen(false)} // Close when clicking outside the image
                >
                    {/* Close Button - Top Left */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent closing modal when clicking the button
                            setIsOpen(false);
                        }}
                        className={'absolute top-4 left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white'}
                        aria-label="Close image viewer"
                    >
                        <CloseIcon size={24} />
                    </button>

                    {/* Image Container */}
                    <div
                        className={'relative w-full h-full flex items-center justify-center max-w-6xl max-h-[90vh]'}
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
                    >
                        <Image
                            src={image.image}
                            alt={image.alt || 'Fullscreen gallery image'} // Use alt from image object
                            width={1600} // Set a large enough width for fullscreen viewing
                            height={900} // Set a large enough height
                            layout="intrinsic" // Adjust layout to fit naturally
                            objectFit="contain" // Ensures the entire image is visible
                            className="rounded-xl shadow-lg"
                        />
                        {image.caption && (
                            <div className="absolute bottom-4 px-6 py-3 bg-black/50 text-white text-center rounded-lg max-w-[90%] font-poppins text-lg">
                                {image.caption}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
