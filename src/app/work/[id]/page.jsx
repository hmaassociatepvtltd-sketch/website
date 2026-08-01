import client from "../../../../tina/__generated__/client";
import NotFound from "@/app/not-found";
import { WorkComponents } from "@/components/Work/WorkComponents";

export async function generateMetadata(props) {
    const { id } = await props.params;
    
    let title = "Project Details";
    let description = "Read about our completed project and case study.";
    
    try {
        const response = await client.queries.work({ relativePath: `${id}.md` });
        if (response?.data?.work) {
            if (response.data.work.title) title = response.data.work.title;
            if (response.data.work.description) description = response.data.work.description;
        }
    } catch (e) {
        console.error("Error fetching work metadata", e);
    }

    return {
        title: title,
        description: description,
        alternates: {
            canonical: `/work/${id}`,
        },
    };
}

export default async function Page(props) {
    const { id } = await props.params;

    const response = await client.queries.work({ relativePath: `${id}.md` });

    if (!response) {
        return <NotFound />;
    }

    const partnersResponse = await client.queries.partnerConnection();
    const productsResponse = await client.queries.productConnection();

    const partners = partnersResponse?.data?.partnerConnection?.edges?.map((edge) => edge.node) || [];
    const products = productsResponse?.data?.productConnection?.edges?.map((edge) => edge.node) || [];

    return <WorkComponents partners={partners} products={products} {...response} />;
}