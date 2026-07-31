import client from "../../../../tina/__generated__/client";
import NotFound from "@/app/not-found";
import {ServicesComponents} from "@/components/LandingPage/Services/ServicesComponent";

export default async function Page(props) {
    const { id } = await props.params;
    if (!id) return <NotFound />;

    let targetRelativePath = `${id}.md`;

    try {
        // Fetch all services to match case-insensitively (e.g. construction -> Construction.md)
        const servicesConnection = await client.queries.serviceConnection();
        const edges = servicesConnection?.data?.serviceConnection?.edges || [];

        const matchedEdge = edges.find((edge) => {
            const basename = edge?.node?._sys?.filename || edge?.node?._sys?.basename || "";
            return basename.toLowerCase() === id.toLowerCase();
        });

        if (matchedEdge?.node?._sys?.relativePath) {
            targetRelativePath = matchedEdge.node._sys.relativePath;
        }
    } catch (e) {
        console.error("Error matching service relativePath:", e);
    }

    try {
        const response = await client.queries.service({ relativePath: targetRelativePath });
        if (!response?.data?.service) {
            return <NotFound />;
        }
        return <ServicesComponents {...response} />;
    } catch (error) {
        console.error(`Unable to find service record: ${targetRelativePath}`, error);
        return <NotFound />;
    }
}