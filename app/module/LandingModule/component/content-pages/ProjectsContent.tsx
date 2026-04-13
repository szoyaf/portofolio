import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { LazyImage } from "../../../../components/elements/LazyImage";
import { ImagePreviewDialog } from "../../../../components/elements/ImagePreviewDialog";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectItem = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projectList: ProjectItem[] = [
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

function ProjectImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const safeImages = useMemo(
    () => (images.length ? images : ["/placeholder.png"]),
    [images],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = safeImages.length > 1;

  const nextImage = () => {
    setActiveIndex((previousIndex) => (previousIndex + 1) % safeImages.length);
  };

  const previousImage = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === 0 ? safeImages.length - 1 : previousIndex - 1,
    );
  };

  const activeImage = safeImages[activeIndex];

  return (
    <div className="relative">
      <ImagePreviewDialog
        src={activeImage}
        alt={`${title} preview ${activeIndex + 1}`}
      >
        <LazyImage
          src={activeImage}
          alt={`${title} preview ${activeIndex + 1}`}
          wrapperClassName="w-full aspect-video"
          className="h-full w-full object-cover"
        />
      </ImagePreviewDialog>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous project image"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/55 p-1.5 text-white transition-colors hover:bg-black/75"
          >
            <ChevronLeft className="size-4" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next project image"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/55 p-1.5 text-white transition-colors hover:bg-black/75"
          >
            <ChevronRight className="size-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-2 py-1">
            {safeImages.map((_, index) => (
              <button
                key={`${title}-slide-${index}`}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`size-1.75 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/45"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="w-full rounded-pixel-sm min-h-10 bg-yellow">
      <ProjectImageCarousel images={project.images} title={project.title} />
      <div className="bg-blue flex flex-col gap-1 p-3 inner-shadow-pixel inner-shadow-pixel-pos-5 inner-shadow-pos-dark-blue inner-shadow-pos-opacity-100">
        <div className="text-h6 text-twhite text-stroke-4 text-stroke-dark-blue">
          {project.title}
        </div>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="font-geologica font-semibold text-p2 text-light-blue">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-1.25">
              {project.tags.map((tag) => (
                <div
                  key={`${project.title}-${tag}`}
                  className="bg-light-blue py-0.5 px-2 text-twhite rounded-full font-geologica font-semibold text-p2"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="justify-end flex flex-row gap-1 shape-shadow-host box-shadow-pixel-5 box-shadow-dark-blue box-shadow-opacity-50">
            {project.githubUrl && (
              <Button
                variant="light"
                size="sm"
                className="p-2!"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <img
                  src="/icons/github.svg"
                  alt="GitHub"
                  className="size-4.5"
                />
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="light"
                size="sm"
                className="text-twhite text-h7! py-2! px-4!"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <span className="-mb-1">Live Demo</span>
                  <img src="/icons/link.svg" alt="Open link" />
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsContent() {
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
        y: 18,
      });

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          scroller,
          start: "top 88%",
          once: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.to(card, {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              delay: index * 0.02,
              overwrite: "auto",
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
      <div className="grid lg:grid-cols-2 gap-5 w-full shape-shadow-host box-shadow-pixel-5 box-shadow-dark-yellow box-shadow-opacity-100">
        {projectList.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            ref={(element) => registerItemRef(element, index)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
