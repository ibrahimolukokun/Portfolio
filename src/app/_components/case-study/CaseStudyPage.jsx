import Link from "next/link";
import Image from "next/image";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";
import CaseStudyGallery from "@components/case-study/CaseStudyGallery";

const CaseStudyInlineMedia = ({ media, title }) => {
  if (!media?.image) return null;

  return (
    <figure className="ib-case-study__inline-media">
      <div className="ib-case-study__inline-media-frame">
        <Image
          src={media.image}
          alt={media.alt || media.caption || title}
          fill
          quality={92}
          sizes="(max-width: 900px) 100vw, min(1200px, 100vw)"
          className="ib-case-study__inline-media-img"
          unoptimized={media.image.endsWith(".gif")}
        />
      </div>
      {media.caption && (
        <figcaption className="ib-case-study__inline-media-caption">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
};

const CaseStudyPage = ({ project, nextProject }) => {
  const {
    title,
    tagline,
    summary,
    image,
    coverImage,
    liveUrl,
    liveUrlLabel,
    caseStudyMeta,
    impact,
    sections = [],
    gallery = [],
    skills = [],
  } = project;

  const nextHref = nextProject?.caseStudy
    ? `/projects/${nextProject.id}`
    : nextProject?.link || "/#work";

  const isExternalNext = Boolean(nextProject && !nextProject.caseStudy && nextProject.link);

  return (
    <article className="ib-case-study">
      {/* Hero */}
      <header className="ib-case-study__hero">
        <div className="ib-container">
          <Link href="/#work" className="ib-case-study__back">
            <MdArrowBack className="ib-case-study__back-arrow" aria-hidden="true" />
            Back to work
          </Link>

          {project.category && (
            <span className="ib-case-study__category">{project.category}</span>
          )}

          <h1 className="ib-case-study__title">{title}</h1>

          {tagline && (
            <p className="ib-case-study__tagline">{tagline}</p>
          )}

          {summary && (
            <p className="ib-case-study__summary">{summary}</p>
          )}

          <div className="ib-case-study__actions">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ib-btn-primary"
              >
                {liveUrlLabel || "View live product"} <MdArrowOutward style={{ verticalAlign: "middle" }} />
              </a>
            )}
          </div>

          {caseStudyMeta?.length > 0 && (
            <dl className="ib-case-study__meta">
              {caseStudyMeta.map((item) => (
                <div key={item.label} className="ib-case-study__meta-item">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {skills?.length > 0 && (
            <div className="ib-case-study__skills">
              {skills.map((skill) => (
                <span key={skill} className="ib-work__tag">{skill}</span>
              ))}
            </div>
          )}
        </div>

        {(coverImage || image) && (
          <div className="ib-case-study__cover">
            <div className="ib-container">
              <div className="ib-case-study__cover-frame">
                <Image
                  src={coverImage || image}
                  alt={title}
                  fill
                  priority
                  quality={92}
                  sizes="(max-width: 900px) 100vw, min(1200px, 100vw)"
                  className="ib-case-study__cover-img"
                  unoptimized={(coverImage || image).endsWith(".gif")}
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Impact metrics */}
      {impact?.length > 0 && (
        <section className="ib-case-study__impact" aria-label="Project impact">
          <div className="ib-container">
            <div className="ib-case-study__impact-grid">
              {impact.map((item) => (
                <div key={item.label} className="ib-case-study__impact-item">
                  <span className="ib-case-study__impact-value">{item.value}</span>
                  <span className="ib-case-study__impact-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content sections */}
      <div className="ib-case-study__body">
        <div className="ib-container">
          {sections.map((section, index) => (
            <section
              key={section.id || index}
              className={`ib-case-study__section${section.media ? " ib-case-study__section--has-media" : ""}`}
              id={section.id}
            >
              <div className="ib-case-study__section-copy">
              {section.label && (
                <span className="ib-section__label">{section.label}</span>
              )}

              {section.title && (
                <h2 className="ib-case-study__section-title">{section.title}</h2>
              )}

              {section.content && (
                <div
                  className="ib-case-study__prose"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}

              {section.highlights?.length > 0 && (
                <ul className="ib-case-study__highlights">
                  {section.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.blocks?.length > 0 && (
                <div className="ib-case-study__blocks">
                  {section.blocks.map((block) => (
                    <div key={block.title} className="ib-case-study__block">
                      <h3>{block.title}</h3>
                      <div
                        className="ib-case-study__prose"
                        dangerouslySetInnerHTML={{ __html: block.content }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {section.decisions?.length > 0 && (
                <div className="ib-case-study__decisions">
                  {section.decisions.map((decision) => (
                    <div key={decision.title} className="ib-case-study__decision">
                      <h3>{decision.title}</h3>
                      <p>{decision.description}</p>
                      {decision.rationale && (
                        <p className="ib-case-study__decision-rationale">
                          <strong>Why:</strong> {decision.rationale}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.details?.length > 0 && (
                <dl className="ib-case-study__details">
                  {section.details.map((item) => (
                    <div key={item.label} className="ib-case-study__detail">
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {section.quote && (
                <blockquote className="ib-case-study__quote">
                  <p>&ldquo;{section.quote.text}&rdquo;</p>
                  <footer className="ib-case-study__quote-footer">
                    <cite>{section.quote.author}</cite>
                    {section.quote.role && (
                      <span className="ib-case-study__quote-role">{section.quote.role}</span>
                    )}
                  </footer>
                </blockquote>
              )}
              </div>

              <CaseStudyInlineMedia media={section.media} title={title} />
            </section>
          ))}

          {project.contentHtml && (
            <section className="ib-case-study__section">
              <div
                className="ib-case-study__prose"
                dangerouslySetInnerHTML={{ __html: project.contentHtml }}
              />
            </section>
          )}
        </div>
      </div>

      {/* Gallery */}
      {gallery?.length > 0 && (
        <CaseStudyGallery gallery={gallery} title={title} />
      )}

      {/* Next project */}
      {nextProject?.id && (
        <footer className="ib-case-study__next">
          <div className="ib-container">
            {isExternalNext ? (
              <a
                href={nextHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ib-case-study__next-link"
              >
                <span className="ib-case-study__next-label">See next project</span>
                <span className="ib-case-study__next-title">
                  {nextProject.title}
                  <MdArrowOutward className="ib-case-study__next-arrow" />
                </span>
              </a>
            ) : (
              <Link href={nextHref} className="ib-case-study__next-link">
                <span className="ib-case-study__next-label">See next project</span>
                <span className="ib-case-study__next-title">
                  {nextProject.title}
                  <MdArrowOutward className="ib-case-study__next-arrow" />
                </span>
              </Link>
            )}
          </div>
        </footer>
      )}
    </article>
  );
};

export default CaseStudyPage;
