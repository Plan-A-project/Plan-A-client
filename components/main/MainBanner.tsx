import { useEffect, useState } from "react";

import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MainBannerItem from "./MainBannerItem";

const carouselCss = css`
  .carousel .slide {
    transition: opacity 1s;
    opacity: 0;
  }
  .carousel .slide.selected {
    opacity: 1;
  }
  .carousel .control-arrow:before {
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #2dc8b9; /* Left arrow color */
    border-right-color: #2dc8b9; /* Right arrow color */
  }
  .carousel.carousel-slider .control-arrow:before {
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #2dc8b9; /* Left arrow color in carousel-slider */
    border-right-color: #2dc8b9; /* Right arrow color in carousel-slider */
  }
`;

const MainBanner = () => {
  const [carouselItem, setCarouselItem] = useState([
    "인플리 어플 다운 방법 클릭!",
    "건의사항 및 오류제보",
    "인플리 정식 오픈!",
  ]);
  useEffect(() => {
    // setCarouselItem()
  }, []);
  return (
    <Box position="relative" flexDir="column" justifyContent="end" w="full">
      <Global styles={carouselCss} />
      <Box
        w="full"
        h="full"
        bgImage="url(./assets/coverBack.svg)"
        bgPosition="center"
        bgBlendMode="normal"
        bgRepeat="no-repeat"
        flexDir="column"
        pb="96"
      >
        <Box
          position="absolute"
          left="50%"
          top="45%"
          transform="translate(-50%, -50%)"
        >
          <Carousel
            infiniteLoop={true}
            dynamicHeight={true}
            axis="vertical"
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            transitionTime={1000}
            // showArrows={false}
          >
            {carouselItem.map((el, index) => {
              return (
                <MainBannerItem
                  key={el}
                  currentIndex={index + 1}
                  content={el}
                  totalIndex={carouselItem.length}
                />
              );
            })}
          </Carousel>
        </Box>
        <Box
          position="absolute"
          top="68%"
          left="50%"
          transform="translate(-50%, -50%)"
          bgImage="url(./assets/coverBack2.svg)"
          bgPosition="center"
          bgBlendMode="normal"
          bgRepeat="no-repeat"
          flexDir="column"
          justifyContent="end"
          w="344px"
          h="156px"
        >
          <Box
            bgImage="url(./assets/coverBack3.svg)"
            bgPosition="center"
            bgBlendMode="normal"
            bgRepeat="no-repeat"
            flexDir="column"
            gap="2"
            w="full"
            h="full"
            alignItems="center"
          >
            <Flex
              position="absolute"
              left="50%"
              top="55%"
              transform="translate(-50%, -50%)"
              direction={"column"}
              align={"center"}
            >
              <Image src="./assets/logo-uni.png" mb={2} />
              <Text textStyle={"subtitle2"} textAlign="center" color="#0e1967">
                복단대학교
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainBanner;
