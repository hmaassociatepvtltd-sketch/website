import client from "../../../tina/__generated__/client";
import { PageComponent } from "@/components/LandingPage/PageComponent";

export const metadata = {
    title: "Engineering & Solar Energy Services",
    description: "Explore turnkey solar power solutions, MEP engineering contracting, net metering, and construction services in Gujranwala and Pakistan.",
    alternates: {
        canonical: "/services",
    },
};

export default async function ServicesPage() {
    let result = null;
    let services = [];
    let partners = [];
    let products = [];

    try {
        result = await client.queries.page({ relativePath: "services.md" });
    } catch (e) {
        console.log("No specific services.md page found; rendering standard layout.");
    }

    try {
        const servicesResponse = await client.queries.serviceConnection();
        const partnersResponse = await client.queries.partnerConnection();
        const productsResponse = await client.queries.productConnection();

        services = servicesResponse?.data?.serviceConnection?.edges?.map((edge) => edge.node) || [];
        partners = partnersResponse?.data?.partnerConnection?.edges?.map((edge) => edge.node) || [];
        products = productsResponse?.data?.productConnection?.edges?.map((edge) => edge.node) || [];
    } catch (error) {
        console.error("Error loading services page data:", error);
    }

    if (!result) {
        return (
            <main className="min-h-screen py-28 px-5 max-w-[1260px] mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-josefin-sans">Our Professional Services</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Delivering high-efficiency AEDB certified solar installations, MEP engineering design, and commercial construction contracting across Pakistan.
                    </p>
                </div>
            </main>
        );
    }

    return <PageComponent services={services} partners={partners} products={products} {...result} />;
}
