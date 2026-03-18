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
                I'm a <strong>Product Designer and Design Engineer</strong> with 8 years of experience building digital products that work: dashboards, SaaS platforms, and scalable interfaces for companies at every stage.
              </p>
              <p>
                At <strong>Contrivea</strong>, the practice I founded, I lead product design for clients in fintech, ed-tech, and B2B SaaS. I work at the intersection of design thinking and engineering. I don't just design what's beautiful, I design what ships and performs.
              </p>
              <p>
                On <strong>Upwork</strong>, I'm recognised as Top Rated Plus, in the top 3% of professionals globally, with a 100% job success score across 4+ years of independent consulting for startups, scale-ups, and digital platforms across North America, Europe, and Asia.
              </p>
              <p>
                I'm also co-founder of <strong>Mentosure</strong>, an ed-tech platform for career transitions, and lead <strong>Tech Growth Circle</strong>, a learning community of 30+ designers and developers building their way into tech.
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
