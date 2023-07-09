import { ChangeEvent, KeyboardEvent, forwardRef, useState } from "react";

import {
  Box,
  BoxProps,
  Button,
  Flex,
  Input,
  Text,
  useToken,
} from "@chakra-ui/react";

import IconComment from "@/components/icons/IconComment";
import IconSend from "@/components/icons/IconSend";
import useFocus from "@/hooks/useFocus";
import useViewport from "@/hooks/useViewport";

type CommentBarProps = BoxProps & {
  replyTo?: string;
  onCommentSend?: (text: string) => void;
  withoutDummy?: boolean;
};

const CommentBar = forwardRef<HTMLDivElement, CommentBarProps>(
  ({ replyTo, onCommentSend, withoutDummy, ...props }, ref) => {
    const [isFocused, handler] = useFocus();
    const [primary] = useToken("colors", ["primary.500"]);
    const secondary = "#ACAEB9";
    const [text, setText] = useState<string>("");
    const [, height] = useViewport();

    function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
      if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
        handleCommentSend();
      }
    }

    function handleCommentSend() {
      onCommentSend?.(text);
      setText("");
    }

    function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
      setText(e.target.value);
    }

    return (
      <>
        {!withoutDummy && <Box h={"72px"}></Box>}
        <Box
          style={{ top: `${height - 72}px` }}
          ref={ref}
          h={"72px"}
          position={"fixed"}
          left={0}
          right={0}
          bg={"white"}
          borderTop={"1px solid #ECECEF"}
          px={4}
          py={3}
          zIndex={999}
          transform={"translateZ(0)"}
          {...props}
        >
          <Text
            textStyle="body3"
            className={replyTo ? "active" : ""}
            zIndex={998}
            sx={{
              position: "absolute",
              background: "white",
              top: "-33px",
              left: 0,
              right: 0,
              height: 8,
              px: 4,
              lineHeight: 8,
              transition: "transform 0.1s ease-in, opacity 0.1s ease-in",
              opacity: 0,
              transform: "translateY(100%)",
              pointerEvents: "none",
              "&.active": {
                opacity: 1,
                transform: "translateY(0%)",
              },
            }}
          >
            {(replyTo && `${replyTo}님에게 답글 작성 중...`) || "..."}
          </Text>
          <Flex gap={2} height={9} align="center">
            <IconComment style={{ flexShrink: 0 }} />
            <Input
              {...handler}
              height={9}
              placeholder="댓글을 작성해주세요."
              p={2}
              textStyle={"body2"}
              sx={{
                color: "303136",
                background: "#F7F8FA",
                "&::placeholder": {
                  color: "#C8C9D0",
                },
              }}
              value={text}
              variant="filled"
              onChange={handleTextChange}
              onKeyDown={handleEnterPress}
            />
            <Button
              variant="unstyled"
              sx={{ w: 6, h: 6, minW: 6 }}
              onClick={handleCommentSend}
            >
              <IconSend color={isFocused ? primary : secondary} />
            </Button>
          </Flex>
        </Box>
      </>
    );
  },
);

CommentBar.displayName = "CommentBar";

export default CommentBar;
