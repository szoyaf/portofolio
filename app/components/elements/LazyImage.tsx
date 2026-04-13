import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

const loadedSrcCache = new Set<string>();

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  skeletonClassName?: string;
};

export function LazyImage({
  src,
  alt,
  className,
  wrapperClassName,
  skeletonClassName,
}: LazyImageProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(() => loadedSrcCache.has(src));
  const [isLoaded, setIsLoaded] = useState(() => loadedSrcCache.has(src));

  useEffect(() => {
    if (loadedSrcCache.has(src)) {
      setShouldLoad(true);
      setIsLoaded(true);
      return;
    }

    setShouldLoad(false);
    setIsLoaded(false);

    const target = wrapperRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoad(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: "200px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  useEffect(() => {
    let isCancelled = false;

    if (!shouldLoad || loadedSrcCache.has(src)) {
      return () => {
        isCancelled = true;
      };
    }

    const preloadImage = new Image();
    preloadImage.src = src;

    const markLoaded = () => {
      if (isCancelled) {
        return;
      }
      loadedSrcCache.add(src);
      setIsLoaded(true);
    };

    if (typeof preloadImage.decode === "function") {
      preloadImage.decode().then(markLoaded).catch(markLoaded);
    } else {
      preloadImage.onload = markLoaded;
      preloadImage.onerror = markLoaded;
    }

    return () => {
      isCancelled = true;
    };
  }, [shouldLoad, src]);

  const handleImageLoad = () => {
    loadedSrcCache.add(src);
    setIsLoaded(true);
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("relative", wrapperClassName)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-[#6bb7d8]/35 transition-opacity duration-200",
          isLoaded ? "opacity-0" : "opacity-100",
          skeletonClassName,
        )}
        aria-hidden="true"
      />
      {shouldLoad ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          className={cn("opacity-100", className)}
        />
      ) : null}
    </div>
  );
}
