
import {Josefin_Sans, Poppins} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Globals/Navbar";
import {Footer} from "@/components/Globals/Footer";
import {ScrollUp} from "@/components/Globals/ScrollUp";
import client from "../../tina/__generated__/client";

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

        console.log(siteSettingsResponse);

    } catch (error) {
        console.error(`Error fetching all products from TinaCMS:`, error);
    }

  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${poppins.variable} antialiased`}>
      <Navbar logo={siteSettings.data.site.navbarLogo} serviceTypes={serviceTypes} productTypes={productTypes} />
          {children}
      <Footer {...siteSettings} />
      <ScrollUp/>
      </body>
    </html>
  );
}
