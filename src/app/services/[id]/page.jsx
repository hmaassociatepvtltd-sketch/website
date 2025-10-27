import client from "../../../../tina/__generated__/client";
import NotFound from "@/app/not-found";
import {ServicesComponents} from "@/components/LandingPage/Services/ServicesComponent";

export default async function Page(props) {
    const {id} = await props.params;
    const response = await client.queries.service({relativePath: `${id}.md`});

    if (!response) {
        return <NotFound />;
    }

    return (
        <ServicesComponents {...response} />
    );
}