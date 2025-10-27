"use server"

import client from "../../../tina/__generated__/client";

export const ProductComponent = async () => {

    const result = await client.queries.product()

    return (
        <>
            {JSON.stringify(result)}
        </>
    )
}