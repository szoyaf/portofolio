import { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  companyUrl?: string;
};

const experienceList: ExperienceItem[] = [
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

export function ExperiencesContent() {
  const REFRESH_DELAY_MS = 260;
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = scrollerRef.current;
    const cards = itemRefs.current.filter(Boolean);

    if (!scroller || cards.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        autoAlpha: 0,
        y: 24,
        filter: "blur(4px)",
      });

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          scroller,
          start: "top 90%",
          end: "bottom 10%",
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.to(card, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.55,
              ease: "power3.out",
              delay: index * 0.03,
              overwrite: "auto",
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.set(card, {
              autoAlpha: 0,
              y: 24,
              filter: "blur(4px)",
            });
          },
        });
      });
    }, scroller);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, REFRESH_DELAY_MS);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  const registerItemRef = (element: HTMLDivElement | null, index: number) => {
    if (!element) {
      return;
    }
    itemRefs.current[index] = element;
  };

  return (
    <div
      ref={scrollerRef}
      className="max-h-100 w-full overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:#236489_transparent]"
    >
      <div className="flex flex-col gap-5 w-full">
        {experienceList.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.role}-${index}`}
            ref={(element) => registerItemRef(element, index)}
            className="bg-yellow rounded-pixel-sm flex flex-col gap-2 p-5 inner-shadow-pixel inner-shadow-pixel-both-5 inner-shadow-pos-tblack inner-shadow-pos-opacity-25"
          >
            <div className="space-y-1">
              <div className="flex flex-row gap-2 justify-start items-end">
                <div className="text-twhite text-h6 -mb-0.5">
                  {experience.company}
                </div>
                {experience.companyUrl && (
                  <Link
                    to={experience.companyUrl}
                    target="_blank"
                    className="contact-icon-link"
                  >
                    <img
                      src="/icons/linkedin.svg"
                      alt="linkedin"
                      className="contact-icon size-5"
                    />
                  </Link>
                )}
              </div>
              <div className="text-lightest-yellow text-h6 text-stroke-4 text-stroke-dark-yellow">
                {experience.role}
              </div>
            </div>

            <div className="space-y-1 font-geologica text-p2">
              <div className="flex flex-row gap-2 justify-start items-start">
                <img
                  src="/icons/date-red.svg"
                  alt="Calendar"
                  className="size-3.5"
                />
                <div className="text-light-red font-bold">
                  {experience.period}
                </div>
              </div>

              <div className="text-red font-semibold">
                {experience.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
