import { NavButton } from "./NavButton";

export function Content() {
  return (
    <div className="flex flex-col w-[75%] max-md:hidden">
      <div className="flex flex-row gap-4 justify-end items-center w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <NavButton label={<img src="/icons/Moon.svg" alt="Night" />} variant="red" size="small" />
        <NavButton label="About Me" variant="active" />
        <NavButton label="Experiences" />
        <NavButton label="Projects" />
        <NavButton label={<img src="/icons/dots.svg" alt="Menu" />} size="small" />
      </div>

      <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <div className="bg-yellow w-full h-64 rounded-pixel-lg-no-tr px-5 py-6 gap-0 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-yellow inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25">
          test
        </div>
      </div>
    </div>
  );
}
