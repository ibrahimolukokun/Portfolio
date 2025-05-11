import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroSection from "@components/sections/Hero";
import AboutFourSection from "@components/sections/AboutUsFour";
import ExperienceSevenSection from "@components/sections/ExperienceSeven";
import SkillsSection from "@components/sections/Skills";
import PricingSection from "@components/sections/Pricing";
import PartnersTwoSection from "@components/sections/PartnersTwo";
import SubscribeSection from "@components/sections/Subscribe";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import LatestPostsSection from "@components/sections/LatestPosts";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: true } );

export const metadata = {
  title: {
		default: "Home 12",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home12() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection 
        image={{"url": "/img/banners/12.jpg", "alt": "banner"}} 
        title={"Hi. I'm <span class='mil-accent'>Judy</span> community manager"}
        button={false}
        imgLayout={"out-left"}
        rowReverse={1}
      />
      <PartnersTwoSection 
        title={"Join the <b>14 companies</b> from which I <b>manage all your communication</b>."}
        paddingTop={120}
        paddingBottom={90}
      />
      <AboutFourSection />
      <ExperienceSevenSection />
      <SkillsSection />
      <PricingSection />
      <SubscribeSection />
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
export default Home12;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}