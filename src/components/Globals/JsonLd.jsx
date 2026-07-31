"use client";

export const JsonLd = ({ type = "LocalBusiness", customSchema }) => {
    const siteUrl = "https://hmaassociate.com";

    const baseSchema = customSchema || {
        "@context": "https://schema.org",
        "@type": type,
        "@id": `${siteUrl}/#organization`,
        "name": "HMA Associates (SMC-Private) Limited",
        "legalName": "HMA Associates (SMC-Private) Limited",
        "url": siteUrl,
        "logo": `${siteUrl}/assets/Fulllogo.png`,
        "image": `${siteUrl}/Gemini_Generated_Image_7gq3p7gq3p7gq3p7.png`,
        "description": "Pakistan's premier AEDB V1 & PEC C1 licensed engineering contractor specializing in Solar Power Solutions, Solar Panel Installation in Gujranwala, MEP Engineering Services, and Construction Contracting.",
        "telephone": "+923097778006",
        "email": "info@hmaassociate.com",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Main Commercial Plaza, DC Colony & Cantt",
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
            { "@type": "City", "name": "Gujranwala" },
            { "@type": "City", "name": "Lahore" },
            { "@type": "City", "name": "Kamra" },
            { "@type": "City", "name": "Attock" },
            { "@type": "Country", "name": "Pakistan" }
        ],
        "sameAs": [
            "https://www.facebook.com/hmaassociates269/",
            "https://www.instagram.com/hmasolarpower/",
            "https://www.linkedin.com/company/hma-associates-co/",
            "https://x.com/HMA_Associates_"
        ],
        "knowsAbout": [
            "Solar Power Solutions Gujranwala",
            "Solar Panel Installation Pakistan",
            "On-Grid Net Metering Systems",
            "Hybrid LiFePO4 Energy Storage BESS",
            "MEP Engineering Services",
            "PEC C1 General Construction Contracting"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
        />
    );
};
