
import client from "../../tina/__generated__/client";
import {PageComponent} from "@/components/LandingPage/PageComponent";

export default async function Home() {
    const result = await client.queries.page({relativePath: 'home.md'})

    const productsResponse = await client.queries.productConnection();
    const servicesResponse = await client.queries.serviceConnection();
    const partnersResponse = await client.queries.partnerConnection()


    const products = productsResponse.data.productConnection.edges.map(edge => edge.node);
    const services = servicesResponse.data.serviceConnection.edges.map(edge => edge.node);
    const partners = partnersResponse.data.partnerConnection.edges.map(edge => edge.node);

  return <PageComponent services={services} partners={partners} products={products} {...result} />
}

