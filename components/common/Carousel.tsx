import React, {
  MouseEvent,
  PropsWithChildren,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Box, Text } from "@chakra-ui/layout";

import { debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";

type WithoutInterval = {
  auto?: false;
  interval?: never;
};

type WithInterval = {
  auto: true;
  interval?: number;
};

type CarouselProps = PropsWithChildren<
  {
    loop?: boolean;
    onClick?: (index: number) => void;
  } & (WithInterval | WithoutInterval)
>;

const Carousel: React.FC<CarouselProps> = ({
  loop,
  children,
  auto,
  interval,
  onClick,
}) => {
  const [width, setWidth] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [tx, setTx] = useState<number>(0);
  const [index, setIndex] = useState<number>(1);

  const ref = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const lastX = useRef<number>(0);

  const childrenCount = React.Children.count(children);
  const maxWidth = (childrenCount - 1) * width;
  const SLIDE_THROTTLE = 0.2;
  const SLIDE_INTERVAL = interval ? interval * 1000 : 3000;

  const autoHandler = useRef<ReturnType<typeof setTimeout>[]>([]);
  const adjustHandler = useRef<ReturnType<typeof requestAnimationFrame>>(-1);

  const [throttleTransition, cancelTransition] = throttle(setTx, 10);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
    }

    const [changeHeight] = debounce(() => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
      }
    }, 500);
    window.addEventListener("resize", changeHeight);

    return () => {
      window.removeEventListener("resize", changeHeight);
    };
  }, []);

  const scheduleAutoSlide = useCallback(() => {
    if (!auto) return;
    autoHandler.current.push(
      setTimeout(() => {
        lastX.current -= width;
        adjust();

        scheduleAutoSlide();
      }, SLIDE_INTERVAL),
    );
    clearAutoSlide(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SLIDE_INTERVAL, width, auto, maxWidth]);

  function clearAutoSlide(splice?: boolean) {
    let handler: ReturnType<typeof setTimeout>[] = [];
    if (splice) {
      const lastIndex = autoHandler.current.length - 1;
      handler = autoHandler.current.splice(lastIndex, 1);
    }
    autoHandler.current.forEach(handler => {
      clearTimeout(handler);
    });
    autoHandler.current = handler;
  }

  useEffect(() => {
    if (width === 0) return () => 0;
    if (auto) {
      scheduleAutoSlide();
    }
    return () => {
      clearAutoSlide();
    };
  }, [width, auto, SLIDE_INTERVAL, maxWidth]);

  function parseX(event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>) {
    if ("touches" in event) {
      return event.touches[0].clientX;
    }
    return event.clientX;
  }

  const handleSlideStart = (
    event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>,
  ) => {
    clearAutoSlide();
    const x = parseX(event);
    setIsDragging(true);
    startX.current = x;
  };

  const handleSlideMove = (
    event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>,
  ) => {
    if (!isDragging) return;

    const x = parseX(event);
    const diffX = x - startX.current;
    const dx = diffX + lastX.current;
    throttleTransition(dx);
  };

  const handleSlideEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    cancelTransition();

    const sign = tx - lastX.current < 0 ? -1 : 1;

    const distance = Math.abs(tx - lastX.current) / width;
    if (distance >= SLIDE_THROTTLE) {
      lastX.current += sign * width;
    }

    adjust();
    scheduleAutoSlide();
  };

  function getAdjustedX() {
    let dtx = lastX.current;
    if (loop) {
      if (dtx > width / 2) dtx = -maxWidth;
      if (dtx < -maxWidth - width / 2) dtx = 0;
    }
    if (dtx > 0) dtx = 0;
    if (dtx < -maxWidth) dtx = -maxWidth;

    if (dtx % width !== 0) {
      dtx = Math.round(dtx / width) * width;
    }
    return dtx;
  }

  function adjust() {
    lastX.current = getAdjustedX();
    adjustHandler.current = requestAnimationFrame(adjustProgress);
  }

  function clearAdjust() {
    if (adjustHandler.current === -1) return;
    cancelAnimationFrame(adjustHandler.current);
    adjustHandler.current = -1;
  }

  function adjustProgress() {
    if (adjustHandler.current === -1) return;
    setTx(prevTx => {
      const dtx = lastX.current;
      const dx = dtx - prevTx;

      if (Math.abs(dx) < 5) {
        clearAdjust();
        const newIndex = Math.abs(dtx / width) + 1;
        setIndex(newIndex);

        // 여기서 index가 childrenCount와 같으면 첫 번째 페이지로 리셋
        if (newIndex > childrenCount) {
          lastX.current = 0;
          setIndex(1);
        }

        return dtx;
      }

      const distx = dx * 0.03;
      return prevTx + distx;
    });

    adjustHandler.current = requestAnimationFrame(adjustProgress);
  }

  function handleClick() {
    onClick?.(index - 1);
  }

  return (
    <Box
      overflow="hidden"
      ref={ref}
      width="100%"
      maxW={"400px"}
      mx={"auto"}
      flexShrink={0}
      onTouchStart={handleSlideStart}
      onTouchMove={handleSlideMove}
      onTouchEnd={handleSlideEnd}
      onMouseDown={handleSlideStart}
      onMouseMove={handleSlideMove}
      onMouseUp={handleSlideEnd}
      onClick={handleClick}
      borderRadius={"16px"}
    >
      <Box
        display="flex"
        flexWrap="nowrap"
        height="100%"
        alignItems="center"
        style={{
          transform: `translateX(${tx}px)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        sx={{
          "& > *": {
            flex: "0 0 100%",
            minWidth: "100%",
            width: "100%",
            flexShrink: 0,
          },
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "0",
        }}
      >
        <Text
          sx={{
            position: "absolute",
            bottom: 1,
            right: 0,
            left: 0,
            pointerEvents: "none",
            color: "#C8C9D0",
          }}
          textAlign="center"
          textStyle="overline"
        >
          {`${index} / ${childrenCount}`}
        </Text>
      </Box>
    </Box>
  );
};

export default Carousel;
