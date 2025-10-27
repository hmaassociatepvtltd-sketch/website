import {HeroSection} from "@/components/LandingPage/HeroSection";
import Image from "next/image";
import {TinaMarkdown} from "tinacms/dist/rich-text";
import {Check} from "lucide-react";
import {Button} from "@/components/ui/Button";
import {components} from "@/components/ui/MarkdownComponents";

export const SingleProduct = ({product}) => {


    return (
        <>
            <HeroSection title={'Product Details'}  />
            <div className={'w-full h-full flex justify-center items-center'}>
                <div className={'max-w-[1260px] w-full flex flex-col gap-20 px-5 xl:px-0 py-20 h-full pb-52'}>
                    <div className={'w-full justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-10'}>
                        <Image className={'w-full object-cover'} width={500} height={500} src={product.image} alt={product.name} />
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