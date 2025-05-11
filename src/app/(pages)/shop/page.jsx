import React from "react";

import AppData from "@data/app.json";
import ProductsData from "@data/products.json";

import OkaiLayout from "@layouts/OkaiLayout";

import PageBanner from "@components/PageBanner";
import ProductsGrid from "@components/products/ProductsGrid";

export const metadata = {
  title: {
		default: "Store",
	},
  description: AppData.settings.siteDescription,
}

async function ShopPage() {
  return (
    <OkaiLayout>
      <PageBanner pageTitle={"Shop!"} breadTitle={"Store"} bgImage={"/img/banners/20.jpg"} />
      
      <ProductsGrid items={ProductsData.items} />
    </OkaiLayout>
  );
};
export default ShopPage;