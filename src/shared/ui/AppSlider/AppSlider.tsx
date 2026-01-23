import { useEffect, useCallback, useRef, useMemo, type CSSProperties } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/shared/lib/utils/cn";
import { usePrevNextButtons } from "./lib/usePrevNextButtons";
import { NextButton, PrevButton } from "./SliderButtons";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";

type SlideSize = "sm" | "md" | "lg" | "xl" | "full";
type Direction = "forward" | "backward";

interface Slide {
  id?: number;
  src?: string;
  alt?: string;
  userName?: string;
  userRole?: string;
  comment?: string;
  rating?: number;
  avatar?: string;
}

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
  autoScroll?: {
    speed?: number;
    direction?: Direction;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
  };
  height?: string;
  sliderSize?: string | { mobile: string; desktop: string };
  spacing?: string;
  maxWidth?: SlideSize | string;
  showButtons?: boolean;
  className?: string;
  imageClassName?: string;
  children?: (slide: Slide, index: number) => React.ReactNode;
};

const maxWidthMap: Record<string, string> = {
  sm: "max-w-xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export const AppSlider = ({
  slides,
  options,
  autoScroll,
  height = "300px",
  sliderSize = "60%",
  spacing = "1rem",
  maxWidth = "lg",
  showButtons = false,
  imageClassName,
  className,
  children,
}: PropType) => {
  const plugins = useMemo(() => {
    if (!autoScroll) return [];
    return [
      AutoScroll({
        playOnInit: true,
        ...autoScroll,
      }),
    ];
  }, [autoScroll]);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector(".embla__slide-img") as HTMLElement);
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const scrollSnapList = emblaApi.scrollSnapList();

    scrollSnapList.forEach((_, index) => {
      let diffToTarget = scrollSnapList[index] - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopPoint) => {
          const target = loopPoint.target();
          if (index === loopPoint.index && target !== 0) {
            const sign = Math.sign(target);

            if (sign === -1) diffToTarget = scrollSnapList[index] - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnapList[index] + (1 - scrollProgress);
          }
        });
      }

      const tweenValue = 1 - Math.abs(diffToTarget * 3);
      const scale = Math.max(0.8, tweenValue).toString();

      const node = tweenNodes.current[index];
      if (node) {
        node.style.transform = `scale(${scale})`;

        const isCenter = Math.abs(diffToTarget) < 0.1;
        node.style.zIndex = isCenter ? "10" : "1";
        node.style.opacity = Math.max(0.7, tweenValue).toString();
      }
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenScale(emblaApi);

    emblaApi.on("reInit", setTweenNodes).on("reInit", tweenScale).on("scroll", tweenScale);
  }, [emblaApi, tweenScale, setTweenNodes]);

  const sliderStyle = {
    "--slide-height": height,
    "--slide-spacing": spacing,
    "--slide-size-mob": typeof sliderSize === "object" ? sliderSize.mobile : "55%",
    "--slide-size-desk": typeof sliderSize === "object" ? sliderSize.desktop : sliderSize,
  } as CSSProperties;

  const maxWidthClass = maxWidthMap[maxWidth] || maxWidth;

  return (
    <div className={cn("relative group mx-auto", maxWidthClass, className)} style={sliderStyle}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex py-5 touch-[pan-y_pin-zoom] ml-[calc(var(--slide-spacing)*-1)]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="shrink-0 basis-(--slide-size-mob) md:basis-(--slide-size-desk) min-w-0 pl-(--slide-spacing)"
            >
              {children ? (
                children(slide, index)
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={cn(
                    "embla__slide-img w-full h-(--slide-height) object-cover select-none",
                    imageClassName
                  )}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {showButtons && (
        <div className="">
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      )}
    </div>
  );
};
