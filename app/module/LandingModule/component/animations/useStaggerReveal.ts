import { useEffect } from "react";
import gsap from "gsap";

type UseStaggerRevealOptions = {
  selector: string;
  duration?: number;
  y?: number;
  stagger?: number;
};

export function useStaggerReveal(
  root: HTMLElement | null,
  {
    selector,
    duration = 0.5,
    y = 16,
    stagger = 0.08,
  }: UseStaggerRevealOptions,
) {
  useEffect(() => {
    if (!root) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(selector);

      gsap.set(sections, {
        autoAlpha: 0,
        y,
      });

      gsap.to(sections, {
        autoAlpha: 1,
        y: 0,
        duration,
        ease: "power2.out",
        stagger,
        clearProps: "opacity,visibility,transform",
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [duration, root, selector, stagger, y]);
}