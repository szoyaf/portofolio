import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex justify-center items-center shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "shape-shadow-host bg-yellow text-twhite rounded-pixel-lg inner-shadow-pixel inner-shadow-pos-light-yellow inner-shadow-pos-opacity-100 inner-shadow-neg-tblack inner-shadow-neg-opacity-25 hover:bg-kinda-yellow hover:inner-shadow-pos-opacity-80 aria-expanded:bg-yellow aria-expanded:text-twhite",
        // outline:
        //   "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:text-dark-blue aria-expanded:text-dark-blue",
        // destructive:
        //   "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "text-h5 md:text-h6 lg:text-h5 h-18 gap-1.5 px-5 inner-shadow-pixel-both-10 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 px-2 text-xs box-shadow-pixel-5 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel-both-5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 px-2.5 text-[0.8rem] box-shadow-pixel-5 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel-both-5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "text-p1 h-12 gap-1.5 px-2.5 shape-shadow-host box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel-both-5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 ",
        icon: "size-8 box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel-both-10",
        "icon-xs":
          "size-6 box-shadow-pixel-5 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel-both-5 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 box-shadow-pixel-5 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel-both-5",
        "icon-lg":
          "size-9 box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel-both-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
