import Image from 'next/image';

const HeroOne = ({ image }) => {
  return (
    <section className="ib-hero">
      <div className="ib-container">
        <div className="ib-hero__inner">

          {/* Left: Text */}
          <div className="ib-hero__content">
            <div className="ib-hero__label">Product Designer - Design Engineer</div>

            <h1 className="ib-hero__headline">
              I design products<br />
              people love to use,<br />
              then help build them.
            </h1>

            <p className="ib-hero__sub">
              Product designer with 8+ years of hands-on experience turning ideas into products
              that are beautifully designed and genuinely easy to use. From SaaS platforms and
              dashboards to design systems and no-code tools.
            </p>

            <div className="ib-hero__ctas">
              <a href="#contact" className="ib-btn-primary">
                Let's talk
              </a>
              <a
                href="mailto:iolukokun@gmail.com"
                className="ib-btn-ghost"
              >
                Send Email ↗
              </a>
            </div>

            <div className="ib-hero__availability">
              <span className="ib-hero__dot" />
              Available for select projects
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
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroOne;
