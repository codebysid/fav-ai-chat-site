import { RefObject } from "react";
import { socialHandles } from "../utils/constants";
import FooterNavigationLink from "./FooterNavigationLink";
import Logo from "./Logo";

interface IFooter {
  videoRef?: RefObject<HTMLVideoElement>
}

const Footer = ({ videoRef }: IFooter) => {

  const handleOpenDemoVideo = () => {
    if (!videoRef) return
    videoRef.current?.requestFullscreen()
    videoRef.current?.play()
  }
  // border - t border - primary / 30 py - 10 shadow - [0px_0px_100px_1px_rgba(127, 0, 255, 0.3)]
  return (
    <div className="py-10 w-full flex justify-center items-center">
      <div className="py-10 flex flex-col lg:flex-row md:flex-row pl-10 lg:pl-0 md:pl-0 gap-10 lg:gap-0 md:gap-0 justify-around items-start w-[90%] bg-zinc-950 rounded-2xl border-2 border-zinc-900">
        <div className=" space-y-4">
          <Logo />
          <p className="lg:pl-4">Built by Siddhant Jain</p>
        </div>

        <div className=" space-y-4">
          <p className=" text-foreground/50 font-medium     text-lg lg:text-xl">What's FavAIChat ?</p>
          <div className="flex flex-col gap-1 lg:pl-4">
            <p className="cursor-pointer text-white/70 hover:text-zinc-500" onClick={handleOpenDemoVideo}>Watch Demo</p>
            <FooterNavigationLink title="Read Reviews on X" link="https://x.com/codebysid/status/1872276957708288100" />
          </div>
        </div>

        <div className=" space-y-4">
          <p className=" text-foreground/50 font-medium     text-lg lg:text-xl">
            Contact
          </p>
          <div className=" flex flex-col gap-1 lg:pl-4">
            {socialHandles.map((handle) => {
              return <FooterNavigationLink key={handle.id} title={handle.title} link={handle.link} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
