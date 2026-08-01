import client from "../../../tina/__generated__/client";
import { AllProducts } from "@/components/Products/AllProducts";

export const metadata = {
    title: "All Solar & MEP Products",
    description: "Browse our complete catalog of solar inverters, solar panels, batteries, and electrical equipment.",
    alternates: { canonical: "/products" }
};

export default async function ProductsPage() {
    let products = [];
    try {
        const response = await client.queries.productConnection();
        products = response.data.productConnection.edges.map(edge => edge.node);
    } catch (e) {
        console.error("Error fetching products", e);
    }

    const groupedProducts = [{ name: "All Equipment", items: products }];

    return <AllProducts title="Products Catalog" groupedProducts={groupedProducts} />;
}
