---
#preview - shown on homepage grid
caseStudy: true
id: "Project-7"
slug: "ruth-miskin-assessment-portal"
title: "Ruth Miskin Training - Online Assessment Portal"
tagline: "Redesigning a national ed-tech assessment platform used by 60% of UK schools, for learners, teachers, and assessors."
summary: "As Product Designer, I led the UX redesign of Ruth Miskin Training's Online Assessment Portal, modernising complex assessment workflows for schools nationwide while collaborating closely with engineering and product management."
image: /img/portfolio/apr-showcase.gif
coverImage: /img/portfolio/apr-kids-result.png
category: Shipped Product
category_slug: shipped-product
link: "/projects/Project-7"
liveUrl: "https://www.ruthmiskin.com/"
content: "UX redesign of a national assessment portal used by 60% of UK schools. Full flow for learners, teachers, and assessors."
skills: ["Product Design", "UX Research", "Wireframing", "Prototyping", "Figma"]
masonrySize: horizontal

caseStudyMeta:
  - label: "Role"
    value: "Product Designer"
  - label: "Timeline"
    value: "Jul – Oct 2024"
  - label: "Platform"
    value: "Web application"
  - label: "Team"
    value: "Engineering, product management, design"
  - label: "Status"
    value: "Shipped"

impact:
  - value: "60%"
    label: "Of UK schools use the portal"
  - value: "3"
    label: "User types redesigned"
  - value: "Full"
    label: "Assessment flow overhauled"
  - value: "Positive"
    label: "School reception to launch"

