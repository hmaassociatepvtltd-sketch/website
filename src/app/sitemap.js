import client from "../../tina/__generated__/client";

export default async function sitemap() {
    const baseUrl = "https://hmaassociate.com";

    // Static Pages
    const staticRoutes = [
        "",
        "/about",
        "/certifications",
        "/work",
        "/quotation",
        "/products",
        "/services",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
    }));

    // Dynamic Services
    let serviceRoutes = [];
    try {
        const res = await client.queries.serviceConnection();
        serviceRoutes = (res?.data?.serviceConnection?.edges || []).map((edge) => {
            const name = edge?.node?._sys?.filename || edge?.node?.name || "";
            return {
                url: `${baseUrl}/services/${name.replace(/\s+/g, "-")}`,
                lastModified: new Date().toISOString(),
                changeFrequency: "monthly",
                priority: 0.7,
            };
        });
    } catch (e) {
        console.error("Error fetching services for sitemap", e);
    }

    // Dynamic Products
    let productRoutes = [];
    try {
        const res = await client.queries.productConnection();
        productRoutes = (res?.data?.productConnection?.edges || []).map((edge) => {
            const basename = edge?.node?._sys?.basename || "";
            return {
                url: `${baseUrl}/products/detail/${basename}`,
                lastModified: new Date().toISOString(),
                changeFrequency: "weekly",
                priority: 0.7,
            };
        });
    } catch (e) {
        console.error("Error fetching products for sitemap", e);
    }
    
    // Dynamic Work
    let workRoutes = [];
    try {
        const res = await client.queries.workConnection();
        workRoutes = (res?.data?.workConnection?.edges || []).map((edge) => {
            const basename = edge?.node?._sys?.basename || "";
            return {
                url: `${baseUrl}/work/${basename}`,
                lastModified: new Date().toISOString(),
                changeFrequency: "weekly",
                priority: 0.7,
            };
        });
    } catch (e) {
        console.error("Error fetching works for sitemap", e);
    }

    return [...staticRoutes, ...serviceRoutes, ...productRoutes, ...workRoutes];
}
