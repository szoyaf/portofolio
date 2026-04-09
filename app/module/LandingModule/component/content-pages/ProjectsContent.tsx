import { Button } from "~/components/ui/button";

function ProjectCard() {
  return (
    <div className="w-full rounded-pixel-sm min-h-10 bg-yellow">
      <img
        src="/placeholder.png"
        alt="Project Placeholder"
        className="w-full h-fit"
      />
      <div className="bg-blue flex flex-col gap-1 p-3 inner-shadow-pixel inner-shadow-pixel-pos-5 inner-shadow-pos-dark-blue inner-shadow-pos-opacity-100">
        <div className="text-h6 text-twhite text-stroke-4 text-stroke-dark-blue">
          Title
        </div>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="font-geologica font-semibold text-p2 text-light-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              fringilla libero a turpis viverra vehicula. Sed ac pellentesque
              ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan
              convallis.
            </div>
            <div className="flex flex-wrap gap-1.25">
              <div className="bg-light-blue py-0.5 px-2 text-twhite rounded-full font-geologica font-semibold text-p2">
                Typescript
              </div>
              <div className="bg-light-blue py-0.5 px-2 text-twhite rounded-full font-geologica font-semibold text-p2">
                Typescript
              </div>
              <div className="bg-light-blue py-0.5 px-2 text-twhite rounded-full font-geologica font-semibold text-p2">
                Typescript
              </div>
            </div>
          </div>
          <div className="justify-end flex flex-row gap-1 shape-shadow-host box-shadow-pixel-5 box-shadow-dark-blue box-shadow-opacity-50">
            <Button variant="light" size="sm" className="p-2!">
              <img src="/icons/github.svg" alt="Link" className="size-4.5" />
            </Button>
            <Button
              variant="light"
              size="sm"
              className="text-twhite text-h7! py-2! px-4!"
            >
              <div className="flex flex-row gap-2.5 items-center justify-center">
                <span className="-mb-1">Live Demo</span>
                <img src="/icons/link.svg" alt="Link" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsContent() {
  return (
    <div className="grid grid-cols-2 gap-5 w-full shape-shadow-host box-shadow-pixel-5 box-shadow-dark-yellow box-shadow-opacity-100">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