sections:
  - id: problem
    label: "The Problem"
    title: "A product schools depended on, but didn't enjoy using"
    content: |
      <p>Ruth Miskin Training's Online Assessment Portal is a core product used by around 60% of UK schools to assess children's reading progress. Functionally, it worked. But after years of engineering-led development, the experience had fallen behind competitors on usability, visual clarity, and brand cohesion.</p>
      <p>The team was heavily developer-focused, which meant features shipped reliably but the interface accumulated friction: outdated styling, inconsistent patterns, and workflows that made everyday tasks harder than they needed to be for teachers and assessors managing hundreds of pupils.</p>
      <p>The business needed a redesign that respected what already worked technically, while making the product something schools actually wanted to open every day.</p>
    highlights:
      - "Years of functionality-first development had outpaced the visual and UX layer"
      - "Teachers and assessors navigated complex flows to manage classes, pupils, and live assessments"
      - "Outdated colour and styling undermined trust compared to modern ed-tech competitors"
      - "Three distinct user types (learners, teachers, assessors) each needed clearer, faster paths"

  - id: role
    label: "My Role"
    title: "End-to-end product design inside a cross-functional team"
    content: |
      <p>I joined Ruth Miskin Training as Product Designer for a focused engagement, working within a cross-functional team of engineers and product managers. I owned the UX redesign from early wireframes through lo-fi and hi-fi prototypes, translating school-facing requirements into interfaces the engineering team could build against.</p>
      <p>Beyond the assessment portal, I also redesigned and optimised parts of the company website, improving brand identity, usability, and overall user experience where legacy styling had become dated.</p>
    details:
      - label: "Discovery & UX"
        value: "User flow mapping, wireframes, lo-fi and hi-fi prototypes in Figma"
      - label: "Collaboration"
        value: "Daily alignment with engineering and product management on scope and feasibility"
      - label: "Assessment flows"
        value: "Class management, live assessment, pupil results, and profile editing"
      - label: "Brand & web"
        value: "Website refresh for improved identity and usability"

  - id: users
    label: "Who It's For"
    title: "Three audiences, one national platform"
    content: |
      <p>The portal serves the full school assessment ecosystem. Each group interacts with the same product but with very different goals, so the redesign had to clarify roles without fragmenting the experience.</p>
    blocks:
      - title: "Teachers"
        content: "<p>Manage classes, year groups, and pupil lists. Need fast ways to add pupils, track assessment status across groups, and understand who still needs to be assessed.</p>"
      - title: "Assessors"
        content: "<p>Run live reading assessments in the classroom. Need a focused, low-friction interface with clear progress tracking, keyboard shortcuts, and minimal distraction during sessions with children.</p>"
      - title: "Learners"
        content: "<p>Children being assessed need calm, readable interfaces. Results and progress views must be clear for adults interpreting outcomes on their behalf, with phonics-level detail surfaced simply.</p>"

  - id: approach
    label: "Approach"
    title: "Modernise the experience without breaking what schools rely on"
    content: |
      <p>I started by mapping the existing assessment journey end to end: sign-in, class setup, pupil management, live assessment, results review, and profile updates. Rather than proposing a ground-up rebuild, I identified where visual hierarchy, spacing, and interaction patterns could remove friction within the current product architecture.</p>
      <p>Prototypes moved from wireframes to lo-fi flows for team review, then to hi-fi screens aligned with an updated teal and yellow brand language that felt contemporary without alienating existing users.</p>
    blocks:
      - title: "Workflow-first, not pixel-first"
        content: "<p>Each screen was tied to a real school task: adding a class group, filtering pupils by assessment status, running a live session, or reviewing phonics results. Design decisions were validated against these jobs, not abstract UI patterns.</p>"
      - title: "Built for cross-functional delivery"
        content: "<p>With a developer-heavy team, prototypes needed to be unambiguous. I structured Figma files and specs so engineering could map components directly, reducing back-and-forth during implementation.</p>"
      - title: "Consistent system across the portal"
        content: "<p>Navigation, tables, tabs, modals, and action buttons were unified across classes, assessments, and pupil profiles so users learned the interface once and applied it everywhere.</p>"
    media:
      image: /img/portfolio/apr-class-group-stage.png
      alt: "Ruth Miskin class view with pupil tables, assessment status tabs, and group management"
      caption: "Class management: teachers filter pupils by assessment status and act on records without leaving the page."

  - id: decisions
    label: "Key Decisions"
    title: "Balancing modern design with a live, national product"
    decisions:
      - title: "Refresh the brand layer, not the data model"
        description: "I updated colour, typography, spacing, and component styling across the portal while keeping underlying structures familiar to returning users."
        rationale: "Schools needed a product that felt new, not one that forced them to relearn every workflow from scratch."
      - title: "Status-driven pupil tables"
        description: "Class views use tabbed filters (Not Assessed, In Progress, Completed) so teachers immediately see who needs attention."
        rationale: "The most common teacher question is 'who still needs assessing?' That should be answerable in one glance."
      - title: "Focused live assessment mode"
        description: "The assessment screen strips away navigation noise and centres the assessor on progress tracking, word display, and keyboard-driven controls."
        rationale: "Assessors work under time pressure with children present. Every extra click breaks focus."
      - title: "Granular pupil profiles with editable context"
        description: "Individual result pages surface phonics-level detail, storybook links, and SEN/tutoring flags, with profile edits handled in a clear modal pattern."
        rationale: "Teachers need depth on individual children without losing the thread of class-level management."
    media:
      image: /img/portfolio/apr-main-assessment.png
      alt: "Ruth Miskin live assessment screen with progress tracker and keyboard shortcuts"
      caption: "Live assessment: a focused assessor view with progress tracking, clear controls, and minimal distraction."

  - id: outcomes
    label: "Outcomes"
    title: "A redesign schools were excited to use"
    content: |
      <p>The redesigned Online Assessment Portal shipped with an updated look and significantly improved usability across class management, live assessment, and pupil results. The product retained the reliability schools depended on, while closing the gap between functionality and experience.</p>
      <p>Feedback from schools after launch validated the approach: the new interface made the product feel current, approachable, and easier to work with day to day.</p>
    quote:
      text: "Schools loved the new update and are very much excited to use the product now based on the new look."
      author: "Gabriele Fantini"
      role: "Engineering Manager, Ruth Miskin Training"
    highlights:
      - "Full assessment flow redesigned for teachers, assessors, and learners"
      - "Modernised brand and UI across portal and parts of the company website"
      - "Positive reception from schools after launch"
      - "Delivered in close collaboration with engineering and product management"

gallery:
  - image: /img/portfolio/apr-main.png
    alt: "Ruth Miskin classes overview with year groups and pupil counts"
    caption: "Classes overview: year groups and RWI groups in a scannable, sortable table."

  - image: /img/portfolio/apr-class-group-stage.png
    alt: "Ruth Miskin class detail with pupil assessment status tabs"
    caption: "Class detail: filter pupils by assessment status and manage records at scale."

  - image: /img/portfolio/apr-main-assessment.png
    alt: "Ruth Miskin live assessment interface"
    caption: "Live assessment: progress line, word display area, and keyboard-driven controls."

  - image: /img/portfolio/apr-edit-details-modal.png
    alt: "Ruth Miskin edit profile modal for pupil details"
    caption: "Profile editing: year group, PSC results, and SEN flags in a focused modal."

  - image: /img/portfolio/apr-sign-in.png
    alt: "Ruth Miskin school portal sign in page"
    caption: "School portal sign-in: refreshed entry point with Microsoft SSO support."

  - image: /img/portfolio/apr-showcase.gif
    alt: "Ruth Miskin assessment portal animated UI showcase"
    caption: "Full flow overview: sign-in, classes, assessment, and pupil results in context."

---
