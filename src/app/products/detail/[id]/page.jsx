import client from "../../../../../tina/__generated__/client";
import {SingleProduct} from "@/components/Products/SingleProduct";

export async function generateMetadata(props) {
    const { id } = await props.params;
    
    let title = "Product Details";
    let description = "View specifications and details for this product.";
    
    try {
        const productsResult = await client.queries.productConnection();
        const data = productsResult.data.productConnection.edges.find(edge => edge.node._sys.basename === id)?.node;
        
        if (data) {
            if (data.name) title = data.name;
            if (data.description) {
                 if (typeof data.description === 'string') {
                     description = data.description.substring(0, 160);
                 }
            }
        }
    } catch (error) {
        console.error("Error fetching product metadata", error);
    }

    return {
        title: title,
        description: description,
        alternates: {
            canonical: `/products/detail/${id}`,
        },
    };
}

export default async function Page(props) {
    const {id} = await props.params;

    let data;

    try {
        const productsResult = await client.queries.productConnection();

        data = productsResult.data.productConnection.edges.find(edge => edge.node._sys.basename === id)?.node;
    } catch (error) {
        console.error(`Error fetching all products from TinaCMS:`, error);
        return (
            <div style={{ padding: '50px', textAlign: 'center', color: 'red' }} >
                <h1>Error loading products</h1>
                <p>There was a problem fetching the product list. Check your server logs.</p>
            </div>
        );
    }

    return(
        <SingleProduct product={data} />
    )
}