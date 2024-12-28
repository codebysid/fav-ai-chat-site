import { forwardRef, ReactNode, RefObject } from "react";

interface IButton {
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  type?: "submit" | "button" | "reset";
  ref?: RefObject<HTMLButtonElement>;
  variant?: "primary" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, IButton>(function Button(
  { className, disabled, onClick, type, children, icon, variant = "primary" },
  ref
) {
  const variantStyles = {
    primary:
      "relative bg-background border-foreground/10 text-foreground/70 after:absolute after:w-40 after:h-full after:-bottom-[35px] after:bg-primary/70 after:rounded-[50%] after:shadow-[inset_0px_0px_20px_20px_rgba(127,0,255,0.9)] after:shadow-[0px_0px_4px_2px_rgba(127,0,255,0.4)]",
    ghost: "",
    icon: "gap-2",
  };
  return (
    <div className="relative z-10 border-animation rounded-full">
      <button
        ref={ref}
        className={`flex flex-row justify-center items-center px-4 py-[6px] rounded-3xl transition-all duration-300 border border-transparent whitespace-nowrap overflow-hidden ${
          variantStyles[variant]
        } ${icon && variantStyles.icon} ${className}`}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
        {icon && icon}
      </button>
    </div>
  );
});

export default Button;
