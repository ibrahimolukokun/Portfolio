import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import PageBanner from "@components/PageBanner";
import PricingSection from "@components/sections/Pricing";
import CallToActionThreeSection from "@components/sections/CallToActionThree";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );

export const metadata = {
  title: {
		default: "Pricing",
	},
  description: AppData.settings.siteDescription,
}

async function PricingPage() {
  return (
    <OkaiLayout>
      <PageBanner pageTitle={"Our pricing"} breadTitle={"Pricing"} bgImage={"/img/banners/16.jpg"} />
      <PricingSection 
        subtitle={"Our plans"}
        title={"Choose your <br>pricings plans"}
      />
      <TestimonialSlider
        items={[
          {
            "name": "Lucas Wolfer",
            "role": "SEO ocean",
            "image": "/img/faces/3.jpg",
            "text": "They have the best customer service. The project is also incredibly flexible and easy to use and explore. Glad to have met this team!"
          },
          {
            "name": "Lucas Wolfer",
            "role": "SEO ocean",
            "image": "/img/faces/2.jpg",
            "text": "They have the best customer service. The project is also incredibly flexible and easy to use and explore. Glad to have met this team!"
          },
          {
            "name": "Lucas Wolfer",
            "role": "SEO ocean",
            "image": "/img/faces/1.jpg",
            "text": "They have the best customer service. The project is also incredibly flexible and easy to use and explore. The user interface is intuitive and user-friendly. I am glad to have met this amazing team!"
          }
        ]}
        paddingTop={0}
        paddingBottom={120}
      />
      <CallToActionThreeSection />
    </OkaiLayout>
  );
};
export default PricingPage;