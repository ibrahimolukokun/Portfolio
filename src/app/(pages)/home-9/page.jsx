import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroThreeSection from "@components/sections/HeroThree";
import AboutUsSection from "@components/sections/AboutUs";
import PartnersTwoSection from "@components/sections/PartnersTwo";
import ExperienceFiveSection from "@components/sections/ExperienceFive";
import ServicesFourSection from "@components/sections/ServicesFour";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import LatestPostsSection from "@components/sections/LatestPosts";

const PortfolioSlider = dynamic( () => import("@components/sliders/Portfolio"), { ssr: true } );

export const metadata = {
  title: {
		default: "Home 9",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home9() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroThreeSection 
        image={{"url": "/img/banners/9.jpg", "alt": "banner"}} 
        title={"User interface designer"}
        subtitle={"I'm Janez Novak"} 
        button={{"label": "View portfolio", "link": "/projects-3"}}
        button2={{"label": "Contact me", "link": "/contact"}}
      />
      <ExperienceFiveSection />
      <AboutUsSection 
        subtitle={"About us"}
        title={"My name is Janez A. I am a designer"}
        description={"My first business card designed 7 years ago gave us the motivation and drive to be today offering a different and personalized service."}
        button={{"label": "Continue", "link": "/about"}}
        image={"/img/about/7.jpg"}
        paddingTop={30}
        paddingBottom={120}
      />
      <ServicesFourSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSlider 
          projects={projects} 
          order={[ "project-30", "project-31", "project-32", "project-20" ]} 
          paddingTop={0}
        />
      </Suspense>
      <PartnersTwoSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionTwoSection />
    </OkaiLayout>
  );
};
export default Home9;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}