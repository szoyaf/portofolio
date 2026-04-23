import { useState } from "react";
import { Link, useFetcher } from "react-router";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useScrambleReveal } from "./animations/useScrambleReveal";
import { toast } from "sonner";

export function Menu() {
  const fetcher = useFetcher();
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const displayTitle = useScrambleReveal("Zoya's Planet", {
    stepDuration: 60,
    startDelay: 100,
  });
  const displaySubtitle = useScrambleReveal("Shaney Zoya Fiandi", {
    stepDuration: 45,
    startDelay: 260,
  });

  const handleSubmitMessage = () => {
    fetcher.submit(
      {
        name: messageName,
        email: messageEmail,
        message: messageContent,
      },
      { method: "POST" },
    );

    if (fetcher.state === "idle" && fetcher.data?.success) {
      setMessageName("");
      setMessageEmail("");
      setMessageContent("");
      setIsMessageOpen(false);

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 md:gap-3 lg:gap-5 xl:gap-7 w-full md:w-[35%] lg:w-[25%]">
      <div className="flex flex-col gap-3 lg:gap-2.5 justify-center items-center">
        <h1
          data-text="Zoya's Planet"
          className="text-shadow-layer text-center text-h1 md:text-h3 lg:text-h2 xl:text-h1 text-kinda-yellow text-shadow-4 md:text-shadow-2 lg:text-shadow-3 xl:text-shadow-4 text-shadow-kinda-yellow text-stroke-8 md:text-stroke-4 lg:text-stroke-6 xl:text-stroke-8 text-stroke-lighter-yellow"
        >
          {displayTitle}
        </h1>
        <p className="text-h5 md:text-h6 lg:text-h5 text-twhite text-center text-stroke-2 text-stroke-blue">
          {displaySubtitle}
        </p>
      </div>

      <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <Card className="bg-blue w-full flex flex-col items-center justify-center rounded-pixel-lg px-5 py-6 gap-2.5 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-blue inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25">
          <div className="text-light-blue text-center text-h5 md:text-h6 lg:text-h5 underline-dots underline-dots-twhite">
            Contact Me!
          </div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-2.5 justify-center items-center">
            <Link
              to="https://github.com/szoyaf"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/github.svg"
                alt="github"
                className="contact-icon"
              />
            </Link>
            <Link
              to="https://linkedin.com/in/shaneyzoya"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/linkedin.svg"
                alt="linkedin"
                className="contact-icon"
              />
            </Link>
            <Link
              to="https://mail.google.com/mail/u/0/?fs=1&to=shaneyzoyaf@gmail.com&tf=cm"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/email.svg"
                alt="email"
                className="contact-icon"
              />
            </Link>
            <Link
              to="https://discordapp.com/users/789456123"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/discord.svg"
                alt="discord"
                className="contact-icon"
              />
            </Link>
            <Link
              to="https://twitter.com/shaneyfiandi"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/twitter.svg"
                alt="twitter"
                className="contact-icon"
              />
            </Link>
            <Link
              to="https://instagram.com/szoyaf"
              target="_blank"
              className="contact-icon-link"
            >
              <img
                src="/icons/insta.svg"
                alt="insta"
                className="contact-icon"
              />
            </Link>
          </div>
        </Card>
      </div>

      <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <Button className="w-full" asChild>
          <a
            href="/ShaneyZoyaFiandi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <img src="/icons/Download.svg" alt="download" />
          </a>
        </Button>
      </div>

      <div className="w-full shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50">
        <Card className="message-card bg-blue w-full flex flex-col rounded-pixel-lg px-5 py-6 gap-0 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-blue inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25">
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="message-toggle-button w-full justify-between px-4"
            onClick={() => setIsMessageOpen((current) => !current)}
            aria-expanded={isMessageOpen}
            aria-controls="message-form"
          >
            <span className="flex items-center gap-2.5">
              <img src="/icons/Chat.svg" alt="chat" />
              <span className="text-twhite text-left text-h5 md:text-h6 lg:text-h5 underline-dots underline-dots-light-blue">
                Send me a Message
              </span>
            </span>
            <img
              src="/icons/Down_Arrow.svg"
              alt="arrow down"
              className={`transition-transform duration-200 ${isMessageOpen ? "rotate-180" : "rotate-0"}`}
            />
          </Button>

          <div
            id="message-form"
            className={`grid overflow-hidden transition-all duration-300 ease-out ${isMessageOpen ? "mt-5 max-h-175 gap-2.5 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <Input
              type="text"
              placeholder="Your Name"
              label="Name"
              value={messageName}
              onChange={(e) => setMessageName(e.target.value)}
              className="bg-transparent border border-light-blue rounded-[10px] w-full text-left text-sm text-twhite focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2 focus:ring-offset-bgblue"
            />

            <Input
              type="email"
              placeholder="Your email"
              label="Email"
              value={messageEmail}
              onChange={(e) => setMessageEmail(e.target.value)}
              className="bg-transparent border border-light-blue rounded-[10px] w-full text-left text-sm text-twhite focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2 focus:ring-offset-bgblue"
            />

            <Textarea
              placeholder="Your message"
              label="Message"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              className="bg-transparent border border-light-blue rounded-[10px] w-full text-left text-sm text-twhite focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2 focus:ring-offset-bgblue"
            />

            <Button className="w-full" size="lg" onClick={handleSubmitMessage}>
              <div className="flex flex-row gap-2.5 justify-center items-end">
                Send Message <img src="/icons/Send.svg" alt="send" />
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
