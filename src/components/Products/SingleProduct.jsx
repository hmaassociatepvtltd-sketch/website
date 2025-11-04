"use client"

import {HeroSection} from "@/components/LandingPage/HeroSection";
import Image from "next/image";
import {TinaMarkdown} from "tinacms/dist/rich-text";
import {Button} from "@/components/ui/Button";
import {components} from "@/components/ui/MarkdownComponents";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const SingleProduct = ({product}) => {


    return (
        <>
            <HeroSection title={'Product Details'}  />
            <div className={'w-full h-full flex justify-center items-center'}>
                <div className={'max-w-[1260px] w-full flex flex-col gap-20 px-5 xl:px-0 py-20 h-full pb-52'}>
                    <div className={'w-full justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-10'}>
                        <ImagesShowcase images={product.images} />
                    <div className={'space-y-10'}>
                        <h1 className={'text-5xl font-bold font-josefin-sans tracking-tighter'} >{product.name}</h1>
                        <div className={'space-y-3'}>
                            <TinaMarkdown components={components} content={ product.description }/>
                        </div>
                        <Button link={'/contact'}>Contact Sales</Button>
                    </div>
                    </div>
                    {product.detailDescription.children.length > 0 && (
                        <div className={'space-y-3'}>
                            <h1 className={'text-2xl font-bold font-josefin-sans tracking-tighter'} >Detail Description</h1>
                            <TinaMarkdown components={components} content={product.detailDescription} />
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}


const ImagesShowcase = ({ images }) => {
  const [showImageIndex, setShowImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">

      <div className="w-full md:w-4/5 order-first md:order-last">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            layoutId={images[showImageIndex].image + showImageIndex}
            key={images[showImageIndex].image + showImageIndex}
            className="w-full rounded-lg select-none overflow-hidden group aspect-square relative"
          >
            <Image
              alt={images[showImageIndex].alt || 'Main product image'}
              src={images[showImageIndex].image}
              fill
              sizes="(max-width: 768px) 90vw, 70vw"
              className="object-cover select-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full md:w-1/5">
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto md:max-h-[500px] p-1">
          {images.map((image, index) => (
            <div
              key={image.image + index + '-container'} 

              className={showImageIndex === index ? 'hidden' : 'block' + 'select-none'}
            >
              <motion.div
                layout
                layoutId={image.image + index}
                onClick={() => setShowImageIndex(index)}
                className="w-20 h-20 md:w-full select-none md:h-auto shrink-0 cursor-pointer rounded-lg overflow-hidden group aspect-square relative"
              >
                <Image
                  alt={image.alt || `Thumbnail ${index + 1}`}
                  src={image.image}
                  fill
                  sizes="10vw"
                  className="object-cover select-none"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
