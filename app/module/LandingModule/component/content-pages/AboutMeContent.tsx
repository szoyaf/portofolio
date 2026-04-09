export function AboutMeContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-5.25 max-lg:items-center">
      <div className="w-[50%] lg:w-[30%] rounded-pixel-sm h-fit">
        <img src="/selfie.png" alt="Self Pic" className="w-full h-full" />
      </div>
      <div className="lg:w-[70%] flex flex-col gap-2.5 justify-start pt-2.5">
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
              <img src="/icons/date.svg" alt="Calendar" className="size-3.5" />
              <div className="text-twhite font-bold">
                2023 - Present (6th Semester)
              </div>
            </div>

            <div className="text-twhite font-semibold">
              Information Systems undergraduate student with an interest in
              Software Engineering, focusing on the design and development of
              technology-driven solutions that align systems, data, and
              organizational needs.
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

        <div className="items-end text-tblack text-h6">
          p.s. click the
          <span className="text-bright-red text-h4"> ... </span>
          on the top right corner to get a better view of my planet !
        </div>
      </div>
    </div>
  );
}
