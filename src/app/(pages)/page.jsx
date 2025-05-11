import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import OkaiLayout from "@layouts/OkaiLayout";

import HeroSection from "@components/sections/Hero";
import ExperienceSection from "@components/sections/Experience";
import CallToActionSection from "@components/sections/CallToAction";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";

const PortfolioSection = dynamic( () => import("@components/sections/Portfolio"), { ssr: true } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );

export const metadata = {
  title: {
		default: "Ibrahim Olukokun",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home1() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection 
      image={{ url: "/img/banners/1.jpg", alt: "banner" }}
      title={"Hi. I am <span class='mil-accent'>Ibrahim</span> Olukokun"}
      description={"I'm a UK-based frontend developer with a design-first mindset and a growing passion for building intuitive, accessible, and responsive web experiences."}
      button={{ label: "View My Works", link: "#portfolio" }}
      imgLayout="out-right"
      />

      <ExperienceSection />
      <div id="portfolio">
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSection
          projects={projects}
          order={["project-1", "project-3", "project-2", "project-4"]}
        />
      </Suspense>
</div>

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
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionTwoSection />
    </OkaiLayout>
  );
};
export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}