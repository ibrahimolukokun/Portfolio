import Link from "next/link";

import AppData from "@data/app.json";

import OkaiLayout from "@layouts/OkaiLayout";
import ProjectsMasonry from "@components/ProjectsMasonry";

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
		default: "Projects 2",
	},
  description: AppData.settings.siteDescription,
}

async function Projects2() {
  const projects = await getAllProjects();

  const PortfolioData = {
    "title": "<span class='mil-thin'>Production creative projects here! </span><br/>Welcome to <span class='mil-accent'>Okai</span>.",
    "text": "Take a look at our",
    "link": {
      "label": "most recent projects",
      "url": "/contact"
    }
  }

  return (
    <OkaiLayout>
      {/* banner */}
      <div className="mil-banner-inner-2">
          <div className="container">
              <div className="mil-banner-text">
                  <div>
                      <h1 className="mil-light mil-fs68 mil-mb30" dangerouslySetInnerHTML={{__html : PortfolioData.title}} />
                      <p className="mil-text mil-fs26 mil-up">{PortfolioData.text} <Link href={PortfolioData.link.url} className="mil-text-link mil-light mil-c-gone">{PortfolioData.link.label}</Link>!</p>
                  </div>
              </div>
          </div>
      </div>
      {/* banner end */}
      <ProjectsMasonry projects={projects} categories={AppData.projects.categories} layout={'masonry'} filter={0} limit={12} />
    </OkaiLayout>
  );
};
export default Projects2;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}