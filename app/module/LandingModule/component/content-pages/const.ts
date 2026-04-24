export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  companyUrl?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type PortfolioData = {
  ABOUT_TEXT: any;
  EXPERIENCE_LIST: ExperienceItem[];
  PROJECT_LIST: ProjectItem[];
  PROJECTS_TEXT: any;
};