import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

const Showcase2PortfolioSlider = dynamic( () => import("@components/sliders/Showcase2Portfolio"), { ssr: true } );

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
		default: "Showcase Projects 2",
	},
  description: AppData.settings.siteDescription,
}

async function Showcase2Projects() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout header={"transparent"} footer={"none"}>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase2PortfolioSlider 
          projects={projects} 
          order={["project-44", "project-39", "project-40", "project-41", "project-42", "project-43"]}
          slidesTitles={["Advertising <br>campaign for <br>Red Lamp", "Creation of <br>personal <br>brand", "Sunrise <br>breeze ad <br>campaign", "Risky, modern <br>and trendy <br>outfit", "New model <br>project <br>in 3D", "Advertising <br>campaign for <br>Red Lamp"]} 
          showContactInLatestSlide={1}
          contactLineOne={{"textBefore": "Just say", "textLinkLabel": "Hello", "textLinkUrl": "/contact", "textAfter": "!"}}
          contactLineTwo={{"textBefore": "Just say Hello via", "textLinkLabel": "online chat", "textLinkUrl": "/contact", "textAfter": "!"}}
        />
      </Suspense>
    </OkaiLayout>
  );
};
export default Showcase2Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}