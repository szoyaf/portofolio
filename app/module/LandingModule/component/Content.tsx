import { NavButton } from "./NavButton";

export function Content() {
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
        <NavButton label="About Me" variant="active" />
        <NavButton label="Experiences" />
        <NavButton label="Projects" />
        <NavButton
          label={
            <img src="/icons/dots.svg" alt="Menu" className="max-lg:size-3" />
          }
          size="small"
        />
      </div>

      <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50 -mt-0.5">
        <div className="bg-yellow w-full min-h-40 h-fit rounded-pixel-lg-no-tr px-5 py-6 gap-0 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-yellow inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25">
          <div className="flex flex-row gap-5.25">
            <div className="w-[30%] rounded-pixel-sm">
              <img
                src="/selfie.png"
                alt="Self Pic"
                className="min-w-full min-h-full"
              />
            </div>
            <div className="w-[70%] flex flex-col gap-2.5 justify-start pt-2.5">
              <div className="flex flex-row gap-2.5 justify-start items-start">
                <div className="text-h5 text-stroke-4 text-stroke-bright-red">
                  Shaney Zoya Fiandi
                </div>

                <div className="text-h5 text-tblack">| Software Engineer</div>
              </div>

              <div className="bg-dark-yellow rounded-pixel-sm flex flex-col gap-2 p-5 inner-shadow-pixel inner-shadow-pixel-both-5 inner-shadow-pos-tblack inner-shadow-pos-opacity-25">
                <div className="space-y-px">
                  <div className="text-twhite text-h6">
                    Major in Information System
                  </div>
                  <div className="text-dark-yellow text-h5 text-stroke-4 text-stroke-lighter-yellow">
                    Universitas Indonesia
                  </div>
                </div>

                <div className="space-y-1 font-geologica text-p2">
                  <div className="flex flex-row gap-2.5 justify-start items-start">
                    <img
                      src="/icons/date.svg"
                      alt="Calendar"
                      className="size-3.5"
                    />
                    <div className="text-twhite font-bold">
                      2023 - Present (6th Semester)
                    </div>
                  </div>

                  <div className="text-twhite font-semibold">
                    Information Systems undergraduate student with an interest
                    in Software Engineering, focusing on the design and
                    development of technology-driven solutions that align
                    systems, data, and organizational needs.
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <img src="/icons/gpa.svg" alt="GPA" className="size-3.5" />
                  <div className="text-twhite text-h7">GPA: 3.85/4.0</div>
                </div>
              </div>

              <div className="text-twhite text-h6">
                <span className="text-tblack">
                  Language:
                  <br />
                </span>
                • Indonesian – Native
                <br />• English – Fluent
              </div>

              <div className="flex flex-row gap-1 items-end text-tblack text-h6">
                <div>p.s. click the</div>
                <img src="/icons/dots-red.svg" alt="Night" className="" />
                <div>
                  on the top right corner to get a better view of my planet !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
