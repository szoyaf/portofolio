import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type NavButtonVariant = "active" | "default" | "red";

type NavButtonSize = "default" | "small" | "retracted";

type NavButtonProps = {
  label: ReactNode;
  variant?: NavButtonVariant;
  size?: NavButtonSize;
  className?: string;
  onClick?: () => void;
};

const baseClasses =
  "inline-flex w-fit min-w-max shrink-0 items-center justify-center whitespace-nowrap gap-2.5 text-tblack text-h7 lg:text-h5 inner-shadow-pixel inner-shadow-pixel-both-5 inner-shadow-neg-tblack inner-shadow-neg-opacity-25 hover:inner-shadow-pos-opacity-80 aria-expanded:bg-light-yellow transition-all duration-200 ease-out hover:scale-105 active:scale-95";

const sizeClasses: Record<NavButtonSize, string> = {
  default: "rounded-pixel-sm-t pb-1.25 pt-2.5 px-3 lg:px-9",
  small: "rounded-pixel-sm-t pb-1.75 pt-2.75 px-2.5",
  retracted: "rounded-pixel-sm pb-1.75 pt-2.75 px-2.5",
};

const variantClasses: Record<NavButtonVariant, string> = {
  active:
    "bg-light-yellow inner-shadow-pos-lighter-yellow inner-shadow-pos-opacity-100",
  default:
    "bg-dark-yellow inner-shadow-pos-yellow inner-shadow-pos-opacity-100 hover:bg-yellow hover:inner-shadow-pos-lighter-yellow",
  red: "bg-red inner-shadow-pos-light-red inner-shadow-pos-opacity-100 hover:bg-dark-red hover:inner-shadow-pos-opacity-80",
};

export function NavButton({
  label,
  variant = "default",
  size = "default",
  className,
  onClick,
}: NavButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={variant === "active"}
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {label}
    </button>
  );
}
