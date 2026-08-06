import { Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Globals/Navbar";
import { Footer } from "@/components/Globals/Footer";
import { ScrollUp } from "@/components/Globals/ScrollUp";
import { PageLoader } from "@/components/Globals/PageLoader";
import client from "../../tina/__generated__/client";
import Link from "next/link";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-josefin-sans",
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
})

export async function generateMetadata() {
    let siteTitle = "Solar Power Solutions & Panel Installation Gujranwala | HMA Associates";
    let siteDescription = "HMA Associates (SMC-Private) Limited is Gujranwala & Pakistan's leading AEDB & PEC C1 certified solar panel installer, MEP contractor, and construction company.";
    let siteKeywords = "Solar Power Solutions Gujranwala, Solar Panel Installation Pakistan, MEP Engineering Services, Construction Contractors Gujranwala, Net Metering Pakistan, Industrial Solar Parks";

    try {
        const siteSettingsResponse = await client.queries.site({ relativePath: "site_settings.md" });
        const siteData = siteSettingsResponse?.data?.site;

        if (siteData?.title) siteTitle = siteData.title;
        if (siteData?.description) siteDescription = siteData.description;
        if (siteData?.keywords) siteKeywords = siteData.keywords;
    } catch (error) {
        console.error(`Error fetching site settings for metadata:`, error);
    }

    return {
        title: {
            default: siteTitle,
            template: "%s | HMA Associates",
        },
        description: siteDescription,
        keywords: siteKeywords,
        metadataBase: new URL("https://hmaassociate.com"),
        alternates: {
            canonical: "./",
        },
        openGraph: {
            title: siteTitle,
            description: siteDescription,
            url: "https://hmaassociate.com",
            siteName: "HMA Associates (SMC-Private) Limited",
            images: [
                {
                    url: "https://hmaassociate.com/assets/Fulllogo.png",
                    width: 1200,
                    height: 630,
                    alt: "HMA Associates Solar Power Solutions & MEP Engineering Gujranwala",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: siteTitle,
            description: siteDescription,
            images: ["https://hmaassociate.com/assets/Fulllogo.png"],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}


import { JsonLd } from "@/components/Globals/JsonLd";
import { QuickContactWidget } from "@/components/Globals/QuickContactWidget";

export default async function RootLayout({ children }) {

    let productTypes = new Set();
    let serviceTypes = new Set();
    let siteSettings = {};
    let data;
    try {
        // Fetch ALL products first (to work around the GraphQL filter limitation)
        const response = await client.queries.productConnection();
        response.data.productConnection.edges.map(edge => {
            productTypes.add(edge.node._sys.breadcrumbs[0]);
        });

        const serviceResponse = await client.queries.serviceConnection();
        serviceResponse.data.serviceConnection.edges.map(edge => {
            serviceTypes.add(edge.node.name);
        });

        const siteSettingsResponse = await client.queries.site({ relativePath: 'site_settings.md' })

        siteSettings = siteSettingsResponse;

        data = siteSettings.data


    } catch (error) {
        console.error(`Error fetching all products from TinaCMS:`, error);
    }



    return (
        <html lang="en">
            <body className={`${josefinSans.variable} ${poppins.variable} antialiased`}>
                <JsonLd />
                <PageLoader />
                <Navbar logo={siteSettings?.data?.site?.navbarLogo} serviceTypes={serviceTypes} productTypes={productTypes} />
                {children}
                <Footer serviceTypes={serviceTypes} productTypes={productTypes} site={siteSettings} />
                <ScrollUp />
                <QuickContactWidget />
                {/* Floating Desktop Social Links (Hidden on Mobile to avoid clutter) */}
                <div className="hidden md:flex flex-col gap-2.5 items-center fixed left-6 bottom-8 z-40">
                    {data?.site?.instagram && (
                        <Link
                            href={data.site.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow HMA Associates on Instagram"
                            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white shadow-xl hover:bg-primary hover:border-primary backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group"
                        >
                            <PiInstagramLogoFill size={20} />
                        </Link>
                    )}
                    {data?.site?.linkedin && (
                        <Link
                            href={data.site.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow HMA Associates on LinkedIn"
                            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white shadow-xl hover:bg-primary hover:border-primary backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group"
                        >
                            <SiLinkedin size={18} />
                        </Link>
                    )}
                    {data?.site?.facebook && (
                        <Link
                            href={data.site.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow HMA Associates on Facebook"
                            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white shadow-xl hover:bg-primary hover:border-primary backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group"
                        >
                            <SiFacebook size={18} />
                        </Link>
                    )}
                    {data?.site?.twitter && (
                        <Link
                            href={data.site.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow HMA Associates on Twitter"
                            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/15 text-white shadow-xl hover:bg-primary hover:border-primary backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group"
                        >
                            <FaTwitter size={18} />
                        </Link>
                    )}
                </div>

            </body>
        </html>
    );
}
