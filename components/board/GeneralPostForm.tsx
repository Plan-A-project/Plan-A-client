import { useRef } from "react";

import { ChakraProps, FormControl, Input, Textarea } from "@chakra-ui/react";
import { SetterOrUpdater } from "recoil";

import BottomFixedElement from "@/components/common/KeyboardFixedElement";
import { IPostContent } from "@/state/atoms/posting/postContentAtom";

const formProps: ChakraProps = {
  border: "none",
  borderBottom: "1px solid",
  borderColor: "gray.100",
  borderRadius: 0,
  _focus: { borderColor: "gray.300" },
  px: 2,
};

const inputProps: ChakraProps = {
  ...formProps,
  py: 2,
};

function GeneralPostForm({
  postContent,
  setPostContent,
}: {
  postContent: IPostContent;
  setPostContent: SetterOrUpdater<IPostContent>;
}) {
  const mainRef = useRef<HTMLTextAreaElement>(null);
  const contentEditableRef = useRef<HTMLDivElement | null>(null);

  const insertImage = (imageUrl: string) => {
    if (contentEditableRef.current) {
      const imgTag = `<img src="${imageUrl}" alt="Image" />`;
      contentEditableRef.current.focus();

      // Insert the image at the current cursor position
      document.execCommand("insertHTML", false, imgTag);
    }
  };

  return (
    <FormControl>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        value={postContent?.requestDto.title}
        {...inputProps}
        placeholder="제목을 입력해주세요."
        onChange={e =>
          setPostContent(prevData => ({
            ...prevData,
            requestDto: { ...prevData.requestDto, title: e.target.value },
          }))
        }
      />
      <Textarea
        mt={2}
        flex={1}
        resize={"none"}
        lineHeight={5}
        placeholder="내용을 입력해주세요."
        rows={13}
        {...inputProps}
        p={2}
        value={postContent?.requestDto.main}
        onChange={e =>
          setPostContent(d => ({
            ...d,
            requestDto: { ...d.requestDto, main: e.target.value },
          }))
        }
        sx={{ boxShadow: "none !important" }}
        ref={mainRef}
      />
      {/* TODO: Textarea -> contenteditable div 로 교체 */}
      <div ref={contentEditableRef} contentEditable="true"></div>
      <button
        onClick={() =>
          insertImage(
            "https://cdn.pixabay.com/photo/2023/05/26/12/31/couple-8019370_960_720.jpg",
          )
        }
      >
        URL로 이미지 삽입하기
      </button>
      <BottomFixedElement ref={mainRef} postId={postContent.postId} />
    </FormControl>
  );
}

export default GeneralPostForm;
