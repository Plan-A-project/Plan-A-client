import { Box, useGesture } from "@chakra-ui/react";
import { Spring, animated } from "react-spring/renderprops";

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}) {
  // ... 기존의 Slide 함수 로직 ...
  return (
    // ... 기존의 Spring 컴포넌트 로직 ...
    <Box
      style={{
        ...style,
        zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
      }}
    >
      <Box onClick={() => moveSlide(offsetFromMiddle)}>{content}</Box>
    </Box>
    // ... 기존의 Spring 컴포넌트 로직 ...
  );
}

const VerticalCarousel = ({
  slides,
  goToSlide,
  showNavigation,
  offsetRadius,
  animationConfig,
}) => {
  const [index, setIndex] = React.useState(0);

  // ... 기존의 클래스 메서드들을 함수 내부의 함수로 변환 ...

  return (
    // ... 기존의 render 메서드 로직 ...
    <Box>
      {getPresentableSlides().map((slide, presentableIndex) => (
        <Slide
          key={slide.key}
          content={slide.content}
          moveSlide={moveSlide}
          offsetRadius={clampOffsetRadius(offsetRadius)}
          index={presentableIndex}
          animationConfig={animationConfig}
        />
      ))}
    </Box>
    // ... 기존의 render 메서드 로직 ...
  );
};

// ... propTypes와 defaultProps 설정 ...

export default VerticalCarousel;
