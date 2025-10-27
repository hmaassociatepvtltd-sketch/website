import client from "../../../../tina/__generated__/client"; // !!! DOUBLE CHECK THIS PATH !!!
import NotFound from "@/app/not-found";
import { AllProducts } from "@/components/Products/AllProducts";


export default async function Page(props) {
    const {id} = await props.params; // From route: /products/[id], so params.id is the category folder name
    const categoryName = id.toLowerCase(); // Use this for case-insensitive matching

    let allProductsFromTina = [];
    try {
        // Fetch ALL products first (to work around the GraphQL filter limitation)
        const response = await client.queries.productConnection();
        allProductsFromTina = response.data.productConnection.edges.map(edge => edge.node);

    } catch (error) {
        console.error(`Error fetching all products from TinaCMS:`, error);
        return (
            <div style={{ padding: '50px', textAlign: 'center', color: 'red' }}>
                <h1>Error loading products</h1>
                <p>There was a problem fetching the product list. Check your server logs.</p>
            </div>
        );
    }

    // 1. Filter products to only include those whose first breadcrumb matches the category from the URL
    //    We assume `breadcrumbs[0]` is the top-level category folder.
    const relevantProducts = allProductsFromTina.filter(product => {
        return product._sys.breadcrumbs &&
            product._sys.breadcrumbs.length > 0 && // Ensure breadcrumbs exist
            product._sys.breadcrumbs[0].toLowerCase() === categoryName; // Case-insensitive match
    });

    // If no products are relevant to this category, return 404
    if (relevantProducts.length === 0) {
        return <NotFound />;
    }

    // 2. Group the relevant products by their immediate sub-category (breadcrumbs[length - 2])
    const groupedProducts = relevantProducts.reduce((acc, product) => {
        let groupKey = 'Other Products'; // Default group if no sub-category structure
        if (product._sys.breadcrumbs && product._sys.breadcrumbs.length >= 2) {
            // The sub-category is the folder name right before the product's filename
            groupKey = product._sys.breadcrumbs[product._sys.breadcrumbs.length - 2];
        } else {
            // If a product is directly under the main category (e.g., content/product/Category/product.md)
            // then breadcrumbs will be ['Category', 'product_filename'].
            // In this case, `groupKey` might logically be the `categoryName` itself or "Direct Products".
            groupKey = `${categoryName} Direct Products`; // Example for direct items
        }

        let group = acc.find(g => g.name === groupKey);
        if (!group) {
            group = { name: groupKey, items: [] };
            acc.push(group);
        }
        group.items.push(product);
        return acc;
    }, []);

    groupedProducts.sort((a, b) => a.name.localeCompare(b.name));

    return (
        // Pass the groupedProducts to your AllProducts component
        <AllProducts title={categoryName} groupedProducts={groupedProducts} />
    );
}