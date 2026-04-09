import { Link } from "react-router";

export function ExperiencesContent() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="bg-yellow rounded-pixel-sm flex flex-col gap-2 p-5 inner-shadow-pixel inner-shadow-pixel-both-5 inner-shadow-pos-tblack inner-shadow-pos-opacity-25">
        <div className="space-y-1">
          <div className="flex flex-row gap-2 justify-start items-end">
            <div className="text-twhite text-h6 -mb-0.5">
              RISTEK Fakultas Ilmu Komputer
            </div>
            <Link
              to="https://www.linkedin.com/company/ristek-fakultas-ilmu-komputer-universitas-indonesia/posts/?feedView=all"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/linkedin.svg"
                alt="linkedin"
                className="contact-icon size-5"
              />
            </Link>
          </div>
          <div className="text-lightest-yellow text-h6 text-stroke-4 text-stroke-dark-yellow">
            Lead of Web Development
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
              2023 - Present (6th Semester)
            </div>
          </div>

          <div className="text-red font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fringilla libero a turpis viverra vehicula. Sed ac pellentesque
            ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan
            convallis.
          </div>
        </div>
      </div>

      <div className="bg-yellow rounded-pixel-sm flex flex-col gap-2 p-5 inner-shadow-pixel inner-shadow-pixel-both-5 inner-shadow-pos-tblack inner-shadow-pos-opacity-25">
        <div className="space-y-1">
          <div className="flex flex-row gap-2 justify-start items-end">
            <div className="text-twhite text-h6 -mb-0.5">
              RISTEK Fakultas Ilmu Komputer
            </div>
            <Link
              to="https://www.linkedin.com/company/ristek-fakultas-ilmu-komputer-universitas-indonesia/posts/?feedView=all"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/linkedin.svg"
                alt="linkedin"
                className="contact-icon size-5"
              />
            </Link>
          </div>
          <div className="text-lightest-yellow text-h6 text-stroke-4 text-stroke-dark-yellow">
            Lead of Web Development
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
              2023 - Present (6th Semester)
            </div>
          </div>

          <div className="text-red font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fringilla libero a turpis viverra vehicula. Sed ac pellentesque
            ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan
            convallis.
          </div>
        </div>
      </div>
    </div>
  );
}
