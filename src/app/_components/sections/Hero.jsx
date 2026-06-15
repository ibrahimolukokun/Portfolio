import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";

const HeroOne = ({ image }) => {
  return (
    <section className="ib-hero">
      <div className="ib-container">
        <div className="ib-hero__inner">

          {/* Left: Text */}
          <div className="ib-hero__content">
            <div className="ib-hero__label">Product Designer - Design Engineer</div>

            <h1 className="ib-hero__headline">
              I design products people love to use, then help build them.
            </h1>

            <p className="ib-hero__sub">
              Senior product designer with 8+ years designing and shipping SaaS platforms,
              enterprise dashboards, and ed-tech products, currently lead designer at US Cloud
              Consulting.
            </p>

            <div className="ib-hero__ctas">
              <a href="#work" className="ib-btn-primary">
              View Work
              </a>
              <a
                href="mailto:iolukokun@gmail.com"
                className="ib-btn-ghost"
              >
                Send Email <MdArrowOutward style={{ verticalAlign: 'middle' }} />
              </a>
            </div>

          </div>

          {/* Right: Photo */}
          <div className="ib-hero__photo">
            {image && (
              <Image
                src="/img/Ibrahim_Image.png"
                fill
                sizes="(max-width: 900px) 200px, 340px"
                priority
                alt="Ibrahim Olukokun"
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroOne;
