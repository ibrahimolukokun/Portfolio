---
#preview - shown on homepage grid
caseStudy: true
id: "Project-1"
slug: "targe"
title: "Targe - The Modern Workspace"
tagline: "A focused project management SaaS for makers, founders, and product teams, designed and built end-to-end."
summary: "I identified a gap in how small teams manage work, designed the product experience from research through hi-fi prototypes, and shipped the frontend as a live SaaS platform now in public beta."
image: /img/portfolio/targecasestudy1.gif
coverImage: /img/portfolio/targe-dashboard-overview.png
category: Shipped Product
category_slug: shipped-product
link: "https://targe.app/"
liveUrl: "https://targe.app/"
content: "Project management SaaS for founders and product teams. I led product design and built the frontend, live at targe.app."
skills: ["Product Design", "UX Strategy", "React.js", "TailwindCSS", "Design Engineering"]
masonrySize: horizontal

caseStudyMeta:
  - label: "Role"
    value: "Founder · Product Designer · Frontend Engineer"
  - label: "Timeline"
    value: "2024 – Present"
  - label: "Platform"
    value: "Web SaaS"
  - label: "Team"
    value: "Solo founder (design + frontend)"
  - label: "Status"
    value: "Live, public beta"

impact:
  - value: "500+"
    label: "Early access sign-ups"
  - value: "10K+"
    label: "Tasks managed in beta"
  - value: "< 2 hrs"
    label: "Average onboarding time"
  - value: "0 → 1"
    label: "Product shipped solo"

