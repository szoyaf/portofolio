import { NavButton } from "./NavButton";

export function Content() {
  return (
    <div className="flex flex-col gap-7 w-[75%] max-md:hidden">
      <div className="flex flex-row gap-4 justify-end items-center w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <NavButton label={<img src="/icons/Moon.svg" alt="Night" />} variant="red" size="small" />
        <NavButton label="About Me" variant="active" />
        <NavButton label="Experiences" />
        <NavButton label="Projects" />
        <NavButton label={<img src="/icons/dots.svg" alt="Menu" />} size="small" />
      </div>
    </div>
  );
}
