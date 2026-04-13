import type { ReactNode } from "react";
import {
  DialogClose,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { cn } from "~/lib/utils";
import { XIcon } from "lucide-react";

type ImagePreviewDialogProps = {
  src: string;
  alt: string;
  children: ReactNode;
  triggerClassName?: string;
};

export function ImagePreviewDialog({
  src,
  alt,
  children,
  triggerClassName,
}: ImagePreviewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "block w-full cursor-zoom-in outline-none transition-transform duration-200 hover:scale-[1.01] focus-visible:scale-[1.01]",
            triggerClassName,
          )}
          aria-label={`Open image preview: ${alt}`}
        >
          {children}
        </button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="max-w-fit border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-[90vw]"
      >
        <DialogTitle className="sr-only">Image Preview</DialogTitle>
        <DialogDescription className="sr-only">{alt}</DialogDescription>
        <DialogClose asChild>
          <button
            type="button"
            className="absolute right-2 top-2 z-50 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/85 focus-visible:outline-none"
            aria-label="Close preview"
          >
            <XIcon className="size-4.5" />
          </button>
        </DialogClose>
        <img
          src={src}
          alt={alt}
          className="mx-auto max-h-[85vh] w-auto max-w-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
