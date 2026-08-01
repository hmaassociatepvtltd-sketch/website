
import {PageComponent} from "@/components/LandingPage/PageComponent";
import client from "../../../tina/__generated__/client";

export const metadata = {
    title: "Certifications",
    description: "HMA Associates is a PEC C1 and AEDB certified solar installer and engineering contractor.",
    alternates: {
        canonical: "/certifications",
    },
};

export default async function Home() {
    const result = await client.queries.page({relativePath: 'certifications.md'})
    

    const productsResponse = await client.queries.productConnection();
        const partnersResponse = await client.queries.partnerConnection()

    const products = productsResponse.data.productConnection.edges.map(edge => edge.node);
    const partners = partnersResponse.data.partnerConnection.edges.map(edge => edge.node);

    return <PageComponent partners={partners} products={products} {...result} />
}

