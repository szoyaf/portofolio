import { cn } from "~/lib/utils";

type NavButtonVariant = "active" | "default" | "red";

type NavButtonProps = {
  label: string;
  variant?: NavButtonVariant;
  className?: string;
};

const baseClasses =
  "w-fit rounded-pixel-lg-t pb-1.25 pt-2.5 px-9 gap-2.5 text-tblack inner-shadow-pixel inner-shadow-pixel-both-5 inner-shadow-neg-tblack inner-shadow-neg-opacity-25 hover:bg-kinda-yellow hover:inner-shadow-pos-opacity-80 aria-expanded:bg-yellow aria-expanded:text-twhite";

const variantClasses: Record<NavButtonVariant, string> = {
  active:
    "bg-light-yellow inner-shadow-pos-lighter-yellow inner-shadow-pos-opacity-100",
  default:
    "bg-dark-yellow inner-shadow-pos-yellow inner-shadow-pos-opacity-100",
  red: "bg-red inner-shadow-pos-light-red inner-shadow-pos-opacity-100",
};

export function NavButton({
  label,
  variant = "default",
  className,
}: NavButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={variant === "active"}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {label}
    </button>
  );
}
