import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "@/widgets/deals/ui/usePrevNextButtons";
import { NextButton, PrevButton } from "./SliderButtons";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";

interface Slide {
  src: string;
  alt: string;
}

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

export const DealsSlider = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
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

  return (
    <div
      className="
        relative group
        space-y-4
        max-w-3xl
        mx-auto
        [--slide-height:36rem] 
        [--slide-spacing:1rem] 
        [--slide-size:55%]
      "
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-[pan-y_pin-zoom] ml-[calc(var(--slide-spacing)*-1)]">
          {slides.map((slide, index) => (
            <div key={index} className="shrink-0 basis-(--slide-size) min-w-0 pl-(--slide-spacing)">
              <img
                src={slide.src}
                alt={slide.alt}
                className="embla__slide-img h-(--slide-height) w-full object-cover rounded-xl select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="">
        <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots"></div>
      </div>
    </div>
  );
};
