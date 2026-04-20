export const ABOUT_TEXT = {
  workTitles: [
    "Software Engineer",
    "Full Stack Developer",
    "Information System Student",
    "Mobile Developer",
  ],
  profileImageAlt: "Self Pic",
  name: "Shaney Zoya Fiandi",
  major: "Major in Information System",
  university: "Universitas Indonesia",
  period: "2023 - Present (6th Semester)",
  bio: "Information Systems undergraduate student with an interest in Software Engineering, focusing on the design and development of technology-driven solutions that align systems, data, and organizational needs.",
  calendarAlt: "Calendar",
  gpaAlt: "GPA",
  gpa: "GPA: 3.85/4.0",
  languageLabel: "Language:",
  languageLines: ["Indonesian - Native", "English - Fluent"],
  notePrefix: "p.s. click the",
  noteHighlight: " ... ",
  noteSuffix: "on the top right corner to get a better view of my planet !",
} as const;

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  companyUrl?: string;
};

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: "RISTEK Fakultas Ilmu Komputer",
    role: "Lead of Web Development",
    period: "2023 - Present (6th Semester)",
    description:
      "Building and leading web squads that deliver internal and public-facing products with strong engineering quality and maintainable architecture.",
    companyUrl:
      "https://www.linkedin.com/company/ristek-fakultas-ilmu-komputer-universitas-indonesia/posts/?feedView=all",
  },
  {
    company: "Software Engineering Organization",
    role: "Frontend Engineer",
    period: "2022 - 2023",
    description:
      "Developed responsive interfaces, improved performance budgets, and collaborated closely with design teams to ship polished user experiences.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
  {
    company: "Campus Tech Initiatives",
    role: "Product Developer",
    period: "2021 - 2022",
    description:
      "Worked on data-driven product features and tooling to help student communities run programs more efficiently.",
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const PROJECT_LIST: ProjectItem[] = [
  {
    title: "Zoya Portfolio",
    description:
      "Pixel-themed interactive portfolio with custom motion and stylized component system.",
    images: [
      "/placeholder.png",
      "/placeholder.png?slide=2",
      "/placeholder.png?slide=3",
    ],
    tags: ["TypeScript", "React", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Orchestrator",
    description:
      "Workflow dashboard for planning, assignment, and execution tracking across teams.",
    images: ["/placeholder.png", "/placeholder.png?slide=2"],
    tags: ["TypeScript", "Node", "PostgreSQL"],
    githubUrl: "https://github.com",
  },
  {
    title: "Campus Hub",
    description:
      "Community platform with event aggregation, organization profiles, and live announcements.",
    images: ["/placeholder.png"],
    tags: ["React", "Vite", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Analytics Snapshot",
    description:
      "Compact reporting interface for KPI trends and performance benchmarking in one view.",
    images: ["/placeholder.png"],
    tags: ["Charting", "TypeScript", "UI/UX"],
    githubUrl: "https://github.com",
  },
  {
    title: "Campus Hub",
    description:
      "Community platform with event aggregation, organization profiles, and live announcements.",
    images: ["/placeholder.png"],
    tags: ["React", "Vite", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Analytics Snapshot",
    description:
      "Compact reporting interface for KPI trends and performance benchmarking in one view.",
    images: ["/placeholder.png"],
    tags: ["Charting", "TypeScript", "UI/UX"],
    githubUrl: "https://github.com",
  },
  {
    title: "Campus Hub",
    description:
      "Community platform with event aggregation, organization profiles, and live announcements.",
    images: ["/placeholder.png"],
    tags: ["React", "Vite", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Analytics Snapshot",
    description:
      "Compact reporting interface for KPI trends and performance benchmarking in one view.",
    images: ["/placeholder.png"],
    tags: ["Charting", "TypeScript", "UI/UX"],
    githubUrl: "https://github.com",
  },
  {
    title: "Campus Hub",
    description:
      "Community platform with event aggregation, organization profiles, and live announcements.",
    images: ["/placeholder.png"],
    tags: ["React", "Vite", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Analytics Snapshot",
    description:
      "Compact reporting interface for KPI trends and performance benchmarking in one view.",
    images: ["/placeholder.png"],
    tags: ["Charting", "TypeScript", "UI/UX"],
    githubUrl: "https://github.com",
  },
];

export const PROJECTS_TEXT = {
  fallbackImage: "/placeholder.png",
  previousImageAriaLabel: "Previous project image",
  nextImageAriaLabel: "Next project image",
  goToImageAriaLabelPrefix: "Go to image",
  previewAltSuffix: "preview",
  githubAlt: "GitHub",
  liveDemoLabel: "Live Demo",
  openLinkAlt: "Open link",
  linkedinAlt: "linkedin",
  dateAlt: "Calendar",
} as const;