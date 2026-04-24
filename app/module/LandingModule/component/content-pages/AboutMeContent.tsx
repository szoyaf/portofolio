import { useEffect, useRef, useState } from "react";
import { LazyImage } from "../../../../components/elements/LazyImage";
import { ImagePreviewDialog } from "../../../../components/elements/ImagePreviewDialog";
import { useScrambleReveal } from "../animations/useScrambleReveal";
import { useStaggerReveal } from "../animations/useStaggerReveal";
import { getPortfolioData } from "~/lib/api";

export function AboutMeContent() {
  const [data, setData] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeWorkTitleIndex, setActiveWorkTitleIndex] = useState(0);
  const workTitles = data?.ABOUT_TEXT?.workTitles ?? [];

  useEffect(() => {
    getPortfolioData().then(setData);
  }, []);

  useEffect(() => {
    if (!data || workTitles.length === 0) {
      return;
    }

    const roleRotateTimer = setInterval(() => {
      setActiveWorkTitleIndex(
        (currentIndex) => (currentIndex + 1) % workTitles.length,
      );
    }, 2600);

    return () => {
      clearInterval(roleRotateTimer);
    };
  }, [data, workTitles.length]);

  const displayWorkTitle = useScrambleReveal(
    workTitles[activeWorkTitleIndex] ?? "",
    {
      stepDuration: 35,
      startDelay: 120,
    },
  );

  useStaggerReveal(containerRef.current, {
    selector: "[data-about-anim]",
    duration: 0.5,
    y: 16,
    stagger: 0.08,
  });

  if (!data) return null;

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row gap-5.25 max-lg:items-center h-fit"
    >
      <div
        data-about-anim
        className="w-[50%] lg:w-[30%] rounded-pixel-sm h-full"
      >
        <ImagePreviewDialog
          src="/selfie.png"
          alt={data?.ABOUT_TEXT.profileImageAlt}
        >
          <LazyImage
            src="/selfie.png"
            alt={data?.ABOUT_TEXT.profileImageAlt}
            className="h-full w-full"
          />
        </ImagePreviewDialog>
      </div>
      <div className="lg:w-[70%] flex flex-col gap-2.5 justify-start pt-2.5">
        <div
          data-about-anim
          className="flex flex-row gap-2.5 justify-start items-start"
        >
          <div className="text-h5 text-stroke-4 text-stroke-bright-red">
            {data?.ABOUT_TEXT.name}
          </div>

          <div className="text-h5 text-tblack">| {displayWorkTitle}</div>
        </div>

        <div
          data-about-anim
          className="bg-dark-yellow rounded-pixel-sm flex flex-col gap-2 p-5 inner-shadow-pixel inner-shadow-pixel-both-5 inner-shadow-pos-tblack inner-shadow-pos-opacity-25"
        >
          <div className="space-y-px">
            <div className="text-twhite text-h6">{data?.ABOUT_TEXT.major}</div>
            <div className="text-dark-yellow text-h5 text-stroke-4 text-stroke-lighter-yellow">
              {data?.ABOUT_TEXT.university}
            </div>
          </div>

          <div className="space-y-1 font-geologica text-p2">
            <div className="flex flex-row gap-2.5 justify-start items-start">
              <img
                src="/icons/date.svg"
                alt={data?.ABOUT_TEXT.calendarAlt}
                className="size-3.5"
              />
              <div className="text-twhite font-bold">
                {data?.ABOUT_TEXT.period}
              </div>
            </div>

            <div className="text-twhite font-semibold">
              {data?.ABOUT_TEXT.bio}
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="/icons/gpa.svg"
              alt={data?.ABOUT_TEXT.gpaAlt}
              className="size-3.5"
            />
            <div className="text-twhite text-h7">{data?.ABOUT_TEXT.gpa}</div>
          </div>
        </div>

        <div data-about-anim className="text-twhite text-h6">
          <span className="text-tblack">
            {data?.ABOUT_TEXT.languageLabel}
            <br />
          </span>
          • {data?.ABOUT_TEXT.languageLines[0]}
          <br />• {data?.ABOUT_TEXT.languageLines[1]}
        </div>

        <div data-about-anim className="items-end text-tblack text-h6">
          {data?.ABOUT_TEXT.notePrefix}
          <span className="text-bright-red text-h4">
            {data?.ABOUT_TEXT.noteHighlight}
          </span>
          {data?.ABOUT_TEXT.noteSuffix}
        </div>
      </div>
    </div>
  );
}
