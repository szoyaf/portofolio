import { Menu } from "./component/Menu";
import { Content } from "./component/Content";
import { Background } from "./component/Background";

export function LandingModule() {
  return (
    <main className="relative flex min-h-screen h-fit w-full items-start justify-start overflow-hidden text-white bg-bgblue font-minecraft">
      <div className="z-10 flex flex-row gap-7 w-full h-full pt-12 md:pt-10 lg:pt-14 xl:pt-20 pb-5 md:pb-7 lg:pb-10 xl:pb-14 px-6 md:px-5 lg:px-10">
        <Menu />
        <Content />
      </div>
      <Background />
    </main>
  );
}
