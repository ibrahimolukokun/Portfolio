import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import OkaiLayout from "@layouts/OkaiLayout";

import HeroSection from "@components/sections/Hero";
import ExperienceSection from "@components/sections/Experience";
import MyExperience from "@components/sections/MyExperience";
import WritingSection from "@components/sections/Writing";

import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaBehance, FaLinkedinIn } from 'react-icons/fa';

const PortfolioSection = dynamic(
  () => import("@components/sections/Portfolio"),
  { ssr: true }
);

export const metadata = {
  title: "Ibrahim Olukokun — Product Designer | Design Engineer",
  description: "Product Designer and Design Engineer with 8+ years turning ideas into products that are beautifully designed and easy to use. From SaaS platforms and dashboards to design systems and no-code tools.",
};

async function Home() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout footer="none">

      {/* HERO */}
      <HeroSection
        image={{ url: "/img/banners/1.jpg", alt: "Ibrahim Olukokun" }}
      />

      <hr className="ib-divider" />

      {/* WORK */}
      <Suspense fallback={<div style={{ padding: '96px 0', textAlign: 'center', color: 'var(--text-muted)' }}>Loading projects…</div>}>
        <PortfolioSection
          projects={projects}
          order={["project-1", "project-7", "project-3", "project-2"]}
        />
      </Suspense>

      <hr className="ib-divider" />

      {/* ABOUT */}
      <ExperienceSection />

      <hr className="ib-divider" />

      {/* EXPERIENCE TIMELINE */}
      <MyExperience />

      <hr className="ib-divider" />

      {/* WRITING */}
      <WritingSection />

      <hr className="ib-divider" />

      {/* CONTACT */}
      <section className="ib-section" id="contact">
        <div className="ib-container">
          <span className="ib-section__label">Contact</span>
          <h2 className="ib-section__title">Let's work together</h2>

          <div className="ib-contact__inner">
            <p className="ib-contact__sub">
              Whether you're a startup defining your product from zero to one, or a growing company that needs a design partner who understands engineering and ships real products, I'd love to hear from you.
            </p>

            <a href="mailto:iolukokun@gmail.com" className="ib-contact__email">
              iolukokun@gmail.com <MdArrowOutward style={{ verticalAlign: 'middle' }} />
            </a>

            <div className="ib-contact__socials">
              <a
                href="https://github.com/ibrahimolukokun"
                target="_blank"
                rel="noopener noreferrer"
                className="ib-contact__social"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://behance.net/ibrahimolukokun"
                target="_blank"
                rel="noopener noreferrer"
                className="ib-contact__social"
              >
                <FaBehance /> Behance
              </a>
              <a
                href="https://linkedin.com/in/ibrahimolukokun"
                target="_blank"
                rel="noopener noreferrer"
                className="ib-contact__social"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="ib-divider" />

      {/* FOOTER */}
      <footer className="ib-footer">
        <div className="ib-container">
          <div className="ib-footer__inner">
            <p className="ib-footer__copy">
              © {new Date().getFullYear()} Ibrahim Olukokun. All rights reserved.
            </p>
            <ul className="ib-footer__links">
              <li>
                <a href="https://github.com/ibrahimolukokun" target="_blank" rel="noopener noreferrer" className="ib-footer__link">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://behance.net/ibrahimolukokun" target="_blank" rel="noopener noreferrer" className="ib-footer__link">
                  Behance
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ibrahimolukokun" target="_blank" rel="noopener noreferrer" className="ib-footer__link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </OkaiLayout>
  );
}

export default Home;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
