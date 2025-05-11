import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import PageBanner from "@components/PageBanner";
import ServicesFourSection from "@components/sections/ServicesFour";
import CallToActionThreeSection from "@components/sections/CallToActionThree";
import PartnersTwoSection from "@components/sections/PartnersTwo";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );

export const metadata = {
  title: {
		default: "Services",
	},
  description: AppData.settings.siteDescription,
}

async function ServicesPage() {
  return (
    <OkaiLayout>
      <PageBanner pageTitle={"Our services"} breadTitle={"Services"} bgImage={"/img/banners/15.jpg"} />
      <ServicesFourSection paddingTop={120} paddingBottom={30} image={"/img/about/11.jpg"} reverse={1} heading={0} />
      <PartnersTwoSection />
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
export default ServicesPage;