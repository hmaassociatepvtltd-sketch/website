
import {PageComponent} from "@/components/LandingPage/PageComponent";
import client from "../../../tina/__generated__/client";

export default async function Home() {
    const result = await client.queries.page({relativePath: 'about.md'})

    const productsResponse = await client.queries.productConnection();

    const products = productsResponse.data.productConnection.edges.map(edge => edge.node);

    return <PageComponent products={products} {...result} />
}

