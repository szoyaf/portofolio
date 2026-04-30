import { useEffect, useRef, useState } from "react";
import { NavButton } from "../../../components/elements/NavButton";
import { AboutMeContent } from "./content-pages/AboutMeContent";
import { ExperiencesContent } from "./content-pages/ExperiencesContent";
import { ProjectsContent } from "./content-pages/ProjectsContent";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

type SectionId = "about" | "experiences" | "projects";

export function Content({ className }: { className?: string }) {
  const NAV_EXIT_MS = 260;
  const SECTION_SWAP_MS = 120;
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [displayedSection, setDisplayedSection] = useState<SectionId>("about");
  const [isSectionVisible, setIsSectionVisible] = useState(true);
  const [isRetracted, setIsRetracted] = useState(false);
  const [isIconCompact, setIsIconCompact] = useState(false);
  const [isIconFadingIn, setIsIconFadingIn] = useState(false);
  const [hideSectionButtons, setHideSectionButtons] = useState(false);
  const [isSmOrLarger, setIsSmOrLarger] = useState(false);
  const retractTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iconFadeRafRef = useRef<number | null>(null);
  const sectionSwapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const sectionButtons = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
  ] as const;

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsSmOrLarger(window.innerWidth >= 640);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (retractTimerRef.current) {
        clearTimeout(retractTimerRef.current);
      }
      if (iconFadeRafRef.current !== null) {
        cancelAnimationFrame(iconFadeRafRef.current);
      }
      if (sectionSwapTimerRef.current) {
        clearTimeout(sectionSwapTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeSection === displayedSection) {
      return;
    }

    if (sectionSwapTimerRef.current) {
      clearTimeout(sectionSwapTimerRef.current);
      sectionSwapTimerRef.current = null;
    }

    setIsSectionVisible(false);
    sectionSwapTimerRef.current = setTimeout(() => {
      setDisplayedSection(activeSection);
      setIsSectionVisible(true);
      sectionSwapTimerRef.current = null;
    }, SECTION_SWAP_MS);
  }, [activeSection, displayedSection]);

  const morphIconButtons = (compact: boolean) => {
    if (iconFadeRafRef.current !== null) {
      cancelAnimationFrame(iconFadeRafRef.current);
      iconFadeRafRef.current = null;
    }

    setIsIconCompact(compact);
    setIsIconFadingIn(true);
    iconFadeRafRef.current = requestAnimationFrame(() => {
      setIsIconFadingIn(false);
      iconFadeRafRef.current = null;
    });
  };

  const handleRetractToggle = () => {
    if (retractTimerRef.current) {
      clearTimeout(retractTimerRef.current);
      retractTimerRef.current = null;
    }

    if (!isRetracted) {
      setHideSectionButtons(true);
      retractTimerRef.current = setTimeout(() => {
        setIsRetracted(true);
        morphIconButtons(true);
        retractTimerRef.current = null;
      }, NAV_EXIT_MS);
      return;
    }

    setIsRetracted(false);
    morphIconButtons(false);
    retractTimerRef.current = setTimeout(() => {
      setHideSectionButtons(false);
      retractTimerRef.current = null;
    }, NAV_EXIT_MS);
  };

  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn("flex flex-col w-full md:w-[65%] lg:w-[75%] ", className)}
    >
      <div className="flex overflow-visible flex-row max-sm:justify-between max-sm:px-6 max-sm:w-full sm:gap-4 justify-end items-center w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <NavButton
          label={
            <img src="/icons/Moon.svg" alt="Night" className="max-lg:size-3" />
          }
          variant="red"
          size={isIconCompact ? "retracted" : "small"}
          className={`origin-top-right transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isIconFadingIn ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
        <div
          className={`flex flex-row gap-4 max-sm:hidden origin-top-right transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            hideSectionButtons
              ? isRetracted
                ? "hidden"
                : "max-w-0 overflow-hidden opacity-0 translate-x-8 pointer-events-none"
              : "max-w-225 overflow-visible opacity-100 translate-x-0"
          }`}
        >
          {sectionButtons.map((button) => (
            <NavButton
              key={button.id}
              label={button.label}
              variant={activeSection === button.id ? "active" : "default"}
              onClick={() => setActiveSection(button.id)}
            />
          ))}
        </div>
        <div
          className={`relative min-w-35 sm:hidden origin-top-right transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            hideSectionButtons
              ? isRetracted
                ? "hidden"
                : "max-w-0 overflow-hidden opacity-0 translate-x-8 pointer-events-none"
              : "max-w-60 overflow-visible opacity-100 translate-x-0"
          }`}
        >
          <Select
            value={activeSection}
            onValueChange={(value) => setActiveSection(value as SectionId)}
          >
            <SelectTrigger aria-label="Select section">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent>
              {sectionButtons.map((button) => (
                <SelectItem key={button.id} value={button.id}>
                  {button.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <NavButton
          label={
            <img src="/icons/dots.svg" alt="Menu" className="max-lg:size-3" />
          }
          size={isIconCompact ? "retracted" : "small"}
          className={`origin-top-right transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isIconFadingIn ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleRetractToggle}
        />
      </div>

      <div
        className={`w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50 origin-top sm:origin-top-right overflow-hidden will-change-[transform,opacity,max-height] transition-all ${
          isRetracted
            ? "duration-150 sm:duration-200"
            : "duration-150 sm:duration-200"
        } ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isRetracted
            ? "max-h-0 scale-85 opacity-0 -translate-y-3 pointer-events-none"
            : "max-h-350 scale-100 opacity-100 translate-y-0 -mt-0.5"
        }`}
      >
        <div
          className={cn(
            "bg-yellow w-full min-h-40 h-fit px-5 py-6 gap-0 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-yellow inner-shadow-pos-opacity-100 inner-shadow-neg-black inner-shadow-neg-opacity-25",
            isSmOrLarger ? "rounded-pixel-lg-no-tr" : "rounded-pixel-lg",
          )}
        >
          <div
            className={`transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] ${
              isSectionVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {displayedSection === "about" && <AboutMeContent />}
            {displayedSection === "experiences" && <ExperiencesContent />}
            {displayedSection === "projects" && <ProjectsContent />}
          </div>
        </div>
      </div>
    </div>
  );
}
