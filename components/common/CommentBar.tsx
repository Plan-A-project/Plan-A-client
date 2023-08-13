import {
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useState,
  useRef,
} from "react";

import {
  Box,
  BoxProps,
  Button,
  Flex,
  Input,
  Text,
  useToken,
} from "@chakra-ui/react";

import commentApis from "@/api/comment";
import IconComment from "@/components/icons/IconComment";
import IconSend from "@/components/icons/IconSend";
import useFocus from "@/hooks/useFocus";

type CommentBarProps = BoxProps & {
  replyTo?: string;
  onCommentSend?: (text: string) => void;
  withoutDummy?: boolean;
  postId: string | undefined | string[];
  handleComment: any;
  commentState: boolean;
  parentCommentId?: number;
};

const CommentBar = forwardRef<HTMLDivElement, CommentBarProps>(
  (
    {
      postId,
      replyTo,
      onCommentSend,
      commentState,
      withoutDummy,
      handleComment,
      parentCommentId,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, handler] = useFocus();
    const [primary] = useToken("colors", ["primary.500"]);
    const secondary = "#ACAEB9";
    const [text, setText] = useState<string>("");

    function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
      if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
        handleCommentSend();
      }
    }
    useEffect(() => {
      if (parentCommentId && inputRef.current) {
        handler.onFocus();
        inputRef.current.focus();
      }
    }, [parentCommentId]);

    async function handleCommentSend() {
      onCommentSend?.(text);
      handleComment(!commentState);
      setText("");
      if (parentCommentId) {
        const response = await commentApis.postComment({
          postId: postId,
          content: text,
          parentCommentId: parentCommentId,
        });
        console.log("parent", response);
      } else {
        const response = await commentApis.postComment({
          postId: postId,
          content: text,
        });
        console.log(response);
      }
      location.reload();
    }

    function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
      setText(e.target.value);
    }

    return (
      <>
        {!withoutDummy && <Box h={"72px"}></Box>}
        <Box
          ref={ref}
          h={"72px"}
          position={"fixed"}
          bottom={0}
          left={0}
          right={0}
          bg={"white"}
          borderTop={"1px solid #ECECEF"}
          px={4}
          py={3}
          zIndex={999}
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
              ref={inputRef}
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
