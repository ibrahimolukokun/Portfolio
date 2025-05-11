import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroSection from "@components/sections/Hero";
import ServicesSection from "@components/sections/Services";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "@components/sections/CallToAction";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import PartnersTwoSection from "@components/sections/PartnersTwo";

const PortfolioGridTwoSection = dynamic( () => import("@components/sections/PortfolioGridTwo"), { ssr: true } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );

export const metadata = {
  title: {
		default: "Home 7",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home7() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection 
        image={{"url": "/img/banners/7.jpg", "alt": "banner"}} 
        title={"I love visual <br>design"} 
        button={{"label": "See Projects", "link": "/projects-2"}}
        imgLayout={"out-left"}
        rowReverse={1}
      />
      <ServicesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioGridTwoSection
          heading={{"subtitle": "Our works", "title": "Take a look at all <br>the projects"}} 
          projects={projects} 
          order={[ "project-22", "project-8", "project-23", "project-24", "project-25", "project-26" ]} 
          button={false} 
        />
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
      <PartnersTwoSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionTwoSection />
    </OkaiLayout>
  );
};
export default Home7;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}