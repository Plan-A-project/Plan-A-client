import {
  Key,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

import { Box, Text, Image, Flex, Center } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MainBannerItem from "./MainBannerItem";
import { useRouter } from "next/router";

const MainBanner_v2 = () => {
  const router = useRouter();
  const [carouselItem, setCarouselItem] = useState<any>(["영화 이벤트"]);
  useEffect(() => {
    setCarouselItem([
      { title: "러브캐처 이벤트 배너", src: "/assets/event_concert.jpg" },
      // { title: "기본 배너", src: "/assets/event_beggar.gif" },
      { title: "기본 배너", src: "/assets/basic_poster.gif" },
    ]);
  }, []);

  const CustomIndicator = (
    clickHandler:
      | MouseEventHandler<HTMLLIElement>
      | KeyboardEventHandler<HTMLLIElement>
      | undefined,
    isSelected: any,
    index: number,
    label: string | undefined,
  ) => {
    if (isSelected) {
      return (
        <Center mb={3}>
          <Center
            key={index}
            className="active-indicator"
            role="button"
            tabIndex={0}
            aria-label={label}
            borderRadius={"20px"}
            p={1}
            bg={"rgba(0, 0, 0, 0.40);"}
            w={"38px"}
            gap={2}
          >
            <Text textStyle={"overline"} color={"white"} fontWeight={400}>
              {index + 1} / {carouselItem.length}
            </Text>
          </Center>
        </Center>
      );
    }
    return null;
  };

  return (
    <Box w="100vw">
      <Carousel
        infiniteLoop={true}
        dynamicHeight={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        transitionTime={1000}
        showArrows={false}
        renderIndicator={CustomIndicator}
        onClickItem={(index, item) => {
          if (index === 0) {
            router.push("/beyond_the_silence");
          }
        }}
      >
        {carouselItem.map((el: any) => {
          return <Image key={el} src={el.src} alt={el.title} />;
        })}
      </Carousel>
    </Box>
  );
};

export default MainBanner_v2;
