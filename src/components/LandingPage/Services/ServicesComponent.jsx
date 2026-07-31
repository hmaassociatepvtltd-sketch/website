"use client";

import { HeroSection } from "@/components/LandingPage/HeroSection";
import { AnimatedHeroSection } from "@/components/LandingPage/AnimatedHeroSection";
import { SlideHeroSection } from "@/components/LandingPage/SlideHeroSection";
import { Container } from "@/components/LandingPage/Container";
import { ModernContainer } from "@/components/LandingPage/ModernContainer";
import { ModernServices } from "@/components/LandingPage/ModernServices";
import { ProjectPortfolio } from "@/components/LandingPage/ProjectPortfolio";
import { ProjectCardsGrid } from "@/components/LandingPage/ProjectCardsGrid";
import { Testimonials } from "@/components/LandingPage/Testimonials";
import { Products } from "@/components/LandingPage/Products";
import { ContactForm } from "@/components/LandingPage/ContactForm";
import { OurPartners } from "@/components/LandingPage/OurPartners";
import { CalculatorForm } from "@/components/LandingPage/CalculatorForm";
import { ModernCalculator } from "@/components/LandingPage/ModernCalculator";
import { ServiceDetailShowcase } from "@/components/LandingPage/ServiceDetailShowcase";
import { Spacer } from "@/components/LandingPage/Spacer";
import { Gallery } from "@/components/LandingPage/Gallery";
import { CertificateCard } from "@/components/LandingPage/CertificateCard";
import { ContentShowroom } from "@/components/LandingPage/ContentShowroom";
import { LocationBlock } from "@/components/LandingPage/LocationBlock";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import { components } from "@/components/ui/MarkdownComponents";

export const ServicesComponents = ({ partners = [], products = [], ...props }) => {
    const { data } = useTina(props);

    return (
        <main className="w-full relative h-full bg-slate-50 text-slate-900 font-poppins select-none">
            {data &&
                data?.service?.blocks?.map((block, index) => {
                    switch (block?.__typename) {
                        case "ServiceBlocksHeroSection": {
                            return <HeroSection {...block} key={index} />;
                        }
                        case "ServiceBlocksAnimatedHeroSection": {
                            return <AnimatedHeroSection {...block} key={index} />;
                        }
                        case "ServiceBlocksLocationBlock": {
                            return <LocationBlock {...block} key={index} />;
                        }
                        case "ServiceBlocksContentShowroom": {
                            return <ContentShowroom {...block} key={index} />;
                        }
                        case "ServiceBlocksCertificateCard": {
                            return <CertificateCard {...block} key={index} />;
                        }
                        case "ServiceBlocksServiceDetailShowcase": {
                            return <ServiceDetailShowcase {...block} key={index} />;
                        }
                        case "ServiceBlocksSlideHero": {
                            return <SlideHeroSection {...block} key={index} />;
                        }
                        case "ServiceBlocksContainer": {
                            return <Container {...block} key={index} />;
                        }
                        case "ServiceBlocksModernContainer": {
                            return <ModernContainer {...block} key={index} />;
                        }
                        case "ServiceBlocksProjectPortfolio": {
                            return <ProjectPortfolio {...block} key={index} />;
                        }
                        case "ServiceBlocksProjectCardsGrid": {
                            return <ProjectCardsGrid {...block} key={index} />;
                        }
                        case "ServiceBlocksModernServices": {
                            return <ModernServices {...block} key={index} />;
                        }
                        case "ServiceBlocksTestimonials": {
                            return <Testimonials {...block} key={index} />;
                        }
                        case "ServiceBlocksProducts": {
                            return <Products {...block} productsData={products} key={index} />;
                        }
                        case "ServiceBlocksContact": {
                            return <ContactForm {...block} key={index} />;
                        }
                        case "ServiceBlocksPartner": {
                            return <OurPartners partnersData={partners} {...block} key={index} />;
                        }
                        case "ServiceBlocksCalculator": {
                            return <CalculatorForm {...block} key={index} />;
                        }
                        case "ServiceBlocksModernCalculator": {
                            return <ModernCalculator {...block} key={index} />;
                        }
                        case "ServiceBlocksSpacer": {
                            return <Spacer {...block} key={index} />;
                        }
                        case "ServiceBlocksMarkdown": {
                            return (
                                <div key={`markdown-${index}`} className="w-full h-full flex justify-center items-center py-16 bg-white border-y border-slate-200">
                                    <div data-tina-field={tinaField(block, "text")} className="max-w-[1260px] px-5 xl:px-0 py-10 h-full text-slate-800">
                                        {block?.text?.children?.length > 0 && (
                                            <TinaMarkdown className="prose prose-slate max-w-none" components={components} content={block.text} />
                                        )}
                                    </div>
                                </div>
                            );
                        }
                        case "ServiceBlocksGallery": {
                            return <Gallery {...block} key={index} />;
                        }
                        default:
                            return null;
                    }
                })}
        </main>
    );
};
