export default function manifest() {
    return {
        name: "HMA Associates (SMC-Private) Limited",
        short_name: "HMA Solar",
        description: "Premier AEDB & PEC C1 Licensed Solar Power Solutions, MEP Engineering, and Construction Company in Pakistan.",
        start_url: "/",
        display: "standalone",
        background_color: "#020617",
        theme_color: "#0f172a",
        icons: [
            {
                src: "/assets/Fulllogo.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/assets/Fulllogo.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
