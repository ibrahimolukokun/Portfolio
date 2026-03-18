import { MdArrowOutward } from "react-icons/md";
import { FaBehance, FaGithub } from 'react-icons/fa';

const PortfolioSection = ({ projects, order }) => {
  let projectsKeys = {};

  projects.forEach((item) => {
    projectsKeys[item.id] = item;
  });

  return (
    <section id="work">
      {/* Section header */}
      <div className="ib-container ib-work__header">
        <span className="ib-section__label">Selected Work</span>
        <h2 className="ib-section__title" style={{ marginBottom: 0 }}>Projects</h2>
      </div>

      {/* Grid — full bleed */}
      <div className="ib-work__grid">
        {order.map((id, index) => {
          const project = projectsKeys[id];
          if (!project || !project.image) return null;

          return (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ib-work__item"
              aria-label={`View ${project.title}`}
            >
              <div className="ib-work__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="ib-work__img"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="ib-work__info">
                <span className="ib-work__category">{project.category}</span>
                <h3 className="ib-work__title">
                  {project.title}
                  <MdArrowOutward className="ib-work__arrow" />
                </h3>
                <p className="ib-work__desc">{project.content}</p>
                <div className="ib-work__tags">
                  {project.skills?.map((skill, i) => (
                    <span key={i} className="ib-work__tag">{skill}</span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Footer links */}
      <div className="ib-container">
        <div className="ib-work__footer-links">
          <a
            href="https://behance.net/ibrahimolukokun"
            target="_blank"
            rel="noopener noreferrer"
            className="ib-btn-ghost"
          >
            <FaBehance />
            More on Behance ↗
          </a>
          <a
            href="https://github.com/ibrahimolukokun"
            target="_blank"
            rel="noopener noreferrer"
            className="ib-btn-ghost"
          >
            <FaGithub />
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
