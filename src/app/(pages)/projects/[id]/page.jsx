import React from "react";
import { notFound } from "next/navigation";

import OkaiLayout from "@layouts/OkaiLayout";
import CaseStudyPage from "@components/case-study/CaseStudyPage";

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

const PORTFOLIO_ORDER = ["project-1", "project-7", "project-3", "project-2"];

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData(await params);

  return {
    title: `${postData.title} - Case Study`,
    description: postData.summary || postData.content,
  };
}

async function ProjectDetail({ params }) {
  const resolvedParams = await params;
  const postData = await getSingleProjectData(resolvedParams);
  const projects = await getAllProjects();
  const nextProject = getNextProject(projects, postData.id);

  return (
    <OkaiLayout footer="none">
      {postData.caseStudy ? (
        <CaseStudyPage project={postData} nextProject={nextProject} />
      ) : (
        <LegacyProjectDetail postData={postData} nextProject={nextProject} />
      )}
    </OkaiLayout>
  );
}

function getNextProject(projects, currentId) {
  const projectsById = Object.fromEntries(projects.map((project) => [project.id, project]));
  const currentIndex = PORTFOLIO_ORDER.indexOf(currentId);

  if (currentIndex === -1) {
    return null;
  }

  const nextId = PORTFOLIO_ORDER[(currentIndex + 1) % PORTFOLIO_ORDER.length];
  return projectsById[nextId] || null;
}

function LegacyProjectDetail({ postData, nextProject }) {
  return (
    <div className="mil-p-240-120 mil-992-p-150-120">
      <div className="container">
        <h1 className="mil-fs42 mil-mb60">{postData.title}</h1>
        {postData.contentHtml && (
          <div className="mil-text mil-mb60" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {nextProject && (
          <a href={`/projects/${nextProject.id}`}>Next: {nextProject.title}</a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;

export async function generateStaticParams() {
  return getAllProjectsIds();
}

async function getSingleProjectData(params) {
  const postData = await getProjectData(params.id);

  if (!postData) {
    notFound();
  }

  return postData;
}

async function getAllProjects() {
  return getSortedProjectsData();
}
