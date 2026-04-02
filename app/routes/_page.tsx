import type { Route } from "./+types/home";
import { LandingModule } from "../module/LandingModule/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shaney Zoya Fiandi | Information Systems Student & Software Engineer Portfolio" },
    {
      name: "description",
      content:
        "Portfolio of Shaney Zoya Fiandi, Information Systems student at Universitas Indonesia. Showcasing web development projects, software engineering work, and technical experience in React, TypeScript, Java, and many more.",
    },
    {
      name: "keywords",
      content:
        "Shaney Zoya Fiandi, portfolio, web developer, information systems, Universitas Indonesia, React, TypeScript, Java, software engineering, system design, frontend developer, backend developer, full-stack developer, project showcase, technical experience",
    },
    { name: "author", content: "Shaney Zoya Fiandi" },
    { property: "og:title", content: "Shaney Zoya Fiandi | Software Engineer Portfolio" },
    {
      property: "og:description",
      content:
        "Explore projects and technical work by Shaney Zoya Fiandi in software engineering, web development, and system design.",
    },
    { property: "og:type", content: "website" },
  ];
}

export default function LandingPage() {
  return <LandingModule />;
}
