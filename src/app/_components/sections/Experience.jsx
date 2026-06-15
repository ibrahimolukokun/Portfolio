const ExperienceSection = () => {
  const designSkills = [
    "Figma", "UX Research", "Prototyping", "Design Systems",
    "Information Architecture", "User Testing", "Wireframing", "Visual Design"
  ];

  const frontendSkills = [
    "React", "Next.js", "HTML & CSS", "TailwindCSS",
    "JavaScript", "Webflow", "WordPress"
  ];

  const toolSkills = [
    "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "CorelDraw"
  ];

  return (
    <section className="ib-section" id="about">
      <div className="ib-container">
        <span className="ib-section__label">About</span>
        <h2 className="ib-section__title">A little about me</h2>

        <div className="ib-about__inner">

          {/* Left: Bio */}
          <div>
            <div className="ib-about__bio">
              <p>
                I'm a <strong>Product Designer and Design Engineer</strong> with 8+ years of experience designing and shipping digital products across SaaS, enterprise, and ed-tech, from research and prototyping through to production-ready interfaces.
              </p>
              <p>
                I'm lead product designer for <strong>US Cloud Consulting</strong>, working across their SaaS brands including Compelify and Opscalers, as well as enterprise clients in fintech and energy. Highlights include the investor deck that supported Analog Inference's $50.5M Series A and product work for clients such as AM Batteries and TDK Ventures.
              </p>
              <p>
                I spent three months as product designer at <strong>Ruth Miskin Training</strong>, redesigning their Online Assessment Portal used by around 60% of UK schools and doubling completion rates. I'm also recognised as Top Rated Plus on <strong>Upwork</strong>, top 3% globally, with a 100% job success score across five years of independent consulting.
              </p>
              <p>
                Outside client work, I'm building <strong>Targe</strong>, a project management SaaS with a co-founder, and mentoring designers through <strong>Tech Growth Circle</strong>, a learning community of 30+ people transitioning into product and design roles.
              </p>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <div className="ib-skills__group">
              <span className="ib-skills__group-label">Design</span>
              <div className="ib-skills__tags">
                {designSkills.map(s => (
                  <span key={s} className="ib-skills__tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="ib-skills__group">
              <span className="ib-skills__group-label">Frontend</span>
              <div className="ib-skills__tags">
                {frontendSkills.map(s => (
                  <span key={s} className="ib-skills__tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="ib-skills__group">
              <span className="ib-skills__group-label">Creative Tools</span>
              <div className="ib-skills__tags">
                {toolSkills.map(s => (
                  <span key={s} className="ib-skills__tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
