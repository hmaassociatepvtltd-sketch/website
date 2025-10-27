"use client"

import {HeroSection} from "@/components/LandingPage/HeroSection";
import {Container} from "@/components/LandingPage/Container";
import {Testimonials} from "@/components/LandingPage/Testimonials";
import {Products} from "@/components/LandingPage/Products";
import {ContactForm} from "@/components/LandingPage/ContactForm";
import {OurPartners} from "@/components/LandingPage/OurPartners";
import {Spacer} from "@/components/LandingPage/Spacer";
import {TinaMarkdown} from "tinacms/dist/rich-text";
import {tinaField, useTina} from "tinacms/dist/react";
import {components} from "@/components/ui/MarkdownComponents";
import {Gallery} from "@/components/LandingPage/Gallery";

export const  ServicesComponents = (props) => {

    const {data} = useTina(props)

    console.log(data)

    return (
        <div className={"w-full relative h-full"}>
            {data && data?.service?.blocks?.map((block, index) => {
                switch (block?.__typename) {
                    case "ServiceBlocksHeroSection": {
                        return <HeroSection {...block} key={index} />
                    }
                    case "ServiceBlocksContainer":{
                        return <Container {...block} key={index}/>
                    }
                    case "ServiceBlocksTestimonials": {
                        return <Testimonials {...block} key={index}/>
                    }
                    case "ServiceBlocksProducts": {
                        return <Products {...block} productsData={products} key={index}/>
                    }
                    case "ServiceBlocksContact": {
                        return <ContactForm {...block} key={index}/>
                    }
                    case "ServiceBlocksPartner": {
                        return <OurPartners partnersData={partners} {...block} key={index}/>
                    }
                    case "ServiceBlocksSpacer": {
                        return <Spacer {...block} key={index}/>
                    }
                    case "ServiceBlocksMarkdown" : {
                        return (
                            <div key={`markdown-${index}`} className={'w-full h-full flex justify-center items-center'}>
                                <div data-tina-field={tinaField(block, "text")} className={'max-w-[1260px] px-5 xl:px-0 py-20 h-full'}>
                                    {block?.text?.children?.length > 0 && <TinaMarkdown className={'prose '} components={components} content={block.text} />}
                                </div>
                            </div>
                        )
                    }
                    case "ServiceBlocksGallery": {
                        return <Gallery {...block} key={index}/>
                    }
                }
            })}

        </div>
    )
}

