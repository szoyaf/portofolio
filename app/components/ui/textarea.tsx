import * as React from "react"

import { cn } from "~/lib/utils"

type TextareaProps = React.ComponentProps<"textarea"> & {
  label?: React.ReactNode;
}

function Textarea({ className, label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="text-twhite text-p1">{label}</p>
      <textarea
        data-slot="textarea"
        className={cn(
          "flex field-sizing-content min-h-16 w-full font-geologica rounded-lg border border-light-blue bg-transparent px-5 md:px-2.5 lg:px-5 py-3 md:py-1 lg:py-3 text-base transition-colors outline-none placeholder:text-light-blue focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Textarea }
