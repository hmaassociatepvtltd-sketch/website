
import {PageComponent} from "@/components/LandingPage/PageComponent";
import client from "../../../tina/__generated__/client";

export const metadata = {
    title: "Projects & Portfolio",
    description: "View our portfolio of completed solar installations, MEP contracting projects, and commercial construction work.",
    alternates: {
        canonical: "/work",
    },
};

export default async function Home() {
    const result = await client.queries.page({relativePath: 'work.md'})

    const partnersResponse = await client.queries.partnerConnection()
    const worksResponse = await  client.queries.workConnection()


    const partners = partnersResponse.data.partnerConnection.edges.map(edge => edge.node);
    const works = worksResponse.data.workConnection.edges.map(edge => edge.node);

    return <PageComponent works={works} partners={partners} {...result} />
}

