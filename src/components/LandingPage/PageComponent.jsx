"use client"

import { HeroSection } from "@/components/LandingPage/HeroSection";
import { tinaField, useTina } from "tinacms/dist/react";
import { Container } from "@/components/LandingPage/Container";
import { Testimonials } from "@/components/LandingPage/Testimonials";
import { Products } from "@/components/LandingPage/Products";
import client from "../../../tina/__generated__/client";
import { ContactForm } from "@/components/LandingPage/ContactForm";
import { OurPartners } from "@/components/LandingPage/OurPartners";
import { Spacer } from "@/components/LandingPage/Spacer";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "@/components/ui/MarkdownComponents";
import { AllWorks } from "@/components/LandingPage/About/AllWorks";
import { Gallery } from "@/components/LandingPage/Gallery";
import { CalculatorForm } from "./CalculatorForm";
import Services from "./OurServices";
import { SlideHeroSection } from "./SlideHeroSection";
import { AnimatedHeroSection } from "./AnimatedHeroSection";
import { ModernServices } from "./ModernServices";
import { ModernContainer } from "./ModernContainer";
import { ProjectPortfolio } from "./ProjectPortfolio";
import { ModernCalculator } from "./ModernCalculator";
import { ProjectCardsGrid } from "./ProjectCardsGrid";
import { ServiceDetailShowcase } from "./ServiceDetailShowcase";
import { CertificateCard } from "./CertificateCard";
import { ContentShowroom } from "./ContentShowroom";
import { LocationBlock } from "./LocationBlock";

export const PageComponent = ({ partners = [], services = [], products = [], works = [], ...props }) => {

    const { data } = useTina(props)

    const page = data.page;

    return (
        <main className="w-full relative h-full">
            {page.blocks?.map((block, index) => {

                switch (block?.__typename) {
                    case "PageBlocksHeroSection": {
                        return <HeroSection {...block} key={index} />
                    }
                    case "PageBlocksAnimatedHeroSection": {
                        return <AnimatedHeroSection {...block} key={index} />
                    }
                    case "PageBlocksLocationBlock": {
                        return <LocationBlock {...block} key={index} />
                    }
                    case "PageBlocksContentShowroom": {
                        return <ContentShowroom {...block} key={index} />
                    }
                    case "PageBlocksCertificateCard": {
                        return <CertificateCard {...block} key={index} />
                    }
                    case "PageBlocksServiceDetailShowcase": {
                        return <ServiceDetailShowcase {...block} key={index} />
                    }
                    case "PageBlocksSlideHero": {
                        return <SlideHeroSection {...block} key={index} />
                    }
                    case "PageBlocksContainer": {
                        return <Container {...block} key={index} />
                    }
                    case "PageBlocksModernContainer": {
                        return <ModernContainer {...block} key={index} />
                    }
                    case "PageBlocksProjectPortfolio": {
                        return <ProjectPortfolio {...block} key={index} />
                    }
                    case "PageBlocksProjectCardsGrid": {
                        return <ProjectCardsGrid {...block} key={index} />
                    }
                    case "PageBlocksCalculator": {
                        return <CalculatorForm {...block} key={index} />
                    }
                    case "PageBlocksModernCalculator": {
                        return <ModernCalculator {...block} key={index} />
                    }
                    case "PageBlocksTestimonials": {
                        return <Testimonials {...block} key={index} />
                    }
                    case "PageBlocksProducts": {
                        return <Products {...block} productsData={products} key={index} />
                    }
                    case "PageBlocksContact": {
                        return <ContactForm {...block} key={index} />
                    }
                    case "PageBlocksPartner": {
                        return <OurPartners partnersData={partners} {...block} key={index} />
                    }
                    case "PageBlocksSpacer": {
                        return <Spacer {...block} key={index} />
                    }
                    case "PageBlocksMarkdown": {
                        return (
                            <div key={`markdown-${index}`} className={'w-full h-full flex justify-center items-center'}>
                                <div data-tina-field={tinaField(block, "text")} className={'max-w-[1260px] px-5 xl:px-0 py-20 h-full'}>
                                    {block?.text?.children?.length > 0 && <TinaMarkdown className={'prose '} components={components} content={block.text} />}
                                </div>
                            </div>
                        )
                    }
                    case "PageBlocksAllwork": {
                        return (
                            <div key={`allworks-${index}`}>
                                <AllWorks worksData={works} {...block} />
                            </div>
                        )
                    }
                    case "PageBlocksGallery": {
                        return <Gallery {...block} key={index} />
                    }
                    case "PageBlocksCalculator": {
                        return <CalculatorForm {...block} key={index} />
                    }
                    case "PageBlocksServices": {
                        return <Services {...block} servicesData={services} key={index} />
                    }
                    case "PageBlocksModernServices": {
                        return <ModernServices {...block} servicesData={services} key={index} />
                    }
                    case "PageBlocksModernContainer": {
                        return <ModernContainer {...block} key={index} />
                    }
                }
            })}

        </main>
    )
}

