
import {Josefin_Sans, Poppins} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Globals/Navbar";
import {Footer} from "@/components/Globals/Footer";
import {ScrollUp} from "@/components/Globals/ScrollUp";
import client from "../../tina/__generated__/client";
import Link from "next/link";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { useTina } from "tinacms/dist/react";

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
    let siteTitle = "Default Title";
    let siteDescription = "Default Description";
    let siteKeywords = "Default Keywords";

    try {
        const siteSettingsResponse = await client.queries.site({relativePath: 'site_settings.md'});
        const siteData = siteSettingsResponse.data.site;

        if (siteData.title) { // Assuming you have a 'siteTitle' field in site_settings.md
            siteTitle = siteData.title;
        }
        if (siteData.description) { // Assuming you have a 'siteDescription' field
            siteDescription = siteData.description;
        }
        if(siteData.keywords){
            siteKeywords = siteData.keywords;
        }

    } catch (error) {
        console.error(`Error fetching site settings for metadata:`, error);
    }

    return {
        title: siteTitle,
        description: siteDescription,
        keywords: siteKeywords,
    };
}


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

        const siteSettingsResponse = await client.queries.site({relativePath: 'site_settings.md'})

        siteSettings = siteSettingsResponse;

        data = siteSettings.data

        
    } catch (error) {
        console.error(`Error fetching all products from TinaCMS:`, error);
    }
    


  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${poppins.variable} antialiased`}>
      <Navbar logo={siteSettings.data.site.navbarLogo} serviceTypes={serviceTypes} productTypes={productTypes} />
          {children}
      <Footer serviceTypes={serviceTypes} productTypes={productTypes} site={siteSettings} />
      <ScrollUp/>
          <div className={'flex flex-row gap-3 items-center fixed left-0 bottom-0 p-10 z-50'}>


                                {data.site.instagram && (
                                    <Link href={data.site.instagram}
                                        className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                                    >
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                        ></div>
                                        <div className="relative text-white z-10">
                                            <PiInstagramLogoFill size={25} />
                                        </div>
                                    </Link>
                                )}
                                {
                                    data.site.linkedin && (
                                        <Link href={data.site.linkedin}
                                            className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                                        >
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                            ></div>
                                            <div className="relative text-white z-10">
                                                <SiLinkedin size={25} />
                                            </div>
                                        </Link>
                                    )
                                }
                                {
                                    data.site.facebook && (
                                        <Link href={data.site.facebook}
                                            className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                                        >
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                            ></div>
                                            <div className="relative text-white z-10">
                                                <SiFacebook size={25} />
                                            </div>
                                        </Link>
                                    )
                                }

                                {
                                    data.site.twitter && (
                                        <Link href={data.site.twitter}
                                            className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                                        >
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                            ></div>
                                            <div className="relative text-white z-10">
                                                <FaTwitter size={25} />
                                            </div>
                                        </Link>
                                    )
                                }



        </div>
      
      </body>
    </html>
  );
}
