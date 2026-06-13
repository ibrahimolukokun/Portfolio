---
# Duplicate this file, rename to project-N.md, and fill in each section.
# Set caseStudy: true to use the full case study template at /projects/[id]

# --- Homepage preview card ---
caseStudy: true
id: "Project-X"
slug: "project-slug"
title: "Project Name — One-line descriptor"
tagline: "One sentence that frames the business problem and your contribution."
summary: "2–3 sentence overview for SEO and the case study hero. Lead with impact, not visuals."
image: /img/portfolio/your-cover.gif
coverImage: /img/portfolio/your-hero.png
category: Shipped Product
category_slug: shipped-product
link: "https://live-url-or-case-study-path"
liveUrl: "https://live-url.com"
liveUrlLabel: "View live product"
content: "Short card description shown on the homepage grid."
skills: ["Product Design", "UX Research", "React.js"]
masonrySize: horizontal

# --- Case study metadata strip ---
caseStudyMeta:
  - label: "Role"
    value: "Your role on the project"
  - label: "Timeline"
    value: "YYYY – YYYY"
  - label: "Platform"
    value: "Web / Mobile / etc."
  - label: "Team"
    value: "Team size and composition"
  - label: "Status"
    value: "Shipped / In development / Concept"

# --- Impact metrics (use real numbers where possible) ---
impact:
  - value: "XX%"
    label: "Metric label"
  - value: "X,XXX"
    label: "Another metric"

# --- Narrative sections (rendered in order) ---
sections:
  - id: problem
    label: "The Problem"
    title: "Frame the business and user problem"
    content: |
      <p>Why did this project matter? What friction existed before?</p>
    highlights:
      - "Pain point one"
      - "Pain point two"

  - id: role
    label: "My Role"
    title: "What you owned"
    content: |
      <p>Describe scope, collaboration, and boundaries.</p>
    details:
      - label: "Area"
        value: "What you did"

  - id: approach
    label: "Approach"
    title: "How you worked"
    content: |
      <p>Process summary — keep it outcome-focused, not a generic double-diamond diagram.</p>
    blocks:
      - title: "Sub-section title"
        content: "<p>Detail for this part of the process.</p>"
    # Optional inline screen (place after section content for visual break)
    media:
      image: /img/portfolio/screen.png
      alt: "Accessible alt text"
      caption: "One line tying the screen to the narrative above."

  - id: decisions
    label: "Key Decisions"
    title: "Trade-offs and judgment calls"
    decisions:
      - title: "Decision name"
        description: "What you chose to do."
        rationale: "Why — constraints, user needs, or business goals."

  - id: outcomes
    label: "Outcomes"
    title: "Results and what's next"
    content: |
      <p>Metrics, qualitative results, learnings, and next steps.</p>
    quote:
      text: "Optional stakeholder feedback quote."
      author: "Name"
      role: "Title, Company"

# --- Optional image gallery ---
gallery:
  - image: /img/portfolio/screen.gif
    alt: "Accessible alt text"
    caption: "What this screen demonstrates."

---

Optional markdown body below the frontmatter renders after all sections.
