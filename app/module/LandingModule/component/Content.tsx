import { useState } from "react";
import { NavButton } from "../../../components/elements/NavButton";
import { AboutMeContent } from "./content-pages/AboutMeContent";
import { ExperiencesContent } from "./content-pages/ExperiencesContent";
import { ProjectsContent } from "./content-pages/ProjectsContent";

export function Content() {
  const [activeSection, setActiveSection] = useState<
    "about" | "experiences" | "projects"
  >("about");

  const sectionButtons = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
  ] as const;

  return (
    <div className="flex flex-col w-[65%] lg:w-[75%] max-md:hidden">
      <div className="flex flex-row gap-4 justify-end items-center w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <NavButton
          label={
            <img src="/icons/Moon.svg" alt="Night" className="max-lg:size-3" />
          }
          variant="red"
          size="small"
        />
        {sectionButtons.map((button) => (
          <NavButton
            key={button.id}
            label={button.label}
            variant={activeSection === button.id ? "active" : "default"}
            onClick={() => setActiveSection(button.id)}
          />
        ))}
        <NavButton
          label={
            <img src="/icons/dots.svg" alt="Menu" className="max-lg:size-3" />
          }
          size="small"
        />
      </div>

      <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50 -mt-0.5">
        <div className="bg-yellow w-full min-h-40 h-fit rounded-pixel-lg-no-tr px-5 py-6 gap-0 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-yellow inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25">
          {activeSection === "about" && <AboutMeContent />}
          {activeSection === "experiences" && <ExperiencesContent />}
          {activeSection === "projects" && <ProjectsContent />}
        </div>
      </div>
    </div>
  );
}
