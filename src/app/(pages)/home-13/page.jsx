import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroThreeSection from "@components/sections/HeroThree";
import AboutUsSection from "@components/sections/AboutUs";
import SubscribeSection from "@components/sections/Subscribe";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import LatestPostsSection from "@components/sections/LatestPosts";
import ServicesFiveSection from "@components/sections/ServicesFive";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );
const PortfolioGridFourSection = dynamic( () => import("@components/sections/PortfolioGridFour"), { ssr: true } );

export const metadata = {
  title: {
		default: "Home 13",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home12() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroThreeSection 
        image={{"url": "/img/banners/13.jpg", "alt": "banner"}} 
        title={"Hi. I'm Tinny <br>web designer"}
        subtitle={0} 
        button={{"label": "See Projects", "link": "/projects-2"}}
        button2={{"label": "How we work", "link": "/services"}}
        imgLayout={"out-right"}
      />
      <ServicesFiveSection />
      <AboutUsSection 
        image={"/img/about/13.jpg"}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioGridFourSection
          heading={{"subtitle": "Our works", "title": "Take a look <br>at all the projects"}} 
          projects={projects} 
          order={[ "project-37", "project-38", "project-18" , "project-3" ]} 
        />
      </Suspense>
      <TestimonialSlider
        paddingTop={0}
        paddingBottom={120}
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
      />
      <SubscribeSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} paddingTop={120} />
      </Suspense>
      <CallToActionTwoSection darkUI={1} />
    </OkaiLayout>
  );
};
export default Home12;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}