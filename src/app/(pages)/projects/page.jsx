import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";

import PageBanner from "@components/PageBanner";
import ProjectsMasonry from "@components/ProjectsMasonry";

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
		default: "Projects",
	},
  description: AppData.settings.siteDescription,
}

async function Projects() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <PageBanner pageTitle={"Portfolio"} breadTitle={"Portfolio"} bgImage={"/img/banners/18.jpg"} />
      <ProjectsMasonry projects={projects} categories={AppData.projects.categories} />
    </OkaiLayout>
  );
};
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}