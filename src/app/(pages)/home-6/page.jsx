import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedProjectsData } from "@library/projects";

import HeroTwoSection from "@components/sections/HeroTwo";
import ServicesTwoSection from "@components/sections/ServicesTwo";
import CallToActionSection from "@components/sections/CallToAction";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";

const PortfolioListSection = dynamic( () => import("@components/sections/PortfolioList"), { ssr: true } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );

export const metadata = {
  title: {
		default: "Home 6",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home6() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroTwoSection 
        image={{"url": "/img/banners/6.jpg", "alt": "banner"}} 
        title={"Hi, I'm an <br>Art Director."} 
        button={{"label": "See Projects", "link": "/projects-2"}}
      />
      <ServicesTwoSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioListSection projects={projects} order={[ "project-18", "project-19", "project-20", "project-21" ]} />
      </Suspense>
      <CallToActionSection />
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
        paddingTop={120}
        paddingBottom={120}
      />
      <CallToActionTwoSection />
    </OkaiLayout>
  );
};
export default Home6;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}