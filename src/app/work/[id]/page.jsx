import client from "../../../../tina/__generated__/client";
import NotFound from "@/app/not-found";
import {WorkComponents} from "@/components/Work/WorkComponents";


export default async function Page(props) {
    const {id} = await props.params;

    const response = await client.queries.work({relativePath: `${id}.md`});

    if (!response) {
        return <NotFound />;
    }

    return <WorkComponents {...response} />
}