sections:
  - id: problem
    label: "The Problem"
    title: "Project tools create work about work"
    content: |
      <p>Most project management platforms weren't built for the people actually doing the work. They're designed for enterprise rollouts with heavy setup, bloated feature sets, and interfaces that pull attention away from shipping.</p>
      <p>I kept seeing the same pattern with founders, freelancers, and small product teams: they'd adopt a tool, spend days configuring it, then revert to spreadsheets or scattered notes because the overhead wasn't worth it. The tool became another job.</p>
      <p>Targe started from a simple question: <em>what if a workspace helped you focus on delivery instead of managing the manager?</em></p>
    highlights:
      - "High setup overhead before any real work begins"
      - "Cluttered UIs that bury tasks under navigation and chrome"
      - "Tools built for admin reporting, not daily maker workflows"
      - "No clear view of what's moving vs. what's stuck across projects"

  - id: role
    label: "My Role"
    title: "Designing and building the product, not just the screens"
    content: |
      <p>As founder, I owned the full product loop: problem framing, UX strategy, visual design, prototyping, frontend architecture, and iteration based on early user feedback. There was no handoff between design and engineering. Decisions were made with implementation constraints in mind from day one.</p>
      <p>This design-engineer workflow let me move fast: test an interaction in Figma, validate the flow, then ship it in React without losing intent in translation.</p>
    details:
      - label: "Product & UX"
        value: "Problem discovery, user flows, IA, wireframes, hi-fi UI, prototyping"
      - label: "Frontend"
        value: "React, TailwindCSS, responsive layouts, component structure"
      - label: "Positioning"
        value: "Brand, messaging, landing page, early access funnel"
      - label: "Iteration"
        value: "Beta feedback loops, onboarding refinements, feature prioritisation"

  - id: users
    label: "Who It's For"
    title: "Three audiences, one need: clarity without clutter"
    content: |
      <p>Rather than building a generic PM tool, I defined three primary user types with overlapping but distinct jobs-to-be-done:</p>
    blocks:
      - title: "Makers"
        content: "<p>Solo builders, freelancers, and side-project creators who need a lightweight space to track work without enterprise overhead. They optimise for speed and focus.</p>"
      - title: "Founders"
        content: "<p>Early-stage leaders running multiple initiatives who need visibility across projects without living inside a complex dashboard. They optimise for clarity and control.</p>"
      - title: "Product teams"
        content: "<p>Small teams running sprints and releases who need shared context, task ownership, and progress tracking without the ceremony of heavyweight agile tooling.</p>"

  - id: approach
    label: "Approach"
    title: "Design for focus, ship in focused iterations"
    content: |
      <p>I structured the product around three core workflows that map to how people actually work: set up a workspace, manage tasks across projects, and track progress toward delivery. Every design decision was evaluated against a single filter: does this help the user ship, or does it add management overhead?</p>
    blocks:
      - title: "Workspace-first architecture"
        content: "<p>Users start by creating projects and inviting collaborators, not by configuring boards, automations, or integrations. Onboarding is measured in minutes, not days.</p>"
      - title: "One view for action"
        content: "<p>A unified task view surfaces priorities across projects so users don't context-switch between boards, lists, and reports to understand what's due.</p>"
      - title: "Progress without performance theatre"
        content: "<p>Sprint and completion views show meaningful progress (done, active, remaining) without turning the product into a reporting dashboard for managers who aren't in the tool daily.</p>"
      - title: "Progressive complexity"
        content: "<p>Advanced capabilities like filters, analytics, and collaboration are available when needed but never block the first session. The default experience stays calm.</p>"
    media:
      image: /img/portfolio/targe-projects-page.png
      alt: "Targe projects grid with progress, tags, and team avatars"
      caption: "Projects view: every initiative in one filterable grid, with progress, priority, and team ownership visible at a glance."

  - id: decisions
    label: "Key Decisions"
    title: "What I built, and deliberately left out"
    decisions:
      - title: "No enterprise setup tax"
        description: "Users can create a workspace and add tasks in their first session. I removed mandatory configuration steps that plague traditional PM tools."
        rationale: "Early beta feedback showed drop-off correlated with setup length. Reducing time-to-first-task became a core metric."
      - title: "Task clarity over feature breadth"
        description: "I prioritised assign, prioritise, track, and complete over integrations, automations, and admin tooling for v1."
        rationale: "Founders and small teams told me they wanted a tool that works immediately, not one they need to hire someone to configure."
      - title: "Design system baked into code"
        description: "Visual patterns, spacing, and components were defined once and implemented directly in the frontend, with no separate design-dev translation layer."
        rationale: "As a solo builder, consistency had to be automatic. A shared component approach kept the UI cohesive as the product grew."
      - title: "Beta-first launch"
        description: "Shipped early access with a focused landing page and waitlist rather than waiting for a feature-complete v1."
        rationale: "Real usage data and sign-up momentum matter more than a perfect feature matrix. Beta let me validate positioning before backend scale-up."
    media:
      image: /img/portfolio/targe-kanban-board.png
      alt: "Targe Kanban board view with To-Do, In Progress, In Review, and Done columns"
      caption: "Board view: task clarity in practice. Status columns, priorities, and collaboration on a single project without extra setup."

  - id: build
    label: "Design Engineering"
    title: "From Figma flows to production UI"
    content: |
      <p>Targe is where my product design and frontend skills converge. I designed the interaction model and visual language in Figma, then implemented the desktop experience in React with TailwindCSS, maintaining fidelity while making pragmatic cuts when a pattern was too expensive to build solo.</p>
      <p>Key surfaces include the marketing site, early-access funnel, workspace setup, cross-project task management, sprint progress views, and collaboration touchpoints. Each was designed as a reusable component, not a one-off screen.</p>
    highlights:
      - "Responsive marketing site with clear conversion path to early access"
      - "Component-based frontend architecture for scalable UI iteration"
      - "Landing page copy and structure tested against user type segments"
      - "Performance-conscious layouts with fast load and minimal visual noise"

  - id: outcomes
    label: "Outcomes"
    title: "Live product, early traction, clear next steps"
    content: |
      <p>Targe is live at <a href="https://targe.app/" target="_blank" rel="noopener noreferrer">targe.app</a> and accepting early access applications. The product has moved from concept to a functioning beta with real users managing real work.</p>
      <p>Early signals validate the core thesis: teams want a calmer, faster alternative to bloated project tools. Onboarding stays under two hours on average, and beta users have already managed 10,000+ tasks on the platform.</p>
      <p><strong>What's next:</strong> completing remaining frontend flows, backend integration, and a closed beta before MVP 1 launch. The design foundation and frontend architecture are in place. The focus now is hardening flows and preparing for scale.</p>

gallery:
  - image: /img/portfolio/targe-dashboard-overview.png
    alt: "Targe dashboard with tasks, projects, and productivity overview"
    caption: "Dashboard: status at a glance with tasks due, active projects, deadlines, and team activity in one calm view."

  - image: /img/portfolio/targe-projects-page.png
    alt: "Targe projects grid with progress, tags, and team avatars"
    caption: "Projects: filterable grid showing progress, priority, tags, and team ownership across every initiative."

  - image: /img/portfolio/targe-task-detail.png
    alt: "Targe task detail view with subtasks, attachments, and comments"
    caption: "Task detail: structured workflow with metadata, subtasks, file attachments, threaded comments, and activity history."

  - image: /img/portfolio/targe-sign-up.png
    alt: "Targe sign up screen with Google authentication"
    caption: "Onboarding: low-friction sign-up with Google auth and a focused path into the product."

  - image: /img/portfolio/targe-kanban-board.png
    alt: "Targe Kanban board view with To-Do, In Progress, In Review, and Done columns"
    caption: "Board view: Kanban workflow with status columns, task cards, priorities, and team collaboration on a single project."

---
