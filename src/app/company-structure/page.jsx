import React from "react";
import client from "../../../tina/__generated__/client";
import { CompanyStructureClient } from "./CompanyStructureClient";

export const metadata = {
    title: "Corporate Structure & Organogram | HMA Associates",
    description: "Corporate structure, executive leadership, and engineering team of HMA Associates (SMC-Private) Limited.",
};

export default async function CompanyStructurePage() {
    let tinaData = null;
    try {
        tinaData = await client.queries.page({ relativePath: "company-structure.md" });
    } catch (e) {
        console.error("Error fetching company-structure page data:", e);
    }

    return <CompanyStructureClient tinaData={tinaData} />;
}
