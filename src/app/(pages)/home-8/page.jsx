import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedProjectsData } from "@library/projects";

import HeroSection from "@components/sections/Hero";
import ServicesThreeSection from "@components/sections/ServicesThree";
import AboutUsThreeSection from "@components/sections/AboutUsThree";
import PartnersSection from "@components/sections/Partners";

const PortfolioSlider = dynamic( () => import("@components/sliders/Portfolio"), { ssr: true } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );

export const metadata = {
  title: {
		default: "Home 8",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home8() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection 
        image={{"url": "/img/banners/8.jpg", "alt": "banner"}} 
        title={"Hi. I’m <span class='mil-accent'>Jak</span> creative designer"} 
        button={{"label": "See Projects", "link": "/projects-2"}}
        imgLayout={"out-right"}
      />
      <ServicesThreeSection />
      <AboutUsThreeSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSlider 
          projects={projects} 
          order={[ "project-27", "project-28", "project-29", "project-18" ]} 
          paddingTop={120}
        />
      </Suspense>
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
      <PartnersSection />
    </OkaiLayout>
  );
};
export default Home8;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}