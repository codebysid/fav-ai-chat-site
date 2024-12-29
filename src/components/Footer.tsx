import { socialHandles } from "../utils/constants";
import Logo from "./Logo";
import Link from "./ui/Link";

const Footer = () => {
  return (
    <div className=" pt-32 w-full">
      <div className="flex flex-row justify-around items-start w-full border-t border-primary/30 py-10 shadow-[0px_0px_100px_1px_rgba(127,0,255,0.3)]">
        <div className=" space-y-4">
          <Logo />
          <p>Built by Siddhant Jain</p>
        </div>
        <div className=" space-y-4">
          <p className=" text-foreground/50 font-medium text-xl">Contact</p>
          <div className=" flex flex-col gap-1 pl-4">
            {socialHandles.map((handle) => {
              return (
                <Link key={handle.id} href={handle.link} target="_blank">
                  {handle.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
