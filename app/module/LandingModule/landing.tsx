import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function LandingModule() {
  return (
    <main className="flex min-h-screen h-fit w-full items-start justify-center pt-12 md:pt-10 lg:pt-14 xl:pt-20 pb-5 md:pb-7 lg:pb-10 xl:pb-14 px-6 md:px-5 lg:px-10 text-white bg-bgblue font-minecraft">
      <div className="flex flex-row gap-7 w-full h-full">
        <div className="flex flex-col gap-6 md:gap-3 lg:gap-5 xl:gap-7 w-full md:w-[35%] lg:w-[25%]">
          <div className="flex flex-col gap-3 lg:gap-2.5 justify-center items-center">
            <h1
              data-text="Zoya's Planet"
              className="text-shadow-layer text-center text-h1 md:text-h3 lg:text-h2 xl:text-h1 text-kinda-yellow text-shadow-4 md:text-shadow-2 lg:text-shadow-3 xl:text-shadow-4 text-shadow-kinda-yellow text-stroke-8 md:text-stroke-4 lg:text-stroke-6 xl:text-stroke-8 text-stroke-lighter-yellow"
            >
              Zoya's Planet
            </h1>
            <p className="text-h5 md:text-h6 lg:text-h5 text-twhite text-center text-stroke-2 text-stroke-blue">
              Shaney Zoya Fiandi
            </p>
          </div>

          <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
            <Card className="bg-blue w-full flex flex-col items-center justify-center rounded-pixel-lg px-5 py-6 gap-2.5 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-blue inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25">
              <div className="text-light-blue text-center text-h5 md:text-h6 lg:text-h5 underline-dots underline-dots-twhite">
                Contact Me!
              </div>
              <div className="grid grid-cols-3 gap-x-3 gap-y-2.5 justify-center items-center">
                <Link to="https://github.com/szoyaf" target="_blank">
                  <img src="/icons/github.svg" alt="github" />
                </Link>
                <Link to="https://linkedin.com/in/shaneyzoya" target="_blank">
                  <img src="/icons/linkedin.svg" alt="linkedin" />
                </Link>
                <Link
                  to="https://mail.google.com/mail/u/0/?fs=1&to=shaneyzoyaf@gmail.com&tf=cm"
                  target="_blank"
                >
                  <img src="/icons/email.svg" alt="email" />
                </Link>
                <Link
                  to="https://discordapp.com/users/789456123"
                  target="_blank"
                >
                  <img src="/icons/discord.svg" alt="discord" />
                </Link>
                <Link to="https://twitter.com/shaneyfiandi" target="_blank">
                  <img src="/icons/twitter.svg" alt="twitter" />
                </Link>
                <Link to="https://instagram.com/szoyaf" target="_blank">
                  <img src="/icons/insta.svg" alt="insta" />
                </Link>
              </div>
            </Card>
          </div>

          <Button className="w-full">
            Download CV
          </Button>

          <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
            <Card className="bg-blue w-full flex flex-col items-center justify-center rounded-pixel-lg px-5 py-6 gap-2.5 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-blue inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25">
              <div className="text-twhite text-center text-h5 md:text-h6 lg:text-h5 underline-dots underline-dots-light-blue">
                Send me a Message
              </div>

              <Input
                type="text"
                placeholder="Your Name"
                label="Name"
                className="bg-transparent border border-light-blue rounded-[10px] w-full text-left text-sm text-twhite focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2 focus:ring-offset-bgblue"
              />

              <Input
                type="email"
                placeholder="Your email"
                label="Email"
                className="bg-transparent border border-light-blue rounded-[10px] w-full text-left text-sm text-twhite focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2 focus:ring-offset-bgblue"
              />

              <Textarea
                placeholder="Your message"
                label="Message"
                className="bg-transparent border border-light-blue rounded-[10px] w-full text-left text-sm text-twhite focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2 focus:ring-offset-bgblue"
              />

              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-7 w-[75%] max-md:hidden"></div>
      </div>
    </main>
  );
}
