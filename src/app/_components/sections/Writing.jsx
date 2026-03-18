import { MdArrowOutward } from "react-icons/md";
import Data from "@data/sections/writing.json";

const WritingSection = () => {
  return (
    <section className="ib-section" id="writing">
      <div className="ib-container">
        <span className="ib-section__label">Writing</span>
        <h2 className="ib-section__title">{Data.title}</h2>

        <ul className="ib-writing__list">
          {Data.articles.map((article, i) => (
            <li key={i}>
              <a
                href={article.link}
                target={article.link !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="ib-writing__item"
              >
                <span className="ib-writing__title">{article.title}</span>
                <div className="ib-writing__meta">
                  <span className="ib-writing__platform">{article.platform}</span>
                  <span className="ib-writing__year">{article.year}</span>
                  <MdArrowOutward className="ib-writing__arrow" />
                </div>
              </a>
            </li>
          ))}
        </ul>

        <p style={{ marginTop: '32px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          More writing coming soon.
        </p>
      </div>
    </section>
  );
};

export default WritingSection;
