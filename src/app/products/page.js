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

    const categoriesMap = {};

    products.forEach((prod) => {
        const breadcrumbs = prod._sys?.breadcrumbs || [];
        let categoryName = breadcrumbs[0] || "General Equipment";
        const catLower = categoryName.toLowerCase();

        if (catLower === "panels") categoryName = "Tier-1 Solar PV Modules (Canadian, Astronergy, Risen, Inverex)";
        else if (catLower === "inverters") categoryName = "Solar Inverters (GoodWe, Solis, Nitrox)";
        else if (catLower === "batteries") categoryName = "Lithium & Tall Tubular Batteries (Pylontech, Soluna, Inverex)";
        else if (catLower === "breakers") categoryName = "AC & DC Circuit Breakers (Tomzn 2P/4P & GA/DA 2P/4P)";
        else if (catLower === "db-boxes") categoryName = "Distribution Enclosure DB Boxes (IP65 Outdoor & Metal Clad)";

        if (!categoriesMap[categoryName]) {
            categoriesMap[categoryName] = [];
        }
        categoriesMap[categoryName].push(prod);
    });

    const groupedProducts = Object.keys(categoriesMap).map((catName) => ({
        name: catName,
        items: categoriesMap[catName],
    }));

    return <AllProducts title="Products Catalog" groupedProducts={groupedProducts} />;
}
