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
  const [carouselItem, setCarouselItem] = useState(["영화 이벤트"]);
  useEffect(() => {
    // setCarouselItem()
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
    <Box w="100vw" onClick={() => router.push("/posting/2/1008")}>
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
      >
        {carouselItem.map((el, index) => {
          return <Image key={el} src="/assets/event_movie_v9.jpg" alt="hi" />;
        })}
      </Carousel>
    </Box>
  );
};

export default MainBanner_v2;
