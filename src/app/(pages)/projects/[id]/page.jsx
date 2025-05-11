import React, { Suspense } from "react";
import { notFound } from 'next/navigation';

import OkaiLayout from "@layouts/OkaiLayout";

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

import ShareButtonsSection from "@components/ShareButtons";

import Link from "next/link";
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData((await params));
  
  return {
      title: postData.title + " | Projects",
  }
}

async function ProjectDetail ( { params } ) {
  const postData = await getSingleProjectData(params);
  const projects = await getAllProjects();

  //prev next navigation
  let prev = { "id": 0, "key": 0, "image": '', "title": '' }
  let next = { "id": 0, "key": 0, "image": '', "title": '' }
  let first = { "id": 0, "image": '', "title": '' }
  let last = { "id": 0, "image": '', "title": '' }

  projects.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  projects.forEach(function(item, key){
    if ( key == prev.key ) { prev.id = item.id; prev.image = item.image; prev.title = item.title; }
    if ( key == next.key ) { next.id = item.id; next.image = item.image; next.title = item.title; }
    if ( key == 0 ) { first.id = item.id; first.image = item.image; first.title = item.title; }
    if ( key == projects.length-1 ) { last.id = item.id; last.image = item.image; last.title = item.title; }
  });

  if ( prev.key == -1 ) { prev.id = last.id; prev.image = last.image; prev.title = last.title; }
  if ( next.key == projects.length ) { next.id = first.id; next.image = first.image; next.title = first.title; }

  return (
    <OkaiLayout>
        {/* project */}
        <div className="mil-p-240-120 mil-992-p-150-120">
            <div className="container">
                {postData.gallery !== undefined &&
                <>
                  {postData.gallery.map((item, key) => (
                  <div className={`mil-just-image mil-h mil-shortened mil-mb${key+1 == postData.gallery.length ? "120" : "30"} mil-up`} key={`project-gallery-item-${key}`}>
                      <Image src={item.image} fill sizes="100vw" alt={item.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                  </div>
                  ))}
                </>
                }
                <div className="row mil-jcb">
                    <div className="col-lg-7">
                        <h2 className="mil-fs42 mil-mb60 mil-up" dangerouslySetInnerHTML={{__html: postData.description.title}} />
                        <div className="mil-text mil-mb60 mil-up" dangerouslySetInnerHTML={{__html: postData.description.content}} />

                        <ShareButtonsSection />
                    </div>
                    <div className="col-lg-4 mil-mb120">
                        {postData.details.items.map((item, key) => (
                        <div className="mil-mb30 mil-up" key={`project-details-item-${key}`}>
                            <h5 className="mil-fs16 mil-mb15">{item.label}</h5>
                            <p dangerouslySetInnerHTML={{__html: item.value}} />
                        </div>
                        ))}
                    </div>
                </div>
                {next.id != 0 &&
                <div className="row mil-jce">
                    <div className="col-lg-10">
                        <Link href={`/projects/${next.id}`} className="row flex-sm-row-reverse mil-jcb mil-aic mil-c-next">
                            <div className="col-lg-7 mil-project-cover-frame">
                                <div className="mil-cover-img mil-left mil-up">
                                    <Image src={next.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={next.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                </div>
                            </div>
                            <div className="col-lg-5 mil-relative">
                                <div className="mil-project-text">
                                    <span className="mil-suptitle mil-accent mil-up">Next project</span>
                                    <h2 className="mil-fs42 mil-mb30 mil-up">{next.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                }
            </div>
        </div>
        {/* project end */}
    </OkaiLayout>
  );
};
export default ProjectDetail;

export async function generateStaticParams() {
  const paths = getAllProjectsIds()

  return paths
}

async function getSingleProjectData(params) {
  const postData = await getProjectData((await params).id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}

async function getAllProjects() {
  const allProjects = await getSortedProjectsData()

  return allProjects
}