import client from "../../../../tina/__generated__/client";
import NotFound from "@/app/not-found";
import { WorkComponents } from "@/components/Work/WorkComponents";

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