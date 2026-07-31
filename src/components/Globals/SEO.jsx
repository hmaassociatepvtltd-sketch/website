"use client";

import Head from "next/head";

export const SEO = ({
    title = "Solar Power Solutions & Panel Installation in Gujranwala, Pakistan | HMA Associates",
    description = "HMA Associates (SMC-Private) Limited is Pakistan's premier AEDB & PEC C1 certified solar panel installer, MEP engineering contractor, and construction company in Gujranwala.",
    keywords = "Solar Power Solutions Gujranwala, Solar Panel Installation Pakistan, MEP Engineering Services, Construction Contractors Gujranwala, Net Metering Pakistan, Industrial Solar Parks, Hybrid Solar Systems, HMA Associates",
    canonical = "https://hmaassociate.com",
    ogImage = "/assets/Fulllogo.png",
    ogType = "website",
    author = "HMA Associates (SMC-Private) Limited",
}) => {
    const siteUrl = "https://hmaassociate.com";
    const fullCanonical = canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`;
    const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

    // Schema.org LocalBusiness & Organization JSON-LD Payload
    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": `${siteUrl}/#organization`,
                "name": "HMA Associates (SMC-Private) Limited",
                "alternateName": "HMA Solar & MEP Engineering",
                "url": siteUrl,
                "logo": `${siteUrl}/assets/Fulllogo.png`,
                "image": `${siteUrl}/Gemini_Generated_Image_7gq3p7gq3p7gq3p7.png`,
                "telephone": "+923097778006",
                "email": "info@hmaassociate.com",
                "priceRange": "$$$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Main Commercial Center, DC Colony & Cantt",
                    "addressLocality": "Gujranwala",
                    "addressRegion": "Punjab",
                    "postalCode": "52250",
                    "addressCountry": "PK"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 32.1877,
                    "longitude": 74.1945
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Gujranwala"
                    },
                    {
                        "@type": "City",
                        "name": "Lahore"
                    },
                    {
                        "@type": "City",
                        "name": "Kamra"
                    },
                    {
                        "@type": "City",
                        "name": "Attock"
                    },
                    {
                        "@type": "Country",
                        "name": "Pakistan"
                    }
                ],
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "sameAs": [
                    "https://www.facebook.com/hmaassociates269/",
                    "https://www.instagram.com/hmasolarpower/",
                    "https://www.linkedin.com/company/hma-associates-co/",
                    "https://x.com/HMA_Associates_"
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Solar, MEP & Construction Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Solar Power Solutions & Panel Installation",
                                "description": "Turnkey On-Grid Net-Metered, Hybrid BESS, and Industrial Megawatt Solar PV Systems in Gujranwala & Pakistan.",
                                "provider": { "@id": `${siteUrl}/#organization` }
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Mechanical, Electrical & Plumbing (MEP) Services",
                                "description": "High-voltage electrical panel design, HVAC climate ducting, and automated water plumbing systems.",
                                "provider": { "@id": `${siteUrl}/#organization` }
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "General Construction & Grey Structure Contracting",
                                "description": "PEC C1 licensed construction of commercial plazas, industrial plants, and luxury residential developments.",
                                "provider": { "@id": `${siteUrl}/#organization` }
                            }
                        }
                    ]
                }
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Standard Meta Tags */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href={fullCanonical} />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content={ogType} />
                <meta property="og:site_name" content="HMA Associates (SMC-Private) Limited" />
                <meta property="og:url" content={fullCanonical} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={fullOgImage} />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={fullOgImage} />
            </Head>

            {/* JSON-LD Schema Script Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />
        </>
    );
};
