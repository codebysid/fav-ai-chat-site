import { ReactNode } from "react";

interface ILink {
  href: string;
  target?: "_blank" | "_parent" | "self" | "_top";
  className?: string;
  children?: ReactNode;
}

const Link = ({ href, target, className, children }: ILink) => {
  return (
    <a
      href={href}
      target={target}
      className={`hover:text-foreground/40 text-foreground/70 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
